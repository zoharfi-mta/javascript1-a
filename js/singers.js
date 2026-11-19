let f_s1 = 0;
let f_s2 = 0;
let f_s3 = 0;
let f_s4 = 0;
let m_s1 = 0;
let m_s2 = 0;
let m_s3 = 0;
let m_s4 = 0;

const count1 = document.getElementById("total_f1");
const count2 = document.getElementById("total_f2");
const count3 = document.getElementById("total_f3");
const count4 = document.getElementById("total_f4");
const count5 = document.getElementById("total_m1");
const count6 = document.getElementById("total_m2");
const count7 = document.getElementById("total_m3");
const count8 = document.getElementById("total_m4");

const addBtnf1 = document.getElementById("addBtnf1");
const addBtnf2 = document.getElementById("addBtnf2");
const addBtnf3 = document.getElementById("addBtnf3");
const addBtnf4 = document.getElementById("addBtnf4");
const addBtnm1 = document.getElementById("addBtnm1");
const addBtnm2 = document.getElementById("addBtnm2");
const addBtnm3 = document.getElementById("addBtnm3");
const addBtnm4 = document.getElementById("addBtnm4");


addBtnf1.addEventListener("click", () => {
    f_s1 += 1;
    count1.textContent = `הצבעות: ${f_s1}`;
});
addBtnf2.addEventListener("click", () => {
    f_s2 += 1;
    count2.textContent = `הצבעות: ${f_s2}`;
});
addBtnf3.addEventListener("click", () => {
    f_s3 += 1;
    count3.textContent = `הצבעות: ${f_s3}`;
});
addBtnf4.addEventListener("click", () => {
    f_s4 += 1;
    count4.textContent = `הצבעות: ${f_s4}`;
});

addBtnm1.addEventListener("click", () => {
    m_s1 += 1;
    count5.textContent = `הצבעות: ${m_s1}`;
});
addBtnm2.addEventListener("click", () => {
    m_s2 += 1;
    count6.textContent = `הצבעות: ${m_s2}`;
});
addBtnm3.addEventListener("click", () => {
    m_s3 += 1;
    count7.textContent = `הצבעות: ${m_s3}`;
});
addBtnm4.addEventListener("click", () => {
    m_s4 += 1;
    count8.textContent = `הצבעות: ${m_s4}`;
});