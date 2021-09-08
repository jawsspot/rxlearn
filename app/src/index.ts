// RxJS v6+
import { interval } from 'rxjs';
import { scan } from 'rxjs/operators';
import { brotliDecompressSync } from 'zlib';
import { render } from './components/html-renderer';
import { markForRemoval, updateDrops, updateMatrix } from './components/matrix';
import  './styles/style.css'
document.body.classList.add()

interval(300)
  .pipe(
    scan<number, any[]>(matrix => (
      markForRemoval(matrix),
      updateDrops(matrix),
      updateMatrix(matrix)
    ), [])
  ).subscribe(render);