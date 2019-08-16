/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package prova.tecnica.repository.dao;

import org.springframework.data.repository.CrudRepository;
import prova.tecnica.repository.bean.Posicao;
import prova.tecnica.repository.bean.PosicaoId;


/**
 *
 * @author Carlos Roberto B. Meneghette
 *
 * @date 2019-08-13
 *
 */
public interface PosicaoRepository extends CrudRepository<Posicao, PosicaoId> {

}
