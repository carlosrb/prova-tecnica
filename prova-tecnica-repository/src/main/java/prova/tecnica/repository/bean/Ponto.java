/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package prova.tecnica.repository.bean;

import java.io.Serializable;
import javax.persistence.Entity;
import javax.persistence.Id;

/**
 *
 * @author Carlos Roberto B. Meneghette
 *
 * @date 2019-08-13
 *
 */
@Entity
public class Ponto implements Serializable {

    @Id
    private String nome;

    private Integer raio;

    private Double latitude;

    private Double longitude;

    public Ponto() {
    }

    public Ponto(String nome, Integer raio, Double latitude, Double longotude) {
        this.nome = nome;
        this.raio = raio;
        this.latitude = latitude;
        this.longitude = longotude;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public Integer getRaio() {
        return raio;
    }

    public void setRaio(Integer raio) {
        this.raio = raio;
    }

    public Double getLatitude() {
        return latitude;
    }

    public void setLatitude(Double latitude) {
        this.latitude = latitude;
    }

    public Double getLongitude() {
        return longitude;
    }

    public void setLongitude(Double longitude) {
        this.longitude = longitude;
    }

}
