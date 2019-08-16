package prova.tecnica.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication(scanBasePackages = {
    "prova.tecnica"
})
@EntityScan(basePackages = "prova.tecnica.repository.bean")
@EnableJpaRepositories(basePackages = "prova.tecnica.repository.dao")
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

}
