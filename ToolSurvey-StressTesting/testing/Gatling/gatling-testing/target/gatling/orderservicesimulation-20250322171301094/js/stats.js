var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "10",
        "ok": "5",
        "ko": "5"
    },
    "minResponseTime": {
        "total": "35",
        "ok": "46",
        "ko": "35"
    },
    "maxResponseTime": {
        "total": "642",
        "ok": "642",
        "ko": "420"
    },
    "meanResponseTime": {
        "total": "149",
        "ok": "178",
        "ko": "119"
    },
    "standardDeviation": {
        "total": "198",
        "ok": "232",
        "ko": "151"
    },
    "percentiles1": {
        "total": "58",
        "ok": "67",
        "ko": "46"
    },
    "percentiles2": {
        "total": "77",
        "ok": "77",
        "ko": "48"
    },
    "percentiles3": {
        "total": "642",
        "ok": "642",
        "ko": "420"
    },
    "percentiles4": {
        "total": "642",
        "ok": "642",
        "ko": "420"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 5,
    "percentage": 50.0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0.0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 0,
    "percentage": 0.0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 5,
    "percentage": 50.0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1",
        "ok": "0.5",
        "ko": "0.5"
    }
},
contents: {
"req_get-access-toke-1423633639": {
        type: "REQUEST",
        name: "Get Access Token",
path: "Get Access Token",
pathFormatted: "req_get-access-toke-1423633639",
stats: {
    "name": "Get Access Token",
    "numberOfRequests": {
        "total": "5",
        "ok": "5",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "46",
        "ok": "46",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "642",
        "ok": "642",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "178",
        "ok": "178",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "232",
        "ok": "232",
        "ko": "-"
    },
    "percentiles1": {
        "total": "67",
        "ok": "67",
        "ko": "-"
    },
    "percentiles2": {
        "total": "77",
        "ok": "77",
        "ko": "-"
    },
    "percentiles3": {
        "total": "642",
        "ok": "642",
        "ko": "-"
    },
    "percentiles4": {
        "total": "642",
        "ok": "642",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 5,
    "percentage": 100.0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0.0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 0,
    "percentage": 0.0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 0,
    "percentage": 0.0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.5",
        "ok": "0.5",
        "ko": "-"
    }
}
    },"req_create-order-205845290": {
        type: "REQUEST",
        name: "Create Order",
path: "Create Order",
pathFormatted: "req_create-order-205845290",
stats: {
    "name": "Create Order",
    "numberOfRequests": {
        "total": "5",
        "ok": "0",
        "ko": "5"
    },
    "minResponseTime": {
        "total": "35",
        "ok": "-",
        "ko": "35"
    },
    "maxResponseTime": {
        "total": "420",
        "ok": "-",
        "ko": "420"
    },
    "meanResponseTime": {
        "total": "119",
        "ok": "-",
        "ko": "119"
    },
    "standardDeviation": {
        "total": "151",
        "ok": "-",
        "ko": "151"
    },
    "percentiles1": {
        "total": "46",
        "ok": "-",
        "ko": "46"
    },
    "percentiles2": {
        "total": "48",
        "ok": "-",
        "ko": "48"
    },
    "percentiles3": {
        "total": "420",
        "ok": "-",
        "ko": "420"
    },
    "percentiles4": {
        "total": "420",
        "ok": "-",
        "ko": "420"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0.0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0.0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 0,
    "percentage": 0.0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 5,
    "percentage": 100.0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.5",
        "ok": "-",
        "ko": "0.5"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
