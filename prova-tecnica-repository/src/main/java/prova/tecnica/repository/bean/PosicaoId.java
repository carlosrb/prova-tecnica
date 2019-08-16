/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package prova.tecnica.repository.bean;

import java.io.Serializable;
import java.time.OffsetDateTime;
import java.util.Objects;
import org.apache.commons.lang3.builder.ToStringBuilder;

/**
 *
 * @author Carlos Roberto B. Meneghette
 *
 * @date 2019-08-13
 *
 */
public class PosicaoId implements Serializable {

    private String placa;

    private OffsetDateTime dataPosicao;
    
    public PosicaoId() {
        
    }
    
    public PosicaoId(String placa, OffsetDateTime dataPosicao) {
        this.placa = placa;
        this.dataPosicao = dataPosicao;
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

    @Override
    public int hashCode() {
        return Objects.hash(placa, dataPosicao);
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        final PosicaoId other = (PosicaoId) obj;
        if (!Objects.equals(this.placa, other.placa)) {
            return false;
        }
        return Objects.equals(this.dataPosicao, other.dataPosicao);
    }
    
    
}
