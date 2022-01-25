document.write('<p>Estadisticas centro medico ñuñoa</p>');

let Radiologia = [
    { nombre: "Francisca Rojas", rut: "9878782-1", prevision: "Fonasa", hora: "11:00", especialista: "Ignacio Schulz" },
    { nombre: "Pamela Estrada", rut: "15345241-3", prevision: "Isapre", hora: "11:30", especialista: "Federico Subercaseaux" },
    { nombre: "Armando Luna", rut: "16445345-9", prevision: "Isapre", hora: "15:00", especialista: "Fernando Wurthz" },
    { nombre: "Manuel Godoy", rut: "17666419-0", prevision: "Fonasa", hora: "15:30", especialista: "Ana MAria Godoy" },
    { nombre: "Ramon Ulloa", rut: "14989389-K", prevision: "Fonasa", hora: "16:00", especialista: "Patricia Suazo" }
];
//console.log(Radiologia);
//for (var i = 0; i < Radiologia.length; i++) {
//   console.log(Radiologia[i]);
//};

let Traumatologia = [
    { nombre: "Paula Sanchez", rut: "15554774-5", prevision: "Fonasa", hora: "08:00", especialista: "Maria Paz Altuzarra" },
    { nombre: "Angelica Navas", rut: "15444147-9", prevision: "Isapre", hora: "10:00", especialista: "Raul Araya" },
    { nombre: "Ana Klapp", rut: "17879423-9", prevision: "Isapre", hora: "10:30", especialista: "Maria Arriagada" },
    { nombre: "Felipe Mardones", rut: "1547423-6", prevision: "Isapre", hora: "11:00", especialista: "Alejandro Badilla" },
    { nombre: "Diego Marre", rut: "16554741-K", prevision: "Fonasa", hora: "11:30", especialista: "Cecilia Budnik" },
    { nombre: "Cecilia Mendez", rut: "9747535-8", prevision: "Isapre", hora: "12:00", especialista: "Arturo Cavagnaro" },
    { nombre: "Marcial Suazo", rut: "11254785-5", prevision: "Isapre", hora: "12:30", especialista: "Andres Kanacri" }
];
//console.log(Traumatologia);
//for (var i = 0; i < Traumatologia.length; i++) {
//   console.log(Traumatologia[i]);
//};

let Dental = [
    { nombre: "Marcela Retamal", rut: "11123425-6", prevision: "Isapre", hora: "08:30", especialista: "Andrea Zuñiga" },
    { nombre: "Angel Muñoz", rut: "9878789-2", prevision: "Isapre", hora: "11:00", especialista: "Maria Pia Zañartu" },
    { nombre: "Mario Kats", rut: "7998789-5", prevision: "Fonasa", hora: "11:30", especialista: "Scarlett Witting" },
    { nombre: "Karin Fernandez", rut: "18887662-K", prevision: "Fonasa", hora: "13:00", especialista: "Francisco Von Teuber" },
    { nombre: "Hugo Sanchez", rut: "17665461-4", prevision: "Fonasa", hora: "13:30", especialista: "Eduardo Viñuela" },
    { nombre: "Ana Sepulveda", rut: "14441281-0", prevision: "Isapre", hora: "14:00", especialista: "Raquel Villaseca" },

];
//console.log(Dental);
//for (var i = 0; i < Dental.length; i++) {
//    console.log(Dental[i]);
//};
document.write("<p>Primera atención Radiología " + Radiologia[0].nombre + " - " + Radiologia[0].prevision + " | " + "Última atención " + Radiologia[4].nombre + " - " + Radiologia[4].prevision);
"</p>"


document.write("<p>Primera atención Traumatología " + Traumatologia[0].nombre + " - " + Traumatologia[0].prevision + " | " + "Última atención " + Traumatologia[6].nombre + " - " + Traumatologia[6].prevision);
"</p>"

document.write("<p>Primera atención Dental " + Dental[0].nombre + " - " + Dental[0].prevision + " | " + "Última atención " + Dental[5].nombre + " - " + Dental[5].prevision);
"</p>"


let textora =
    "<tr><th>Nombre Paciente</th><th>Rut Paciente</th><th>Medico Especialista</th><th>Hora de atención</th><th>Prevision</th > </tr>";
for (let i = 0; i < Radiologia.length; i++) {
    textora += `<tr>
    <td>${Radiologia[i].nombre}</td>
    <td>${Radiologia[i].rut}</td>
    <td>${Radiologia[i].especialista}</td>
    <td>${Radiologia[i].hora}</td>
    <td>${Radiologia[i].prevision}</td>    
    </tr>`;
}
document.getElementById("cuerpo-tabla-radio").innerHTML = textora;

let textotra =
    "<tr><th>Nombre Paciente</th><th>Rut Paciente</th><th>Medico Especialista</th><th>Hora de atención</th><th>Prevision</th > </tr>";
for (let i = 0; i < Traumatologia.length; i++) {
    textotra += `<tr>
<td>${Traumatologia[i].nombre}</td>
<td>${Traumatologia[i].rut}</td>
<td>${Traumatologia[i].especialista}</td>
<td>${Traumatologia[i].hora}</td>
<td>${Traumatologia[i].prevision}</td>
</tr>`;
}
document.getElementById("cuerpo-tabla-trauma").innerHTML = textotra;

let textotden =
    "<tr><th>Nombre Paciente</th><th>Rut Paciente</th><th>Medico Especialista</th><th>Hora de atención</th><th>Prevision</th > </tr>";
for (let i = 0; i < Dental.length; i++) {
    textotden += `<tr>
<td>${Dental[i].nombre}</td>
<td>${Dental[i].rut}</td>
<td>${Dental[i].especialista}</td>
<td>${Dental[i].hora}</td>
<td>${Dental[i].prevision}</td>
</tr>`;
}
document.getElementById("cuerpo-tabla-dental").innerHTML = textotden;