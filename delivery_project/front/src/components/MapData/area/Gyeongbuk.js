import React from "react";
import "./area.css";

function Gyeongbuk({ total, fill, onClick, onMouseOver, onMouseLeave }) {
  return (
    <polyline
      id="경상북도"
      className="area"
      onClick={onClick}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
      strokeMiterlimit="1"
      points="418.771,624.009 420.11,621.709   419.923,621.325 419.729,621.134 419.729,620.751 419.729,619.984 419.539,618.834 419.344,618.451 419.539,617.109   422.027,615.576 422.794,615.001 426.822,612.51 427.776,612.127 427.972,611.938 430.271,612.705 431.422,612.322 433.909,611.938   433.722,613.854 433.525,614.043 434.104,615.576 434.488,618.451 435.255,619.218 437.554,618.643 438.509,618.643   439.275,618.451 439.471,618.259 439.658,617.685 440.809,616.918 441.004,616.726 441.191,616.343 445.986,614.238   446.175,614.043 446.753,613.66 446.941,612.127 446.753,611.938 447.52,610.789 447.52,610.022 447.324,607.144 447.137,606.377   445.408,601.206 446.558,600.244 448.475,599.673 450.203,592.391 450.774,591.813 452.69,587.6 452.69,587.217 452.69,587.024   454.036,587.217 454.419,587.408 454.419,587.6 454.99,587.6 455.569,587.024 457.868,584.725 458.439,584.533 458.823,583.958   458.635,582.233 458.635,580.892 459.02,580.317 458.635,579.358 458.439,578.592 458.252,578.209 458.439,575.335 458.057,574.376   457.868,573.993 457.673,573.802 454.605,570.735 455.186,569.01 455.757,562.306 455.373,561.345 454.036,559.812 453.27,558.856   451.354,554.444 450.97,554.257 450.586,554.257 450.391,554.257 449.819,554.062 449.241,554.062 448.67,553.874 447.708,553.679   447.324,553.295 447.137,552.911 446.941,552.528 446.175,552.911 439.471,554.444 439.087,554.444 436.209,554.444   431.038,559.239 427.589,561.156 427.205,561.156 425.672,561.156 423.943,562.306 422.41,564.411 422.027,564.606 421.456,564.027   421.072,562.878 420.877,562.494 420.306,561.728 414.369,578.976 414.174,580.317 413.985,580.7 413.604,580.509 412.836,579.934   412.069,578.592 411.874,578.4 410.724,578.976 410.152,578.592 409.957,578.4 409.386,578.784 408.808,578.784 408.619,578.592   408.424,578.4 407.853,577.06 407.853,576.868 407.853,576.676 407.657,576.292 407.47,576.101 409.003,572.46 409.19,572.269   409.19,570.352 407.47,569.776 406.319,569.585 406.124,569.202 405.741,569.01 404.403,570.543 403.824,570.543 402.87,571.31   402.486,571.31 401.72,571.501 400.57,571.885 400.375,572.651 400.188,573.226 399.608,573.418 396.354,580.892 396.158,581.084   395.392,581.658 394.821,582.617 394.626,583.191 394.438,583.767 394.242,583.958 394.055,584.533 393.859,585.3 394.055,587.217   394.242,587.791 396.737,588.749 398.653,588.558 403.058,589.324 404.02,589.516 404.591,589.708 405.357,589.899 406.508,590.282   407.086,590.857 407.274,590.857 407.853,591.624 408.041,591.624 408.236,591.813 408.808,592.391 409.19,592.774 409.386,592.962   410.341,594.112 410.341,594.308 410.341,595.646 410.152,596.028 409.574,596.607 408.808,597.374 408.424,597.374 407.47,597.374   404.975,597.374 402.291,597.374 399.804,597.757 399.608,597.944 399.42,598.141 399.225,598.328 398.653,599.095 398.458,599.29   398.271,599.478 398.075,599.673 397.888,600.057 397.504,600.628 397.504,601.011 397.309,601.59 397.121,602.161 396.925,602.928   396.737,603.311 395.971,604.656 395.971,604.844 395.588,605.423 395.204,605.806 394.821,606.377 394.821,606.572   394.438,606.761 394.438,606.956 394.242,607.339 394.055,608.104 394.055,608.294 394.242,609.061 394.626,609.827   394.821,610.405 395.009,610.594 395.204,610.789 395.775,611.172 396.158,611.36 396.737,611.743 397.121,612.127 397.504,612.127   397.691,612.322 398.458,612.51 399.804,613.089 399.991,613.276 400.375,613.66 400.57,613.66 400.758,613.854 401.142,614.043   402.291,615.001 402.291,615.192 402.675,616.151 402.486,619.984 402.291,620.176 402.104,620.367 401.72,620.751 401.524,620.751   401.524,620.942 401.142,621.325 400.758,621.518 400.188,621.9 397.888,621.709 397.309,621.518 395.971,621.134 395.204,620.559   393.093,620.367 391.371,619.792 390.793,619.601 390.222,619.218 390.026,619.218 389.26,619.218 388.876,619.409 388.493,619.792   388.493,619.984 388.305,621.134 388.493,622.667 388.493,622.858 388.688,623.434 388.876,624.2 389.071,624.775 389.455,625.351   389.643,625.542 390.026,626.309 390.409,626.691 390.793,627.267 390.988,627.458 391.56,627.842 391.755,628.033 392.138,628.416   392.521,628.991 392.709,629.183 392.904,629.375 393.093,629.566 393.476,629.949 393.671,630.142 393.671,630.142   394.055,630.333 394.242,630.524 394.626,630.716 394.821,630.908 395.204,631.1 396.354,631.675 396.542,632.058 397.121,632.441   397.121,632.441 397.309,632.633 397.309,635.124 396.925,635.508 396.925,635.508 396.542,635.891 396.354,635.891   396.354,636.082 396.158,636.273 395.775,636.849 395.775,637.04 395.588,637.424 395.392,637.999 395.204,638.573 395.009,638.957   394.821,639.148 394.626,639.34 393.093,639.724 392.709,639.724 391.371,639.532 390.793,639.148 390.604,637.232 390.409,635.315   390.026,635.124 390.026,634.741 390.026,634.741 390.026,634.357 389.838,634.166 389.643,633.975 389.455,633.591 389.26,633.208   388.305,632.441 388.109,632.633 387.538,632.633 386.96,632.441 386.771,632.633 386.005,632.633 385.043,632.058 384.66,631.866   384.276,632.249 384.089,632.249 383.51,632.058 383.127,631.675 382.743,631.291 381.789,630.908 381.405,630.716 377.377,631.1   376.228,631.1 376.04,631.1 375.656,632.249 373.356,632.824 373.161,633.016 372.778,633.016 372.59,632.441 372.395,632.249   372.207,632.058 371.245,631.675 371.057,631.482 369.907,630.524 369.336,630.716 369.336,630.908 366.074,633.591   363.008,633.016 361.286,631.291 360.903,630.908 357.837,630.333 357.642,630.524 356.492,630.908 355.342,630.908   354.959,630.333 355.154,629.949 355.537,627.842 358.791,626.5 359.558,625.542 361.091,624.584 362.438,618.067 361.857,615.576   361.67,613.854 360.708,612.127 360.324,610.789 359.754,609.639 359.175,609.443 358.791,609.256 358.791,609.061 358.221,608.872   357.642,608.677 356.688,608.489 356.304,608.104 355.921,607.91 355.726,607.91 355.537,606.761 355.342,606.377 355.342,605.994   355.342,604.656 355.154,604.461 354.771,603.89 354.771,603.694 354.388,603.311 353.426,602.928 352.659,603.311 351.509,603.311   350.938,603.311 350.359,602.739 349.788,602.356 349.209,601.011 349.209,600.823 349.021,600.439 348.826,599.861   348.638,599.673 348.255,599.29 348.442,598.711 348.442,598.711 348.255,597.944 348.255,597.757 348.442,597.374 348.638,597.178   348.826,596.028 348.06,594.878 347.676,594.69 347.104,594.69 346.722,594.878 345.955,594.878 345.571,594.495 345.571,594.308   345.188,593.924 344.038,593.346 343.843,593.157 343.076,593.541 342.505,593.346 342.31,593.157 342.122,592.962 341.927,592.391   341.543,592.195 340.972,592.008 340.776,591.813 340.394,591.813 339.822,591.813 339.439,591.624 338.86,591.813 338.673,591.813   338.477,592.195 338.289,592.195 338.094,592.579 337.14,592.962 336.373,593.157 335.027,593.541 334.261,593.346 334.073,593.157   334.073,593.157 333.689,592.962 332.54,592.579 332.345,592.579 331.961,592.774 331.578,593.157 330.813,593.157 330.623,593.157   330.24,593.346 329.474,593.729 329.278,593.924 328.895,593.924 328.512,593.541 328.323,592.962 328.128,592.962 327.94,592.774   327.557,592.579 326.979,592.391 326.595,592.008 326.023,591.049 326.023,591.049 325.828,590.475 325.641,590.091   325.257,589.516 325.063,589.324 324.49,588.175 324.295,587.791 323.912,587.791 323.912,587.791 322.959,589.133 322.764,589.324   320.276,587.983 318.359,587.6 317.593,588.366 317.401,588.558 317.21,588.749 316.827,588.749 315.485,588.558 314.91,588.366   314.335,588.175 315.294,587.791 315.485,587.024 315.485,586.642 314.91,585.684 314.91,583.575 314.144,583 313.568,582.233   313.186,581.467 312.994,580.892 313.186,580.7 312.994,580.7 312.419,580.892 310.119,581.467 309.928,581.851 308.202,581.467   307.436,580.7 307.053,580.317 307.053,580.125 307.053,579.742 306.861,579.167 307.053,578.018 307.244,577.825 307.628,577.251   306.861,575.526 306.669,574.759 306.669,573.609 306.669,572.843 306.861,572.651 308.011,572.46 308.395,572.269 309.161,571.501   309.353,571.31 310.311,570.735 310.694,570.543 311.077,570.159 311.461,569.202 311.461,568.435 311.077,568.052 310.694,567.669   310.119,567.094 309.928,566.14 309.544,565.756 309.544,564.606 309.353,564.411 309.161,564.027 308.969,563.839 308.969,563.456   308.969,562.689 308.202,562.494 307.819,562.306 307.819,561.923 308.202,561.345 308.395,561.345 308.395,560.577   308.202,560.577 307.819,560.39 307.819,560.194 307.244,559.623 306.286,559.239 305.712,558.856 305.328,558.278 305.328,558.09   305.52,557.896 305.328,555.023 305.52,553.106 305.903,552.911 306.286,552.528 306.478,552.146 306.669,551.957 306.669,551.573   306.669,551.573 306.669,551.378 306.861,550.612 308.395,549.845 308.586,549.845 309.161,549.845 310.119,548.508   310.886,547.741 310.886,547.545 312.228,546.396 312.994,546.396 312.994,546.396 313.186,546.396 313.952,546.591   314.335,546.779 314.91,547.162 315.868,546.975 315.868,546.779 316.061,546.591 316.252,546.396 316.635,546.013 317.019,545.825   317.21,545.825 317.401,545.825 317.977,545.058 318.168,544.673 318.743,543.715 318.743,543.525 319.51,543.333 319.893,541.033   319.701,539.5 319.51,539.117 319.318,538.542 319.701,537.584 320.085,537.392 320.659,536.051 320.659,535.859 320.852,535.476   321.043,534.901 321.043,534.709 320.852,533.751 321.23,532.218 321.426,532.218 322.764,531.451 322.959,531.259 323.912,530.685   324.295,530.301 324.49,529.535 324.49,529.151 324.295,527.81 324.295,526.66 324.295,526.468 324.49,526.277 324.679,526.085   324.874,525.702 325.063,525.318 325.828,524.935 325.828,524.552 325.257,524.168 324.679,523.019 324.679,522.444   324.107,522.061 323.726,521.869 323.53,521.485 323.726,520.144 323.726,519.761 323.147,519.569 322.764,518.611 322.381,518.038   322.192,517.654 322.192,517.463 322.959,516.313 323.147,516.122 322.959,515.738 323.343,515.546 323.726,515.354   323.912,515.163 325.257,515.163 325.445,514.205 326.79,513.822 327.94,513.247 327.94,513.247 328.323,513.247 328.707,513.247   328.707,513.247 330.428,513.822 330.813,514.013 331.007,514.205 331.194,514.588 331.773,514.972 332.345,515.354   332.345,515.546 332.923,516.313 333.111,516.313 333.494,515.93 333.878,515.93 334.073,515.93 334.456,515.738 334.456,515.354   334.645,515.354 335.223,514.972 335.411,514.972 336.561,515.163 337.14,515.163 336.943,514.972 335.794,514.396 335.606,514.205   335.027,513.822 335.027,513.247 334.645,511.713 334.261,511.522 333.689,511.522 333.111,510.563 333.111,509.989   333.111,508.839 332.728,508.839 331.961,508.072 331.39,506.539 331.773,506.348 332.345,505.964 332.345,505.581 332.345,505.389   332.54,505.198 332.923,504.623 333.111,504.239 333.111,504.239 333.689,504.048 334.261,503.281 334.261,503.089 334.073,502.898   333.689,502.706 332.54,502.323 331.773,501.938 331.578,501.556 331.39,501.365 330.813,501.173 330.623,500.79 329.661,500.79   329.278,500.598 328.323,500.023 327.94,499.832 327.745,499.832 327.361,500.215 327.174,500.406 326.79,500.598 326.595,500.79   326.212,500.981 325.828,500.598 325.257,500.981 324.679,501.365 324.107,501.556 323.53,501.556 323.147,501.556 322.764,502.131   322.381,502.515 322.381,503.089 321.81,504.048 321.426,504.048 321.23,504.431 320.659,504.431 320.276,504.048 319.893,504.048   319.318,504.048 318.935,503.665 318.743,503.473 317.21,501.556 316.827,500.981 316.635,500.981 316.635,500.981 316.252,500.981   315.868,500.79 314.91,499.64 314.719,499.065 314.335,498.682 313.377,498.49 313.186,498.49 310.886,497.723 310.694,497.532   310.502,497.34 310.119,496.957 310.119,496.765 310.119,496.382 309.928,494.659 309.161,493.892 308.777,494.467 308.395,494.851   307.436,495.999 306.478,499.065 305.712,499.64 305.52,499.448 302.646,499.065 301.688,499.065 300.536,499.64 300.536,499.448   300.536,499.256 300.345,498.298 300.345,497.915 300.153,496.573 299.771,495.999 299.771,495.615 299.579,494.851   299.579,494.851 299.771,494.084 299.387,492.934 299.195,492.934 299.003,492.551 299.003,491.593 299.195,491.401   299.387,491.401 299.962,490.251 300.345,489.868 300.536,488.334 300.729,487.376 301.304,487.568 302.069,486.993   302.069,486.993 302.262,486.801 302.646,486.418 303.411,485.843 303.986,484.693 304.563,484.501 304.753,484.501   305.136,484.501 305.328,484.501 305.712,484.501 305.712,484.31 305.903,483.735 306.095,483.735 306.286,483.352 306.286,482.969   307.053,482.202 307.244,481.819 307.244,481.244 307.053,480.86 306.669,480.669 306.478,480.477 306.286,480.094 305.328,478.944   305.712,478.562 305.903,478.369 305.903,478.177 305.903,477.986 305.136,476.453 305.136,476.069 304.944,475.303 304.37,474.728   304.37,474.728 303.795,474.728 303.22,474.728 302.646,473.003 303.028,472.236 303.795,471.853 303.986,471.662 304.179,470.703   304.753,469.555 305.136,469.172 305.136,468.979 305.328,468.597 305.712,467.639 305.328,467.063 304.944,466.681 304.37,466.297   304.37,464.572 304.179,464.188 304.179,463.039 304.563,462.464 304.753,462.272 304.944,461.698 305.328,460.548 305.328,460.165   305.52,459.781 305.328,459.59 304.944,458.823 304.944,458.631 305.136,458.438 305.328,455.948 304.753,455.374 304.179,454.032   304.563,452.882 304.944,452.882 306.669,452.69 306.861,452.499 307.244,452.307 308.202,451.732 309.161,450.582 309.353,450.391   309.544,450.199 308.969,448.857 308.969,448.091 308.586,446.368 308.586,445.984 308.395,445.41 307.819,445.026 307.628,445.026   307.053,445.026 306.669,444.643 306.478,444.643 306.095,444.452 305.712,444.068 304.37,443.876 304.179,443.685 303.603,441.577   303.603,441.193 303.603,440.619 303.795,439.852 303.411,439.085 303.028,438.51 302.837,438.127 302.453,437.937 301.878,437.36   301.495,436.977 300.92,436.786 300.345,436.594 299.771,436.402 299.195,436.594 299.003,436.786 298.62,436.786 297.278,436.402   297.087,436.21 294.212,435.636 293.638,435.062 292.104,434.294 291.529,433.719 291.146,433.336 290.955,432.378 290.763,432.187   291.721,429.886 292.296,429.695 292.679,429.312 293.446,428.736 293.638,428.545 294.021,428.545 294.212,428.545   294.788,428.353 294.979,427.778 295.554,427.97 295.938,427.97 296.129,427.97 296.32,427.778 297.087,428.162 297.47,428.353   297.662,428.545 298.046,428.545 298.429,428.545 298.62,428.353 299.195,427.97 299.387,427.778 299.579,427.586 301.304,427.586   300.92,426.437 299.962,426.245 299.771,426.053 299.387,425.287 299.195,425.095 299.387,424.521 299.387,424.329 299.003,423.371   299.195,422.987 299.962,423.179 300.153,422.987 300.536,423.179 300.536,423.179 301.112,423.179 302.069,421.837   302.453,421.837 302.646,421.456 302.837,421.072 303.22,421.072 303.411,420.114 303.603,419.731 304.179,418.198 304.753,418.006   305.136,419.54 305.136,420.498 305.52,421.072 306.286,421.647 306.478,422.412 306.286,422.795 306.286,423.371 306.861,424.329   307.436,424.329 307.628,424.521 308.586,424.329 309.544,424.521 309.928,424.712 310.119,425.67 310.311,426.245 310.502,426.437   310.694,426.82 310.886,427.203 311.077,427.778 311.077,428.545 311.844,429.503 312.228,429.312 312.61,428.545 312.802,426.82   313.377,426.628 313.761,426.437 313.952,426.245 313.761,425.287 313.952,424.137 314.144,423.754 314.335,422.987   314.144,422.412 314.335,421.264 314.91,420.498 315.102,420.306 314.719,419.348 314.527,419.156 314.335,418.964 313.761,418.773   313.568,418.39 313.568,417.814 313.568,416.856 313.761,416.281 313.186,416.09 313.186,415.898 311.269,415.707 311.077,414.94   310.694,414.173 310.311,413.79 309.353,413.215 308.202,413.023 307.436,412.832 307.244,412.832 307.053,412.832 306.478,412.832   306.286,413.023 306.286,413.215 306.095,413.598 305.136,413.215 304.944,413.407 304.563,413.598 304.563,413.598   304.179,413.407 304.944,411.874 304.944,411.682 305.328,411.682 305.712,411.682 305.903,411.107 305.903,410.915   306.478,410.724 307.053,410.724 307.436,410.34 307.819,410.532 309.353,410.532 309.735,410.532 310.311,410.532 310.502,410.532   310.694,410.34 311.077,410.34 311.269,410.532 312.228,410.724 312.802,411.107 312.994,411.107 313.186,410.724 313.568,409.957   313.377,409.19 313.568,408.424 313.568,407.657 313.952,407.657 314.144,407.849 314.335,407.849 315.102,407.657 315.868,407.849   316.443,407.849 316.443,407.083 316.443,407.083 316.443,406.699 316.827,404.974 317.21,403.824 317.401,403.058 317.977,401.716   318.168,401.333 318.359,401.142 318.935,401.524 319.51,402.1 319.701,402.291 319.893,402.291 320.276,402.674 320.468,403.25   320.852,403.633 321.043,403.633 321.614,404.208 321.81,404.591 322.192,404.783 322.381,404.974 322.576,404.974 323.147,405.166   323.912,405.166 324.107,405.166 325.641,405.357 325.828,404.783 326.595,402.866 326.79,402.674 327.361,402.483 327.94,403.058   328.512,403.058 328.895,403.25 329.09,404.016 329.278,404.208 329.661,404.783 331.007,405.166 331.39,405.549 331.773,405.549   332.345,405.933 332.54,406.124 332.923,406.507 333.111,406.699 333.494,406.891 333.494,407.083 334.645,406.891 336.561,407.083   336.756,407.083 337.522,407.083 337.522,407.083 337.71,406.507 337.71,405.741 337.522,405.357 337.14,404.591 336.373,403.633   336.178,403.441 335.606,403.058 335.606,402.866 335.411,402.483 334.645,402.291 334.261,402.1 334.073,401.333 333.307,400.758   332.728,400.758 332.345,400.183 331.773,399.608 331.578,399.227 331.007,399.035 330.813,398.843 330.623,397.119   330.623,397.119 330.813,396.735 331.007,396.352 331.39,395.969 331.773,395.394 331.961,394.627 332.156,394.244 332.345,393.861   332.728,393.669 332.728,392.519 332.923,391.752 332.728,391.369 332.728,391.178 333.689,390.028 333.878,389.645   334.073,389.453 334.456,389.069 334.645,387.728 334.456,387.536 334.456,386.77 334.261,386.387 334.456,386.195 334.84,386.003   334.84,385.62 335.027,384.087 335.223,383.895 336.561,384.087 336.561,384.087 336.756,384.278 337.14,384.47 337.522,384.854   337.906,385.045 338.094,385.237 338.289,385.62 338.86,386.003 339.056,386.195 339.439,386.578 339.439,387.345 339.439,387.536   339.627,387.92 340.01,388.111 340.589,388.111 340.776,387.153 340.776,386.77 340.972,386.77 341.543,386.578 341.927,386.387   342.31,386.195 342.889,386.387 343.076,386.387 343.46,385.428 343.843,384.47 343.843,383.895 344.227,383.32 344.609,383.128   345.955,382.554 346.143,382.362 347.488,381.787 347.676,381.595 348.255,380.062 348.638,380.062 348.826,380.254   349.788,380.829 349.976,381.021 350.359,381.212 350.742,381.595 351.321,381.787 351.704,382.362 352.471,382.745   353.426,382.937 354.575,382.745 354.959,382.745 355.154,382.745 355.537,382.937 355.921,383.128 356.304,383.32 357.07,383.512   357.642,383.512 358.791,383.704 359.754,383.895 360.324,384.087 362.241,384.087 362.241,383.512 361.857,382.362   361.857,380.637 361.286,378.721 361.475,377.763 361.475,376.804 361.67,376.804 362.241,376.996 362.819,376.996 363.774,376.996   364.924,376.996 365.119,376.038 364.924,375.654 364.924,375.463 364.924,373.738 365.119,373.738 365.308,373.548 365.69,373.165   365.886,372.398 366.27,371.632 366.27,371.823 366.652,372.207 367.036,372.207 367.036,372.398 375.077,378.721 376.04,379.871   378.144,381.404 379.677,383.512 385.81,385.812 386.576,386.387 387.538,386.578 400.953,372.398 400.758,372.207 400.188,371.632   397.504,369.715 397.888,368.182 399.037,366.266 399.225,366.074 400.758,361.666 400.57,361.283 402.486,358.216 403.824,355.15   409.19,351.317 409.574,351.127 410.919,350.361 412.069,349.02 412.257,348.828 416.855,345.57 417.623,345.187 417.811,344.995   419.344,342.695 419.923,342.503 420.11,342.312 421.072,341.545 421.261,341.354 421.456,340.97 421.645,340.97 421.839,340.587   422.027,339.82 421.839,338.862 421.645,338.67 421.261,338.096 421.261,336.563 421.839,336.179 422.989,335.796 423.372,335.413   423.561,334.837 423.756,334.454 424.327,334.454 425.86,334.646 427.972,334.454 427.972,334.071 427.972,333.113 427.972,332.921   429.505,332.921 429.889,332.921 430.076,333.113 430.655,333.879 431.038,334.071 431.422,334.837 431.805,335.029   432.571,333.879 432.955,333.304 433.143,332.729 432.955,332.346 432.955,332.346 433.909,331.58 434.104,331.004 434.292,330.43   434.676,330.238 435.059,329.854 435.638,329.663 436.209,329.663 436.404,330.43 436.787,330.621 437.171,330.621 438.509,330.813   438.704,330.813 439.658,331.004 440.237,331.388 441.004,332.346 441.191,332.346 441.771,332.154 442.342,332.538   442.725,333.113 443.108,333.496 443.491,334.263 443.875,334.646 444.642,334.837 445.22,335.029 445.604,334.646 445.986,334.263   445.986,334.263 446.753,334.071 447.52,334.071 449.624,334.646 450.203,335.029 450.586,335.221 450.774,335.604 451.541,336.371   451.924,336.754 452.69,337.137 452.886,336.946 453.84,335.987 454.224,335.796 454.419,335.413 454.419,335.029 454.224,333.879   453.84,333.496 453.84,333.113 453.652,333.113 453.073,332.346 453.073,332.154 452.886,331.771 452.69,331.388 452.69,330.813   452.886,330.621 454.224,329.088 454.605,329.472 455.186,328.896 455.373,328.13 456.523,324.874 456.719,323.916 456.906,323.724   458.057,324.299 459.785,324.491 460.935,324.682 461.123,324.874 461.318,325.257 461.701,325.83 462.085,326.213 462.468,326.405   463.806,326.405 464.768,326.405 465.534,326.405 465.91,326.597 466.294,326.789 467.443,329.472 467.639,329.663 467.639,329.854   467.827,330.43 468.021,330.43 468.405,331.196 468.593,331.388 469.172,331.963 470.126,332.154 470.51,332.346 471.659,332.346   472.426,332.921 473.192,333.304 473.388,333.304 473.959,332.921 473.959,332.154 474.154,331.388 474.538,331.771   475.492,331.963 475.688,332.346 476.259,332.729 476.454,332.921 476.643,333.304 477.409,332.729 477.221,331.004   477.409,330.621 477.987,330.046 478.176,329.663 478.559,329.472 478.559,329.088 478.942,328.896 479.325,328.513   479.521,327.363 479.904,326.98 480.287,326.597 480.671,326.022 480.671,325.639 480.671,325.065 480.858,324.299 481.054,323.532   481.438,323.149 481.438,322.958 484.309,322.382 484.504,322.382 485.458,322.574 485.842,322.766 485.842,323.149   486.225,323.532 486.42,323.916 486.804,324.491 486.804,325.065 486.804,325.065 487.188,325.639 488.337,325.83 488.524,325.83   489.104,325.449 489.291,325.257 489.675,325.065 491.207,324.874 491.974,324.491 492.74,324.682 493.702,324.682 497.535,325.639   500.219,326.213 501.173,326.213 501.368,326.405 505.201,328.322 506.156,325.065 506.352,324.874 506.734,324.299   506.923,323.149 509.223,321.616 512.288,321.041 512.484,321.041 512.672,321.232 512.867,321.616 514.588,322.191   515.543,322.382 516.505,323.724 517.654,324.491 519.376,325.257 520.143,325.639 520.525,325.83 521.104,326.405 521.292,326.98   521.676,326.98 522.442,326.98 523.209,327.555 523.404,327.938 523.976,328.896 523.976,328.896 524.554,329.28 524.938,329.663   525.509,330.238 526.087,331.004 526.275,331.196 527.042,332.921 532.604,332.154 532.791,332.154 532.986,332.154   533.174,332.154 534.136,332.346 534.324,332.538 534.902,332.921 535.286,332.921 535.474,332.921 535.669,332.729   534.707,331.196 534.52,330.43 534.136,329.854 533.94,329.472 533.94,329.088 534.324,328.896 534.52,328.13 534.52,327.555   533.94,326.405 533.753,326.213 533.369,325.639 533.558,325.639 534.324,325.065 534.52,324.491 535.857,323.341 536.624,321.999   536.819,321.616 538.157,320.658 539.307,319.891 540.457,318.741 540.652,317.783 541.606,316.25 541.802,316.058 543.335,316.441   544.868,316.441 544.868,316.058 545.823,314.525 546.973,313.95 547.552,313.567 547.935,312.992 549.655,311.075 551.188,310.884   554.067,309.925 554.639,309.925 556.938,310.117 556.938,310.5 557.321,311.075 557.9,311.65 558.088,312.225 558.283,314.333   558.667,314.717 559.05,315.292 559.621,315.292 559.238,316.441 559.05,316.825 558.854,317.399 559.05,317.975 559.238,318.549   559.05,318.741 559.434,319.508 560.005,320.274 560.388,320.849 561.538,321.808 561.921,321.999 562.305,322.958 562.492,323.149   563.454,323.916 566.138,325.83 567.671,326.98 566.904,329.28 567.475,328.705 566.904,328.322 566.521,329.088 565.559,333.688   564.987,334.454 564.987,334.837 564.987,335.221 565.371,336.179 565.559,336.946 565.754,337.329 566.138,338.287   566.138,338.479 566.521,339.246 566.708,339.437 566.521,339.82 566.521,340.012 566.521,340.204 566.521,340.396 566.521,341.162   566.521,341.737 566.708,342.12 566.325,342.695 565.941,343.078 565.754,343.461 565.754,343.461 565.371,344.42 565.175,344.803   564.987,344.995 565.941,347.103 565.941,347.486 566.325,348.253 566.708,350.169 567.092,351.127 567.092,352.275   567.287,352.659 567.287,352.659 567.287,354.383 566.904,355.15 566.904,355.917 567.092,356.492 567.287,357.258 566.708,359.366   566.708,359.75 566.904,363.583 566.708,364.541 567.287,366.074 567.671,368.182 568.625,371.44 569.587,373.356 569.97,373.738   571.887,375.846 573.036,378.721 573.42,379.104 573.607,379.487 573.991,379.679 574.758,383.128 575.336,384.278 575.336,385.045   575.72,386.003 576.291,386.77 577.824,389.453 578.02,389.645 578.02,390.028 576.869,391.369 576.486,391.752 576.486,393.478   576.869,394.819 577.44,395.969 577.824,396.544 578.02,397.311 578.02,398.269 578.207,398.46 577.824,399.417 577.253,399.227   577.636,401.142 577.824,401.716 577.824,403.25 578.02,403.824 577.824,404.591 577.636,404.783 577.44,404.974 577.253,405.166   576.869,405.357 576.674,406.507 576.869,406.891 576.869,406.891 577.253,407.274 576.674,406.891 576.291,407.083   576.486,407.466 575.907,408.999 575.336,408.424 574.188,408.616 573.803,408.999 573.42,409.19 573.036,409.19 572.841,409.574   572.27,409.957 571.887,410.34 571.503,410.915 571.308,411.299 571.308,411.49 570.925,412.257 570.541,413.598 570.541,413.981   570.541,414.365 570.354,414.748 569.97,415.707 569.587,415.898 569.392,416.281 569.392,416.473 568.241,424.712 568.054,429.503   568.625,430.845 568.82,431.036 569.203,431.611 570.354,433.146 570.541,433.336 571.12,433.911 571.691,434.486 571.308,434.678   571.887,434.869 572.458,435.444 572.653,435.827 572.653,437.552 572.841,439.277 572.841,439.852 573.036,440.81 573.225,441.577   573.42,442.343 573.607,444.26 573.991,444.26 574.374,444.26 574.569,444.452 574.569,444.835 575.141,445.218 574.758,445.793   574.569,445.793 574.188,445.984 573.803,448.474 573.803,449.049 573.607,449.624 573.036,450.199 572.653,450.391   572.074,451.732 572.27,452.499 572.458,452.882 572.653,453.84 572.458,456.907 572.458,457.098 572.653,457.865 572.458,459.206   572.458,459.206 572.074,459.59 572.458,461.123 572.653,462.081 572.653,463.231 572.458,463.422 572.27,463.998 571.887,464.764   571.887,465.722 571.503,466.681 571.12,466.872 570.925,467.063 570.541,468.022 570.158,468.597 569.008,470.512 568.625,470.703   568.054,470.896 567.671,473.194 567.475,473.386 566.708,474.728 566.138,475.494 566.138,475.687 565.754,476.836   565.754,477.411 565.559,477.603 565.175,479.519 564.792,480.669 564.409,480.669 564.221,480.86 563.838,482.394 563.454,483.16   563.643,484.118 564.025,485.077 563.838,486.035 563.454,485.651 563.454,486.418 563.643,487.568 563.259,488.334   563.259,488.718 563.454,488.91 563.643,489.676 563.643,490.251 563.643,491.784 563.071,491.976 562.876,492.359 562.876,492.551   563.071,493.509 563.259,493.892 564.025,495.042 563.838,495.425 563.259,496.957 563.071,498.873 562.876,499.256   562.876,499.832 563.259,500.598 563.454,500.981 563.838,501.365 564.025,501.748 564.221,501.748 564.604,501.938   564.792,502.323 564.987,502.898 564.792,503.856 564.409,505.389 564.792,505.772 565.175,505.964 565.175,506.539   565.175,507.114 565.175,507.497 564.792,508.456 564.604,508.647 562.876,509.797 562.876,511.522 563.259,512.289   563.454,512.672 563.454,512.863 563.643,513.055 563.838,513.247 564.221,513.438 564.409,513.822 564.792,514.013   565.175,514.205 565.371,514.396 565.754,514.396 565.754,514.205 565.941,514.205 566.138,514.205 566.521,514.78 566.708,515.93   566.904,516.122 567.092,516.505 567.671,518.228 567.475,518.994 567.858,519.569 567.858,519.761 567.671,520.527   567.858,521.294 567.671,521.677 567.475,522.444 567.475,522.635 567.287,523.019 567.287,523.785 567.475,524.168   567.671,524.168 567.858,525.127 567.858,525.127 568.241,525.51 568.241,525.51 568.625,525.702 569.008,526.085 570.354,527.235   570.541,527.427 570.925,527.618 571.308,528.001 571.691,528.385 572.074,528.577 572.074,528.768 572.27,528.96 572.653,529.151   573.42,529.535 573.42,529.535 573.607,530.685 573.803,531.068 573.803,531.259 573.42,532.409 572.653,533.368 572.458,533.751   572.074,534.326 571.887,534.326 571.691,534.518 571.503,534.518 571.308,534.901 571.308,536.242 571.503,536.625   571.691,537.392 570.541,538.351 570.541,538.159 568.82,538.542 568.054,539.692 567.858,539.884 566.904,540.075 565.559,540.075   565.175,540.65 564.987,541.225 564.792,541.8 565.371,542.758 565.559,543.333 565.754,543.525 565.559,543.333 565.175,542.95   564.792,542.566 563.838,542.758 563.838,543.142 564.409,542.95 564.604,543.715 565.175,543.525 564.604,543.715 564.604,544.098   564.604,545.058 564.987,545.629 564.987,545.825 565.175,546.208 565.371,546.208 565.559,546.779 566.138,546.591   565.754,546.779 565.754,547.162 566.521,546.779 566.904,547.545 567.092,547.545 567.287,547.929 567.475,547.929 569.97,547.162   568.82,548.891 568.054,549.079 567.858,549.462 567.287,550.995 567.475,550.995 567.671,551.19 568.438,550.424 569.203,550.808   569.392,550.424 569.774,550.612 569.392,551.19 569.587,551.378 569.97,551.573 570.354,551.19 570.354,550.229 571.503,550.808   571.12,551.19 570.925,551.573 571.503,552.146 572.27,552.528 572.458,553.106 572.841,553.49 573.036,553.49 573.42,553.679   573.803,554.062 574.188,554.257 574.569,554.257 575.336,554.64 576.104,554.828 576.674,555.023 578.207,554.828 578.786,554.062   578.207,553.295 578.402,553.106 578.786,552.724 578.974,552.528 579.553,552.341 579.553,552.146 579.936,551.762   579.936,551.762 580.319,551.378 580.891,550.808 581.086,550.808 581.469,550.424 581.657,550.229 582.235,549.845   582.807,549.658 584.724,549.079 585.106,548.508 585.873,547.741 586.256,547.545 586.452,545.246 586.64,545.058 587.021,544.673   587.219,544.29 587.602,544.29 587.985,543.906 588.368,543.525 588.556,543.142 588.751,542.758 589.135,542.375 589.322,541.992   589.706,541.417 591.435,540.267 591.435,539.692 591.622,539.692 593.922,534.709 595.072,534.518 595.839,535.476   596.222,535.476 597.755,538.542 598.521,539.309 598.905,540.267 599.483,545.825 599.867,546.779 600.25,549.462 600.055,550.041   599.672,550.229 599.672,550.808 598.905,551.957 598.717,551.957 598.334,551.957 597.567,553.295 597.755,554.444   597.755,555.023 597.372,555.023 597.372,554.828 596.988,555.023 596.034,555.595 596.222,555.407 596.417,555.023   596.417,555.023 596.222,554.64 595.839,555.023 595.268,555.595 595.268,555.978 595.268,556.173 596.222,556.173 595.839,556.557   595.072,557.323 595.268,558.09 595.455,559.044 595.072,559.812 594.688,560.007 594.688,560.007 594.501,560.39 594.884,561.156   594.688,561.54 594.501,561.728 594.306,562.689 594.501,562.878 594.501,563.073 594.306,563.073 593.922,563.261 593.351,563.456   593.155,563.644 593.155,564.606 592.771,564.606 592.389,565.177 592.201,566.519 591.622,566.71 591.622,567.285 591.622,567.477   590.284,567.094 590.089,567.477 589.901,568.052 589.706,568.435 589.706,569.968 590.089,570.352 590.284,570.735   590.668,570.927 590.855,571.692 591.051,572.651 591.622,573.226 592.201,573.609 592.201,573.802 592.968,574.185   591.817,574.759 591.622,574.759 591.239,574.759 591.051,575.143 592.006,577.06 591.817,577.634 591.622,578.018 590.668,578.209   589.901,578.592 590.284,578.976 590.089,580.125 591.239,580.317 591.622,580.125 592.006,580.125 592.201,580.125   592.968,580.317 592.771,580.892 592.006,581.658 591.435,582.042 591.435,583 591.239,583.575 590.668,584.533 590.473,584.725   590.284,585.108 590.284,586.066 590.089,586.258 590.089,586.833 590.284,587.217 590.473,587.6 590.089,587.6 589.519,588.366   589.322,589.133 588.751,590.282 588.939,591.433 588.939,591.433 589.135,591.813 588.939,592.579 589.135,594.112   588.556,594.308 588.751,594.112 588.556,593.924 588.173,593.729 587.789,593.924 588.173,594.308 588.173,594.495 587.985,594.69   587.789,595.074 587.021,595.457 587.021,595.646 587.021,596.224 587.219,596.607 587.021,597.178 586.835,597.562 586.64,597.562   585.873,597.562 585.873,597.757 585.873,599.673 586.256,600.439 586.452,600.439 586.256,602.161 586.452,605.61 586.452,605.806   586.068,605.994 585.873,606.377 584.724,608.104 584.724,608.677 585.106,610.405 585.106,610.594 584.724,610.977 584.724,611.36   584.34,611.556 584.34,612.127 584.34,612.51 584.34,613.089 583.957,613.276 584.152,614.238 583.957,614.427 583.769,614.81   583.19,615.192 583.002,615.768 583.002,616.918 583.19,617.109 583.573,618.643 583.769,619.025 583.573,619.218 583.573,619.984   583.386,620.176 583.002,620.367 581.657,621.9 581.657,622.284 581.657,622.858 581.854,623.625 581.854,624.009 581.657,624.2   581.273,624.392 581.086,624.2 580.124,624.584 579.936,624.775 579.74,625.733 579.553,626.691 579.357,627.458 577.44,626.883   576.291,626.691 570.736,624.584 564.409,622.476 564.221,622.284 561.921,622.092 561.538,622.284 561.154,622.858   560.967,623.051 560.583,623.434 559.434,624.2 559.05,624.392 558.283,625.158 556.75,626.5 556.172,626.309 555.405,626.309   554.834,626.309 554.067,626.691 551.768,629.375 550.806,628.416 549.852,628.416 549.468,628.225 548.701,627.842   546.785,627.649 546.019,627.267 545.823,626.691 545.635,626.5 545.252,625.542 545.635,624.2 546.401,620.942 546.401,619.409   545.635,618.067 541.802,617.301 541.419,616.918 541.419,616.726 541.419,616.534 541.224,616.343 540.652,616.151   540.073,616.151 539.69,615.768 539.502,615.768 539.307,615.192 539.119,615.001 538.354,615.001 537.969,614.81 537.586,614.427   537.391,614.238 537.202,614.043 537.007,613.66 536.819,613.472 535.857,614.043 535.669,614.238 534.324,614.238 533.753,614.043   532.986,613.472 532.791,613.472 532.22,613.276 532.22,613.854 531.836,614.238 531.836,614.427 531.453,614.81 531.069,615.001   530.874,615.385 530.491,615.192 529.92,615.001 529.537,615.001 528.574,614.81 528.387,614.618 528.004,614.238 527.808,614.043   527.62,613.66 527.042,613.66 526.854,613.276 526.087,613.089 525.509,613.276 525.32,613.66 524.742,613.854 525.125,614.427   524.742,614.81 524.742,615.001 524.554,615.576 524.358,615.768 523.787,615.768 523.021,615.576 522.825,615.385 522.638,616.151   522.442,616.726 522.254,616.726 521.292,616.918 520.909,616.726 520.525,616.726 520.143,616.918 520.143,616.918   519.954,616.918 519.571,617.109 518.226,617.492 517.459,617.685 516.692,618.067 516.31,618.067 515.738,618.451 515.354,618.834   515.159,619.025 514.776,619.409 514.776,619.792 514.393,619.984 514.01,620.942 513.821,621.325 513.055,622.667 513.055,622.858   513.251,623.051 513.634,623.242 513.634,623.625 513.251,623.817 512.867,624.2 513.055,625.158 513.055,625.351 512.867,626.691   512.867,627.458 513.251,627.649 513.438,627.842 513.634,628.033 513.821,628.225 514.205,628.608 514.393,628.991   515.159,629.566 514.776,630.908 514.588,630.908 514.01,631.291 513.634,631.1 513.438,630.908 512.867,630.333 512.484,630.333   511.521,629.758 510.372,629.566 509.605,629.375 509.223,629.566 509.034,629.758 508.839,630.716 508.651,631.291   508.456,631.675 508.268,632.058 508.072,632.441 507.689,632.824 507.501,633.208 507.306,633.208 507.118,633.016   506.734,632.824 506.156,632.633 505.201,632.441 504.623,633.016 504.435,633.399 504.239,633.399 503.668,633.782   502.901,633.975 502.52,634.357 502.52,634.741 502.323,634.933 502.135,635.508 501.557,636.273 501.368,636.466 500.79,636.657   500.602,637.04 497.34,637.999 496.573,637.424 496.386,637.232 496.002,637.232 494.273,636.849 494.273,636.082 494.086,635.891   491.403,633.591 490.253,633.016 487.57,630.716 486.608,630.716 486.225,631.291 485.842,632.441 485.458,632.633 485.271,632.824   485.075,633.016 479.325,633.208 479.138,634.933 478.942,636.273 478.942,636.466 478.371,637.04 476.838,639.148 476.454,640.106   475.492,641.828 473.771,642.595 473.576,642.406 472.238,641.257 470.322,642.023 469.938,642.211 469.556,642.406   468.593,642.978 468.021,643.173 466.677,643.939 466.489,644.706 466.105,646.239 465.91,646.623 465.534,646.811 465.339,647.006   464.956,647.39 464.572,647.961 463.618,647.961 463.234,647.772 462.468,647.577 461.701,647.39 460.552,647.39 460.168,647.577   456.14,646.239 454.99,646.044 453.84,645.473 452.119,645.661 451.924,645.661 449.624,645.473 448.475,644.323 448.091,643.173   447.52,642.211 446.941,642.211 446.37,642.211 444.642,642.023 444.453,642.023 442.92,642.406 442.725,642.211 442.537,642.023   441.387,641.828 439.471,642.978 439.275,643.173 438.32,643.939 436.787,644.323 436.592,644.511 435.442,644.511 434.871,644.706   429.505,644.511 428.543,643.939 428.16,643.557 427.776,643.361 426.243,641.64 425.86,641.062 424.71,639.34 424.71,639.34   424.521,638.957 423.372,637.999 423.177,637.807 422.41,637.424 422.027,637.232 420.877,636.657 420.689,636.082 420.689,635.508   420.689,631.1 419.344,627.075 419.156,626.691 418.961,624.392 "
      transform="translate(106.95522,19.462687)"
      style={{
        fill: fill === undefined ? "#cdcccc" : fill,
        fillOpacity: 1,
        stroke: "white",
        strokeMiterlimit: "1",
      }}
    >
      <title>
        경상북도{"\n"}위생가게수 : {total}
      </title>
    </polyline>
  );
}

export default Gyeongbuk;
