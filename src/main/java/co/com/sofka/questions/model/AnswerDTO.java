package co.com.sofka.questions.model;


import lombok.Data;

import javax.validation.constraints.NotBlank;
import java.util.Optional;

@Data
public class AnswerDTO {

    @NotBlank(message = "Debe existir el userId para este objeto")
    private String userId;
    @NotBlank
    private String questionId;
    @NotBlank
    private String answer;

    private Integer position;


    public AnswerDTO() {

    }

    public AnswerDTO(@NotBlank String questionId, @NotBlank String userId, @NotBlank String answer) {
        this.userId = userId;
        this.questionId = questionId;
        this.answer = answer;
    }

    public Integer getPosition() {
        return Optional.ofNullable(position).orElse(1);
    }
}
