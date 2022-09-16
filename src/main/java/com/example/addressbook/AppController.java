package com.example.addressbook;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AppController {

 @Autowired 
 private AddressService addressService;

 @GetMapping("/addresses")
 public List<Address> getAll() {
  return addressService.getAll();
 }

 @PostMapping("/addresses")
 public Address saveData(@RequestBody Address address) {
  return addressService.save(address);
 }

  @PutMapping("/addresses")
 public Address updateData(@RequestBody Address address) {
  return addressService.update(address);
 }
}
