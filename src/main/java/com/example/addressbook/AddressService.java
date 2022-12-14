package com.example.addressbook;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.apache.logging.log4j.util.Strings;
import org.springframework.stereotype.Service;

@Service
public class AddressService {

 private Map<String, Address> addresses = new HashMap<>();

 public Address save(Address address) {
  if (Strings.isEmpty(address.getId())) {
   String id = UUID.randomUUID().toString();
   address.setId(id);
  }
  addresses.put(address.getId(), address);
  return address;
 }

 public List<Address> getAll() {
  return new ArrayList<Address>(addresses.values());
 }

 public Address update(Address address) {
  String id =  address.getId();
  addresses.put(id, address);
  return address;
 }

}
