package co.com.sofka.questions.usecases;

import co.com.sofka.questions.collections.Question;
import co.com.sofka.questions.reposioties.QuestionRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import reactor.core.publisher.Flux;
import reactor.test.StepVerifier;


import static org.mockito.Mockito.*;

class ListUseCaseTest {

    QuestionRepository repository;
    ListUseCase listUseCase;

    @BeforeEach
    public void setup(){
        MapperUtils mapperUtils = new MapperUtils();
        repository = mock(QuestionRepository.class);
        listUseCase = new ListUseCase (repository, mapperUtils);
    }

    @Test
    void listUseCaseTest(){

        var question = new Question();
        question.setId("xxxx");
        question.setUserId("1");
        question.setQuestion("What is Java");
        question.setType("Múltiple");
        question.setCategory("Software");
        question.setUrl("xxxx");
        question.setName("Juan");
        when(repository.findAll()).thenReturn(Flux.just(question ));

        StepVerifier.create(listUseCase.get())
                .expectNextMatches(questionDTO -> {
                    assert questionDTO.getId().equals("xxxx");
                    assert questionDTO.getUserId().equals("1");
                    assert questionDTO.getCategory().equals("Software");
                    assert questionDTO.getQuestion().equals("What is Java");
                    assert questionDTO.getType().equals("Múltiple");
                    assert questionDTO.getUrl().equals("xxxx");
                    assert questionDTO.getName().equals("Juan");
                    return true;
                })
                .verifyComplete();

        verify(repository).findAll();
    }
}