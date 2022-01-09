package co.com.sofka.questions.model;


import lombok.Data;

import javax.validation.constraints.NotBlank;
import java.util.Optional;

@Data
public class AnswerDTO {

    private String id;
    @NotBlank(message = "Debe existir el userId para este objeto")
    private String userId;
    @NotBlank
    private String questionId;
    @NotBlank
    private String answer;

    private Integer position;

    private String url;
    private String name;


    public AnswerDTO() {

    }

    public AnswerDTO(String id,@NotBlank String questionId, @NotBlank String userId, @NotBlank String answer,String url,String name) {
        this.id=id;
        this.userId = userId;
        this.questionId = questionId;
        this.answer = answer;
        this.url=url;
        this.name = name;
    }

    public Integer getPosition() {
        return Optional.ofNullable(position).orElse(1);
    }
}
