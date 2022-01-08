package co.com.sofka.questions.collections;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;

@Data
@Document
public class Question {
    @Id
    private String id;
    private String userId;
    private String question;
    private String type;
    private String category;
    private String name;
    private String url;
    private Integer numberOfReviews = 0;
    private Integer sumOfReviewScores = 0;
    private List<String> userReviews = new ArrayList<>();
}
