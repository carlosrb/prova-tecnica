/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package prova.tecnica.app.service;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.time.OffsetDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Locale;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import prova.tecnica.repository.bean.Posicao;
import prova.tecnica.repository.dao.PosicaoRepository;

/**
 *
 * @author Carlos Roberto B. Meneghette
 *
 * @date 2019-08-13
 *
 */
@Service
public class PositionService {
    
    private final Logger LOGGER 
            = LoggerFactory.getLogger(PositionService.class);

    private static final DateTimeFormatter DTF
            = DateTimeFormatter.ofPattern("MMM dd uuuu HH:mm:ss Z",
                    Locale.ENGLISH);

    private static OffsetDateTime convertDateTime(String str) {
        // Wed Dec 12 2018 00:04:03 GMT-0200 (Hora oficial do Brasil)

        OffsetDateTime dateTime = OffsetDateTime.parse(str.substring(4, 33)
                .replace("GMT", ""), DTF);
        
        //System.out.println(str + " -> " + dateTime);

        return dateTime;
    }

    public PositionService(PosicaoRepository repository) 
            throws FileNotFoundException {
        
        LOGGER.info("Load posicoes.csv");
        
        BufferedReader reader = new BufferedReader(new FileReader(getClass()
                .getResource("/db/changelog/posicoes.csv").getFile()));
        reader.lines().forEach(line -> {
            String[] fields = line.split(",");
            try {
                Posicao bean = new Posicao(fields[0],
                        convertDateTime(fields[1]),
                        Integer.valueOf(fields[2]),
                        Double.valueOf(fields[3]),
                        Double.valueOf(fields[4]),
                        Boolean.valueOf(fields[5]));
                repository.save(bean);
                //System.out.println(bean);
            } catch (NumberFormatException | StringIndexOutOfBoundsException ex) {
                LOGGER.debug("{}", line);
            }
        });

        repository.findAll().forEach(entry -> {
            LOGGER.debug("{}", entry);
        });
    }

}
