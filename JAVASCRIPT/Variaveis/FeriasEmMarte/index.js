// Peso na Terra
let pesoTerra = 129; // em libras

// Conversão para Marte (≈ 38% da gravidade de Marte)
let pesoMarte = (pesoTerra * 0.38).toFixed(1);

// Conversão para Lua (≈ 16,5% da gravidade da Lua)
let pesoLua = (pesoTerra * 0.165).toFixed(1);

console.log(" Seu peso na Terra é " + pesoTerra + " libras.");
console.log("Seu peso em Marte é " + pesoMarte + " libras.");
console.log("Seu peso na Lua é " + pesoLua + " libras.");
