package com.bhagi.backend.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "Inventory")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Inventory {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String inventoryName;
    private String companyName;
    private Long stock;
    private Date expiryDate;
    private Date createdDate;
    private String createdBy;
    private String lastUpdateBy;
    private Date lastUpdatedDate;
}