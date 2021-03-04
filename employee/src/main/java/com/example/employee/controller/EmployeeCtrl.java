package com.example.employee.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.example.employee.repository.EmployeeRepo;
import com.example.employee.model.EmployeeDataModel;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.ResourceAccessException;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class EmployeeCtrl {
    
    @Autowired
    private EmployeeRepo employeeRepo;

    @GetMapping("/employees")
    public List<EmployeeDataModel> getAllEmp(){
        return employeeRepo.findAll();
    }

    @PostMapping("/employees")
    public EmployeeDataModel createNewEmp(@RequestBody EmployeeDataModel employeeDataModel){
        return employeeRepo.save(employeeDataModel);
    }

    @GetMapping("/employees/{id}")
	public ResponseEntity<EmployeeDataModel> getEmpById(@PathVariable Long id) {
		EmployeeDataModel employee = employeeRepo.
				findById(id).orElseThrow(()->new ResourceAccessException("No employee found for this id"));
		return ResponseEntity.ok(employee);
	}

    @PutMapping("/employees/{id}")
    public ResponseEntity<EmployeeDataModel> updateEmpById(@PathVariable Long id, @RequestBody EmployeeDataModel empUpdate) {
		EmployeeDataModel employee = employeeRepo.
				findById(id).orElseThrow(()->new ResourceAccessException("No employee found for this id"));
        
        employee.setFirstName(empUpdate.getFirstName());
        employee.setLastName(empUpdate.getLastName());
        employee.setEmployeeId(empUpdate.getEmployeeId());
        employee.setEmailAdd(empUpdate.getEmailAdd());
        employee.setMobileNo(empUpdate.getMobileNo());

        EmployeeDataModel updatedEmp = employeeRepo.save(employee);
        return ResponseEntity.ok(updatedEmp);
	}

    @DeleteMapping
    public ResponseEntity<Map<String, Boolean>> deleteEmp(@PathVariable long id){
        EmployeeDataModel employee = employeeRepo.
				findById(id).orElseThrow(()->new ResourceAccessException("No employee found for this id"));

        employeeRepo.delete(employee);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
