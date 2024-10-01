import React from 'react';
import '../component/alphabet.css';
import A from '../images/A.png';
import B from '../images/B.png';
import C from '../images/C.jpg';
import D from '../images/D.jpg';
import E from '../images/E.jpg';
import F from '../images/F.jpg';
import G from '../images/G.jpg';
import H from '../images/H.jpg';
import I from '../images/I.jpg';
import J from '../images/J.jpg';
import K from '../images/K.jpg';
import L from '../images/L.jpg';
import M from '../images/M.jpg';
import N from '../images/N.jpg';
import O from '../images/O.png';
import P from '../images/P.png';
import Q from '../images/Q.jpg';
import R from '../images/R.jpg';
import S from '../images/S.jpg';
import T from '../images/T.png';
import U from '../images/U.png';
import V from '../images/V.jpg';
import W from '../images/W.jpg';
import X from '../images/X.png';
import Y from '../images/Y.jpg';
import Z from '../images/Z.png';

const Alphabet = () => {
  const alphabets = [
    { english: 'A', handSign: A, gujarati: 'અ' },
    { english: 'B', handSign: B, gujarati: 'બ' },
    { english: 'C', handSign: C, gujarati: 'સ' },
    { english: 'D', handSign: D, gujarati: 'ડ' },
    { english: 'E', handSign: E, gujarati: 'ઇ' },
    { english: 'F', handSign: F, gujarati: 'ફ' },
    { english: 'G', handSign: G, gujarati: 'ગ' },
    { english: 'H', handSign: H, gujarati: 'હ' },
    { english: 'I', handSign: I, gujarati: 'ઈ' },
    { english: 'J', handSign: J, gujarati: 'જ' },
    { english: 'K', handSign: K, gujarati: 'ક' },
    { english: 'L', handSign: L, gujarati: 'લ' },
    { english: 'M', handSign: M, gujarati: 'મ' },
    { english: 'N', handSign: N, gujarati: 'ન' },
    { english: 'O', handSign: O, gujarati: 'ઓ' },
    { english: 'P', handSign: P, gujarati: 'પ' },
    { english: 'Q', handSign: Q, gujarati: 'ક્વ' },
    { english: 'R', handSign: R, gujarati: 'ર' },
    { english: 'S', handSign: S, gujarati: 'સ' },
    { english: 'T', handSign: T, gujarati: 'ટ' },
    { english: 'U', handSign: U, gujarati: 'ઉ' },
    { english: 'V', handSign: V, gujarati: 'વ' },
    { english: 'W', handSign: W, gujarati: 'વ' },
    { english: 'X', handSign: X, gujarati: 'ક્ષ' },
    { english: 'Y', handSign: Y, gujarati: 'ય' },
    { english: 'Z', handSign: Z, gujarati: 'ઝ' }
  ];

  return (
    <div className="alphabet-container">
      <h1>English to Gujarati Alphabet with Hand Signs</h1>
      <table className="alphabet-table">
        <thead>
          <tr>
            <th>English Alphabet</th>
            <th>Hand Sign</th>
            <th>Gujarati Alphabet</th>
          </tr>
        </thead>
        <tbody>
          {alphabets.map((item, index) => (
            <tr key={index}>
              <td>{item.english}</td>
              <td>
                <img src={item.handSign} alt={`Sign for ${item.english}`} className="hand-sign" />
              </td>
              <td>{item.gujarati}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Alphabet;