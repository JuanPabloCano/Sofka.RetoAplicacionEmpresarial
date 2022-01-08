package co.com.sofka.questions.usecases;

import co.com.sofka.questions.reposioties.AnswerRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.validation.annotation.Validated;
import reactor.core.publisher.Mono;

import java.util.Objects;
import java.util.function.Function;

@AllArgsConstructor
@Service
@Validated
public class DeleteAnswerUseCase implements Function<String, Mono<Void>> {

    private final AnswerRepository answerRepository;

    @Override
    public Mono<Void> apply(String id) {
        Objects.requireNonNull(id, "Id is required");
        return answerRepository.deleteById(id);
    }
}
