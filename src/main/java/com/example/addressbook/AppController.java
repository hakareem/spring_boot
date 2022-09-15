package com.example.addressbook;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AppController {

 @PostMapping("/addresses")
 public Address saveData(@RequestBody Address address) {
  return address;
 }
}
