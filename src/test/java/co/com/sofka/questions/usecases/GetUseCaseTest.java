package co.com.sofka.questions.usecases;

import co.com.sofka.questions.collections.Question;
import co.com.sofka.questions.model.QuestionDTO;
import co.com.sofka.questions.reposioties.QuestionRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.mock.mockito.SpyBean;
import reactor.core.publisher.Mono;

import java.util.Objects;

@SpringBootTest
class GetUseCaseTest {

    @MockBean
    private QuestionRepository questionRepository;
    @SpyBean
    private GetUseCase getQuestion;

    @Test
    void getQuestion() {

        var questionDT0 = new QuestionDTO("xxxx", "1", "What is Java", "Múltiple",
                "Software", "xxxx", "Juan");

        var question = new Question();
        question.setId("xxxx");
        question.setUserId("1");
        question.setQuestion("What is Java");
        question.setType("Múltiple");
        question.setCategory("Software");
        question.setUrl("xxxx");
        question.setName("Juan");

        Mockito.when(questionRepository.findById(Mockito.any(String.class))).thenReturn(Mono.just(question));

        var result = getQuestion.apply("xxxx");
        Assertions.assertEquals(Objects.requireNonNull(result.block()).getQuestion(), question.getQuestion());
        Assertions.assertEquals(Objects.requireNonNull(result.block()).getId(), question.getId());
        Assertions.assertEquals(Objects.requireNonNull(result.block()).getUserId(), question.getUserId());
        Assertions.assertEquals(Objects.requireNonNull(result.block()).getType(), question.getType());
        Assertions.assertEquals(Objects.requireNonNull(result.block()).getCategory(), question.getCategory());

        Mockito.verify(questionRepository, Mockito.times(1)).findById("xxxx");
    }
}