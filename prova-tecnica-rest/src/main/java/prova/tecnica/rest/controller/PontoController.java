/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package prova.tecnica.rest.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import prova.tecnica.repository.bean.Ponto;
import prova.tecnica.repository.dao.PontoRepository;

/**
 *
 * @author Carlos Roberto B. Meneghette
 *
 * @date 2019-08-15
 *
 */
@RestController
public class PontoController {

    @Autowired
    private PontoRepository pontoRepository;

    @GetMapping("api/ponto")
    public ResponseEntity<Iterable<Ponto>> getAll(Model model) {
        return new ResponseEntity<>(pontoRepository.findAll(),
                HttpStatus.OK);
    }
}
