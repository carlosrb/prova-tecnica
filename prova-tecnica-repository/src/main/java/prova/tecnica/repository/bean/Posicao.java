/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package prova.tecnica.repository.bean;

import java.io.Serializable;
import java.time.OffsetDateTime;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import org.apache.commons.lang3.builder.ToStringBuilder;

/**
 *
 * @author Carlos Roberto B. Meneghette
 *
 * @date 2019-08-13
 *
 */
@Entity
@IdClass(PosicaoId.class)
public class Posicao implements Serializable {

    @Id
    private String placa;

    @Id
    private OffsetDateTime dataPosicao;

    private Integer velocidade;

    private Double longitude;

    private Double latitude;

    private Boolean ignicao;

    public Posicao() {
    }

    public Posicao(String placa, OffsetDateTime dataPosicao,
            Integer velocidade, Double latitude, Double longitude,
            Boolean ignocao) {

        this.placa = placa;
        this.dataPosicao = dataPosicao;
        this.velocidade = velocidade;
        this.latitude = latitude;
        this.longitude = longitude;
        this.ignicao = ignocao;
    }
    
    @Override
    public String toString() {
        return ToStringBuilder.reflectionToString(this);
    }

    public String getPlaca() {
        return placa;
    }

    public void setPlaca(String placa) {
        this.placa = placa;
    }

    public OffsetDateTime getDataPosicao() {
        return dataPosicao;
    }

    public void setDataPosicao(OffsetDateTime dataPosicao) {
        this.dataPosicao = dataPosicao;
    }

    public Integer getVelocidade() {
        return velocidade;
    }

    public void setVelocidade(Integer velocidade) {
        this.velocidade = velocidade;
    }

    public Double getLongitude() {
        return longitude;
    }

    public void setLongitude(Double longitude) {
        this.longitude = longitude;
    }

    public Double getLatitude() {
        return latitude;
    }

    public void setLatitude(Double latitude) {
        this.latitude = latitude;
    }

    public Boolean getIgnicao() {
        return ignicao;
    }

    public void setIgnicao(Boolean ignicao) {
        this.ignicao = ignicao;
    }

}
