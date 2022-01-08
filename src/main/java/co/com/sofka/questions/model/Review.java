package co.com.sofka.questions.model;

import lombok.Data;

@Data
public class Review {

    private String userId;
    private String score;
    private String questionId;

}
