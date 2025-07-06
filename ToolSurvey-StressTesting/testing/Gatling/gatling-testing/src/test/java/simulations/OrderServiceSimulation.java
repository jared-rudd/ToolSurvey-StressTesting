package simulations;

import io.gatling.javaapi.core.*;
import io.gatling.javaapi.http.*;

import static io.gatling.javaapi.core.CoreDsl.*;
import static io.gatling.javaapi.http.HttpDsl.*;

public class OrderServiceSimulation extends Simulation {

    // Protocol for all requests
    HttpProtocolBuilder httpProtocol = http
        .baseUrl("http://localhost:8069")  // Gateway endpoint versus order-service (port 8980)
        .acceptHeader("application/json");

    // Get token from Keycloak
    ChainBuilder getToken = exec(
        http("Get Access Token")
            .post("http://keycloak:8080/realms/bjt_realm/protocol/openid-connect/token")
            .header("Content-Type", "application/x-www-form-urlencoded")
            .formParam("grant_type", "password")
            .formParam("client_id", "bjt-client")
            .formParam("client_secret", "my-secret")
            .formParam("username", "admin")
            .formParam("password", "admin")
            .check(jsonPath("$.access_token").saveAs("access_token"))
    );

    // Create order using token
    ChainBuilder createOrder = exec(
        http("Create Order")
            .post("/orders")
            .header("Authorization", "Bearer #{access_token}")
            .body(StringBody("{ \"description\": \"Order for product 1\", \"productName\": \"Product 1\", \"orderType\": \"Standard\", \"comment\": \"Urgent\", \"userId\": \"1\" }"))
            .check(status().is(200))
    );

    // Scenario
    ScenarioBuilder scn = scenario("Create Order with Auth")
        .exec(getToken)
        .pause(1)
        .exec(createOrder);

    {
        setUp(
            scn.injectOpen(rampUsers(5).during(10))
        ).protocols(httpProtocol);
    }
}
