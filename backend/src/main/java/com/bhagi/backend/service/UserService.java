package com.bhagi.backend.service;

import com.bhagi.backend.model.User;

public interface UserService {

    public void save(User user);
    public User findByUsername(String username);
}
