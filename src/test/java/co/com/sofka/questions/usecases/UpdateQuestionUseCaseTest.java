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

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

@SpringBootTest
class UpdateQuestionUseCaseTest {
    @SpyBean
    private UpdateQuestionUseCase updateQuestionUseCase;

    @MockBean
    private QuestionRepository repository;

    @Test
    void updateTest() {

        var questionDTO = new QuestionDTO("xxxx", "1", "What is Java", "Múltiple",
                "Software", "xxxx", "Juan");

        var question = new Question();
        question.setId("xxxx");
        question.setUserId("1");
        question.setQuestion("What is Python");
        question.setType("ünica opción");
        question.setCategory("Software");
        question.setUrl("xxxx");
        question.setName("Pablo");

        when(repository.save(Mockito.any(Question.class))).thenReturn(Mono.just(question));

        var result = updateQuestionUseCase.apply(questionDTO);

        Assertions.assertEquals(Objects.requireNonNull(result.block()).getQuestion(), question.getQuestion());
        Assertions.assertEquals(Objects.requireNonNull(result.block()).getId(), question.getId());
        Assertions.assertEquals(Objects.requireNonNull(result.block()).getUserId(), question.getUserId());
        Assertions.assertEquals(Objects.requireNonNull(result.block()).getType(), question.getType());
        Assertions.assertEquals(Objects.requireNonNull(result.block()).getCategory(), question.getCategory());

        Mockito.verify(repository, Mockito.times(1)).save(any());
    }
}
