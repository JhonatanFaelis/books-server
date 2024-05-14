let Objeto = {

    Usuario: 'Teste',

    Fazenda: "Teste",

    Bloco: 1,

    Talhao: 25,

    Area: 100.45,

    Avaliacaol: {
        Tocosavaliados: [63, 42, 15, 78, 91, 34, 26, 55, 10, 97, 61, 88, 7, 20, 50, 84, 19, 72, 3, 67],
        TocosDoentes: [19, 31, 11, 42, 35, 9, 4, 36, 1, 46, 36, 40, 2, 5, 18, 35, 10, 47, 2, 451],
        TocosSadios: [44, 11, 4, 36, 55, 25, 22, 19, 9, 51, 25, 47, 5, 16, 32, 49, 9, 26, 1, 22]
    },
    Avaliacao2: {
        Tocosávaliados: [45, 21, 11, 72, 88, 46, 30, 60, 15, 93, 51, 75, 5, 18, 42, 77, 24, 65, 2, 55],
        TocosDoentes: [29, 16, 10, 48, 63, 22, 19, 36, 7, 56, 26, 62, 3, 7, 26, 52, 16, 44, 6, 28],
        TocosSadios: [16, 5, 6, 24, 25, 18, 11, 23, 8, 37, 25, 13, 3, 11, 16, 25, 8, 22, 2, 27],
    },
    Avaliacaos: {
        TocosAvaliados: [50, 35, 18, 86, 92, 38, 29, 65, 20, 100, 55, 82, 10, 25, 55, 90, 30, 76, 8, 62],
        TocosDoentes: [25, 11, 5, 33, 50, 16, 10, 36, 9, 67, 31, 61, 5, 12, 30, 53, 9, 44, 2, 31],
        Tocossadios: [26, 24, 13, 47, 42, 22, 19, 29, 10, 33, 24, 21, 6, 13, 25, 37, 21, 26, 6, 36]
    }
}

const verificarCamposDoObjeto = (objeto) => {
    const resultado = {
        Usuario: {
            Preenchido: typeof objeto.Usuario === 'string' && objeto.Usuario.trim().length > 0,
            TipoDoCampo: typeof objeto.Usuario
        },
        Fazenda: {
            Preenchido: typeof objeto.Fazenda === 'string' && objeto.Fazenda.trim().length > 0,
            TipoDoCampo: typeof objeto.Fazenda
        },
        Bloco: {
            Preenchido: typeof objeto.Bloco === 'number' && !isNaN(objeto.Bloco),
            TipoDoCampo: typeof objeto.Bloco
        },
        Talhao: {
            Preenchido: typeof objeto.Talhao === 'number' && !isNaN(objeto.Talhao),
            TipoDoCampo: typeof objeto.Talhao
        },
        Area: {
            Preenchido: typeof objeto.Area === 'number' && !isNaN(objeto.Area),
            TipoDoCampo: typeof objeto.Area
        }
    };

    return resultado;
}



const resultadoVerificacaoCampos = verificarCamposDoObjeto(Objeto);
console.log("Resultado da Verificação dos Campos:");
console.log("Usuario:");
console.log("Preenchido:", resultadoVerificacaoCampos.Usuario.Preenchido, ", Tipo do campo:", resultadoVerificacaoCampos.Usuario.TipoDoCampo);
console.log("Fazenda:");
console.log("Preenchido:", resultadoVerificacaoCampos.Fazenda.Preenchido, ", Tipo do campo:", resultadoVerificacaoCampos.Fazenda.TipoDoCampo);
console.log("Bloco:");
console.log("Preenchido:", resultadoVerificacaoCampos.Bloco.Preenchido, ", Tipo do campo:", resultadoVerificacaoCampos.Bloco.TipoDoCampo);
console.log("Talhao:");
console.log("Preenchido:", resultadoVerificacaoCampos.Talhao.Preenchido, ", Tipo do campo:", resultadoVerificacaoCampos.Talhao.TipoDoCampo);
console.log("Area:");
console.log("Preenchido:", resultadoVerificacaoCampos.Area.Preenchido, ", Tipo do campo:", resultadoVerificacaoCampos.Area.TipoDoCampo);
