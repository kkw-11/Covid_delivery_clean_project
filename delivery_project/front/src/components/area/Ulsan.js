import React from "react";
import "./area.css";

function Ulsan({ fill, onClick, onMouseOver, onMouseLeave }) {
  return (
    <polyline
      id="울산"
      className="area"
      strokeMiterlimit="1"
      points="501.752,635.891 502.135,635.315   502.323,634.933 502.52,634.357 502.901,633.975 503.09,633.975 503.855,633.782 504.435,633.399 504.435,633.208 504.623,632.824   505.39,632.441 506.352,632.633 506.923,632.824 507.306,633.208 507.501,633.208 507.501,633.208 507.689,632.824 508.072,632.249   508.456,631.675 508.456,631.675 508.839,631.1 508.839,630.716 509.223,629.566 509.223,629.375 510.185,629.566 510.567,629.566   512.101,629.949 512.867,630.333 513.251,630.716 513.634,631.1 513.821,631.1 514.588,630.908 514.776,630.908 515.159,630.716   514.972,629.375 514.393,628.991 513.821,628.225 513.634,628.033 513.438,627.842 513.438,627.842 513.251,627.649   512.867,627.267 512.867,626.5 513.055,625.158 512.672,624.775 513.055,624.2 513.634,623.625 513.634,623.242 513.251,623.051   513.055,622.858 513.055,622.667 513.634,621.709 513.821,621.134 514.01,620.942 514.393,619.984 514.776,619.409 515.159,619.025   515.354,618.834 515.738,618.451 516.121,618.259 516.692,618.067 517.271,617.876 518.038,617.492 518.421,617.109   519.759,617.109 520.143,616.918 520.143,616.918 520.338,616.726 520.909,616.726 521.292,616.918 521.676,616.918   522.442,616.726 522.638,616.151 522.638,615.768 523.021,615.576 523.209,615.576 524.358,615.768 524.554,615.576   524.358,615.576 524.742,614.81 525.125,614.427 524.742,613.854 525.125,613.66 525.509,613.276 526.087,613.089 526.658,613.276   527.042,613.66 527.62,613.66 527.808,614.043 528.004,614.238 528.191,614.427 528.574,614.81 528.771,615.001 529.725,615.001   530.491,615.192 530.688,615.192 530.874,615.192 531.258,614.81 531.836,614.427 531.836,614.238 532.22,613.854 532.22,613.472   532.407,613.276 532.986,613.472 533.174,613.854 534.324,614.238 535.091,614.427 535.857,614.043 536.819,613.472 537.007,613.66   537.202,613.854 537.202,614.238 537.586,614.427 537.969,614.81 538.157,614.81 538.54,615.192 539.307,615.192 539.307,615.576   539.69,615.768 540.073,616.151 540.269,616.151 541.035,616.151 541.419,616.534 541.419,616.726 541.419,616.918 541.419,617.109   541.99,617.301 545.635,618.067 546.401,619.409 546.206,621.134 545.635,624.2 545.252,625.542 545.635,626.5 545.823,626.883   546.019,627.267 546.785,627.649 548.701,627.842 549.468,628.225 549.852,628.416 551.188,628.608 551.768,629.375   554.067,626.691 554.834,626.309 555.601,626.309 556.172,626.309 556.75,626.5 558.283,625.158 559.05,624.392 559.434,624.2   560.583,623.434 560.967,623.051 561.154,622.858 561.538,622.284 561.921,622.092 564.221,622.284 564.409,622.476   570.736,624.584 576.291,626.691 577.44,626.883 578.02,632.441 578.207,633.016 579.357,634.741 579.553,635.315 579.74,635.124   581.657,637.424 580.124,644.323 580.702,645.661 581.086,646.428 581.086,647.577 580.702,649.494 580.319,650.456 580.124,651.41   580.124,651.794 580.124,652.372 579.936,653.326 579.936,653.522 578.207,653.522 578.02,653.326 577.824,653.522 579.169,654.859   579.357,654.477 578.786,654.289 579.357,654.289 579.357,654.093 579.553,654.093 579.357,655.056 579.357,655.438   579.169,657.354 578.591,657.738 577.058,657.354 576.869,658.505 577.058,658.692 577.824,658.31 578.591,658.31 578.591,659.459   578.402,659.459 578.02,659.654 578.02,659.654 577.253,659.654 577.058,659.654 576.869,660.038 576.869,660.992 577.058,661.188   577.824,661.188 578.402,660.609 579.357,661.376 578.402,662.338 577.636,663.292 577.44,663.676 576.869,664.442 576.869,663.867   576.486,663.101 575.907,663.292 575.72,663.676 576.291,663.676 576.486,664.059 576.104,663.867 575.336,663.867 575.141,663.867   574.953,663.676 574.569,663.676 574.188,663.867 574.188,664.059 574.188,664.634 573.42,665.783 572.458,665.783 572.653,665.592   572.27,664.825 571.887,664.634 572.074,664.634 572.074,662.718 572.653,661.188 571.887,659.843 570.354,659.654 569.774,660.038   568.625,659.654 567.858,659.654 567.287,659.654 566.138,660.038 565.754,659.843 565.559,659.654 565.175,659.076   564.792,658.888 564.792,659.076 564.987,659.271 565.371,659.654 565.754,660.421 566.708,660.226 566.904,660.226   568.241,660.609 568.625,661.376 569.392,661.759 568.82,661.571 569.203,662.143 569.587,662.525 568.625,663.483 568.625,663.867   568.82,663.867 568.625,664.059 568.054,665.976 567.671,665.783 567.475,666.167 567.092,666.55 567.092,666.742 566.708,666.934   564.987,668.467 565.559,669.042 564.792,668.658 563.838,668.658 563.259,667.892 563.259,667.316 562.876,666.934 562.688,666.55   562.109,666.358 561.154,665.592 560.967,665.4 560.583,664.059 560.388,663.867 560.967,665.592 560.967,665.783 561.154,666.167   561.35,666.55 561.733,666.742 561.921,667.125 562.109,667.509 562.688,669.616 563.259,669.809 562.688,670.191 562.688,670.958   562.688,671.533 563.071,671.725 563.259,671.533 563.454,671.342 563.643,671.342 564.409,670.958 564.221,671.916   564.409,672.108 563.259,672.875 563.838,673.258 565.371,672.491 565.559,672.108 565.559,672.683 565.371,672.875   565.175,672.875 565.371,673.258 565.559,673.641 565.559,673.833 565.371,674.024 566.138,674.6 564.987,675.366 563.454,676.516   563.454,677.474 563.454,677.666 563.643,677.857 563.838,677.857 564.221,677.857 564.987,678.815 564.987,680.157 564.409,680.54   564.025,681.115 564.409,681.307 564.025,681.499 564.221,682.84 563.643,683.032 563.071,683.224 562.876,683.415 562.876,684.182   563.259,684.182 563.454,684.757 563.454,684.757 563.259,684.757 563.071,684.564 562.688,684.757 562.688,684.948   562.492,685.331 562.492,686.098 563.643,686.673 564.221,687.823 565.371,688.396 565.175,688.973 565.559,689.161   565.559,689.356 565.559,689.739 565.371,690.123 564.792,690.506 563.454,690.693 563.071,691.077 562.688,691.46 562.305,691.272   561.921,691.077 561.921,690.693 560.771,690.693 560.583,690.89 560.583,691.844 559.621,692.61 559.621,692.423 559.238,692.423   558.667,692.61 558.667,692.993 558.667,693.572 558.283,694.526 557.517,695.293 557.321,695.872 556.172,696.06 555.983,696.06   555.405,696.06 555.021,695.677 554.639,695.293 554.255,695.293 553.301,695.104 552.917,694.526 552.917,694.339 552.534,694.144   552.339,694.144 552.339,694.526 551.384,694.144 551.384,694.144 551.572,693.572 551.768,691.46 551.188,690.89 551.572,689.739   551.188,688.973 550.806,688.396 550.806,688.206 550.618,687.631 550.234,687.248 549.852,687.057 549.655,686.29 549.271,686.098   548.889,685.523 548.701,685.14 548.318,684.564 547.739,684.757 545.635,684.948 543.335,685.906 542.568,685.715 542.186,685.906   541.802,685.906 541.224,686.098 539.886,686.29 539.502,686.098 537.969,685.331 537.773,685.14 538.157,683.224 539.119,681.499   539.886,680.54 540.073,679.199 539.502,678.815 537.773,677.474 537.007,676.899 537.007,676.324 537.007,674.791 535.857,673.641   535.669,673.833 535.474,674.024 533.369,674.982 529.537,674.216 529.341,674.024 528.771,673.641 528.574,673.449   528.004,672.875 527.808,672.875 527.237,672.491 526.658,672.108 526.087,671.342 525.125,670 524.358,669.616 523.592,668.658   522.442,666.742 521.676,665.783 518.992,661.759 518.226,661.376 517.271,661.188 516.121,660.805 515.926,660.609 514.01,659.843   513.634,659.654 513.438,659.459 513.251,659.271 511.521,657.738 509.418,657.926 506.156,656.776 505.968,656.589 505.585,656.01   504.239,656.205 503.285,655.438 500.79,655.243 500.79,653.905 500.79,653.71 501.173,653.139 501.173,652.56 500.602,651.604   498.49,651.604 497.152,648.156 497.34,647.961 497.919,647.772 498.302,647.577 499.257,647.39 499.452,647.194 499.835,647.006   501.939,645.473 503.473,643.939 502.52,636.657 "
      transform="translate(106.95522,19.462687)"
      onClick={onClick}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
      style={{
        fill: fill === undefined ? "#cdcccc" : fill,
        fillOpacity: 1,
        stroke: "white",
        strokeMiterlimit: "1",
      }}
    />
  );
}

export default Ulsan;
