package co.com.sofka.questions.usecases;


import co.com.sofka.questions.collections.Answer;
import co.com.sofka.questions.model.AnswerDTO;
import co.com.sofka.questions.model.QuestionDTO;
import co.com.sofka.questions.reposioties.AnswerRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.boot.test.mock.mockito.SpyBean;
import reactor.core.publisher.Mono;

@SpringBootTest
class AddAnswerUseCaseTest {
    @SpyBean
    AddAnswerUseCase addAnswerUseCase;

    @MockBean
    GetUseCase getUseCase;

    @MockBean
    AnswerRepository answerRepository;

    @Test
    void addAnswerTest() {
        var question = new QuestionDTO("xxxx", "1", "What is Java", "Múltiple",
                "Software", "xxxx", "Juan");

        var answerDTO = new AnswerDTO("xxxx", "1", "xxxx", "A lenguage",
                "xxxx", "Juan");
        var answer = new Answer();
        answer.setId("xxxx");
        answer.setQuestionId("1");
        answer.setUserId("xxxx");
        answer.setAnswer("A lenguage");
        answer.setUrl("xxxx");
        answer.setName("Juan");

        Mockito.when(answerRepository.save(Mockito.any(Answer.class))).thenReturn(Mono.just(answer));
        Mockito.when(getUseCase.apply(Mockito.anyString())).thenReturn(Mono.just(question));

        var resultDTO = addAnswerUseCase.apply(answerDTO);
        var resultQuestionDTO = resultDTO.block();
        assert resultQuestionDTO != null;

        Assertions.assertEquals(resultQuestionDTO.getId(), question.getId());
        Assertions.assertEquals(resultQuestionDTO.getQuestion(), question.getQuestion());
        Assertions.assertEquals(resultQuestionDTO.getAnswers().get(0).getQuestionId(), answerDTO.getQuestionId());
        Assertions.assertEquals(resultQuestionDTO.getUserId(), question.getUserId());
    }
}
