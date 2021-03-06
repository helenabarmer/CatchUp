package com.example.demo.repositories;

import com.example.demo.entities.Account;
import com.example.demo.entities.Channel;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface AccountRepo extends CrudRepository<Account, Integer> {

public Account findByEmail (String email);

}
