#!/usr/bin/env python3

import numpy as np
import matplotlib.pyplot as plt

chi   = 0.5e-6                       # m^2/s, mid-range soil
Tbar, Ayr, Aday = 13.5, 10.5, 6.0    # deg C, Milan-ish
w_yr  = 2*np.pi/(365*24*3600)
w_day = 2*np.pi/(24*3600)

def T(d, t):                         # d in m, t in s
    dyr, dday = np.sqrt(2*chi/w_yr), np.sqrt(2*chi/w_day)
    yr  = Ayr *np.exp(-d/dyr )*np.cos(w_yr *t - d/dyr )
    day = Aday*np.exp(-d/dday)*np.cos(w_day*t - d/dday)
    return Tbar + yr + day

t = np.linspace(0, 365*24*3600, 4000)
for d in [0, 1, 2, 3]:
    plt.plot(t/(24*3600), T(d, t), label=f"{d} m")
plt.xlabel("day of year"); plt.ylabel("T (deg C)"); plt.legend(); plt.show()

summer, winter = 0.0, 0.5*365*24*3600     # t at annual peak and trough
print(f"3 m, summer peak: {T(3, summer):.1f} C")
print(f"3 m, winter trough: {T(3, winter):.1f} C")


