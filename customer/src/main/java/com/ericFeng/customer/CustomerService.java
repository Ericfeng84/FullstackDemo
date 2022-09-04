package com.ericFeng.customer;

import com.EricFeng.clients.fraud.CheckFraudResponse;
import com.EricFeng.clients.fraud.FraudClient;
import com.EricFeng.clients.notification.NewNotification;
import com.EricFeng.clients.notification.NotificationClient;
import com.ericfeng.amqp.RabbitMQMessageProducer;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;


@Slf4j
@Service
@AllArgsConstructor
public class CustomerService {
    private CustomerRepository customerRepository;
    private RestTemplate restTemplate;
    private FraudClient fraudClient;
    private RabbitMQMessageProducer rabbitMQMessageProducer;
    private NotificationClient notificationClient;
    private KafkaTemplate<String, String> kafkaTemplate;

    public void registerCustomer(CustomerRegistrationRequest request){
        Customer customer=Customer.builder().
                firstName(request.firstName())
                .lastName(request.lastName())
                .email(request.email()).
                build();
        //todo check if email valid
        //todo check email is not token
        //todo store customer in db
        customerRepository.saveAndFlush(customer);
//        check Fraud
//        CheckFraudResponse checkFraudResponse = restTemplate.getForObject(
//                "http://FRAUD/.api/v1/fraud/{customerID}",
//                CheckFraudResponse.class, customer.getId()
//        );
        log.info("customer created {}",customer.getId());
        CheckFraudResponse checkFraudResponse = fraudClient.CheckFraudHistory(customer.getId());

        if (checkFraudResponse.isFraud()){
            throw new IllegalStateException("Fraud");
        }

        NewNotification newNotification=
              new NewNotification(customer.getId(),"test2");

//        rabbitMQMessageProducer.publish(newNotification,
//                "internal.exchange",
//                "internal.notification.routing-key");


        kafkaTemplate.send("notification", newNotification.toString());



    }

    public List<Customer> getAllCustomer() {
        return customerRepository.findAll();};

    @Transactional
    public void updateByID(Customer customer,Long customerID) {
        System.out.println(customer);
        Optional<Customer> customerOptional = customerRepository.findById(customerID);


        if(customerOptional.isPresent()){
            Customer _customer = customerOptional.get();
            _customer.setFirstName(customer.getFirstName());
            _customer.setLastName(customer.getLastName());
            _customer.setEmail(customer.getEmail());
            customerRepository.save(_customer)
            ;
        }
    };

    public void deleteByID(Long customerID){
        customerRepository.deleteById(customerID);
    }

}

