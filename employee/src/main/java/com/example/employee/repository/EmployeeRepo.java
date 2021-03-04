package com.example.employee.repository;

import com.example.employee.model.EmployeeDataModel;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepo extends JpaRepository<EmployeeDataModel, Long>{
    
}
