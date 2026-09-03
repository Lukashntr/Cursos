const qualidadeAr = 34; // Valor da qualidade do ar

if (qualidadeAr >= 0 && qualidadeAr <= 50) {
    console.log("Qualidade do ar: Boa");
} else if (qualidadeAr > 50 && qualidadeAr <= 100) {
    console.log("Qualidade do ar: Moderada");
} else if (qualidadeAr > 100 && qualidadeAr <= 150) {
    console.log("Qualidade do ar: Não saudavel( Grupos sensiveis )");
} else if (qualidadeAr > 150 && qualidadeAr <= 200) {
    console.log("Qualidade do ar: Não saudavel");
} else if (qualidadeAr > 200 && qualidadeAr <= 300) {
    console.log("Qualidade do ar: muito insalubre");
} else {
    console.log("Qualidade do ar: Perigosa");
}