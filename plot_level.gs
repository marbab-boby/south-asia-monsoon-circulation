* Temperature, U-V winds and geopotential height over South Asia at one pressure level.
* Usage in GrADS 2.1 or later:  run plot_level.gs <netcdf file> <title> <output.png>
* The title must be one word (use _ instead of spaces).
* Needs xcbar.gs (colour bar script) in the same folder.

function main(args)
  file  = subwrd(args, 1)
  title = subwrd(args, 2)
  out   = subwrd(args, 3)

  'sdfopen 'file
  'set mpdset hires'

* temperature in degrees C as shaded colours
  'set gxout shaded'
  'set lat 0 45'
  'set lon 45 105'
  'd t-273.15'

* wind arrows, every 10th grid point
  'define zon=u'
  'define mer=v'
  'd skip(zon,10,10); skip(mer,10,10)'

* geopotential height as contour lines
  'set gxout contour'
  'd z'

  'run xcbar'
  'draw title 'title
  'gxprint 'out
return
