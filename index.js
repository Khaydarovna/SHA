const k1_input = document.querySelector("#k1");
k1_input.addEventListener("change", (e) => {
  const k1_isValid = e.target.checkValidity();
  if (k1_isValid == false && document.getElementById("k1").value == "") {
    alert("Enter the 32-bit (8-character) constant value");
    return false;
  } else return true;
});

const k2_input = document.querySelector("#k2");
k2_input.addEventListener("change", (e) => {
  const k2_isValid = e.target.checkValidity();
  if (k2_isValid == false && document.getElementById("k2").value == "") {
    alert("Enter the 32-bit (8-character) constant value");
    return false;
  } else return true;
});

const k3_input = document.querySelector("#k3");
k3_input.addEventListener("change", (e) => {
  const k3_isValid = e.target.checkValidity();
  if (k3_isValid == false && document.getElementById("k3").value == "") {
    alert("Enter the 32-bit (8-character) constant value");
    return false;
  } else return true;
});

const k4_input = document.querySelector("#k4");
k4_input.addEventListener("change", (e) => {
  const k4_isValid = e.target.checkValidity();
  if (k4_isValid == false && document.getElementById("k4").value == "") {
    alert("Enter the 32-bit (8-character) constant value");
    return false;
  } else return true;
});

const A_input = document.querySelector("#A");
A_input.addEventListener("change", (e) => {
  const A_isValid = e.target.checkValidity();
  if (A_isValid == false && document.getElementById("A").value == "") {
    alert("Enter the 32-bit (8-character) constant value");
    return false;
  } else return true;
});

const B_input = document.querySelector("#B");
B_input.addEventListener("change", (e) => {
  const B_isValid = e.target.checkValidity();
  if (B_isValid == false && document.getElementById("B").value == "") {
    alert("Enter the 32-bit (8-character) constant value");
    return false;
  } else return true;
});

const C_input = document.querySelector("#C");
C_input.addEventListener("change", (e) => {
  const C_isValid = e.target.checkValidity();
  if (C_isValid == false && document.getElementById("C").value == "") {
    alert("Enter the 32-bit (8-character) constant value");
    return false;
  } else return true;
});

const D_input = document.querySelector("#D");
D_input.addEventListener("change", (e) => {
  const D_isValid = e.target.checkValidity();
  if (D_isValid == false && document.getElementById("D").value == "") {
    alert("Enter the 32-bit (8-character) constant value");
    return false;
  } else return true;
});

const E_input = document.querySelector("#E");
E_input.addEventListener("change", (e) => {
  const E_isValid = e.target.checkValidity();
  if (E_isValid == false && document.getElementById("E").value == "") {
    alert("Enter the 32-bit (8-character) constant value");
    return false;
  } else return true;
});

const t1_from_input = document.querySelector("#t1_from");
t1_from_input.addEventListener("change", (e) => {
  const isValid = e.target.checkValidity();
  if (isValid == false && document.getElementById("t1_from").value == "") {
    alert("Enter the number");
    return false;
  } else return true;
});

const t1_to_input = document.querySelector("#t1_to");
t1_to_input.addEventListener("change", (e) => {
  const isValid = e.target.checkValidity();
  if (isValid == false && document.getElementById("t1_to").value == "") {
    alert("Enter the number");
    return false;
  } else return true;
});

const t2_from_input = document.querySelector("#t2_from");
t2_from_input.addEventListener("change", (e) => {
  const isValid = e.target.checkValidity();
  if (isValid == false && document.getElementById("t2_from").value == "") {
    alert("Enter the number");
    return false;
  } else return true;
});

const t2_to_input = document.querySelector("#t2_to");
t2_to_input.addEventListener("change", (e) => {
  const isValid = e.target.checkValidity();
  if (isValid == false && document.getElementById("t2_to").value == "") {
    alert("Enter the number");
    return false;
  } else return true;
});

const t3_from_input = document.querySelector("#t3_from");
t3_from_input.addEventListener("change", (e) => {
  const isValid = e.target.checkValidity();
  if (isValid == false && document.getElementById("t3_from").value == "") {
    alert("Enter the number");
    return false;
  } else return true;
});

const t3_to_input = document.querySelector("#t3_to");
t3_to_input.addEventListener("change", (e) => {
  const isValid = e.target.checkValidity();
  if (isValid == false && document.getElementById("t3_to").value == "") {
    alert("Enter the number");
    return false;
  } else return true;
});

const t4_from_input = document.querySelector("#t4_from");
t4_from_input.addEventListener("change", (e) => {
  const isValid = e.target.checkValidity();
  if (isValid == false && document.getElementById("t4_from").value == "") {
    alert("Enter the number");
    return false;
  } else return true;
});

const t4_to_input = document.querySelector("#t4_to");
t4_to_input.addEventListener("change", (e) => {
  const isValid = e.target.checkValidity();
  if (isValid == false && document.getElementById("t4_to").value == "") {
    alert("Enter the number");
    return false;
  } else return true;
});

(function () {
  var ConvertBase = function (num) {
    return {
      from: function (baseFrom) {
        return {
          to: function (baseTo) {
            return parseInt(num, baseFrom).toString(baseTo);
          },
        };
      },
    };
  };

  // binary to decimal
  ConvertBase.bin2dec = function (num) {
    return ConvertBase(num).from(2).to(10);
  };

  // binary to hexadecimal
  ConvertBase.bin2hex = function (num) {
    return ConvertBase(num).from(2).to(16);
  };

  // decimal to binary
  ConvertBase.dec2bin = function (num) {
    return ConvertBase(num).from(10).to(2);
  };

  // decimal to hexadecimal
  ConvertBase.dec2hex = function (num) {
    return ConvertBase(num).from(10).to(16);
  };

  // hexadecimal to binary
  ConvertBase.hex2bin = function (num) {
    return ConvertBase(num).from(16).to(2);
  };

  // hexadecimal to decimal
  ConvertBase.hex2dec = function (num) {
    return ConvertBase(num).from(16).to(10);
  };

  this.ConvertBase = ConvertBase;
})(this);

const stringToHex = (str) => {
  let hex = "";
  for (let i = 0; i < str.length; i++) {
    const charCode = str.charCodeAt(i);
    const hexValue = charCode.toString(16);

    // Pad with zeros to ensure two-digit representation
    hex += hexValue.padStart(2, "0");
  }
  return hex;
};

function toBinary(message) {
  let binaryResult = "";

  for (let i = 0; i < message.length; i++) {
    const charCode = message.charCodeAt(i);
    let binaryValue = "";

    for (let j = 7; j >= 0; j--) {
      binaryValue += (charCode >> j) & 1;
    }

    binaryResult += binaryValue + " ";
  }

  return binaryResult.trim();
}

function toHex(message) {
  let m = [];
  let m_item = "";
  let hex;
  let hex_val = [];
  for (let i = 0; i < message.length; i++) {
    for (let j = 0; j < message[i].length; j++) {
      m_item += message[i][j];
    }
    m.push(m_item);
    m_item = "";
  }
  for (let k = 0; k < m.length; k++) {
    hex = ConvertBase.bin2hex(m[k]);
    hex = hex.padStart(8, "0");
    hex_val.push(hex);
  }
  return hex_val;
}

function XOR(a, b) {
  let c = [];
  for (let i = 0; i < a.length; i++) {
    if ((a[i] == 0 && b[i] == 0) || (a[i] == 1 && b[i] == 1)) {
      c.push("0");
    } else c.push("1");
  }
  return c;
}

function ShLeft(a, n) {
  let b = [];
  let c = [];
  let c1 = "";
  for (let i = 0; i < n; i++) {
    b.push(a[i]);
  }
  for (let j = n; j < a.length; j++) {
    c.push(a[j]);
  }
  c = c.concat(b);
  for (let n = 0; n < 32; n++) {
    c1 += c[n];
  }
  return c1;
}

function PadParse(message) {
  let m = toBinary(message).split(" ").join("");
  let l = m.length;
  let k = (448 - (l + 1)) % 512;
  if (k < 0) {
    k += 512;
  }
  m += "1";
  for (let i = 0; i < k; i++) {
    m += "0";
  }
  l = l.toString(2);
  for (let j = 0; j < 64 - l.length; j++) {
    m += "0";
  }
  m += "" + l;
  let padded = m.split("");
  let N = padded.length / 512;
  let parsed = [];
  for (let k = 0; k < N; k++) {
    parsed.push(padded.splice(0, 512));
  }
  return parsed;
}

function WTable(parsed) {
  let W = [];
  let M = [];
  let w = [];
  let rounds = parseInt(document.getElementById("rounds-num").value);
  for (let i = 0; i < parsed.length; i++) {
    M.push(parsed.splice(0, 32));
  }
  for (let t = 0; t < rounds; t++) {
    if (t >= 0 && t <= 15) {
      W = M;
    }
    if (t >= 16 && t <= rounds) {
      w = ShLeft(XOR(W[t - 3], XOR(W[t - 8], XOR(W[t - 14], W[t - 16]))), 1);
      W.push(w);
    }
  }
  return W;
}

function getMessage() {
  let message = document.getElementById("message").value;
  document.getElementById("ascii-btn").style.display = "block";
  document.getElementById("ascii_hex").innerText = stringToHex(message);
  document.getElementById("ascii_bin").innerText = toBinary(message);
  document.getElementById("length_M").innerText =
    stringToHex(message).length * 4;
}

function setParameters() {
  document.getElementById("process").style.display = "block";
}

function getRounds() {
  let rounds = parseInt(document.getElementById("rounds-num").value);
  let message = document.getElementById("message").value;
  let check_l = Math.round(toBinary(message).replaceAll(" ", "").length / 32);
  if (rounds < 4) {
    alert("There should be at least 4 rounds");
  } else if (rounds < check_l) {
    alert("There should be at least " + check_l + " rounds");
  } else if (rounds > 80) {
    alert("There should be less than 80 rounds");
  } else {
    document.getElementById("parameters").style.display = "block";
    let table;
    let h_table;
    let parsed = PadParse(message);
    let N = parsed.length;
    for (let j = 0; j < N; j++) {
      document.getElementById("Wt_table").style.display = "flex";
      table = document.createElement("TABLE");
      table.setAttribute("border", "1");
      table.style.borderCollapse = "collapse";
      h_table = document.createElement("H5");
      h_table.style.alignSelf = "flex-start";
      h_table.style.marginLeft = "10%";
      h_table.style.marginTop = "10px";
      document.getElementById("Wt_table").appendChild(h_table);
      document.getElementById("Wt_table").appendChild(table);
      h_table.innerText = "For " + rounds + " rounds when " + "N = " + (j + 1);
      let W_table = WTable(parsed[j]);
      let hex = toHex(W_table);
      if (rounds % 4 == 0) {
        for (let i = 0; i < rounds / 4; i++) {
          let row = table.insertRow(-1);
          let c1 = row.insertCell(0);
          let c2 = row.insertCell(1);
          let c3 = row.insertCell(2);
          let c4 = row.insertCell(3);
          c1.innerText = "W" + (i + 1) + " = " + hex[i].toUpperCase();
          c2.innerText =
            "W" +
            (i + rounds / 4 + 1) +
            " = " +
            hex[i + rounds / 4].toUpperCase();
          c3.innerText =
            "W" +
            (i + 2 * (rounds / 4) + 1) +
            " = " +
            hex[i + 2 * (rounds / 4)].toUpperCase();
          c4.innerText =
            "W" +
            (i + 3 * (rounds / 4) + 1) +
            " = " +
            hex[i + 3 * (rounds / 4)].toUpperCase();
        }
      } else if (rounds % 3 == 0) {
        for (let i = 0; i < rounds / 3; i++) {
          let row = table.insertRow(-1);
          let c1 = row.insertCell(0);
          let c2 = row.insertCell(1);
          let c3 = row.insertCell(2);
          c1.innerText = "W" + (i + 1) + " = " + hex[i].toUpperCase();
          c2.innerText =
            "W" +
            (i + rounds / 3 + 1) +
            " = " +
            hex[i + rounds / 3].toUpperCase();
          c3.innerText =
            "W" +
            (i + 2 * (rounds / 3) + 1) +
            " = " +
            hex[i + 2 * (rounds / 3)].toUpperCase();
        }
      } else if (rounds % 2 == 0) {
        for (let i = 0; i < rounds / 2; i++) {
          let row = table.insertRow(-1);
          let c1 = row.insertCell(0);
          let c2 = row.insertCell(1);
          c1.innerText = "W" + (i + 1) + " = " + hex[i].toUpperCase();
          c2.innerText =
            "W" +
            (i + rounds / 2 + 1) +
            " = " +
            hex[i + rounds / 2].toUpperCase();
        }
      } else {
        for (let i = 0; i < rounds; i++) {
          let row = table.insertRow(-1);
          let c1 = row.insertCell(0);
          c1.innerText = "W" + (i + 1) + " = " + hex[i].toUpperCase();
        }
      }
    }
  }
}
// functions
function F1(a, b, c) {
  let f1 = [];
  for (let i = 0; i < a.length; i++) {
    f1.push((a[i] & b[i]) | (~a[i] & c[i]));
  }
  return f1;
}

function F2(a, b, c) {
  let f2 = XOR(a, XOR(b, c));
  return f2;
}

function F3(a, b, c) {
  let f3 = [];
  for (let i = 0; i < a.length; i++) {
    f3.push((a[i] & b[i]) | (a[i] & c[i]) | (b[i] & c[i]));
  }
  return f3;
}

function CheckValidator(inputs) {
  let checker = true;
  for (let m = 0; m < inputs.length; m++) {
    if (inputs[m].validity.valid == false) {
      checker = false;
      break;
    }
  }
  return checker;
}

function SHA1_Rounds() {
  let inputs = document.getElementsByTagName("input");
  let validator = CheckValidator(inputs);
  console.log(validator);
  if (validator == true) {
    document.getElementById("inter-hash").style.display = "flex";
    let r = parseInt(document.getElementById("rounds-num").value);
    let message = document.getElementById("message").value;
    let parsed = PadParse(message);
    let N = parsed.length;
    // constants
    let k1 = ConvertBase.hex2bin(document.getElementById("k1").value);
    let k2 = ConvertBase.hex2bin(document.getElementById("k2").value);
    let k3 = ConvertBase.hex2bin(document.getElementById("k3").value);
    let k4 = ConvertBase.hex2bin(document.getElementById("k4").value);
    let k1_start = parseInt(document.getElementById("t1_from").value);
    let k2_start = parseInt(document.getElementById("t2_from").value);
    let k3_start = parseInt(document.getElementById("t3_from").value);
    let k4_start = parseInt(document.getElementById("t4_from").value);
    let k1_end = parseInt(document.getElementById("t1_to").value);
    let k2_end = parseInt(document.getElementById("t2_to").value);
    let k3_end = parseInt(document.getElementById("t3_to").value);
    let k4_end = parseInt(document.getElementById("t4_to").value);
    // buffers
    let A = ConvertBase.hex2bin(document.getElementById("A").value);
    let B = ConvertBase.hex2bin(document.getElementById("B").value);
    let C = ConvertBase.hex2bin(document.getElementById("C").value);
    let D = ConvertBase.hex2bin(document.getElementById("D").value);
    let E = ConvertBase.hex2bin(document.getElementById("E").value);
    // intermediate hash values

    let T;
    let hash_value;
    let table;
    let h_table;
    let tr;
    let th1;
    let th2;
    let th3;
    let th4;
    let th5;
    let th6;
    let th7;
    let th8;

    for (let i = 0; i < N; i++) {
      table = document.createElement("TABLE");
      table.setAttribute("id", "table_inner");
      table.setAttribute("border", "1");
      table.style.borderCollapse = "collapse";
      h_table = document.createElement("H5");
      h_table.style.alignSelf = "flex-start";
      h_table.style.marginLeft = "10%";
      h_table.style.marginTop = "10px";
      document.getElementById("inter-hash").appendChild(h_table);
      document.getElementById("inter-hash").appendChild(table);
      h_table.innerText = "For " + r + " rounds when " + "N = " + (i + 1);
      tr = document.createElement("TR");
      document.getElementById("table_inner").appendChild(tr);
      tr.setAttribute("id", "tr_inner");
      th1 = document.createElement("TH");
      document.getElementById("tr_inner").appendChild(th1);
      th1.innerText = "r";
      th2 = document.createElement("TH");
      document.getElementById("tr_inner").appendChild(th2);
      th2.innerText = "A";
      th3 = document.createElement("TH");
      document.getElementById("tr_inner").appendChild(th3);
      th3.innerText = "B";
      th4 = document.createElement("TH");
      document.getElementById("tr_inner").appendChild(th4);
      th4.innerText = "C";
      th5 = document.createElement("TH");
      document.getElementById("tr_inner").appendChild(th5);
      th5.innerText = "D";
      th6 = document.createElement("TH");
      document.getElementById("tr_inner").appendChild(th6);
      th6.innerText = "E";
      th7 = document.createElement("TH");
      document.getElementById("tr_inner").appendChild(th7);
      th7.innerText = "F(B, C, D)";
      th8 = document.createElement("TH");
      document.getElementById("tr_inner").appendChild(th8);
      th8.innerText = "Intermediate hash value";

      let W_table = WTable(parsed[i]);
      let a = A;
      let b = B;
      let c = C;
      let d = D;
      let e = E;
      a = a.padStart(32, "0");
      b = b.padStart(32, "0");
      c = c.padStart(32, "0");
      d = d.padStart(32, "0");
      e = e.padStart(32, "0");

      for (let j = 1; j <= r; j++) {
        let f1 = "";
        let f2 = "";
        let f3 = "";
        let left = "";
        let W = "";
        let F_hex;
        for (let n = 0; n < 32; n++) {
          f1 += F1(b, c, d)[n];
          f2 += F2(b, c, d)[n];
          f3 += F3(b, c, d)[n];
          left += ShLeft(a, 5)[n];
          W += W_table[j - 1][n];
        }
        if (j >= k1_start && j <= k1_end) {
          T = ConvertBase.dec2bin(
            (
              (parseFloat(ConvertBase.bin2dec(left)) +
                parseFloat(ConvertBase.bin2dec(f1)) +
                parseFloat(ConvertBase.bin2dec(e)) +
                parseFloat(ConvertBase.bin2dec(k1)) +
                parseFloat(ConvertBase.bin2dec(W))) %
              Math.pow(2, 32)
            ).toString()
          );
          T = T.padStart(32, "0");
          F_hex = ConvertBase.bin2hex(f1).toUpperCase().padStart(8, "0");
        } else if (j >= k2_start && j <= k2_end) {
          T = ConvertBase.dec2bin(
            (
              (parseFloat(ConvertBase.bin2dec(left)) +
                parseFloat(ConvertBase.bin2dec(f2)) +
                parseFloat(ConvertBase.bin2dec(e)) +
                parseFloat(ConvertBase.bin2dec(k2)) +
                parseFloat(ConvertBase.bin2dec(W))) %
              Math.pow(2, 32)
            ).toString()
          );
          T = T.padStart(32, "0");
          F_hex = ConvertBase.bin2hex(f2).toUpperCase().padStart(8, "0");
        } else if (j >= k3_start && j <= k3_end) {
          T = ConvertBase.dec2bin(
            (
              (parseFloat(ConvertBase.bin2dec(left)) +
                parseFloat(ConvertBase.bin2dec(f3)) +
                parseFloat(ConvertBase.bin2dec(e)) +
                parseFloat(ConvertBase.bin2dec(k3)) +
                parseFloat(ConvertBase.bin2dec(W))) %
              Math.pow(2, 32)
            ).toString()
          );
          T = T.padStart(32, "0");
          F_hex = ConvertBase.bin2hex(f3).toUpperCase().padStart(8, "0");
        } else if (j >= k4_start && j <= k4_end) {
          T = ConvertBase.dec2bin(
            (
              (parseFloat(ConvertBase.bin2dec(left)) +
                parseFloat(ConvertBase.bin2dec(f2)) +
                parseFloat(ConvertBase.bin2dec(e)) +
                parseFloat(ConvertBase.bin2dec(k4)) +
                parseFloat(ConvertBase.bin2dec(W))) %
              Math.pow(2, 32)
            ).toString()
          );
          T = T.padStart(32, "0");
          F_hex = ConvertBase.bin2hex(f2).toUpperCase().padStart(8, "0");
        }
        e = d;
        d = c;
        c = ShLeft(b, 30);
        b = a;
        a = T;

        let a_hex = ConvertBase.bin2hex(a).toUpperCase().padStart(8, "0");
        let b_hex = ConvertBase.bin2hex(b).toUpperCase().padStart(8, "0");
        let c_hex = ConvertBase.bin2hex(c).toUpperCase().padStart(8, "0");
        let d_hex = ConvertBase.bin2hex(d).toUpperCase().padStart(8, "0");
        let e_hex = ConvertBase.bin2hex(e).toUpperCase().padStart(8, "0");

        let row = table.insertRow(-1);
        let r_table = row.insertCell(0);
        let a_table = row.insertCell(1);
        let b_table = row.insertCell(2);
        let c_table = row.insertCell(3);
        let d_table = row.insertCell(4);
        let e_table = row.insertCell(5);
        let f = row.insertCell(6);
        let hash = row.insertCell(7);

        r_table.innerText = j;
        a_table.innerText = a_hex;
        b_table.innerText = b_hex;
        c_table.innerText = c_hex;
        d_table.innerText = d_hex;
        e_table.innerText = e_hex;
        f.innerText = F_hex;
        hash.innerText =
          a_hex + " " + b_hex + " " + c_hex + " " + d_hex + " " + e_hex;
      }
      let a_N = document.createElement("P");
      let b_N = document.createElement("P");
      let c_N = document.createElement("P");
      let d_N = document.createElement("P");
      let e_N = document.createElement("P");
      a_N.style.alignSelf = "flex-start";
      a_N.style.marginLeft = "10%";
      a_N.style.marginTop = "10px";
      b_N.style.alignSelf = "flex-start";
      b_N.style.marginLeft = "10%";
      b_N.style.marginTop = "10px";
      c_N.style.alignSelf = "flex-start";
      c_N.style.marginLeft = "10%";
      c_N.style.marginTop = "10px";
      d_N.style.alignSelf = "flex-start";
      d_N.style.marginLeft = "10%";
      d_N.style.marginTop = "10px";
      e_N.style.alignSelf = "flex-start";
      e_N.style.marginLeft = "10%";
      e_N.style.marginTop = "10px";

      document.getElementById("inter-hash").appendChild(a_N);
      document.getElementById("inter-hash").appendChild(b_N);
      document.getElementById("inter-hash").appendChild(c_N);
      document.getElementById("inter-hash").appendChild(d_N);
      document.getElementById("inter-hash").appendChild(e_N);
      let N_a =
        "H0 = " +
        ConvertBase.bin2hex(A).toUpperCase().padStart(8, "0") +
        " + " +
        ConvertBase.bin2hex(a).toUpperCase().padStart(8, "0") +
        " = ";
      let N_b =
        "H1 = " +
        ConvertBase.bin2hex(B).toUpperCase().padStart(8, "0") +
        " + " +
        ConvertBase.bin2hex(b).toUpperCase().padStart(8, "0") +
        " = ";
      let N_c =
        "H2 = " +
        ConvertBase.bin2hex(C).toUpperCase().padStart(8, "0") +
        " + " +
        ConvertBase.bin2hex(c).toUpperCase().padStart(8, "0") +
        " = ";
      let N_d =
        "H3 = " +
        ConvertBase.bin2hex(D).toUpperCase().padStart(8, "0") +
        " + " +
        ConvertBase.bin2hex(d).toUpperCase().padStart(8, "0") +
        " = ";
      let N_e =
        "H4 = " +
        ConvertBase.bin2hex(E).toUpperCase().padStart(8, "0") +
        " + " +
        ConvertBase.bin2hex(e).toUpperCase().padStart(8, "0") +
        " = ";

      A = ConvertBase.dec2bin(
        (parseFloat(ConvertBase.bin2dec(A)) +
          parseFloat(ConvertBase.bin2dec(a))) %
          Math.pow(2, 32)
      );
      B = ConvertBase.dec2bin(
        (parseFloat(ConvertBase.bin2dec(B)) +
          parseFloat(ConvertBase.bin2dec(b))) %
          Math.pow(2, 32)
      );
      C = ConvertBase.dec2bin(
        (parseFloat(ConvertBase.bin2dec(C)) +
          parseFloat(ConvertBase.bin2dec(c))) %
          Math.pow(2, 32)
      );
      D = ConvertBase.dec2bin(
        (parseFloat(ConvertBase.bin2dec(D)) +
          parseFloat(ConvertBase.bin2dec(d))) %
          Math.pow(2, 32)
      );
      E = ConvertBase.dec2bin(
        (parseFloat(ConvertBase.bin2dec(E)) +
          parseFloat(ConvertBase.bin2dec(e))) %
          Math.pow(2, 32)
      );
      let final_hash_a = ConvertBase.bin2hex(A).toUpperCase().padStart(8, "0");
      let final_hash_b = ConvertBase.bin2hex(B).toUpperCase().padStart(8, "0");
      let final_hash_c = ConvertBase.bin2hex(C).toUpperCase().padStart(8, "0");
      let final_hash_d = ConvertBase.bin2hex(D).toUpperCase().padStart(8, "0");
      let final_hash_e = ConvertBase.bin2hex(E).toUpperCase().padStart(8, "0");

      a_N.innerText = N_a + final_hash_a;
      b_N.innerText = N_b + final_hash_b;
      c_N.innerText = N_c + final_hash_c;
      d_N.innerText = N_d + final_hash_d;
      e_N.innerText = N_e + final_hash_e;
      hash_value =
        final_hash_a +
        " " +
        final_hash_b +
        " " +
        final_hash_c +
        " " +
        final_hash_d +
        " " +
        final_hash_e;
    }
    let final = document.createElement("H3");
    final.style.textAlign = "center";
    final.style.marginTop = "30px";
    document.getElementById("inter-hash").appendChild(final);
    final.innerHTML = "Final hash value is h(M) = " + hash_value;

    document.getElementById("ends").style.display = "flex";
  } else {
    alert("Invalid input value!");
  }
}

// function Refresh() {
//
// }
