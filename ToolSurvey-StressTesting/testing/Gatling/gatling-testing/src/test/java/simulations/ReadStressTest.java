package simulations;

import io.gatling.javaapi.core.*;
import io.gatling.javaapi.http.*;

import static io.gatling.javaapi.core.CoreDsl.*;
import static io.gatling.javaapi.http.HttpDsl.*;

public class ReadStressTest extends Simulation {

    // Protocols
    HttpProtocolBuilder licenseHttp = http
        .baseUrl("http://localhost:8080")
        .acceptHeader("application/json");

    HttpProtocolBuilder orgHttp = http
        .baseUrl("http://localhost:8081")
        .acceptHeader("application/json");

    // License Service Read Load
    ScenarioBuilder licenseScenario = scenario("licensing-service-Read-Load")
        .exec(
            http("GET License by ID")
                .get("/v1/organization/e839ee96-28de-4f67-bb79-870ca89743a0/license/279709ff-e6d5-4a54-8b55-a5c37542025b")
                .check(status().is(200))
        );

    // Organization Service Read Load
    ScenarioBuilder orgScenario = scenario("organization-service-Read-Load")
        .exec(
            http("GET Organization by ID")
                .get("/v1/organization/e6a625cc-718b-48c2-ac76-1dfdff9a531e")
                .check(status().is(200))
        );

    {
        setUp(
            licenseScenario.injectOpen(
                rampUsers(30).during(20),
                constantUsersPerSec(10).during(40)
            ).protocols(licenseHttp),

            orgScenario.injectOpen(
                rampUsers(30).during(20),
                constantUsersPerSec(10).during(40)
            ).protocols(orgHttp)
        );
    }
}
