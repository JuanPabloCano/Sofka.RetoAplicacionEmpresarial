package co.com.sofka.questions.model;


import lombok.AllArgsConstructor;
import lombok.Data;

import javax.validation.constraints.NotBlank;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@AllArgsConstructor
@Data
public class QuestionDTO {

    private String id;
    @NotBlank
    private String userId;
    @NotBlank
    private String question;
    @NotBlank
    private String type;
    @NotBlank
    private String category;
    private List<AnswerDTO> answers;

    private String url;
    private String name;

    private Integer numberOfReviews = 0;
    private Integer sumOfReviewScores = 0;
    private List<String> userReviews = new ArrayList<>();

    public QuestionDTO() {

    }

    public QuestionDTO(String userId, String question, String type, String category) {
        this.userId = userId;
        this.question = question;
        this.type = type;
        this.category = category;
    }

    public QuestionDTO(String id, String userId, String question, String type, String category) {
        this.id = id;
        this.userId = userId;
        this.question = question;
        this.type = type;
        this.category = category;
    }

    public QuestionDTO(String id, String userId, String question, String type, String category,String url, String name) {
        this.id = id;
        this.userId = userId;
        this.question = question;
        this.type = type;
        this.category = category;
        this.url = url;
        this.name = name;
    }

    public QuestionDTO(String id, String userId, String question, String type, String category,
                       String url, String name, Integer numberOfReviews, Integer sumOfReviewScores,
                       List<String> userReviews) {
        this.id = id;
        this.userId = userId;
        this.question = question;
        this.type = type;
        this.category = category;
        this.url = url;
        this.name = name;
        this.numberOfReviews = numberOfReviews;
        this.sumOfReviewScores = sumOfReviewScores;
        this.userReviews = userReviews;
    }

    public List<AnswerDTO> getAnswers() {
        this.answers = Optional.ofNullable(answers).orElse(new ArrayList<>());
        return answers;
    }
}
