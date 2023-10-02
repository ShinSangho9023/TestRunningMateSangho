package com.example.teamproject.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class SmallGoalDTO {
	
	private String user_id;
	private String bigGoal_name;
	private int bigGoal_number;
	
	
}
