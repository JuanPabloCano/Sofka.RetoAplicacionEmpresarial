package co.com.sofka.questions.usecases;

import co.com.sofka.questions.collections.Question;
import co.com.sofka.questions.model.QuestionDTO;
import co.com.sofka.questions.reposioties.QuestionRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
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
class CreateUseCaseTest {
    @SpyBean
    private CreateUseCase createUseCase;

    @MockBean
    private QuestionRepository repository;

    @Test

    void createQuestion() {

        var resourceDT0 = new QuestionDTO("xxxx", "1", "What is Java", "Múltiple",
                "Software", "xxxx", "Juan");

        var question = new Question();
        question.setId("xxxx");
        question.setUserId("1");
        question.setQuestion("What is Java");
        question.setType("Múltiple");
        question.setCategory("Software");
        question.setUrl("xxxx");
        question.setName("Juan");

        when(repository.save(any(Question.class))).thenReturn(Mono.just(question));
        var result = createUseCase.apply(resourceDT0);

        Assertions.assertEquals(Objects.requireNonNull(result.block()),"xxxx");
        Assertions.assertEquals(result.block(),question.getId());

        Mockito.verify(repository,Mockito.times(1)).save(any());
    }
}