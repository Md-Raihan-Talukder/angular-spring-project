package com.example.employee.repository;

import com.example.employee.model.EmployeeDataModel;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

// import antlr.collections.List;
// import java.util.List;

@Repository
public interface EmployeeRepo extends JpaRepository<EmployeeDataModel, Long>{

    // public List<EmployeeDataModel> getAllData();

    // static EmployeeDataModel getReqData(String mobileNo, EmployeeDataModel employeeDataModel) {
        
    //     EmployeeDataModel empData = new EmployeeDataModel();
    //     String mobile = employeeDataModel.mobileNo;
    //     if(mobile == mobileNo){
    //         empData = employeeDataModel;
    //     }
    //     return empData;
    //     // return (employeeDataModel.getFirstName() ? employeeDataModel.mobileNo == mobileNo : null);
    // }
}
