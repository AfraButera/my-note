### tar 轉成 tgz 檔 <br />
``gzip my_file.tar my_file.tgz``
<button 
  className="button button--primary" 
  onClick={() => {navigator.clipboard.writeText('gzip my_file.tar my_file.tgz');alert('已複製指令！');}}>
  複製程式碼
</button> <br/>

### tgz 轉成 tar 檔 <br />
``tar zcvf my_file.tar my_file.tgz``
<button 
  className="button button--primary" 
  onClick={() => {navigator.clipboard.writeText('tar zcvf my_file.tar my_file.tgz');alert('已複製指令！');}}>
  複製程式碼
</button>
