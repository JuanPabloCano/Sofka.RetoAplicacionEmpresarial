package co.com.sofka.questions.usecases;

import co.com.sofka.questions.collections.Question;
import co.com.sofka.questions.model.QuestionDTO;
import co.com.sofka.questions.reposioties.AnswerRepository;
import co.com.sofka.questions.reposioties.QuestionRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.mock.mockito.SpyBean;
import reactor.core.publisher.Mono;

@SpringBootTest
class DeleteUseCaseTest {

    @MockBean
    private AnswerRepository answerRepository;
    @MockBean
    private QuestionRepository questionRepository;

    @SpyBean
    DeleteUseCase deleteQuestionUseCase;

    @Test
    void deleteUseCase() {

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


        Mockito.when(questionRepository.deleteById("xxxx")).thenReturn(Mono.empty());
        Mockito.when(answerRepository.deleteByQuestionId("xxxx")).thenReturn(Mono.empty());

        var result = deleteQuestionUseCase.apply("xxxx").block();
        Assertions.assertNull(result);

        Mockito.verify(answerRepository, Mockito.times(1)).deleteByQuestionId("xxxx");
    }
}