package com.EricFeng.clients.fraud;

import lombok.extern.slf4j.Slf4j;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;


@FeignClient(
        name = "fraud",
        url = "${clients.fraud.url}")
public interface FraudClient {

        @GetMapping(path = "api/v1/fraudCheck/{customerId}")

        CheckFraudResponse CheckFraudHistory(@PathVariable("customerId") Long customerId);
}


