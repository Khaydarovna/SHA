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
  document.getElementById("ascii").innerText = toBinary(message);
}

function setParameters() {
  document.getElementById("process").style.display = "block";
}

function getRounds() {
  let rounds = parseInt(document.getElementById("rounds-num").value);
  document.getElementById("parameters").style.display = "block";
  let table;
  let h_table;
  let message = document.getElementById("message").value;
  let parsed = PadParse(message);
  let N = parsed.length;
  for (let j = 0; j < N; j++) {
    table = document.createElement("TABLE");
    table.setAttribute("border", "1");
    table.style.borderCollapse = "collapse";
    h_table = document.createElement("H5");
    h_table.style.alignSelf = "flex-start";
    h_table.style.marginLeft = "10%";
    h_table.style.marginTop = "10px";
    document.getElementById("Wt").appendChild(h_table);
    document.getElementById("Wt").appendChild(table);
    h_table.innerText = "For " + (j + 1) + "-block";
    let W_table = WTable(parsed[j]);
    let hex = toHex(W_table);
    for (let i = 0; i < rounds / 4; i++) {
      let row = table.insertRow(-1);

      let c1 = row.insertCell(0);
      let c2 = row.insertCell(1);
      let c3 = row.insertCell(2);
      let c4 = row.insertCell(3);

      c1.innerText = "W" + (i + 1) + " = " + hex[i].toUpperCase();
      c2.innerText =
        "W" + (i + rounds / 4 + 1) + " = " + hex[i + rounds / 4].toUpperCase();
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

function SHA1_Rounds() {
  document.getElementById("inter-hash").style.display = "flex";
  let r = parseInt(document.getElementById("rounds-num").value);
  let message = document.getElementById("message").value;
  let parsed = PadParse(message);
  let N = parsed.length;
  // constants
  let k1 = ConvertBase.hex2bin(document.getElementById("k1").value);
  // ConvertBase.hex2bin("5A827999");
  let k2 = ConvertBase.hex2bin(document.getElementById("k2").value);
  // ConvertBase.hex2bin("6ED9EBA1");
  let k3 = ConvertBase.hex2bin(document.getElementById("k3").value);
  // ConvertBase.hex2bin("8F1BBCDC");
  let k4 = ConvertBase.hex2bin(document.getElementById("k4").value);
  // ConvertBase.hex2bin("CA62C1D6");
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
  // ConvertBase.hex2bin("67452301");
  let B = ConvertBase.hex2bin(document.getElementById("B").value);
  // ConvertBase.hex2bin("EFCDAB89");
  let C = ConvertBase.hex2bin(document.getElementById("C").value);
  // ConvertBase.hex2bin("98BADCFE");
  let D = ConvertBase.hex2bin(document.getElementById("D").value);
  // ConvertBase.hex2bin("10325476");
  let E = ConvertBase.hex2bin(document.getElementById("E").value);
  // ConvertBase.hex2bin("C3D2E1F0");
  // intermediate hash values

  let T;
  let hash_value;
  let table;
  let h_table;

  for (let i = 0; i < N; i++) {
    table = document.createElement("TABLE");
    table.setAttribute("border", "1");
    table.style.borderCollapse = "collapse";
    h_table = document.createElement("H5");
    h_table.style.alignSelf = "flex-start";
    h_table.style.marginLeft = "10%";
    h_table.style.marginTop = "10px";
    document.getElementById("inter-hash").appendChild(h_table);
    document.getElementById("inter-hash").appendChild(table);
    h_table.innerText = "For " + (i + 1) + "-block";

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

    for (let j = 0; j < r; j++) {
      let f1 = "";
      let f2 = "";
      let f3 = "";
      let left = "";
      let W = "";
      for (let n = 0; n < 32; n++) {
        f1 += F1(b, c, d)[n];
        f2 += F2(b, c, d)[n];
        f3 += F3(b, c, d)[n];
        left += ShLeft(a, 5)[n];
        W += W_table[j][n];
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
      let hash = row.insertCell(6);

      r_table.innerText = j + 1;
      a_table.innerText = a_hex;
      b_table.innerText = b_hex;
      c_table.innerText = c_hex;
      d_table.innerText = d_hex;
      e_table.innerText = e_hex;
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
}
