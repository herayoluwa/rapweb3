(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{98099:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var p=a(97117);function writeUint16BE(e,t,a){return void 0===t&&(t=new Uint8Array(2)),void 0===a&&(a=0),t[a+0]=e>>>8,t[a+1]=e>>>0,t}function writeUint16LE(e,t,a){return void 0===t&&(t=new Uint8Array(2)),void 0===a&&(a=0),t[a+0]=e>>>0,t[a+1]=e>>>8,t}function readInt32BE(e,t){return void 0===t&&(t=0),e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3]}function readUint32BE(e,t){return void 0===t&&(t=0),(e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3])>>>0}function readInt32LE(e,t){return void 0===t&&(t=0),e[t+3]<<24|e[t+2]<<16|e[t+1]<<8|e[t]}function readUint32LE(e,t){return void 0===t&&(t=0),(e[t+3]<<24|e[t+2]<<16|e[t+1]<<8|e[t])>>>0}function writeUint32BE(e,t,a){return void 0===t&&(t=new Uint8Array(4)),void 0===a&&(a=0),t[a+0]=e>>>24,t[a+1]=e>>>16,t[a+2]=e>>>8,t[a+3]=e>>>0,t}function writeUint32LE(e,t,a){return void 0===t&&(t=new Uint8Array(4)),void 0===a&&(a=0),t[a+0]=e>>>0,t[a+1]=e>>>8,t[a+2]=e>>>16,t[a+3]=e>>>24,t}function writeUint64BE(e,t,a){return void 0===t&&(t=new Uint8Array(8)),void 0===a&&(a=0),writeUint32BE(e/4294967296>>>0,t,a),writeUint32BE(e>>>0,t,a+4),t}function writeUint64LE(e,t,a){return void 0===t&&(t=new Uint8Array(8)),void 0===a&&(a=0),writeUint32LE(e>>>0,t,a),writeUint32LE(e/4294967296>>>0,t,a+4),t}t.readInt16BE=function(e,t){return void 0===t&&(t=0),(e[t+0]<<8|e[t+1])<<16>>16},t.readUint16BE=function(e,t){return void 0===t&&(t=0),(e[t+0]<<8|e[t+1])>>>0},t.readInt16LE=function(e,t){return void 0===t&&(t=0),(e[t+1]<<8|e[t])<<16>>16},t.readUint16LE=function(e,t){return void 0===t&&(t=0),(e[t+1]<<8|e[t])>>>0},t.writeUint16BE=writeUint16BE,t.writeInt16BE=writeUint16BE,t.writeUint16LE=writeUint16LE,t.writeInt16LE=writeUint16LE,t.readInt32BE=readInt32BE,t.readUint32BE=readUint32BE,t.readInt32LE=readInt32LE,t.readUint32LE=readUint32LE,t.writeUint32BE=writeUint32BE,t.writeInt32BE=writeUint32BE,t.writeUint32LE=writeUint32LE,t.writeInt32LE=writeUint32LE,t.readInt64BE=function(e,t){void 0===t&&(t=0);var a=readInt32BE(e,t),p=readInt32BE(e,t+4);return 4294967296*a+p-(p>>31)*4294967296},t.readUint64BE=function(e,t){return void 0===t&&(t=0),4294967296*readUint32BE(e,t)+readUint32BE(e,t+4)},t.readInt64LE=function(e,t){void 0===t&&(t=0);var a=readInt32LE(e,t);return 4294967296*readInt32LE(e,t+4)+a-(a>>31)*4294967296},t.readUint64LE=function(e,t){void 0===t&&(t=0);var a=readUint32LE(e,t);return 4294967296*readUint32LE(e,t+4)+a},t.writeUint64BE=writeUint64BE,t.writeInt64BE=writeUint64BE,t.writeUint64LE=writeUint64LE,t.writeInt64LE=writeUint64LE,t.readUintBE=function(e,t,a){if(void 0===a&&(a=0),e%8!=0)throw Error("readUintBE supports only bitLengths divisible by 8");if(e/8>t.length-a)throw Error("readUintBE: array is too short for the given bitLength");for(var p=0,g=1,m=e/8+a-1;m>=a;m--)p+=t[m]*g,g*=256;return p},t.readUintLE=function(e,t,a){if(void 0===a&&(a=0),e%8!=0)throw Error("readUintLE supports only bitLengths divisible by 8");if(e/8>t.length-a)throw Error("readUintLE: array is too short for the given bitLength");for(var p=0,g=1,m=a;m<a+e/8;m++)p+=t[m]*g,g*=256;return p},t.writeUintBE=function(e,t,a,g){if(void 0===a&&(a=new Uint8Array(e/8)),void 0===g&&(g=0),e%8!=0)throw Error("writeUintBE supports only bitLengths divisible by 8");if(!p.isSafeInteger(t))throw Error("writeUintBE value must be an integer");for(var m=1,v=e/8+g-1;v>=g;v--)a[v]=t/m&255,m*=256;return a},t.writeUintLE=function(e,t,a,g){if(void 0===a&&(a=new Uint8Array(e/8)),void 0===g&&(g=0),e%8!=0)throw Error("writeUintLE supports only bitLengths divisible by 8");if(!p.isSafeInteger(t))throw Error("writeUintLE value must be an integer");for(var m=1,v=g;v<g+e/8;v++)a[v]=t/m&255,m*=256;return a},t.readFloat32BE=function(e,t){return void 0===t&&(t=0),new DataView(e.buffer,e.byteOffset,e.byteLength).getFloat32(t)},t.readFloat32LE=function(e,t){return void 0===t&&(t=0),new DataView(e.buffer,e.byteOffset,e.byteLength).getFloat32(t,!0)},t.readFloat64BE=function(e,t){return void 0===t&&(t=0),new DataView(e.buffer,e.byteOffset,e.byteLength).getFloat64(t)},t.readFloat64LE=function(e,t){return void 0===t&&(t=0),new DataView(e.buffer,e.byteOffset,e.byteLength).getFloat64(t,!0)},t.writeFloat32BE=function(e,t,a){return void 0===t&&(t=new Uint8Array(4)),void 0===a&&(a=0),new DataView(t.buffer,t.byteOffset,t.byteLength).setFloat32(a,e),t},t.writeFloat32LE=function(e,t,a){return void 0===t&&(t=new Uint8Array(4)),void 0===a&&(a=0),new DataView(t.buffer,t.byteOffset,t.byteLength).setFloat32(a,e,!0),t},t.writeFloat64BE=function(e,t,a){return void 0===t&&(t=new Uint8Array(8)),void 0===a&&(a=0),new DataView(t.buffer,t.byteOffset,t.byteLength).setFloat64(a,e),t},t.writeFloat64LE=function(e,t,a){return void 0===t&&(t=new Uint8Array(8)),void 0===a&&(a=0),new DataView(t.buffer,t.byteOffset,t.byteLength).setFloat64(a,e,!0),t}},25439:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var p=a(98099),g=a(17309);function streamXOR(e,t,a,m,v){if(void 0===v&&(v=0),32!==e.length)throw Error("ChaCha: key size must be 32 bytes");if(m.length<a.length)throw Error("ChaCha: destination is shorter than source");if(0===v){if(8!==t.length&&12!==t.length)throw Error("ChaCha nonce must be 8 or 12 bytes");x=(_=new Uint8Array(16)).length-t.length,_.set(t,x)}else{if(16!==t.length)throw Error("ChaCha nonce with counter must be 16 bytes");_=t,x=v}for(var _,x,T=new Uint8Array(64),F=0;F<a.length;F+=64){!function(e,t,a){for(var g=a[3]<<24|a[2]<<16|a[1]<<8|a[0],m=a[7]<<24|a[6]<<16|a[5]<<8|a[4],v=a[11]<<24|a[10]<<16|a[9]<<8|a[8],_=a[15]<<24|a[14]<<16|a[13]<<8|a[12],x=a[19]<<24|a[18]<<16|a[17]<<8|a[16],T=a[23]<<24|a[22]<<16|a[21]<<8|a[20],F=a[27]<<24|a[26]<<16|a[25]<<8|a[24],z=a[31]<<24|a[30]<<16|a[29]<<8|a[28],W=t[3]<<24|t[2]<<16|t[1]<<8|t[0],K=t[7]<<24|t[6]<<16|t[5]<<8|t[4],Z=t[11]<<24|t[10]<<16|t[9]<<8|t[8],Q=t[15]<<24|t[14]<<16|t[13]<<8|t[12],X=1634760805,Y=857760878,J=2036477234,ei=1797285236,en=g,eo=m,ea=v,es=_,el=x,ec=T,eu=F,ed=z,eh=W,ef=K,ep=Z,eg=Q,em=0;em<20;em+=2)eh^=X=X+en|0,en^=el=el+(eh=eh>>>16|eh<<16)|0,en=en>>>20|en<<12,ef^=Y=Y+eo|0,eo^=ec=ec+(ef=ef>>>16|ef<<16)|0,eo=eo>>>20|eo<<12,ep^=J=J+ea|0,ea^=eu=eu+(ep=ep>>>16|ep<<16)|0,ea=ea>>>20|ea<<12,eg^=ei=ei+es|0,es^=ed=ed+(eg=eg>>>16|eg<<16)|0,es=es>>>20|es<<12,ep^=J=J+ea|0,ea^=eu=eu+(ep=ep>>>24|ep<<8)|0,ea=ea>>>25|ea<<7,eg^=ei=ei+es|0,es^=ed=ed+(eg=eg>>>24|eg<<8)|0,es=es>>>25|es<<7,ef^=Y=Y+eo|0,eo^=ec=ec+(ef=ef>>>24|ef<<8)|0,eo=eo>>>25|eo<<7,eh^=X=X+en|0,en^=el=el+(eh=eh>>>24|eh<<8)|0,en=en>>>25|en<<7,eg^=X=X+eo|0,eo^=eu=eu+(eg=eg>>>16|eg<<16)|0,eo=eo>>>20|eo<<12,eh^=Y=Y+ea|0,ea^=ed=ed+(eh=eh>>>16|eh<<16)|0,ea=ea>>>20|ea<<12,ef^=J=J+es|0,es^=el=el+(ef=ef>>>16|ef<<16)|0,es=es>>>20|es<<12,ep^=ei=ei+en|0,en^=ec=ec+(ep=ep>>>16|ep<<16)|0,en=en>>>20|en<<12,ef^=J=J+es|0,es^=el=el+(ef=ef>>>24|ef<<8)|0,es=es>>>25|es<<7,ep^=ei=ei+en|0,en^=ec=ec+(ep=ep>>>24|ep<<8)|0,en=en>>>25|en<<7,eh^=Y=Y+ea|0,ea^=ed=ed+(eh=eh>>>24|eh<<8)|0,ea=ea>>>25|ea<<7,eg^=X=X+eo|0,eo^=eu=eu+(eg=eg>>>24|eg<<8)|0,eo=eo>>>25|eo<<7;p.writeUint32LE(X+1634760805|0,e,0),p.writeUint32LE(Y+857760878|0,e,4),p.writeUint32LE(J+2036477234|0,e,8),p.writeUint32LE(ei+1797285236|0,e,12),p.writeUint32LE(en+g|0,e,16),p.writeUint32LE(eo+m|0,e,20),p.writeUint32LE(ea+v|0,e,24),p.writeUint32LE(es+_|0,e,28),p.writeUint32LE(el+x|0,e,32),p.writeUint32LE(ec+T|0,e,36),p.writeUint32LE(eu+F|0,e,40),p.writeUint32LE(ed+z|0,e,44),p.writeUint32LE(eh+W|0,e,48),p.writeUint32LE(ef+K|0,e,52),p.writeUint32LE(ep+Z|0,e,56),p.writeUint32LE(eg+Q|0,e,60)}(T,_,e);for(var z=F;z<F+64&&z<a.length;z++)m[z]=a[z]^T[z-F];!function(e,t,a){for(var p=1;a--;)p=p+(255&e[t])|0,e[t]=255&p,p>>>=8,t++;if(p>0)throw Error("ChaCha: counter overflow")}(_,0,x)}return g.wipe(T),0===v&&g.wipe(_),m}t.streamXOR=streamXOR,t.stream=function(e,t,a,p){return void 0===p&&(p=0),g.wipe(a),streamXOR(e,t,a,a,p)}},15501:function(e,t,a){"use strict";var p=a(25439),g=a(63027),m=a(17309),v=a(98099),_=a(4153);t.Cv=32,t.WH=12,t.pg=16;var x=new Uint8Array(16),T=function(){function ChaCha20Poly1305(e){if(this.nonceLength=t.WH,this.tagLength=t.pg,e.length!==t.Cv)throw Error("ChaCha20Poly1305 needs 32-byte key");this._key=new Uint8Array(e)}return ChaCha20Poly1305.prototype.seal=function(e,t,a,g){if(e.length>16)throw Error("ChaCha20Poly1305: incorrect nonce length");var v,_=new Uint8Array(16);_.set(e,_.length-e.length);var x=new Uint8Array(32);p.stream(this._key,_,x,4);var T=t.length+this.tagLength;if(g){if(g.length!==T)throw Error("ChaCha20Poly1305: incorrect destination length");v=g}else v=new Uint8Array(T);return p.streamXOR(this._key,_,t,v,4),this._authenticate(v.subarray(v.length-this.tagLength,v.length),x,v.subarray(0,v.length-this.tagLength),a),m.wipe(_),v},ChaCha20Poly1305.prototype.open=function(e,t,a,g){if(e.length>16)throw Error("ChaCha20Poly1305: incorrect nonce length");if(t.length<this.tagLength)return null;var v,x=new Uint8Array(16);x.set(e,x.length-e.length);var T=new Uint8Array(32);p.stream(this._key,x,T,4);var F=new Uint8Array(this.tagLength);if(this._authenticate(F,T,t.subarray(0,t.length-this.tagLength),a),!_.equal(F,t.subarray(t.length-this.tagLength,t.length)))return null;var z=t.length-this.tagLength;if(g){if(g.length!==z)throw Error("ChaCha20Poly1305: incorrect destination length");v=g}else v=new Uint8Array(z);return p.streamXOR(this._key,x,t.subarray(0,t.length-this.tagLength),v,4),m.wipe(x),v},ChaCha20Poly1305.prototype.clean=function(){return m.wipe(this._key),this},ChaCha20Poly1305.prototype._authenticate=function(e,t,a,p){var _=new g.Poly1305(t);p&&(_.update(p),p.length%16>0&&_.update(x.subarray(p.length%16))),_.update(a),a.length%16>0&&_.update(x.subarray(a.length%16));var T=new Uint8Array(8);p&&v.writeUint64LE(p.length,T),_.update(T),v.writeUint64LE(a.length,T),_.update(T);for(var F=_.digest(),z=0;z<F.length;z++)e[z]=F[z];_.clean(),m.wipe(F),m.wipe(T)},ChaCha20Poly1305}();t.OK=T},4153:function(e,t){"use strict";function compare(e,t){if(e.length!==t.length)return 0;for(var a=0,p=0;p<e.length;p++)a|=e[p]^t[p];return 1&a-1>>>8}Object.defineProperty(t,"__esModule",{value:!0}),t.select=function(e,t,a){return~(e-1)&t|e-1&a},t.lessOrEqual=function(e,t){return(0|e)-(0|t)-1>>>31&1},t.compare=compare,t.equal=function(e,t){return 0!==e.length&&0!==t.length&&0!==compare(e,t)}},79984:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isSerializableHash=function(e){return void 0!==e.saveState&&void 0!==e.restoreState&&void 0!==e.cleanSavedState}},512:function(e,t,a){"use strict";var p=a(25629),g=a(17309),m=function(){function HKDF(e,t,a,g){void 0===a&&(a=new Uint8Array(0)),this._counter=new Uint8Array(1),this._hash=e,this._info=g;var m=p.hmac(this._hash,a,t);this._hmac=new p.HMAC(e,m),this._buffer=new Uint8Array(this._hmac.digestLength),this._bufpos=this._buffer.length}return HKDF.prototype._fillBuffer=function(){this._counter[0]++;var e=this._counter[0];if(0===e)throw Error("hkdf: cannot expand more");this._hmac.reset(),e>1&&this._hmac.update(this._buffer),this._info&&this._hmac.update(this._info),this._hmac.update(this._counter),this._hmac.finish(this._buffer),this._bufpos=0},HKDF.prototype.expand=function(e){for(var t=new Uint8Array(e),a=0;a<t.length;a++)this._bufpos===this._buffer.length&&this._fillBuffer(),t[a]=this._buffer[this._bufpos++];return t},HKDF.prototype.clean=function(){this._hmac.clean(),g.wipe(this._buffer),g.wipe(this._counter),this._bufpos=0},HKDF}();t.t=m},25629:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var p=a(79984),g=a(4153),m=a(17309),v=function(){function HMAC(e,t){this._finished=!1,this._inner=new e,this._outer=new e,this.blockSize=this._outer.blockSize,this.digestLength=this._outer.digestLength;var a=new Uint8Array(this.blockSize);t.length>this.blockSize?this._inner.update(t).finish(a).clean():a.set(t);for(var g=0;g<a.length;g++)a[g]^=54;this._inner.update(a);for(var g=0;g<a.length;g++)a[g]^=106;this._outer.update(a),p.isSerializableHash(this._inner)&&p.isSerializableHash(this._outer)&&(this._innerKeyedState=this._inner.saveState(),this._outerKeyedState=this._outer.saveState()),m.wipe(a)}return HMAC.prototype.reset=function(){if(!p.isSerializableHash(this._inner)||!p.isSerializableHash(this._outer))throw Error("hmac: can't reset() because hash doesn't implement restoreState()");return this._inner.restoreState(this._innerKeyedState),this._outer.restoreState(this._outerKeyedState),this._finished=!1,this},HMAC.prototype.clean=function(){p.isSerializableHash(this._inner)&&this._inner.cleanSavedState(this._innerKeyedState),p.isSerializableHash(this._outer)&&this._outer.cleanSavedState(this._outerKeyedState),this._inner.clean(),this._outer.clean()},HMAC.prototype.update=function(e){return this._inner.update(e),this},HMAC.prototype.finish=function(e){return this._finished?this._outer.finish(e):(this._inner.finish(e),this._outer.update(e.subarray(0,this.digestLength)).finish(e),this._finished=!0),this},HMAC.prototype.digest=function(){var e=new Uint8Array(this.digestLength);return this.finish(e),e},HMAC.prototype.saveState=function(){if(!p.isSerializableHash(this._inner))throw Error("hmac: can't saveState() because hash doesn't implement it");return this._inner.saveState()},HMAC.prototype.restoreState=function(e){if(!p.isSerializableHash(this._inner)||!p.isSerializableHash(this._outer))throw Error("hmac: can't restoreState() because hash doesn't implement it");return this._inner.restoreState(e),this._outer.restoreState(this._outerKeyedState),this._finished=!1,this},HMAC.prototype.cleanSavedState=function(e){if(!p.isSerializableHash(this._inner))throw Error("hmac: can't cleanSavedState() because hash doesn't implement it");this._inner.cleanSavedState(e)},HMAC}();t.HMAC=v,t.hmac=function(e,t,a){var p=new v(e,t);p.update(a);var g=p.digest();return p.clean(),g},t.equal=g.equal},97117:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.mul=Math.imul||function(e,t){var a=65535&e,p=65535&t;return a*p+((e>>>16&65535)*p+a*(t>>>16&65535)<<16>>>0)|0},t.add=function(e,t){return e+t|0},t.sub=function(e,t){return e-t|0},t.rotl=function(e,t){return e<<t|e>>>32-t},t.rotr=function(e,t){return e<<32-t|e>>>t},t.isInteger=Number.isInteger||function(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e},t.MAX_SAFE_INTEGER=9007199254740991,t.isSafeInteger=function(e){return t.isInteger(e)&&e>=-t.MAX_SAFE_INTEGER&&e<=t.MAX_SAFE_INTEGER}},63027:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var p=a(4153),g=a(17309);t.DIGEST_LENGTH=16;var m=function(){function Poly1305(e){this.digestLength=t.DIGEST_LENGTH,this._buffer=new Uint8Array(16),this._r=new Uint16Array(10),this._h=new Uint16Array(10),this._pad=new Uint16Array(8),this._leftover=0,this._fin=0,this._finished=!1;var a=e[0]|e[1]<<8;this._r[0]=8191&a;var p=e[2]|e[3]<<8;this._r[1]=(a>>>13|p<<3)&8191;var g=e[4]|e[5]<<8;this._r[2]=(p>>>10|g<<6)&7939;var m=e[6]|e[7]<<8;this._r[3]=(g>>>7|m<<9)&8191;var v=e[8]|e[9]<<8;this._r[4]=(m>>>4|v<<12)&255,this._r[5]=v>>>1&8190;var _=e[10]|e[11]<<8;this._r[6]=(v>>>14|_<<2)&8191;var x=e[12]|e[13]<<8;this._r[7]=(_>>>11|x<<5)&8065;var T=e[14]|e[15]<<8;this._r[8]=(x>>>8|T<<8)&8191,this._r[9]=T>>>5&127,this._pad[0]=e[16]|e[17]<<8,this._pad[1]=e[18]|e[19]<<8,this._pad[2]=e[20]|e[21]<<8,this._pad[3]=e[22]|e[23]<<8,this._pad[4]=e[24]|e[25]<<8,this._pad[5]=e[26]|e[27]<<8,this._pad[6]=e[28]|e[29]<<8,this._pad[7]=e[30]|e[31]<<8}return Poly1305.prototype._blocks=function(e,t,a){for(var p=this._fin?0:2048,g=this._h[0],m=this._h[1],v=this._h[2],_=this._h[3],x=this._h[4],T=this._h[5],F=this._h[6],z=this._h[7],W=this._h[8],K=this._h[9],Z=this._r[0],Q=this._r[1],X=this._r[2],Y=this._r[3],J=this._r[4],ei=this._r[5],en=this._r[6],eo=this._r[7],ea=this._r[8],es=this._r[9];a>=16;){var el,ec=e[t+0]|e[t+1]<<8;g+=8191&ec;var eu=e[t+2]|e[t+3]<<8;m+=(ec>>>13|eu<<3)&8191;var ed=e[t+4]|e[t+5]<<8;v+=(eu>>>10|ed<<6)&8191;var eh=e[t+6]|e[t+7]<<8;_+=(ed>>>7|eh<<9)&8191;var ef=e[t+8]|e[t+9]<<8;x+=(eh>>>4|ef<<12)&8191,T+=ef>>>1&8191;var ep=e[t+10]|e[t+11]<<8;F+=(ef>>>14|ep<<2)&8191;var eg=e[t+12]|e[t+13]<<8;z+=(ep>>>11|eg<<5)&8191;var em=e[t+14]|e[t+15]<<8;W+=(eg>>>8|em<<8)&8191,K+=em>>>5|p;var ew=0;ew=(el=0+g*Z+m*(5*es)+v*(5*ea)+_*(5*eo)+x*(5*en))>>>13,el&=8191,el+=T*(5*ei)+F*(5*J)+z*(5*Y)+W*(5*X)+K*(5*Q),ew+=el>>>13,el&=8191;var eb=ew;eb+=g*Q+m*Z+v*(5*es)+_*(5*ea)+x*(5*eo),ew=eb>>>13,eb&=8191,eb+=T*(5*en)+F*(5*ei)+z*(5*J)+W*(5*Y)+K*(5*X),ew+=eb>>>13,eb&=8191;var ey=ew;ey+=g*X+m*Q+v*Z+_*(5*es)+x*(5*ea),ew=ey>>>13,ey&=8191,ey+=T*(5*eo)+F*(5*en)+z*(5*ei)+W*(5*J)+K*(5*Y),ew+=ey>>>13,ey&=8191;var ev=ew;ev+=g*Y+m*X+v*Q+_*Z+x*(5*es),ew=ev>>>13,ev&=8191,ev+=T*(5*ea)+F*(5*eo)+z*(5*en)+W*(5*ei)+K*(5*J),ew+=ev>>>13,ev&=8191;var e_=ew;e_+=g*J+m*Y+v*X+_*Q+x*Z,ew=e_>>>13,e_&=8191,e_+=T*(5*es)+F*(5*ea)+z*(5*eo)+W*(5*en)+K*(5*ei),ew+=e_>>>13,e_&=8191;var ex=ew;ex+=g*ei+m*J+v*Y+_*X+x*Q,ew=ex>>>13,ex&=8191,ex+=T*Z+F*(5*es)+z*(5*ea)+W*(5*eo)+K*(5*en),ew+=ex>>>13,ex&=8191;var eC=ew;eC+=g*en+m*ei+v*J+_*Y+x*X,ew=eC>>>13,eC&=8191,eC+=T*Q+F*Z+z*(5*es)+W*(5*ea)+K*(5*eo),ew+=eC>>>13,eC&=8191;var eE=ew;eE+=g*eo+m*en+v*ei+_*J+x*Y,ew=eE>>>13,eE&=8191,eE+=T*X+F*Q+z*Z+W*(5*es)+K*(5*ea),ew+=eE>>>13,eE&=8191;var ek=ew;ek+=g*ea+m*eo+v*en+_*ei+x*J,ew=ek>>>13,ek&=8191,ek+=T*Y+F*X+z*Q+W*Z+K*(5*es),ew+=ek>>>13,ek&=8191;var eS=ew;eS+=g*es+m*ea+v*eo+_*en+x*ei,ew=eS>>>13,eS&=8191,eS+=T*J+F*Y+z*X+W*Q+K*Z,ew+=eS>>>13,eS&=8191,el=8191&(ew=(ew=(ew<<2)+ew|0)+el|0),ew>>>=13,eb+=ew,g=el,m=eb,v=ey,_=ev,x=e_,T=ex,F=eC,z=eE,W=ek,K=eS,t+=16,a-=16}this._h[0]=g,this._h[1]=m,this._h[2]=v,this._h[3]=_,this._h[4]=x,this._h[5]=T,this._h[6]=F,this._h[7]=z,this._h[8]=W,this._h[9]=K},Poly1305.prototype.finish=function(e,t){void 0===t&&(t=0);var a,p,g,m,v=new Uint16Array(10);if(this._leftover){for(m=this._leftover,this._buffer[m++]=1;m<16;m++)this._buffer[m]=0;this._fin=1,this._blocks(this._buffer,0,16)}for(a=this._h[1]>>>13,this._h[1]&=8191,m=2;m<10;m++)this._h[m]+=a,a=this._h[m]>>>13,this._h[m]&=8191;for(this._h[0]+=5*a,a=this._h[0]>>>13,this._h[0]&=8191,this._h[1]+=a,a=this._h[1]>>>13,this._h[1]&=8191,this._h[2]+=a,v[0]=this._h[0]+5,a=v[0]>>>13,v[0]&=8191,m=1;m<10;m++)v[m]=this._h[m]+a,a=v[m]>>>13,v[m]&=8191;for(v[9]-=8192,p=(1^a)-1,m=0;m<10;m++)v[m]&=p;for(m=0,p=~p;m<10;m++)this._h[m]=this._h[m]&p|v[m];for(m=1,this._h[0]=(this._h[0]|this._h[1]<<13)&65535,this._h[1]=(this._h[1]>>>3|this._h[2]<<10)&65535,this._h[2]=(this._h[2]>>>6|this._h[3]<<7)&65535,this._h[3]=(this._h[3]>>>9|this._h[4]<<4)&65535,this._h[4]=(this._h[4]>>>12|this._h[5]<<1|this._h[6]<<14)&65535,this._h[5]=(this._h[6]>>>2|this._h[7]<<11)&65535,this._h[6]=(this._h[7]>>>5|this._h[8]<<8)&65535,this._h[7]=(this._h[8]>>>8|this._h[9]<<5)&65535,g=this._h[0]+this._pad[0],this._h[0]=65535&g;m<8;m++)g=(this._h[m]+this._pad[m]|0)+(g>>>16)|0,this._h[m]=65535&g;return e[t+0]=this._h[0]>>>0,e[t+1]=this._h[0]>>>8,e[t+2]=this._h[1]>>>0,e[t+3]=this._h[1]>>>8,e[t+4]=this._h[2]>>>0,e[t+5]=this._h[2]>>>8,e[t+6]=this._h[3]>>>0,e[t+7]=this._h[3]>>>8,e[t+8]=this._h[4]>>>0,e[t+9]=this._h[4]>>>8,e[t+10]=this._h[5]>>>0,e[t+11]=this._h[5]>>>8,e[t+12]=this._h[6]>>>0,e[t+13]=this._h[6]>>>8,e[t+14]=this._h[7]>>>0,e[t+15]=this._h[7]>>>8,this._finished=!0,this},Poly1305.prototype.update=function(e){var t,a=0,p=e.length;if(this._leftover){(t=16-this._leftover)>p&&(t=p);for(var g=0;g<t;g++)this._buffer[this._leftover+g]=e[a+g];if(p-=t,a+=t,this._leftover+=t,this._leftover<16)return this;this._blocks(this._buffer,0,16),this._leftover=0}if(p>=16&&(t=p-p%16,this._blocks(e,a,t),a+=t,p-=t),p){for(var g=0;g<p;g++)this._buffer[this._leftover+g]=e[a+g];this._leftover+=p}return this},Poly1305.prototype.digest=function(){if(this._finished)throw Error("Poly1305 was finished");var e=new Uint8Array(16);return this.finish(e),e},Poly1305.prototype.clean=function(){return g.wipe(this._buffer),g.wipe(this._r),g.wipe(this._h),g.wipe(this._pad),this._leftover=0,this._fin=0,this._finished=!0,this},Poly1305}();t.Poly1305=m,t.oneTimeAuth=function(e,t){var a=new m(e);a.update(t);var p=a.digest();return a.clean(),p},t.equal=function(e,a){return e.length===t.DIGEST_LENGTH&&a.length===t.DIGEST_LENGTH&&p.equal(e,a)}},31416:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.randomStringForEntropy=t.randomString=t.randomUint32=t.randomBytes=t.defaultRandomSource=void 0;let p=a(46008),g=a(98099),m=a(17309);function randomBytes(e,a=t.defaultRandomSource){return a.randomBytes(e)}t.defaultRandomSource=new p.SystemRandomSource,t.randomBytes=randomBytes,t.randomUint32=function(e=t.defaultRandomSource){let a=randomBytes(4,e),p=(0,g.readUint32LE)(a);return(0,m.wipe)(a),p};let v="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";function randomString(e,a=v,p=t.defaultRandomSource){if(a.length<2)throw Error("randomString charset is too short");if(a.length>256)throw Error("randomString charset is too long");let g="",_=a.length,x=256-256%_;for(;e>0;){let t=randomBytes(Math.ceil(256*e/x),p);for(let p=0;p<t.length&&e>0;p++){let m=t[p];m<x&&(g+=a.charAt(m%_),e--)}(0,m.wipe)(t)}return g}t.randomString=randomString,t.randomStringForEntropy=function(e,a=v,p=t.defaultRandomSource){let g=Math.ceil(e/(Math.log(a.length)/Math.LN2));return randomString(g,a,p)}},75455:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.BrowserRandomSource=void 0,t.BrowserRandomSource=class{constructor(){this.isAvailable=!1,this.isInstantiated=!1;let e="undefined"!=typeof self?self.crypto||self.msCrypto:null;e&&void 0!==e.getRandomValues&&(this._crypto=e,this.isAvailable=!0,this.isInstantiated=!0)}randomBytes(e){if(!this.isAvailable||!this._crypto)throw Error("Browser random byte generator is not available.");let t=new Uint8Array(e);for(let e=0;e<t.length;e+=65536)this._crypto.getRandomValues(t.subarray(e,e+Math.min(t.length-e,65536)));return t}}},58871:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.NodeRandomSource=void 0;let p=a(17309);t.NodeRandomSource=class{constructor(){this.isAvailable=!1,this.isInstantiated=!1;{let e=a(35883);e&&e.randomBytes&&(this._crypto=e,this.isAvailable=!0,this.isInstantiated=!0)}}randomBytes(e){if(!this.isAvailable||!this._crypto)throw Error("Node.js random byte generator is not available.");let t=this._crypto.randomBytes(e);if(t.length!==e)throw Error("NodeRandomSource: got fewer bytes than requested");let a=new Uint8Array(e);for(let e=0;e<a.length;e++)a[e]=t[e];return(0,p.wipe)(t),a}}},46008:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SystemRandomSource=void 0;let p=a(75455),g=a(58871);t.SystemRandomSource=class{constructor(){if(this.isAvailable=!1,this.name="",this._source=new p.BrowserRandomSource,this._source.isAvailable){this.isAvailable=!0,this.name="Browser";return}if(this._source=new g.NodeRandomSource,this._source.isAvailable){this.isAvailable=!0,this.name="Node";return}}randomBytes(e){if(!this.isAvailable)throw Error("System random byte generator is not available.");return this._source.randomBytes(e)}}},73294:function(e,t,a){"use strict";var p=a(98099),g=a(17309);t.k=32,t.cn=64;var m=function(){function SHA256(){this.digestLength=t.k,this.blockSize=t.cn,this._state=new Int32Array(8),this._temp=new Int32Array(64),this._buffer=new Uint8Array(128),this._bufferLength=0,this._bytesHashed=0,this._finished=!1,this.reset()}return SHA256.prototype._initState=function(){this._state[0]=1779033703,this._state[1]=3144134277,this._state[2]=1013904242,this._state[3]=2773480762,this._state[4]=1359893119,this._state[5]=2600822924,this._state[6]=528734635,this._state[7]=1541459225},SHA256.prototype.reset=function(){return this._initState(),this._bufferLength=0,this._bytesHashed=0,this._finished=!1,this},SHA256.prototype.clean=function(){g.wipe(this._buffer),g.wipe(this._temp),this.reset()},SHA256.prototype.update=function(e,t){if(void 0===t&&(t=e.length),this._finished)throw Error("SHA256: can't update because hash was finished.");var a=0;if(this._bytesHashed+=t,this._bufferLength>0){for(;this._bufferLength<this.blockSize&&t>0;)this._buffer[this._bufferLength++]=e[a++],t--;this._bufferLength===this.blockSize&&(hashBlocks(this._temp,this._state,this._buffer,0,this.blockSize),this._bufferLength=0)}for(t>=this.blockSize&&(a=hashBlocks(this._temp,this._state,e,a,t),t%=this.blockSize);t>0;)this._buffer[this._bufferLength++]=e[a++],t--;return this},SHA256.prototype.finish=function(e){if(!this._finished){var t=this._bytesHashed,a=this._bufferLength,g=t%64<56?64:128;this._buffer[a]=128;for(var m=a+1;m<g-8;m++)this._buffer[m]=0;p.writeUint32BE(t/536870912|0,this._buffer,g-8),p.writeUint32BE(t<<3,this._buffer,g-4),hashBlocks(this._temp,this._state,this._buffer,0,g),this._finished=!0}for(var m=0;m<this.digestLength/4;m++)p.writeUint32BE(this._state[m],e,4*m);return this},SHA256.prototype.digest=function(){var e=new Uint8Array(this.digestLength);return this.finish(e),e},SHA256.prototype.saveState=function(){if(this._finished)throw Error("SHA256: cannot save finished state");return{state:new Int32Array(this._state),buffer:this._bufferLength>0?new Uint8Array(this._buffer):void 0,bufferLength:this._bufferLength,bytesHashed:this._bytesHashed}},SHA256.prototype.restoreState=function(e){return this._state.set(e.state),this._bufferLength=e.bufferLength,e.buffer&&this._buffer.set(e.buffer),this._bytesHashed=e.bytesHashed,this._finished=!1,this},SHA256.prototype.cleanSavedState=function(e){g.wipe(e.state),e.buffer&&g.wipe(e.buffer),e.bufferLength=0,e.bytesHashed=0},SHA256}();t.mE=m;var v=new Int32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]);function hashBlocks(e,t,a,g,m){for(;m>=64;){for(var _=t[0],x=t[1],T=t[2],F=t[3],z=t[4],W=t[5],K=t[6],Z=t[7],Q=0;Q<16;Q++){var X=g+4*Q;e[Q]=p.readUint32BE(a,X)}for(var Q=16;Q<64;Q++){var Y=e[Q-2],J=(Y>>>17|Y<<15)^(Y>>>19|Y<<13)^Y>>>10,ei=((Y=e[Q-15])>>>7|Y<<25)^(Y>>>18|Y<<14)^Y>>>3;e[Q]=(J+e[Q-7]|0)+(ei+e[Q-16]|0)}for(var Q=0;Q<64;Q++){var J=(((z>>>6|z<<26)^(z>>>11|z<<21)^(z>>>25|z<<7))+(z&W^~z&K)|0)+(Z+(v[Q]+e[Q]|0)|0)|0,ei=((_>>>2|_<<30)^(_>>>13|_<<19)^(_>>>22|_<<10))+(_&x^_&T^x&T)|0;Z=K,K=W,W=z,z=F+J|0,F=T,T=x,x=_,_=J+ei|0}t[0]+=_,t[1]+=x,t[2]+=T,t[3]+=F,t[4]+=z,t[5]+=W,t[6]+=K,t[7]+=Z,g+=64,m-=64}return g}t.vp=function(e){var t=new m;t.update(e);var a=t.digest();return t.clean(),a}},17309:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.wipe=function(e){for(var t=0;t<e.length;t++)e[t]=0;return e}},57664:function(e,t,a){"use strict";t.gi=t.Au=t.KS=t.kz=void 0;let p=a(31416),g=a(17309);function gf(e){let t=new Float64Array(16);if(e)for(let a=0;a<e.length;a++)t[a]=e[a];return t}t.kz=32,t.KS=32;let m=new Uint8Array(32);m[0]=9;let v=gf([56129,1]);function car25519(e){let t=1;for(let a=0;a<16;a++){let p=e[a]+t+65535;t=Math.floor(p/65536),e[a]=p-65536*t}e[0]+=t-1+37*(t-1)}function sel25519(e,t,a){let p=~(a-1);for(let a=0;a<16;a++){let g=p&(e[a]^t[a]);e[a]^=g,t[a]^=g}}function add(e,t,a){for(let p=0;p<16;p++)e[p]=t[p]+a[p]}function sub(e,t,a){for(let p=0;p<16;p++)e[p]=t[p]-a[p]}function mul(e,t,a){let p,g,m=0,v=0,_=0,x=0,T=0,F=0,z=0,W=0,K=0,Z=0,Q=0,X=0,Y=0,J=0,ei=0,en=0,eo=0,ea=0,es=0,el=0,ec=0,eu=0,ed=0,eh=0,ef=0,ep=0,eg=0,em=0,ew=0,eb=0,ey=0,ev=a[0],e_=a[1],ex=a[2],eC=a[3],eE=a[4],ek=a[5],eS=a[6],eA=a[7],eP=a[8],eD=a[9],e$=a[10],eO=a[11],eI=a[12],eT=a[13],eR=a[14],eB=a[15];m+=(p=t[0])*ev,v+=p*e_,_+=p*ex,x+=p*eC,T+=p*eE,F+=p*ek,z+=p*eS,W+=p*eA,K+=p*eP,Z+=p*eD,Q+=p*e$,X+=p*eO,Y+=p*eI,J+=p*eT,ei+=p*eR,en+=p*eB,v+=(p=t[1])*ev,_+=p*e_,x+=p*ex,T+=p*eC,F+=p*eE,z+=p*ek,W+=p*eS,K+=p*eA,Z+=p*eP,Q+=p*eD,X+=p*e$,Y+=p*eO,J+=p*eI,ei+=p*eT,en+=p*eR,eo+=p*eB,_+=(p=t[2])*ev,x+=p*e_,T+=p*ex,F+=p*eC,z+=p*eE,W+=p*ek,K+=p*eS,Z+=p*eA,Q+=p*eP,X+=p*eD,Y+=p*e$,J+=p*eO,ei+=p*eI,en+=p*eT,eo+=p*eR,ea+=p*eB,x+=(p=t[3])*ev,T+=p*e_,F+=p*ex,z+=p*eC,W+=p*eE,K+=p*ek,Z+=p*eS,Q+=p*eA,X+=p*eP,Y+=p*eD,J+=p*e$,ei+=p*eO,en+=p*eI,eo+=p*eT,ea+=p*eR,es+=p*eB,T+=(p=t[4])*ev,F+=p*e_,z+=p*ex,W+=p*eC,K+=p*eE,Z+=p*ek,Q+=p*eS,X+=p*eA,Y+=p*eP,J+=p*eD,ei+=p*e$,en+=p*eO,eo+=p*eI,ea+=p*eT,es+=p*eR,el+=p*eB,F+=(p=t[5])*ev,z+=p*e_,W+=p*ex,K+=p*eC,Z+=p*eE,Q+=p*ek,X+=p*eS,Y+=p*eA,J+=p*eP,ei+=p*eD,en+=p*e$,eo+=p*eO,ea+=p*eI,es+=p*eT,el+=p*eR,ec+=p*eB,z+=(p=t[6])*ev,W+=p*e_,K+=p*ex,Z+=p*eC,Q+=p*eE,X+=p*ek,Y+=p*eS,J+=p*eA,ei+=p*eP,en+=p*eD,eo+=p*e$,ea+=p*eO,es+=p*eI,el+=p*eT,ec+=p*eR,eu+=p*eB,W+=(p=t[7])*ev,K+=p*e_,Z+=p*ex,Q+=p*eC,X+=p*eE,Y+=p*ek,J+=p*eS,ei+=p*eA,en+=p*eP,eo+=p*eD,ea+=p*e$,es+=p*eO,el+=p*eI,ec+=p*eT,eu+=p*eR,ed+=p*eB,K+=(p=t[8])*ev,Z+=p*e_,Q+=p*ex,X+=p*eC,Y+=p*eE,J+=p*ek,ei+=p*eS,en+=p*eA,eo+=p*eP,ea+=p*eD,es+=p*e$,el+=p*eO,ec+=p*eI,eu+=p*eT,ed+=p*eR,eh+=p*eB,Z+=(p=t[9])*ev,Q+=p*e_,X+=p*ex,Y+=p*eC,J+=p*eE,ei+=p*ek,en+=p*eS,eo+=p*eA,ea+=p*eP,es+=p*eD,el+=p*e$,ec+=p*eO,eu+=p*eI,ed+=p*eT,eh+=p*eR,ef+=p*eB,Q+=(p=t[10])*ev,X+=p*e_,Y+=p*ex,J+=p*eC,ei+=p*eE,en+=p*ek,eo+=p*eS,ea+=p*eA,es+=p*eP,el+=p*eD,ec+=p*e$,eu+=p*eO,ed+=p*eI,eh+=p*eT,ef+=p*eR,ep+=p*eB,X+=(p=t[11])*ev,Y+=p*e_,J+=p*ex,ei+=p*eC,en+=p*eE,eo+=p*ek,ea+=p*eS,es+=p*eA,el+=p*eP,ec+=p*eD,eu+=p*e$,ed+=p*eO,eh+=p*eI,ef+=p*eT,ep+=p*eR,eg+=p*eB,Y+=(p=t[12])*ev,J+=p*e_,ei+=p*ex,en+=p*eC,eo+=p*eE,ea+=p*ek,es+=p*eS,el+=p*eA,ec+=p*eP,eu+=p*eD,ed+=p*e$,eh+=p*eO,ef+=p*eI,ep+=p*eT,eg+=p*eR,em+=p*eB,J+=(p=t[13])*ev,ei+=p*e_,en+=p*ex,eo+=p*eC,ea+=p*eE,es+=p*ek,el+=p*eS,ec+=p*eA,eu+=p*eP,ed+=p*eD,eh+=p*e$,ef+=p*eO,ep+=p*eI,eg+=p*eT,em+=p*eR,ew+=p*eB,ei+=(p=t[14])*ev,en+=p*e_,eo+=p*ex,ea+=p*eC,es+=p*eE,el+=p*ek,ec+=p*eS,eu+=p*eA,ed+=p*eP,eh+=p*eD,ef+=p*e$,ep+=p*eO,eg+=p*eI,em+=p*eT,ew+=p*eR,eb+=p*eB,en+=(p=t[15])*ev,eo+=p*e_,ea+=p*ex,es+=p*eC,el+=p*eE,ec+=p*ek,eu+=p*eS,ed+=p*eA,eh+=p*eP,ef+=p*eD,ep+=p*e$,eg+=p*eO,em+=p*eI,ew+=p*eT,eb+=p*eR,ey+=p*eB,m+=38*eo,v+=38*ea,_+=38*es,x+=38*el,T+=38*ec,F+=38*eu,z+=38*ed,W+=38*eh,K+=38*ef,Z+=38*ep,Q+=38*eg,X+=38*em,Y+=38*ew,J+=38*eb,ei+=38*ey,g=Math.floor((p=m+(g=1)+65535)/65536),m=p-65536*g,g=Math.floor((p=v+g+65535)/65536),v=p-65536*g,g=Math.floor((p=_+g+65535)/65536),_=p-65536*g,g=Math.floor((p=x+g+65535)/65536),x=p-65536*g,g=Math.floor((p=T+g+65535)/65536),T=p-65536*g,g=Math.floor((p=F+g+65535)/65536),F=p-65536*g,g=Math.floor((p=z+g+65535)/65536),z=p-65536*g,g=Math.floor((p=W+g+65535)/65536),W=p-65536*g,g=Math.floor((p=K+g+65535)/65536),K=p-65536*g,g=Math.floor((p=Z+g+65535)/65536),Z=p-65536*g,g=Math.floor((p=Q+g+65535)/65536),Q=p-65536*g,g=Math.floor((p=X+g+65535)/65536),X=p-65536*g,g=Math.floor((p=Y+g+65535)/65536),Y=p-65536*g,g=Math.floor((p=J+g+65535)/65536),J=p-65536*g,g=Math.floor((p=ei+g+65535)/65536),ei=p-65536*g,g=Math.floor((p=en+g+65535)/65536),en=p-65536*g,m+=g-1+37*(g-1),g=Math.floor((p=m+(g=1)+65535)/65536),m=p-65536*g,g=Math.floor((p=v+g+65535)/65536),v=p-65536*g,g=Math.floor((p=_+g+65535)/65536),_=p-65536*g,g=Math.floor((p=x+g+65535)/65536),x=p-65536*g,g=Math.floor((p=T+g+65535)/65536),T=p-65536*g,g=Math.floor((p=F+g+65535)/65536),F=p-65536*g,g=Math.floor((p=z+g+65535)/65536),z=p-65536*g,g=Math.floor((p=W+g+65535)/65536),W=p-65536*g,g=Math.floor((p=K+g+65535)/65536),K=p-65536*g,g=Math.floor((p=Z+g+65535)/65536),Z=p-65536*g,g=Math.floor((p=Q+g+65535)/65536),Q=p-65536*g,g=Math.floor((p=X+g+65535)/65536),X=p-65536*g,g=Math.floor((p=Y+g+65535)/65536),Y=p-65536*g,g=Math.floor((p=J+g+65535)/65536),J=p-65536*g,g=Math.floor((p=ei+g+65535)/65536),ei=p-65536*g,g=Math.floor((p=en+g+65535)/65536),en=p-65536*g,m+=g-1+37*(g-1),e[0]=m,e[1]=v,e[2]=_,e[3]=x,e[4]=T,e[5]=F,e[6]=z,e[7]=W,e[8]=K,e[9]=Z,e[10]=Q,e[11]=X,e[12]=Y,e[13]=J,e[14]=ei,e[15]=en}function scalarMult(e,t){let a=new Uint8Array(32),p=new Float64Array(80),g=gf(),m=gf(),_=gf(),x=gf(),T=gf(),F=gf();for(let t=0;t<31;t++)a[t]=e[t];a[31]=127&e[31]|64,a[0]&=248,function(e,t){for(let a=0;a<16;a++)e[a]=t[2*a]+(t[2*a+1]<<8);e[15]&=32767}(p,t);for(let e=0;e<16;e++)m[e]=p[e];g[0]=x[0]=1;for(let e=254;e>=0;--e){let t=a[e>>>3]>>>(7&e)&1;sel25519(g,m,t),sel25519(_,x,t),add(T,g,_),sub(g,g,_),add(_,m,x),sub(m,m,x),mul(x,T,T),mul(F,g,g),mul(g,_,g),mul(_,m,T),add(T,g,_),sub(g,g,_),mul(m,g,g),sub(_,x,F),mul(g,_,v),add(g,g,x),mul(_,_,g),mul(g,x,F),mul(x,m,p),mul(m,T,T),sel25519(g,m,t),sel25519(_,x,t)}for(let e=0;e<16;e++)p[e+16]=g[e],p[e+32]=_[e],p[e+48]=m[e],p[e+64]=x[e];let z=p.subarray(32),W=p.subarray(16);!function(e,t){let a=gf();for(let e=0;e<16;e++)a[e]=t[e];for(let e=253;e>=0;e--)mul(a,a,a),2!==e&&4!==e&&mul(a,a,t);for(let t=0;t<16;t++)e[t]=a[t]}(z,z),mul(W,W,z);let K=new Uint8Array(32);return!function(e,t){let a=gf(),p=gf();for(let e=0;e<16;e++)p[e]=t[e];car25519(p),car25519(p),car25519(p);for(let e=0;e<2;e++){a[0]=p[0]-65517;for(let e=1;e<15;e++)a[e]=p[e]-65535-(a[e-1]>>16&1),a[e-1]&=65535;a[15]=p[15]-32767-(a[14]>>16&1);let e=a[15]>>16&1;a[14]&=65535,sel25519(p,a,1-e)}for(let t=0;t<16;t++)e[2*t]=255&p[t],e[2*t+1]=p[t]>>8}(K,W),K}t.Au=function(e){let a=(0,p.randomBytes)(32,e),v=function(e){if(e.length!==t.KS)throw Error(`x25519: seed must be ${t.KS} bytes`);let a=new Uint8Array(e),p=scalarMult(a,m);return{publicKey:p,secretKey:a}}(a);return(0,g.wipe)(a),v},t.gi=function(e,a,p=!1){if(e.length!==t.kz)throw Error("X25519: incorrect secret key length");if(a.length!==t.kz)throw Error("X25519: incorrect public key length");let g=scalarMult(e,a);if(p){let e=0;for(let t=0;t<g.length;t++)e|=g[t];if(0===e)throw Error("X25519: invalid shared key")}return g}},61882:function(){},36900:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});let p=a(70655);p.__exportStar(a(46869),t),p.__exportStar(a(88033),t)},46869:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ONE_THOUSAND=t.ONE_HUNDRED=void 0,t.ONE_HUNDRED=100,t.ONE_THOUSAND=1e3},88033:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ONE_YEAR=t.FOUR_WEEKS=t.THREE_WEEKS=t.TWO_WEEKS=t.ONE_WEEK=t.THIRTY_DAYS=t.SEVEN_DAYS=t.FIVE_DAYS=t.THREE_DAYS=t.ONE_DAY=t.TWENTY_FOUR_HOURS=t.TWELVE_HOURS=t.SIX_HOURS=t.THREE_HOURS=t.ONE_HOUR=t.SIXTY_MINUTES=t.THIRTY_MINUTES=t.TEN_MINUTES=t.FIVE_MINUTES=t.ONE_MINUTE=t.SIXTY_SECONDS=t.THIRTY_SECONDS=t.TEN_SECONDS=t.FIVE_SECONDS=t.ONE_SECOND=void 0,t.ONE_SECOND=1,t.FIVE_SECONDS=5,t.TEN_SECONDS=10,t.THIRTY_SECONDS=30,t.SIXTY_SECONDS=60,t.ONE_MINUTE=t.SIXTY_SECONDS,t.FIVE_MINUTES=5*t.ONE_MINUTE,t.TEN_MINUTES=10*t.ONE_MINUTE,t.THIRTY_MINUTES=30*t.ONE_MINUTE,t.SIXTY_MINUTES=60*t.ONE_MINUTE,t.ONE_HOUR=t.SIXTY_MINUTES,t.THREE_HOURS=3*t.ONE_HOUR,t.SIX_HOURS=6*t.ONE_HOUR,t.TWELVE_HOURS=12*t.ONE_HOUR,t.TWENTY_FOUR_HOURS=24*t.ONE_HOUR,t.ONE_DAY=t.TWENTY_FOUR_HOURS,t.THREE_DAYS=3*t.ONE_DAY,t.FIVE_DAYS=5*t.ONE_DAY,t.SEVEN_DAYS=7*t.ONE_DAY,t.THIRTY_DAYS=30*t.ONE_DAY,t.ONE_WEEK=t.SEVEN_DAYS,t.TWO_WEEKS=2*t.ONE_WEEK,t.THREE_WEEKS=3*t.ONE_WEEK,t.FOUR_WEEKS=4*t.ONE_WEEK,t.ONE_YEAR=365*t.ONE_DAY},66736:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});let p=a(70655);p.__exportStar(a(44273),t),p.__exportStar(a(47001),t),p.__exportStar(a(52939),t),p.__exportStar(a(36900),t)},52939:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});let p=a(70655);p.__exportStar(a(88766),t)},88766:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.IWatch=void 0,t.IWatch=class{}},83207:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.fromMiliseconds=t.toMiliseconds=void 0;let p=a(36900);t.toMiliseconds=function(e){return e*p.ONE_THOUSAND},t.fromMiliseconds=function(e){return Math.floor(e/p.ONE_THOUSAND)}},83873:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.delay=void 0,t.delay=function(e){return new Promise(t=>{setTimeout(()=>{t(!0)},e)})}},44273:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});let p=a(70655);p.__exportStar(a(83873),t),p.__exportStar(a(83207),t)},47001:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Watch=void 0;let Watch=class Watch{constructor(){this.timestamps=new Map}start(e){if(this.timestamps.has(e))throw Error(`Watch already started for label: ${e}`);this.timestamps.set(e,{started:Date.now()})}stop(e){let t=this.get(e);if(void 0!==t.elapsed)throw Error(`Watch already stopped for label: ${e}`);let a=Date.now()-t.started;this.timestamps.set(e,{started:t.started,elapsed:a})}get(e){let t=this.timestamps.get(e);if(void 0===t)throw Error(`No timestamp found for label: ${e}`);return t}elapsed(e){let t=this.get(e),a=t.elapsed||Date.now()-t.started;return a}};t.Watch=Watch,t.default=Watch},5015:function(e,t,a){"use strict";a.d(t,{AW:function(){return en},O6:function(){return er},rV:function(){return es},gn:function(){return lt},H1:function(){return st},hF:function(){return it},WG:function(){return $},pe:function(){return Ln},m$:function(){return kn},vB:function(){return ee},HI:function(){return Kn},E0:function(){return ft},Gq:function(){return at},$0:function(){return Jn},Z4:function(){return ct},Bv:function(){return Nt},Au:function(){return jn},jd:function(){return Dn},gu:function(){return Rn},D:function(){return zn},Z7:function(){return N},cO:function(){return yt},_H:function(){return mt},fc:function(){return At},D6:function(){return U},Hh:function(){return pt},Ym:function(){return Vn},rj:function(){return Mn},jU:function(){return q},gp:function(){return oe},rF:function(){return un},Bw:function(){return dt},UG:function(){return te},Gg:function(){return Zt},xW:function(){return Dt},b$:function(){return H},Ih:function(){return $t},h1:function(){return kt},Q8:function(){return Fn},o8:function(){return w},qt:function(){return j},Dd:function(){return Vt},$t:function(){return Ft},nf:function(){return Bt},Q0:function(){return Lt},in:function(){return cn},p8:function(){return Gt},sI:function(){return zt},al:function(){return Wt},L5:function(){return B},EJ:function(){return xt},Z2:function(){return an},PM:function(){return Kt},hH:function(){return Ht},ON:function(){return Qt},n:function(){return Mt},JT:function(){return qt},M_:function(){return h},jv:function(){return jt},KC:function(){return et},eG:function(){return S},fK:function(){return se},IP:function(){return nt},DQ:function(){return ve},iP:function(){return ut},M:function(){return Xe},he:function(){return bt},uw:function(){return Xt},Ll:function(){return xn},EN:function(){return Re}});var p=a(15501),g=a(512),m=a(31416),v=a(73294),_=a(57664),x=a(37466),T=a(83454),__spreadArray=function(e,t,a){if(a||2==arguments.length)for(var p,g=0,m=t.length;g<m;g++)!p&&g in t||(p||(p=Array.prototype.slice.call(t,0,g)),p[g]=t[g]);return e.concat(p||Array.prototype.slice.call(t))},BrowserInfo=function(e,t,a){this.name=e,this.version=t,this.os=a,this.type="browser"},NodeInfo=function(e){this.version=e,this.type="node",this.name="node",this.os=T.platform},SearchBotDeviceInfo=function(e,t,a,p){this.name=e,this.version=t,this.os=a,this.bot=p,this.type="bot-device"},BotInfo=function(){this.type="bot",this.bot=!0,this.name="bot",this.version=null,this.os=null},ReactNativeInfo=function(){this.type="react-native",this.name="react-native",this.version=null,this.os=null},F=/(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,z=[["aol",/AOLShield\/([0-9\._]+)/],["edge",/Edge\/([0-9\._]+)/],["edge-ios",/EdgiOS\/([0-9\._]+)/],["yandexbrowser",/YaBrowser\/([0-9\._]+)/],["kakaotalk",/KAKAOTALK\s([0-9\.]+)/],["samsung",/SamsungBrowser\/([0-9\.]+)/],["silk",/\bSilk\/([0-9._-]+)\b/],["miui",/MiuiBrowser\/([0-9\.]+)$/],["beaker",/BeakerBrowser\/([0-9\.]+)/],["edge-chromium",/EdgA?\/([0-9\.]+)/],["chromium-webview",/(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["chrome",/(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],["phantomjs",/PhantomJS\/([0-9\.]+)(:?\s|$)/],["crios",/CriOS\/([0-9\.]+)(:?\s|$)/],["firefox",/Firefox\/([0-9\.]+)(?:\s|$)/],["fxios",/FxiOS\/([0-9\.]+)/],["opera-mini",/Opera Mini.*Version\/([0-9\.]+)/],["opera",/Opera\/([0-9\.]+)(?:\s|$)/],["opera",/OPR\/([0-9\.]+)(:?\s|$)/],["pie",/^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],["pie",/^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/],["netfront",/^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],["ie",/Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],["ie",/MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],["ie",/MSIE\s(7\.0)/],["bb10",/BB10;\sTouch.*Version\/([0-9\.]+)/],["android",/Android\s([0-9\.]+)/],["ios",/Version\/([0-9\._]+).*Mobile.*Safari.*/],["safari",/Version\/([0-9\._]+).*Safari/],["facebook",/FB[AS]V\/([0-9\.]+)/],["instagram",/Instagram\s([0-9\.]+)/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Mobile/],["ios-webview",/AppleWebKit\/([0-9\.]+).*Gecko\)$/],["curl",/^curl\/([0-9\.]+)$/],["searchbot",/alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/]],W=[["iOS",/iP(hone|od|ad)/],["Android OS",/Android/],["BlackBerry OS",/BlackBerry|BB10/],["Windows Mobile",/IEMobile/],["Amazon OS",/Kindle/],["Windows 3.11",/Win16/],["Windows 95",/(Windows 95)|(Win95)|(Windows_95)/],["Windows 98",/(Windows 98)|(Win98)/],["Windows 2000",/(Windows NT 5.0)|(Windows 2000)/],["Windows XP",/(Windows NT 5.1)|(Windows XP)/],["Windows Server 2003",/(Windows NT 5.2)/],["Windows Vista",/(Windows NT 6.0)/],["Windows 7",/(Windows NT 6.1)/],["Windows 8",/(Windows NT 6.2)/],["Windows 8.1",/(Windows NT 6.3)/],["Windows 10",/(Windows NT 10.0)/],["Windows ME",/Windows ME/],["Windows CE",/Windows CE|WinCE|Microsoft Pocket Internet Explorer/],["Open BSD",/OpenBSD/],["Sun OS",/SunOS/],["Chrome OS",/CrOS/],["Linux",/(Linux)|(X11)/],["Mac OS",/(Mac_PowerPC)|(Macintosh)/],["QNX",/QNX/],["BeOS",/BeOS/],["OS/2",/OS\/2/]];function parseUserAgent(e){var t=""!==e&&z.reduce(function(t,a){var p=a[0],g=a[1];if(t)return t;var m=g.exec(e);return!!m&&[p,m]},!1);if(!t)return null;var a=t[0],p=t[1];if("searchbot"===a)return new BotInfo;var g=p[1]&&p[1].split(".").join("_").split("_").slice(0,3);g?g.length<3&&(g=__spreadArray(__spreadArray([],g,!0),function(e){for(var t=[],a=0;a<e;a++)t.push("0");return t}(3-g.length),!0)):g=[];var m=g.join("."),v=function(e){for(var t=0,a=W.length;t<a;t++){var p=W[t],g=p[0];if(p[1].exec(e))return g}return null}(e),_=F.exec(e);return _&&_[1]?new SearchBotDeviceInfo(a,m,v,_[1]):new BrowserInfo(a,m,v)}var K=a(66736),Z=a(62873),Q=a(65755),X=a(66151);a(61882);let Y={waku:{publish:"waku_publish",batchPublish:"waku_batchPublish",subscribe:"waku_subscribe",batchSubscribe:"waku_batchSubscribe",subscription:"waku_subscription",unsubscribe:"waku_unsubscribe",batchUnsubscribe:"waku_batchUnsubscribe"},irn:{publish:"irn_publish",batchPublish:"irn_batchPublish",subscribe:"irn_subscribe",batchSubscribe:"irn_batchSubscribe",subscription:"irn_subscription",unsubscribe:"irn_unsubscribe",batchUnsubscribe:"irn_batchUnsubscribe"},iridium:{publish:"iridium_publish",batchPublish:"iridium_batchPublish",subscribe:"iridium_subscribe",batchSubscribe:"iridium_batchSubscribe",subscription:"iridium_subscription",unsubscribe:"iridium_unsubscribe",batchUnsubscribe:"iridium_batchUnsubscribe"}};var J=a(83454);function ve(e){let[t,a]=e.split(":");return{namespace:t,reference:a}}function Rn(e,t=[]){let a=[];return Object.keys(e).forEach(p=>{if(t.length&&!t.includes(p))return;let g=e[p];a.push(...g.accounts)}),a}function M(e,t){return e.includes(":")?[e]:t.chains||[]}let ei="base10",en="base16",eo="base64pad",ea="utf8",es=1;function jn(){let e=_.Au();return{privateKey:(0,x.BB)(e.secretKey,en),publicKey:(0,x.BB)(e.publicKey,en)}}function Dn(){let e=(0,m.randomBytes)(32);return(0,x.BB)(e,en)}function kn(e,t){let a=_.gi((0,x.mL)(e,en),(0,x.mL)(t,en),!0),p=new g.t(v.mE,a).expand(32);return(0,x.BB)(p,en)}function Vn(e){let t=(0,v.vp)((0,x.mL)(e,en));return(0,x.BB)(t,en)}function Mn(e){let t=(0,v.vp)((0,x.mL)(e,ea));return(0,x.BB)(t,en)}function $(e){return Number((0,x.BB)(e,ei))}function Kn(e){var t;let a=(t="u">typeof e.type?e.type:0,(0,x.mL)(`${t}`,ei));if($(a)===es&&typeof e.senderPublicKey>"u")throw Error("Missing sender public key for type 1 envelope");let g="u">typeof e.senderPublicKey?(0,x.mL)(e.senderPublicKey,en):void 0,v="u">typeof e.iv?(0,x.mL)(e.iv,en):(0,m.randomBytes)(12),_=new p.OK((0,x.mL)(e.symKey,en)).seal(v,(0,x.mL)(e.message,ea));return function(e){if($(e.type)===es){if(typeof e.senderPublicKey>"u")throw Error("Missing sender public key for type 1 envelope");return(0,x.BB)((0,x.zo)([e.type,e.senderPublicKey,e.iv,e.sealed]),eo)}return(0,x.BB)((0,x.zo)([e.type,e.iv,e.sealed]),eo)}({type:a,sealed:_,iv:v,senderPublicKey:g})}function Ln(e){let t=new p.OK((0,x.mL)(e.symKey,en)),{sealed:a,iv:g}=ee(e.encoded),m=t.open(g,a);if(null===m)throw Error("Failed to decrypt");return(0,x.BB)(m,ea)}function ee(e){let t=(0,x.mL)(e,eo),a=t.slice(0,1);if($(a)===es){let e=t.slice(1,33),p=t.slice(33,45),g=t.slice(45);return{type:a,sealed:g,iv:p,senderPublicKey:e}}let p=t.slice(1,13),g=t.slice(13);return{type:a,sealed:g,iv:p}}function xn(e,t){let a=ee(e);return Re({type:$(a.type),senderPublicKey:"u">typeof a.senderPublicKey?(0,x.BB)(a.senderPublicKey,en):void 0,receiverPublicKey:t?.receiverPublicKey})}function Re(e){let t=e?.type||0;if(t===es){if(typeof e?.senderPublicKey>"u")throw Error("missing sender public key");if(typeof e?.receiverPublicKey>"u")throw Error("missing receiver public key")}return{type:t,senderPublicKey:e?.senderPublicKey,receiverPublicKey:e?.receiverPublicKey}}function Fn(e){return e.type===es&&"string"==typeof e.senderPublicKey&&"string"==typeof e.receiverPublicKey}var el=Object.defineProperty,ec=Object.getOwnPropertySymbols,eu=Object.prototype.hasOwnProperty,ed=Object.prototype.propertyIsEnumerable,Ue=(e,t,a)=>t in e?el(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,_e=(e,t)=>{for(var a in t||(t={}))eu.call(t,a)&&Ue(e,a,t[a]);if(ec)for(var a of ec(t))ed.call(t,a)&&Ue(e,a,t[a]);return e};let eh={reactNative:"react-native",node:"node",browser:"browser",unknown:"unknown"};function te(){return"u">typeof J&&"u">typeof J.versions&&"u">typeof J.versions.node}function H(){return!(0,Z.getDocument)()&&!!(0,Z.getNavigator)()&&"ReactNative"===navigator.product}function q(){return!te()&&!!(0,Z.getNavigator)()}function R(){return H()?eh.reactNative:te()?eh.node:q()?eh.browser:eh.unknown}function zn(){return(0,Q.D)()||{name:"",description:"",url:"",icons:[""]}}function Jn({protocol:e,version:t,relayUrl:p,sdkVersion:g,auth:m,projectId:v,useOnCloseEvent:_}){var x;let F;let z=p.split("?"),W=function(e,t,p){let g=function(){var e;if(R()===eh.reactNative&&"u">typeof a.g&&"u">typeof(null==a.g?void 0:a.g.Platform)){let{OS:e,Version:t}=a.g.Platform;return[e,t].join("-")}let t=e?parseUserAgent(e):"undefined"==typeof document&&"undefined"!=typeof navigator&&"ReactNative"===navigator.product?new ReactNativeInfo:"undefined"!=typeof navigator?parseUserAgent(navigator.userAgent):void 0!==T&&T.version?new NodeInfo(T.version.slice(1)):null;if(null===t)return"unknown";let p=t.os?t.os.replace(" ","").toLowerCase():"unknown";return"browser"===t.type?[p,t.name,t.version].join("-"):[p,t.version].join("-")}(),m=function(){var e;let t=R();return t===eh.browser?[t,(null==(e=(0,Z.getLocation)())?void 0:e.host)||"unknown"].join(":"):t}();return[[e,t].join("-"),["js",p].join("-"),g,m].join("/")}(e,t,g),K=(x=z[1]||"",F=_e(_e({},F=X.parse(x)),{auth:m,ua:W,projectId:v,useOnCloseEvent:_||void 0}),x=X.stringify(F));return z[0]+"?"+K}function O(e,t){return e.filter(e=>t.includes(e)).length===e.length}function et(e){return Object.fromEntries(e.entries())}function nt(e){return new Map(Object.entries(e))}function st(e=K.FIVE_MINUTES,t){let a,p,g;let m=(0,K.toMiliseconds)(e||K.FIVE_MINUTES);return{resolve:e=>{g&&a&&(clearTimeout(g),a(e))},reject:e=>{g&&p&&(clearTimeout(g),p(e))},done:()=>new Promise((e,v)=>{g=setTimeout(()=>{v(Error(t))},m),a=e,p=v})}}function it(e,t,a){return new Promise(async(p,g)=>{let m=setTimeout(()=>g(Error(a)),t);try{let t=await e;p(t)}catch(e){g(e)}clearTimeout(m)})}function re(e,t){if("string"==typeof t&&t.startsWith(`${e}:`))return t;if("topic"===e.toLowerCase()){if("string"!=typeof t)throw Error('Value must be "string" for expirer target type: topic');return`topic:${t}`}if("id"===e.toLowerCase()){if("number"!=typeof t)throw Error('Value must be "number" for expirer target type: id');return`id:${t}`}throw Error(`Unknown expirer target type: ${e}`)}function ct(e){return re("topic",e)}function at(e){return re("id",e)}function ut(e){let[t,a]=e.split(":"),p={id:void 0,topic:void 0};if("topic"===t&&"string"==typeof a)p.topic=a;else if("id"===t&&Number.isInteger(Number(a)))p.id=Number(a);else throw Error(`Invalid target, expected id:number or topic:string, got ${t}:${a}`);return p}function lt(e,t){return(0,K.fromMiliseconds)((t||Date.now())+(0,K.toMiliseconds)(e))}function dt(e){return Date.now()>=(0,K.toMiliseconds)(e)}function ft(e,t){return`${e}${t?`:${t}`:""}`}function S(e=[],t=[]){return[...new Set([...e,...t])]}async function pt({id:e,topic:t,wcDeepLink:p}){try{if(!p)return;let g="string"==typeof p?JSON.parse(p):p,m=g?.href;if("string"!=typeof m)return;m.endsWith("/")&&(m=m.slice(0,-1));let v=`${m}/wc?requestId=${e}&sessionTopic=${t}`,_=R();_===eh.browser?v.startsWith("https://")?window.open(v,"_blank","noreferrer noopener"):window.open(v,"_self","noreferrer noopener"):_===eh.reactNative&&"u">typeof(null==a.g?void 0:a.g.Linking)&&await a.g.Linking.openURL(v)}catch(e){console.error(e)}}function mt(e){return e?.relay||{protocol:"irn"}}function yt(e){let t=Y[e];if(typeof t>"u")throw Error(`Relay Protocol not supported: ${e}`);return t}var ef=Object.defineProperty,ep=Object.getOwnPropertySymbols,eg=Object.prototype.hasOwnProperty,em=Object.prototype.propertyIsEnumerable,qe=(e,t,a)=>t in e?ef(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,Et=(e,t)=>{for(var a in t||(t={}))eg.call(t,a)&&qe(e,a,t[a]);if(ep)for(var a of ep(t))em.call(t,a)&&qe(e,a,t[a]);return e};function bt(e){var t;let a=e.indexOf(":"),p=-1!==e.indexOf("?")?e.indexOf("?"):void 0,g=e.substring(0,a),m=e.substring(a+1,p).split("@"),v="u">typeof p?e.substring(p):"",_=X.parse(v);return{protocol:g,topic:(t=m[0]).startsWith("//")?t.substring(2):t,version:parseInt(m[1],10),symKey:_.symKey,relay:function(e,t="-"){let a={},p="relay"+t;return Object.keys(e).forEach(t=>{if(t.startsWith(p)){let g=t.replace(p,""),m=e[t];a[g]=m}}),a}(_)}}function Nt(e){return`${e.protocol}:${e.topic}@${e.version}?`+X.stringify(Et({symKey:e.symKey},function(e,t="-"){let a={};return Object.keys(e).forEach(p=>{e[p]&&(a["relay"+t+p]=e[p])}),a}(e.relay)))}var ew=Object.defineProperty,eb=Object.defineProperties,ey=Object.getOwnPropertyDescriptors,ev=Object.getOwnPropertySymbols,e_=Object.prototype.hasOwnProperty,ex=Object.prototype.propertyIsEnumerable,Ye=(e,t,a)=>t in e?ew(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,Tt=(e,t)=>{for(var a in t||(t={}))e_.call(t,a)&&Ye(e,a,t[a]);if(ev)for(var a of ev(t))ex.call(t,a)&&Ye(e,a,t[a]);return e},Rt=(e,t)=>eb(e,ey(t));function A(e){let t=[];return e.forEach(e=>{let[a,p]=e.split(":");t.push(`${a}:${p}`)}),t}function At(e,t){let a=cn(e,t);if(a)throw Error(a.message);let p={};for(let[t,a]of Object.entries(e))p[t]={methods:a.methods,events:a.events,chains:a.accounts.map(e=>`${e.split(":")[0]}:${e.split(":")[1]}`)};return p}function oe(e){return e.includes(":")}function Xe(e){return oe(e)?e.split(":")[0]:e}function se(e){var t,a,p;let g={};if(!B(e))return g;for(let[m,v]of Object.entries(e)){let e=oe(m)?[m]:v.chains,_=v.methods||[],x=v.events||[],T=Xe(m);g[T]=Rt(Tt({},g[T]),{chains:S(e,null==(t=g[T])?void 0:t.chains),methods:S(_,null==(a=g[T])?void 0:a.methods),events:S(x,null==(p=g[T])?void 0:p.events)})}return g}let eC={INVALID_METHOD:{message:"Invalid method.",code:1001},INVALID_EVENT:{message:"Invalid event.",code:1002},INVALID_UPDATE_REQUEST:{message:"Invalid update request.",code:1003},INVALID_EXTEND_REQUEST:{message:"Invalid extend request.",code:1004},INVALID_SESSION_SETTLE_REQUEST:{message:"Invalid session settle request.",code:1005},UNAUTHORIZED_METHOD:{message:"Unauthorized method.",code:3001},UNAUTHORIZED_EVENT:{message:"Unauthorized event.",code:3002},UNAUTHORIZED_UPDATE_REQUEST:{message:"Unauthorized update request.",code:3003},UNAUTHORIZED_EXTEND_REQUEST:{message:"Unauthorized extend request.",code:3004},USER_REJECTED:{message:"User rejected.",code:5e3},USER_REJECTED_CHAINS:{message:"User rejected chains.",code:5001},USER_REJECTED_METHODS:{message:"User rejected methods.",code:5002},USER_REJECTED_EVENTS:{message:"User rejected events.",code:5003},UNSUPPORTED_CHAINS:{message:"Unsupported chains.",code:5100},UNSUPPORTED_METHODS:{message:"Unsupported methods.",code:5101},UNSUPPORTED_EVENTS:{message:"Unsupported events.",code:5102},UNSUPPORTED_ACCOUNTS:{message:"Unsupported accounts.",code:5103},UNSUPPORTED_NAMESPACE_KEY:{message:"Unsupported namespace key.",code:5104},USER_DISCONNECTED:{message:"User disconnected.",code:6e3},SESSION_SETTLEMENT_FAILED:{message:"Session settlement failed.",code:7e3},WC_METHOD_UNSUPPORTED:{message:"Unsupported wc_ method.",code:10001}},eE={NOT_INITIALIZED:{message:"Not initialized.",code:1},NO_MATCHING_KEY:{message:"No matching key.",code:2},RESTORE_WILL_OVERRIDE:{message:"Restore will override.",code:3},RESUBSCRIBED:{message:"Resubscribed.",code:4},MISSING_OR_INVALID:{message:"Missing or invalid.",code:5},EXPIRED:{message:"Expired.",code:6},UNKNOWN_TYPE:{message:"Unknown type.",code:7},MISMATCHED_TOPIC:{message:"Mismatched topic.",code:8},NON_CONFORMING_NAMESPACES:{message:"Non conforming namespaces.",code:9}};function N(e,t){let{message:a,code:p}=eE[e];return{message:t?`${a} ${t}`:a,code:p}}function U(e,t){let{message:a,code:p}=eC[e];return{message:t?`${a} ${t}`:a,code:p}}function j(e,t){return!!Array.isArray(e)&&(!("u">typeof t)||!e.length||e.every(t))}function B(e){return Object.getPrototypeOf(e)===Object.prototype&&Object.keys(e).length}function w(e){return typeof e>"u"}function h(e,t){return!!(t&&w(e))||"string"==typeof e&&!!e.trim().length}function G(e,t){return!!(t&&w(e))||"number"==typeof e&&!isNaN(e)}function $t(e,t){let{requiredNamespaces:a}=t,p=Object.keys(e.namespaces),g=Object.keys(a),m=!0;return!!O(g,p)&&(p.forEach(t=>{let{accounts:p,methods:g,events:v}=e.namespaces[t],_=A(p),x=a[t];O(M(t,x),_)&&O(x.methods,g)&&O(x.events,v)||(m=!1)}),m)}function D(e){return!!(h(e,!1)&&e.includes(":"))&&2===e.split(":").length}function jt(e){if(h(e,!1))try{return"u">typeof new URL(e)}catch{}return!1}function Dt(e){var t;return null==(t=e?.proposer)?void 0:t.publicKey}function kt(e){return e?.topic}function Vt(e,t){let a=null;return h(e?.publicKey,!1)||(a=N("MISSING_OR_INVALID",`${t} controller public key should be a string`)),a}function ie(e){let t=!0;return j(e)?e.length&&(t=e.every(e=>h(e,!1))):t=!1,t}function ce(e,t){let a=null;return Object.values(e).forEach(e=>{var p;let g;if(a)return;let m=(p=`${t}, namespace`,g=null,ie(e?.methods)?ie(e?.events)||(g=U("UNSUPPORTED_EVENTS",`${p}, events should be an array of strings or empty array for no events`)):g=U("UNSUPPORTED_METHODS",`${p}, methods should be an array of strings or empty array for no methods`),g);m&&(a=m)}),a}function Mt(e,t,a){let p=null;if(e&&B(e)){let g;let m=ce(e,t);m&&(p=m);let v=(g=null,Object.entries(e).forEach(([e,p])=>{var m,v;let _;if(g)return;let x=(m=M(e,p),v=`${t} ${a}`,_=null,j(m)&&m.length?m.forEach(e=>{_||D(e)||(_=U("UNSUPPORTED_CHAINS",`${v}, chain ${e} should be a string and conform to "namespace:chainId" format`))}):D(e)||(_=U("UNSUPPORTED_CHAINS",`${v}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)),_);x&&(g=x)}),g);v&&(p=v)}else p=N("MISSING_OR_INVALID",`${t}, ${a} should be an object with data`);return p}function cn(e,t){let a=null;if(e&&B(e)){let p;let g=ce(e,t);g&&(a=g);let m=(p=null,Object.values(e).forEach(e=>{var a,g;let m;if(p)return;let v=(a=e?.accounts,g=`${t} namespace`,m=null,j(a)?a.forEach(e=>{m||function(e){if(h(e,!1)&&e.includes(":")){let t=e.split(":");if(3===t.length){let e=t[0]+":"+t[1];return!!t[2]&&D(e)}}return!1}(e)||(m=U("UNSUPPORTED_ACCOUNTS",`${g}, account ${e} should be a string and conform to "namespace:chainId:address" format`))}):m=U("UNSUPPORTED_ACCOUNTS",`${g}, accounts should be an array of strings conforming to "namespace:chainId:address" format`),m);v&&(p=v)}),p);m&&(a=m)}else a=N("MISSING_OR_INVALID",`${t}, namespaces should be an object with data`);return a}function an(e){return h(e.protocol,!0)}function Kt(e,t){let a=!1;return t&&!e?a=!0:e&&j(e)&&e.length&&e.forEach(e=>{a=an(e)}),a}function Lt(e){return"number"==typeof e}function xt(e){return"u">typeof e}function Ft(e){return!(!e||"object"!=typeof e||!e.code||!G(e.code,!1)||!e.message||!h(e.message,!1))}function Ht(e){return!(w(e)||!h(e.method,!1))}function qt(e){return!(w(e)||w(e.result)&&w(e.error)||!G(e.id,!1)||!h(e.jsonrpc,!1))}function Bt(e){return!(w(e)||!h(e.name,!1))}function Gt(e,t){return!(!D(t)||!(function(e){let t=[];return Object.values(e).forEach(e=>{t.push(...A(e.accounts))}),t})(e).includes(t))}function Wt(e,t,a){return!!h(a,!1)&&(function(e,t){let a=[];return Object.values(e).forEach(e=>{A(e.accounts).includes(t)&&a.push(...e.methods)}),a})(e,t).includes(a)}function zt(e,t,a){return!!h(a,!1)&&(function(e,t){let a=[];return Object.values(e).forEach(e=>{A(e.accounts).includes(t)&&a.push(...e.events)}),a})(e,t).includes(a)}function un(e,t,a){let p=null,g=function(e){let t={};return Object.keys(e).forEach(a=>{var p;a.includes(":")?t[a]=e[a]:null==(p=e[a].chains)||p.forEach(p=>{t[p]={methods:e[a].methods,events:e[a].events}})}),t}(e),m=function(e){let t={};return Object.keys(e).forEach(a=>{if(a.includes(":"))t[a]=e[a];else{let p=A(e[a].accounts);p?.forEach(p=>{t[p]={accounts:e[a].accounts.filter(e=>e.includes(`${p}:`)),methods:e[a].methods,events:e[a].events}})}}),t}(t),v=Object.keys(g),_=Object.keys(m),x=ln(Object.keys(e)),T=ln(Object.keys(t)),F=x.filter(e=>!T.includes(e));return F.length&&(p=N("NON_CONFORMING_NAMESPACES",`${a} namespaces keys don't satisfy requiredNamespaces.
      Required: ${F.toString()}
      Received: ${Object.keys(t).toString()}`)),O(v,_)||(p=N("NON_CONFORMING_NAMESPACES",`${a} namespaces chains don't satisfy required namespaces.
      Required: ${v.toString()}
      Approved: ${_.toString()}`)),Object.keys(t).forEach(e=>{if(!e.includes(":")||p)return;let g=A(t[e].accounts);g.includes(e)||(p=N("NON_CONFORMING_NAMESPACES",`${a} namespaces accounts don't satisfy namespace accounts for ${e}
        Required: ${e}
        Approved: ${g.toString()}`))}),v.forEach(e=>{p||(O(g[e].methods,m[e].methods)?O(g[e].events,m[e].events)||(p=N("NON_CONFORMING_NAMESPACES",`${a} namespaces events don't satisfy namespace events for ${e}`)):p=N("NON_CONFORMING_NAMESPACES",`${a} namespaces methods don't satisfy namespace methods for ${e}`))}),p}function ln(e){return[...new Set(e.map(e=>e.includes(":")?e.split(":")[0]:e))]}function Qt(e,t){return G(e,!1)&&e<=t.max&&e>=t.min}function Zt(){let e=R();return new Promise(t=>{switch(e){case eh.browser:t(q()&&navigator?.onLine);break;case eh.reactNative:t(fn());break;case eh.node:default:t(!0)}})}async function fn(){if(H()&&"u">typeof a.g&&null!=a.g&&a.g.NetInfo){let e=await (null==a.g?void 0:a.g.NetInfo.fetch());return e?.isConnected}return!0}function Xt(e){switch(R()){case eh.browser:q()&&(window.addEventListener("online",()=>e(!0)),window.addEventListener("offline",()=>e(!1)));break;case eh.reactNative:H()&&"u">typeof a.g&&null!=a.g&&a.g.NetInfo&&a.g?.NetInfo.addEventListener(t=>e(t?.isConnected));case eh.node:}}let ek={};let er=class er{static get(e){return ek[e]}static set(e,t){ek[e]=t}static delete(e){delete ek[e]}}},66151:function(e,t,a){"use strict";let p=a(70610),g=a(44020),m=a(80500),v=a(92806),isNullOrUndefined=e=>null==e,_=Symbol("encodeFragmentIdentifier");function validateArrayFormatSeparator(e){if("string"!=typeof e||1!==e.length)throw TypeError("arrayFormatSeparator must be single character string")}function encode(e,t){return t.encode?t.strict?p(e):encodeURIComponent(e):e}function decode(e,t){return t.decode?g(e):e}function removeHash(e){let t=e.indexOf("#");return -1!==t&&(e=e.slice(0,t)),e}function extract(e){e=removeHash(e);let t=e.indexOf("?");return -1===t?"":e.slice(t+1)}function parseValue(e,t){return t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?e=Number(e):t.parseBooleans&&null!==e&&("true"===e.toLowerCase()||"false"===e.toLowerCase())&&(e="true"===e.toLowerCase()),e}function parse(e,t){validateArrayFormatSeparator((t=Object.assign({decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1},t)).arrayFormatSeparator);let a=function(e){let t;switch(e.arrayFormat){case"index":return(e,a,p)=>{if(t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),!t){p[e]=a;return}void 0===p[e]&&(p[e]={}),p[e][t[1]]=a};case"bracket":return(e,a,p)=>{if(t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),!t){p[e]=a;return}if(void 0===p[e]){p[e]=[a];return}p[e]=[].concat(p[e],a)};case"colon-list-separator":return(e,a,p)=>{if(t=/(:list)$/.exec(e),e=e.replace(/:list$/,""),!t){p[e]=a;return}if(void 0===p[e]){p[e]=[a];return}p[e]=[].concat(p[e],a)};case"comma":case"separator":return(t,a,p)=>{let g="string"==typeof a&&a.includes(e.arrayFormatSeparator),m="string"==typeof a&&!g&&decode(a,e).includes(e.arrayFormatSeparator);a=m?decode(a,e):a;let v=g||m?a.split(e.arrayFormatSeparator).map(t=>decode(t,e)):null===a?a:decode(a,e);p[t]=v};case"bracket-separator":return(t,a,p)=>{let g=/(\[\])$/.test(t);if(t=t.replace(/\[\]$/,""),!g){p[t]=a?decode(a,e):a;return}let m=null===a?[]:a.split(e.arrayFormatSeparator).map(t=>decode(t,e));if(void 0===p[t]){p[t]=m;return}p[t]=[].concat(p[t],m)};default:return(e,t,a)=>{if(void 0===a[e]){a[e]=t;return}a[e]=[].concat(a[e],t)}}}(t),p=Object.create(null);if("string"!=typeof e||!(e=e.trim().replace(/^[?#&]/,"")))return p;for(let g of e.split("&")){if(""===g)continue;let[e,v]=m(t.decode?g.replace(/\+/g," "):g,"=");v=void 0===v?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?v:decode(v,t),a(decode(e,t),v,p)}for(let e of Object.keys(p)){let a=p[e];if("object"==typeof a&&null!==a)for(let e of Object.keys(a))a[e]=parseValue(a[e],t);else p[e]=parseValue(a,t)}return!1===t.sort?p:(!0===t.sort?Object.keys(p).sort():Object.keys(p).sort(t.sort)).reduce((e,t)=>{let a=p[t];return a&&"object"==typeof a&&!Array.isArray(a)?e[t]=function keysSorter(e){return Array.isArray(e)?e.sort():"object"==typeof e?keysSorter(Object.keys(e)).sort((e,t)=>Number(e)-Number(t)).map(t=>e[t]):e}(a):e[t]=a,e},Object.create(null))}t.extract=extract,t.parse=parse,t.stringify=(e,t)=>{if(!e)return"";validateArrayFormatSeparator((t=Object.assign({encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:","},t)).arrayFormatSeparator);let shouldFilter=a=>t.skipNull&&isNullOrUndefined(e[a])||t.skipEmptyString&&""===e[a],a=function(e){switch(e.arrayFormat){case"index":return t=>(a,p)=>{let g=a.length;return void 0===p||e.skipNull&&null===p||e.skipEmptyString&&""===p?a:null===p?[...a,[encode(t,e),"[",g,"]"].join("")]:[...a,[encode(t,e),"[",encode(g,e),"]=",encode(p,e)].join("")]};case"bracket":return t=>(a,p)=>void 0===p||e.skipNull&&null===p||e.skipEmptyString&&""===p?a:null===p?[...a,[encode(t,e),"[]"].join("")]:[...a,[encode(t,e),"[]=",encode(p,e)].join("")];case"colon-list-separator":return t=>(a,p)=>void 0===p||e.skipNull&&null===p||e.skipEmptyString&&""===p?a:null===p?[...a,[encode(t,e),":list="].join("")]:[...a,[encode(t,e),":list=",encode(p,e)].join("")];case"comma":case"separator":case"bracket-separator":{let t="bracket-separator"===e.arrayFormat?"[]=":"=";return a=>(p,g)=>void 0===g||e.skipNull&&null===g||e.skipEmptyString&&""===g?p:(g=null===g?"":g,0===p.length)?[[encode(a,e),t,encode(g,e)].join("")]:[[p,encode(g,e)].join(e.arrayFormatSeparator)]}default:return t=>(a,p)=>void 0===p||e.skipNull&&null===p||e.skipEmptyString&&""===p?a:null===p?[...a,encode(t,e)]:[...a,[encode(t,e),"=",encode(p,e)].join("")]}}(t),p={};for(let t of Object.keys(e))shouldFilter(t)||(p[t]=e[t]);let g=Object.keys(p);return!1!==t.sort&&g.sort(t.sort),g.map(p=>{let g=e[p];return void 0===g?"":null===g?encode(p,t):Array.isArray(g)?0===g.length&&"bracket-separator"===t.arrayFormat?encode(p,t)+"[]":g.reduce(a(p),[]).join("&"):encode(p,t)+"="+encode(g,t)}).filter(e=>e.length>0).join("&")},t.parseUrl=(e,t)=>{t=Object.assign({decode:!0},t);let[a,p]=m(e,"#");return Object.assign({url:a.split("?")[0]||"",query:parse(extract(e),t)},t&&t.parseFragmentIdentifier&&p?{fragmentIdentifier:decode(p,t)}:{})},t.stringifyUrl=(e,a)=>{a=Object.assign({encode:!0,strict:!0,[_]:!0},a);let p=removeHash(e.url).split("?")[0]||"",g=t.extract(e.url),m=t.parse(g,{sort:!1}),v=Object.assign(m,e.query),x=t.stringify(v,a);x&&(x=`?${x}`);let T=function(e){let t="",a=e.indexOf("#");return -1!==a&&(t=e.slice(a)),t}(e.url);return e.fragmentIdentifier&&(T=`#${a[_]?encode(e.fragmentIdentifier,a):e.fragmentIdentifier}`),`${p}${x}${T}`},t.pick=(e,a,p)=>{p=Object.assign({parseFragmentIdentifier:!0,[_]:!1},p);let{url:g,query:m,fragmentIdentifier:x}=t.parseUrl(e,p);return t.stringifyUrl({url:g,query:v(m,a),fragmentIdentifier:x},p)},t.exclude=(e,a,p)=>{let g=Array.isArray(a)?e=>!a.includes(e):(e,t)=>!a(e,t);return t.pick(e,g,p)}},62873:function(e,t){"use strict";function getFromWindow(e){let t;return"undefined"!=typeof window&&void 0!==window[e]&&(t=window[e]),t}function getFromWindowOrThrow(e){let t=getFromWindow(e);if(!t)throw Error(`${e} is not defined in Window`);return t}Object.defineProperty(t,"__esModule",{value:!0}),t.getLocalStorage=t.getLocalStorageOrThrow=t.getCrypto=t.getCryptoOrThrow=t.getLocation=t.getLocationOrThrow=t.getNavigator=t.getNavigatorOrThrow=t.getDocument=t.getDocumentOrThrow=t.getFromWindowOrThrow=t.getFromWindow=void 0,t.getFromWindow=getFromWindow,t.getFromWindowOrThrow=getFromWindowOrThrow,t.getDocumentOrThrow=function(){return getFromWindowOrThrow("document")},t.getDocument=function(){return getFromWindow("document")},t.getNavigatorOrThrow=function(){return getFromWindowOrThrow("navigator")},t.getNavigator=function(){return getFromWindow("navigator")},t.getLocationOrThrow=function(){return getFromWindowOrThrow("location")},t.getLocation=function(){return getFromWindow("location")},t.getCryptoOrThrow=function(){return getFromWindowOrThrow("crypto")},t.getCrypto=function(){return getFromWindow("crypto")},t.getLocalStorageOrThrow=function(){return getFromWindowOrThrow("localStorage")},t.getLocalStorage=function(){return getFromWindow("localStorage")}},65755:function(e,t,a){"use strict";t.D=void 0;let p=a(62873);t.D=function(){let e,t,a;try{e=p.getDocumentOrThrow(),t=p.getLocationOrThrow()}catch(e){return null}function getWindowMetadataOfAny(...t){let a=e.getElementsByTagName("meta");for(let e=0;e<a.length;e++){let p=a[e],g=["itemprop","property","name"].map(e=>p.getAttribute(e)).filter(e=>!!e&&t.includes(e));if(g.length&&g){let e=p.getAttribute("content");if(e)return e}}return""}let g=((a=getWindowMetadataOfAny("name","og:site_name","og:title","twitter:title"))||(a=e.title),a),m=function(){let e=getWindowMetadataOfAny("description","og:description","twitter:description","keywords");return e}(),v=t.origin,_=function(){let a=e.getElementsByTagName("link"),p=[];for(let e=0;e<a.length;e++){let g=a[e],m=g.getAttribute("rel");if(m&&m.toLowerCase().indexOf("icon")>-1){let e=g.getAttribute("href");if(e){if(-1===e.toLowerCase().indexOf("https:")&&-1===e.toLowerCase().indexOf("http:")&&0!==e.indexOf("//")){let a=t.protocol+"//"+t.host;if(0===e.indexOf("/"))a+=e;else{let p=t.pathname.split("/");p.pop();let g=p.join("/");a+=g+"/"+e}p.push(a)}else if(0===e.indexOf("//")){let a=t.protocol+e;p.push(a)}else p.push(e)}}}return p}();return{description:m,url:v,icons:_,name:g}}},79742:function(e,t){"use strict";t.byteLength=function(e){var t=getLens(e),a=t[0],p=t[1];return(a+p)*3/4-p},t.toByteArray=function(e){var t,a,m=getLens(e),v=m[0],_=m[1],x=new g((v+_)*3/4-_),T=0,F=_>0?v-4:v;for(a=0;a<F;a+=4)t=p[e.charCodeAt(a)]<<18|p[e.charCodeAt(a+1)]<<12|p[e.charCodeAt(a+2)]<<6|p[e.charCodeAt(a+3)],x[T++]=t>>16&255,x[T++]=t>>8&255,x[T++]=255&t;return 2===_&&(t=p[e.charCodeAt(a)]<<2|p[e.charCodeAt(a+1)]>>4,x[T++]=255&t),1===_&&(t=p[e.charCodeAt(a)]<<10|p[e.charCodeAt(a+1)]<<4|p[e.charCodeAt(a+2)]>>2,x[T++]=t>>8&255,x[T++]=255&t),x},t.fromByteArray=function(e){for(var t,p=e.length,g=p%3,m=[],v=0,_=p-g;v<_;v+=16383)m.push(function(e,t,p){for(var g,m=[],v=t;v<p;v+=3)m.push(a[(g=(e[v]<<16&16711680)+(e[v+1]<<8&65280)+(255&e[v+2]))>>18&63]+a[g>>12&63]+a[g>>6&63]+a[63&g]);return m.join("")}(e,v,v+16383>_?_:v+16383));return 1===g?m.push(a[(t=e[p-1])>>2]+a[t<<4&63]+"=="):2===g&&m.push(a[(t=(e[p-2]<<8)+e[p-1])>>10]+a[t>>4&63]+a[t<<2&63]+"="),m.join("")};for(var a=[],p=[],g="undefined"!=typeof Uint8Array?Uint8Array:Array,m="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",v=0,_=m.length;v<_;++v)a[v]=m[v],p[m.charCodeAt(v)]=v;function getLens(e){var t=e.length;if(t%4>0)throw Error("Invalid string. Length must be a multiple of 4");var a=e.indexOf("=");-1===a&&(a=t);var p=a===t?0:4-a%4;return[a,p]}p["-".charCodeAt(0)]=62,p["_".charCodeAt(0)]=63},48764:function(e,t,a){"use strict";/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */let p=a(79742),g=a(80645),m="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;function createBuffer(e){if(e>2147483647)throw RangeError('The value "'+e+'" is invalid for option "size"');let t=new Uint8Array(e);return Object.setPrototypeOf(t,Buffer.prototype),t}function Buffer(e,t,a){if("number"==typeof e){if("string"==typeof t)throw TypeError('The "string" argument must be of type string. Received type number');return allocUnsafe(e)}return from(e,t,a)}function from(e,t,a){if("string"==typeof e)return function(e,t){if(("string"!=typeof t||""===t)&&(t="utf8"),!Buffer.isEncoding(t))throw TypeError("Unknown encoding: "+t);let a=0|byteLength(e,t),p=createBuffer(a),g=p.write(e,t);return g!==a&&(p=p.slice(0,g)),p}(e,t);if(ArrayBuffer.isView(e))return function(e){if(isInstance(e,Uint8Array)){let t=new Uint8Array(e);return fromArrayBuffer(t.buffer,t.byteOffset,t.byteLength)}return fromArrayLike(e)}(e);if(null==e)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(isInstance(e,ArrayBuffer)||e&&isInstance(e.buffer,ArrayBuffer)||"undefined"!=typeof SharedArrayBuffer&&(isInstance(e,SharedArrayBuffer)||e&&isInstance(e.buffer,SharedArrayBuffer)))return fromArrayBuffer(e,t,a);if("number"==typeof e)throw TypeError('The "value" argument must not be of type number. Received type number');let p=e.valueOf&&e.valueOf();if(null!=p&&p!==e)return Buffer.from(p,t,a);let g=function(e){var t;if(Buffer.isBuffer(e)){let t=0|checked(e.length),a=createBuffer(t);return 0===a.length||e.copy(a,0,0,t),a}return void 0!==e.length?"number"!=typeof e.length||(t=e.length)!=t?createBuffer(0):fromArrayLike(e):"Buffer"===e.type&&Array.isArray(e.data)?fromArrayLike(e.data):void 0}(e);if(g)return g;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return Buffer.from(e[Symbol.toPrimitive]("string"),t,a);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function assertSize(e){if("number"!=typeof e)throw TypeError('"size" argument must be of type number');if(e<0)throw RangeError('The value "'+e+'" is invalid for option "size"')}function allocUnsafe(e){return assertSize(e),createBuffer(e<0?0:0|checked(e))}function fromArrayLike(e){let t=e.length<0?0:0|checked(e.length),a=createBuffer(t);for(let p=0;p<t;p+=1)a[p]=255&e[p];return a}function fromArrayBuffer(e,t,a){let p;if(t<0||e.byteLength<t)throw RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(a||0))throw RangeError('"length" is outside of buffer bounds');return Object.setPrototypeOf(p=void 0===t&&void 0===a?new Uint8Array(e):void 0===a?new Uint8Array(e,t):new Uint8Array(e,t,a),Buffer.prototype),p}function checked(e){if(e>=2147483647)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|e}function byteLength(e,t){if(Buffer.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||isInstance(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);let a=e.length,p=arguments.length>2&&!0===arguments[2];if(!p&&0===a)return 0;let g=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return a;case"utf8":case"utf-8":return utf8ToBytes(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*a;case"hex":return a>>>1;case"base64":return base64ToBytes(e).length;default:if(g)return p?-1:utf8ToBytes(e).length;t=(""+t).toLowerCase(),g=!0}}function slowToString(e,t,a){let g=!1;if((void 0===t||t<0)&&(t=0),t>this.length||((void 0===a||a>this.length)&&(a=this.length),a<=0||(a>>>=0)<=(t>>>=0)))return"";for(e||(e="utf8");;)switch(e){case"hex":return function(e,t,a){let p=e.length;(!t||t<0)&&(t=0),(!a||a<0||a>p)&&(a=p);let g="";for(let p=t;p<a;++p)g+=x[e[p]];return g}(this,t,a);case"utf8":case"utf-8":return utf8Slice(this,t,a);case"ascii":return function(e,t,a){let p="";a=Math.min(e.length,a);for(let g=t;g<a;++g)p+=String.fromCharCode(127&e[g]);return p}(this,t,a);case"latin1":case"binary":return function(e,t,a){let p="";a=Math.min(e.length,a);for(let g=t;g<a;++g)p+=String.fromCharCode(e[g]);return p}(this,t,a);case"base64":var m,v;return m=t,v=a,0===m&&v===this.length?p.fromByteArray(this):p.fromByteArray(this.slice(m,v));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(e,t,a){let p=e.slice(t,a),g="";for(let e=0;e<p.length-1;e+=2)g+=String.fromCharCode(p[e]+256*p[e+1]);return g}(this,t,a);default:if(g)throw TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),g=!0}}function swap(e,t,a){let p=e[t];e[t]=e[a],e[a]=p}function bidirectionalIndexOf(e,t,a,p,g){var m;if(0===e.length)return -1;if("string"==typeof a?(p=a,a=0):a>2147483647?a=2147483647:a<-2147483648&&(a=-2147483648),(m=a=+a)!=m&&(a=g?0:e.length-1),a<0&&(a=e.length+a),a>=e.length){if(g)return -1;a=e.length-1}else if(a<0){if(!g)return -1;a=0}if("string"==typeof t&&(t=Buffer.from(t,p)),Buffer.isBuffer(t))return 0===t.length?-1:arrayIndexOf(e,t,a,p,g);if("number"==typeof t)return(t&=255,"function"==typeof Uint8Array.prototype.indexOf)?g?Uint8Array.prototype.indexOf.call(e,t,a):Uint8Array.prototype.lastIndexOf.call(e,t,a):arrayIndexOf(e,[t],a,p,g);throw TypeError("val must be string, number or Buffer")}function arrayIndexOf(e,t,a,p,g){let m,v=1,_=e.length,x=t.length;if(void 0!==p&&("ucs2"===(p=String(p).toLowerCase())||"ucs-2"===p||"utf16le"===p||"utf-16le"===p)){if(e.length<2||t.length<2)return -1;v=2,_/=2,x/=2,a/=2}function read(e,t){return 1===v?e[t]:e.readUInt16BE(t*v)}if(g){let p=-1;for(m=a;m<_;m++)if(read(e,m)===read(t,-1===p?0:m-p)){if(-1===p&&(p=m),m-p+1===x)return p*v}else -1!==p&&(m-=m-p),p=-1}else for(a+x>_&&(a=_-x),m=a;m>=0;m--){let a=!0;for(let p=0;p<x;p++)if(read(e,m+p)!==read(t,p)){a=!1;break}if(a)return m}return -1}function utf8Slice(e,t,a){a=Math.min(e.length,a);let p=[],g=t;for(;g<a;){let t=e[g],m=null,v=t>239?4:t>223?3:t>191?2:1;if(g+v<=a){let a,p,_,x;switch(v){case 1:t<128&&(m=t);break;case 2:(192&(a=e[g+1]))==128&&(x=(31&t)<<6|63&a)>127&&(m=x);break;case 3:a=e[g+1],p=e[g+2],(192&a)==128&&(192&p)==128&&(x=(15&t)<<12|(63&a)<<6|63&p)>2047&&(x<55296||x>57343)&&(m=x);break;case 4:a=e[g+1],p=e[g+2],_=e[g+3],(192&a)==128&&(192&p)==128&&(192&_)==128&&(x=(15&t)<<18|(63&a)<<12|(63&p)<<6|63&_)>65535&&x<1114112&&(m=x)}}null===m?(m=65533,v=1):m>65535&&(m-=65536,p.push(m>>>10&1023|55296),m=56320|1023&m),p.push(m),g+=v}return function(e){let t=e.length;if(t<=4096)return String.fromCharCode.apply(String,e);let a="",p=0;for(;p<t;)a+=String.fromCharCode.apply(String,e.slice(p,p+=4096));return a}(p)}function checkOffset(e,t,a){if(e%1!=0||e<0)throw RangeError("offset is not uint");if(e+t>a)throw RangeError("Trying to access beyond buffer length")}function checkInt(e,t,a,p,g,m){if(!Buffer.isBuffer(e))throw TypeError('"buffer" argument must be a Buffer instance');if(t>g||t<m)throw RangeError('"value" argument is out of bounds');if(a+p>e.length)throw RangeError("Index out of range")}function wrtBigUInt64LE(e,t,a,p,g){checkIntBI(t,p,g,e,a,7);let m=Number(t&BigInt(4294967295));e[a++]=m,m>>=8,e[a++]=m,m>>=8,e[a++]=m,m>>=8,e[a++]=m;let v=Number(t>>BigInt(32)&BigInt(4294967295));return e[a++]=v,v>>=8,e[a++]=v,v>>=8,e[a++]=v,v>>=8,e[a++]=v,a}function wrtBigUInt64BE(e,t,a,p,g){checkIntBI(t,p,g,e,a,7);let m=Number(t&BigInt(4294967295));e[a+7]=m,m>>=8,e[a+6]=m,m>>=8,e[a+5]=m,m>>=8,e[a+4]=m;let v=Number(t>>BigInt(32)&BigInt(4294967295));return e[a+3]=v,v>>=8,e[a+2]=v,v>>=8,e[a+1]=v,v>>=8,e[a]=v,a+8}function checkIEEE754(e,t,a,p,g,m){if(a+p>e.length||a<0)throw RangeError("Index out of range")}function writeFloat(e,t,a,p,m){return t=+t,a>>>=0,m||checkIEEE754(e,t,a,4,34028234663852886e22,-34028234663852886e22),g.write(e,t,a,p,23,4),a+4}function writeDouble(e,t,a,p,m){return t=+t,a>>>=0,m||checkIEEE754(e,t,a,8,17976931348623157e292,-17976931348623157e292),g.write(e,t,a,p,52,8),a+8}t.Buffer=Buffer,t.SlowBuffer=function(e){return+e!=e&&(e=0),Buffer.alloc(+e)},t.INSPECT_MAX_BYTES=50,t.kMaxLength=2147483647,Buffer.TYPED_ARRAY_SUPPORT=function(){try{let e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),Buffer.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(Buffer.prototype,"parent",{enumerable:!0,get:function(){if(Buffer.isBuffer(this))return this.buffer}}),Object.defineProperty(Buffer.prototype,"offset",{enumerable:!0,get:function(){if(Buffer.isBuffer(this))return this.byteOffset}}),Buffer.poolSize=8192,Buffer.from=function(e,t,a){return from(e,t,a)},Object.setPrototypeOf(Buffer.prototype,Uint8Array.prototype),Object.setPrototypeOf(Buffer,Uint8Array),Buffer.alloc=function(e,t,a){return(assertSize(e),e<=0)?createBuffer(e):void 0!==t?"string"==typeof a?createBuffer(e).fill(t,a):createBuffer(e).fill(t):createBuffer(e)},Buffer.allocUnsafe=function(e){return allocUnsafe(e)},Buffer.allocUnsafeSlow=function(e){return allocUnsafe(e)},Buffer.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==Buffer.prototype},Buffer.compare=function(e,t){if(isInstance(e,Uint8Array)&&(e=Buffer.from(e,e.offset,e.byteLength)),isInstance(t,Uint8Array)&&(t=Buffer.from(t,t.offset,t.byteLength)),!Buffer.isBuffer(e)||!Buffer.isBuffer(t))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let a=e.length,p=t.length;for(let g=0,m=Math.min(a,p);g<m;++g)if(e[g]!==t[g]){a=e[g],p=t[g];break}return a<p?-1:p<a?1:0},Buffer.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},Buffer.concat=function(e,t){let a;if(!Array.isArray(e))throw TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return Buffer.alloc(0);if(void 0===t)for(a=0,t=0;a<e.length;++a)t+=e[a].length;let p=Buffer.allocUnsafe(t),g=0;for(a=0;a<e.length;++a){let t=e[a];if(isInstance(t,Uint8Array))g+t.length>p.length?(Buffer.isBuffer(t)||(t=Buffer.from(t)),t.copy(p,g)):Uint8Array.prototype.set.call(p,t,g);else if(Buffer.isBuffer(t))t.copy(p,g);else throw TypeError('"list" argument must be an Array of Buffers');g+=t.length}return p},Buffer.byteLength=byteLength,Buffer.prototype._isBuffer=!0,Buffer.prototype.swap16=function(){let e=this.length;if(e%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)swap(this,t,t+1);return this},Buffer.prototype.swap32=function(){let e=this.length;if(e%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)swap(this,t,t+3),swap(this,t+1,t+2);return this},Buffer.prototype.swap64=function(){let e=this.length;if(e%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)swap(this,t,t+7),swap(this,t+1,t+6),swap(this,t+2,t+5),swap(this,t+3,t+4);return this},Buffer.prototype.toString=function(){let e=this.length;return 0===e?"":0==arguments.length?utf8Slice(this,0,e):slowToString.apply(this,arguments)},Buffer.prototype.toLocaleString=Buffer.prototype.toString,Buffer.prototype.equals=function(e){if(!Buffer.isBuffer(e))throw TypeError("Argument must be a Buffer");return this===e||0===Buffer.compare(this,e)},Buffer.prototype.inspect=function(){let e="",a=t.INSPECT_MAX_BYTES;return e=this.toString("hex",0,a).replace(/(.{2})/g,"$1 ").trim(),this.length>a&&(e+=" ... "),"<Buffer "+e+">"},m&&(Buffer.prototype[m]=Buffer.prototype.inspect),Buffer.prototype.compare=function(e,t,a,p,g){if(isInstance(e,Uint8Array)&&(e=Buffer.from(e,e.offset,e.byteLength)),!Buffer.isBuffer(e))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===a&&(a=e?e.length:0),void 0===p&&(p=0),void 0===g&&(g=this.length),t<0||a>e.length||p<0||g>this.length)throw RangeError("out of range index");if(p>=g&&t>=a)return 0;if(p>=g)return -1;if(t>=a)return 1;if(t>>>=0,a>>>=0,p>>>=0,g>>>=0,this===e)return 0;let m=g-p,v=a-t,_=Math.min(m,v),x=this.slice(p,g),T=e.slice(t,a);for(let e=0;e<_;++e)if(x[e]!==T[e]){m=x[e],v=T[e];break}return m<v?-1:v<m?1:0},Buffer.prototype.includes=function(e,t,a){return -1!==this.indexOf(e,t,a)},Buffer.prototype.indexOf=function(e,t,a){return bidirectionalIndexOf(this,e,t,a,!0)},Buffer.prototype.lastIndexOf=function(e,t,a){return bidirectionalIndexOf(this,e,t,a,!1)},Buffer.prototype.write=function(e,t,a,p){var g,m,v,_,x,T,F,z;if(void 0===t)p="utf8",a=this.length,t=0;else if(void 0===a&&"string"==typeof t)p=t,a=this.length,t=0;else if(isFinite(t))t>>>=0,isFinite(a)?(a>>>=0,void 0===p&&(p="utf8")):(p=a,a=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let W=this.length-t;if((void 0===a||a>W)&&(a=W),e.length>0&&(a<0||t<0)||t>this.length)throw RangeError("Attempt to write outside buffer bounds");p||(p="utf8");let K=!1;for(;;)switch(p){case"hex":return function(e,t,a,p){let g;a=Number(a)||0;let m=e.length-a;p?(p=Number(p))>m&&(p=m):p=m;let v=t.length;for(p>v/2&&(p=v/2),g=0;g<p;++g){let p=parseInt(t.substr(2*g,2),16);if(p!=p)break;e[a+g]=p}return g}(this,e,t,a);case"utf8":case"utf-8":return g=t,m=a,blitBuffer(utf8ToBytes(e,this.length-g),this,g,m);case"ascii":case"latin1":case"binary":return v=t,_=a,blitBuffer(function(e){let t=[];for(let a=0;a<e.length;++a)t.push(255&e.charCodeAt(a));return t}(e),this,v,_);case"base64":return x=t,T=a,blitBuffer(base64ToBytes(e),this,x,T);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return F=t,z=a,blitBuffer(function(e,t){let a,p;let g=[];for(let m=0;m<e.length&&!((t-=2)<0);++m)p=(a=e.charCodeAt(m))>>8,g.push(a%256),g.push(p);return g}(e,this.length-F),this,F,z);default:if(K)throw TypeError("Unknown encoding: "+p);p=(""+p).toLowerCase(),K=!0}},Buffer.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},Buffer.prototype.slice=function(e,t){let a=this.length;e=~~e,t=void 0===t?a:~~t,e<0?(e+=a)<0&&(e=0):e>a&&(e=a),t<0?(t+=a)<0&&(t=0):t>a&&(t=a),t<e&&(t=e);let p=this.subarray(e,t);return Object.setPrototypeOf(p,Buffer.prototype),p},Buffer.prototype.readUintLE=Buffer.prototype.readUIntLE=function(e,t,a){e>>>=0,t>>>=0,a||checkOffset(e,t,this.length);let p=this[e],g=1,m=0;for(;++m<t&&(g*=256);)p+=this[e+m]*g;return p},Buffer.prototype.readUintBE=Buffer.prototype.readUIntBE=function(e,t,a){e>>>=0,t>>>=0,a||checkOffset(e,t,this.length);let p=this[e+--t],g=1;for(;t>0&&(g*=256);)p+=this[e+--t]*g;return p},Buffer.prototype.readUint8=Buffer.prototype.readUInt8=function(e,t){return e>>>=0,t||checkOffset(e,1,this.length),this[e]},Buffer.prototype.readUint16LE=Buffer.prototype.readUInt16LE=function(e,t){return e>>>=0,t||checkOffset(e,2,this.length),this[e]|this[e+1]<<8},Buffer.prototype.readUint16BE=Buffer.prototype.readUInt16BE=function(e,t){return e>>>=0,t||checkOffset(e,2,this.length),this[e]<<8|this[e+1]},Buffer.prototype.readUint32LE=Buffer.prototype.readUInt32LE=function(e,t){return e>>>=0,t||checkOffset(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},Buffer.prototype.readUint32BE=Buffer.prototype.readUInt32BE=function(e,t){return e>>>=0,t||checkOffset(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},Buffer.prototype.readBigUInt64LE=defineBigIntMethod(function(e){validateNumber(e>>>=0,"offset");let t=this[e],a=this[e+7];(void 0===t||void 0===a)&&boundsError(e,this.length-8);let p=t+256*this[++e]+65536*this[++e]+16777216*this[++e],g=this[++e]+256*this[++e]+65536*this[++e]+16777216*a;return BigInt(p)+(BigInt(g)<<BigInt(32))}),Buffer.prototype.readBigUInt64BE=defineBigIntMethod(function(e){validateNumber(e>>>=0,"offset");let t=this[e],a=this[e+7];(void 0===t||void 0===a)&&boundsError(e,this.length-8);let p=16777216*t+65536*this[++e]+256*this[++e]+this[++e],g=16777216*this[++e]+65536*this[++e]+256*this[++e]+a;return(BigInt(p)<<BigInt(32))+BigInt(g)}),Buffer.prototype.readIntLE=function(e,t,a){e>>>=0,t>>>=0,a||checkOffset(e,t,this.length);let p=this[e],g=1,m=0;for(;++m<t&&(g*=256);)p+=this[e+m]*g;return p>=(g*=128)&&(p-=Math.pow(2,8*t)),p},Buffer.prototype.readIntBE=function(e,t,a){e>>>=0,t>>>=0,a||checkOffset(e,t,this.length);let p=t,g=1,m=this[e+--p];for(;p>0&&(g*=256);)m+=this[e+--p]*g;return m>=(g*=128)&&(m-=Math.pow(2,8*t)),m},Buffer.prototype.readInt8=function(e,t){return(e>>>=0,t||checkOffset(e,1,this.length),128&this[e])?-((255-this[e]+1)*1):this[e]},Buffer.prototype.readInt16LE=function(e,t){e>>>=0,t||checkOffset(e,2,this.length);let a=this[e]|this[e+1]<<8;return 32768&a?4294901760|a:a},Buffer.prototype.readInt16BE=function(e,t){e>>>=0,t||checkOffset(e,2,this.length);let a=this[e+1]|this[e]<<8;return 32768&a?4294901760|a:a},Buffer.prototype.readInt32LE=function(e,t){return e>>>=0,t||checkOffset(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},Buffer.prototype.readInt32BE=function(e,t){return e>>>=0,t||checkOffset(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},Buffer.prototype.readBigInt64LE=defineBigIntMethod(function(e){validateNumber(e>>>=0,"offset");let t=this[e],a=this[e+7];(void 0===t||void 0===a)&&boundsError(e,this.length-8);let p=this[e+4]+256*this[e+5]+65536*this[e+6]+(a<<24);return(BigInt(p)<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+16777216*this[++e])}),Buffer.prototype.readBigInt64BE=defineBigIntMethod(function(e){validateNumber(e>>>=0,"offset");let t=this[e],a=this[e+7];(void 0===t||void 0===a)&&boundsError(e,this.length-8);let p=(t<<24)+65536*this[++e]+256*this[++e]+this[++e];return(BigInt(p)<<BigInt(32))+BigInt(16777216*this[++e]+65536*this[++e]+256*this[++e]+a)}),Buffer.prototype.readFloatLE=function(e,t){return e>>>=0,t||checkOffset(e,4,this.length),g.read(this,e,!0,23,4)},Buffer.prototype.readFloatBE=function(e,t){return e>>>=0,t||checkOffset(e,4,this.length),g.read(this,e,!1,23,4)},Buffer.prototype.readDoubleLE=function(e,t){return e>>>=0,t||checkOffset(e,8,this.length),g.read(this,e,!0,52,8)},Buffer.prototype.readDoubleBE=function(e,t){return e>>>=0,t||checkOffset(e,8,this.length),g.read(this,e,!1,52,8)},Buffer.prototype.writeUintLE=Buffer.prototype.writeUIntLE=function(e,t,a,p){if(e=+e,t>>>=0,a>>>=0,!p){let p=Math.pow(2,8*a)-1;checkInt(this,e,t,a,p,0)}let g=1,m=0;for(this[t]=255&e;++m<a&&(g*=256);)this[t+m]=e/g&255;return t+a},Buffer.prototype.writeUintBE=Buffer.prototype.writeUIntBE=function(e,t,a,p){if(e=+e,t>>>=0,a>>>=0,!p){let p=Math.pow(2,8*a)-1;checkInt(this,e,t,a,p,0)}let g=a-1,m=1;for(this[t+g]=255&e;--g>=0&&(m*=256);)this[t+g]=e/m&255;return t+a},Buffer.prototype.writeUint8=Buffer.prototype.writeUInt8=function(e,t,a){return e=+e,t>>>=0,a||checkInt(this,e,t,1,255,0),this[t]=255&e,t+1},Buffer.prototype.writeUint16LE=Buffer.prototype.writeUInt16LE=function(e,t,a){return e=+e,t>>>=0,a||checkInt(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},Buffer.prototype.writeUint16BE=Buffer.prototype.writeUInt16BE=function(e,t,a){return e=+e,t>>>=0,a||checkInt(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},Buffer.prototype.writeUint32LE=Buffer.prototype.writeUInt32LE=function(e,t,a){return e=+e,t>>>=0,a||checkInt(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},Buffer.prototype.writeUint32BE=Buffer.prototype.writeUInt32BE=function(e,t,a){return e=+e,t>>>=0,a||checkInt(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},Buffer.prototype.writeBigUInt64LE=defineBigIntMethod(function(e,t=0){return wrtBigUInt64LE(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))}),Buffer.prototype.writeBigUInt64BE=defineBigIntMethod(function(e,t=0){return wrtBigUInt64BE(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))}),Buffer.prototype.writeIntLE=function(e,t,a,p){if(e=+e,t>>>=0,!p){let p=Math.pow(2,8*a-1);checkInt(this,e,t,a,p-1,-p)}let g=0,m=1,v=0;for(this[t]=255&e;++g<a&&(m*=256);)e<0&&0===v&&0!==this[t+g-1]&&(v=1),this[t+g]=(e/m>>0)-v&255;return t+a},Buffer.prototype.writeIntBE=function(e,t,a,p){if(e=+e,t>>>=0,!p){let p=Math.pow(2,8*a-1);checkInt(this,e,t,a,p-1,-p)}let g=a-1,m=1,v=0;for(this[t+g]=255&e;--g>=0&&(m*=256);)e<0&&0===v&&0!==this[t+g+1]&&(v=1),this[t+g]=(e/m>>0)-v&255;return t+a},Buffer.prototype.writeInt8=function(e,t,a){return e=+e,t>>>=0,a||checkInt(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},Buffer.prototype.writeInt16LE=function(e,t,a){return e=+e,t>>>=0,a||checkInt(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},Buffer.prototype.writeInt16BE=function(e,t,a){return e=+e,t>>>=0,a||checkInt(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},Buffer.prototype.writeInt32LE=function(e,t,a){return e=+e,t>>>=0,a||checkInt(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},Buffer.prototype.writeInt32BE=function(e,t,a){return e=+e,t>>>=0,a||checkInt(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},Buffer.prototype.writeBigInt64LE=defineBigIntMethod(function(e,t=0){return wrtBigUInt64LE(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),Buffer.prototype.writeBigInt64BE=defineBigIntMethod(function(e,t=0){return wrtBigUInt64BE(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),Buffer.prototype.writeFloatLE=function(e,t,a){return writeFloat(this,e,t,!0,a)},Buffer.prototype.writeFloatBE=function(e,t,a){return writeFloat(this,e,t,!1,a)},Buffer.prototype.writeDoubleLE=function(e,t,a){return writeDouble(this,e,t,!0,a)},Buffer.prototype.writeDoubleBE=function(e,t,a){return writeDouble(this,e,t,!1,a)},Buffer.prototype.copy=function(e,t,a,p){if(!Buffer.isBuffer(e))throw TypeError("argument should be a Buffer");if(a||(a=0),p||0===p||(p=this.length),t>=e.length&&(t=e.length),t||(t=0),p>0&&p<a&&(p=a),p===a||0===e.length||0===this.length)return 0;if(t<0)throw RangeError("targetStart out of bounds");if(a<0||a>=this.length)throw RangeError("Index out of range");if(p<0)throw RangeError("sourceEnd out of bounds");p>this.length&&(p=this.length),e.length-t<p-a&&(p=e.length-t+a);let g=p-a;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,a,p):Uint8Array.prototype.set.call(e,this.subarray(a,p),t),g},Buffer.prototype.fill=function(e,t,a,p){let g;if("string"==typeof e){if("string"==typeof t?(p=t,t=0,a=this.length):"string"==typeof a&&(p=a,a=this.length),void 0!==p&&"string"!=typeof p)throw TypeError("encoding must be a string");if("string"==typeof p&&!Buffer.isEncoding(p))throw TypeError("Unknown encoding: "+p);if(1===e.length){let t=e.charCodeAt(0);("utf8"===p&&t<128||"latin1"===p)&&(e=t)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<a)throw RangeError("Out of range index");if(a<=t)return this;if(t>>>=0,a=void 0===a?this.length:a>>>0,e||(e=0),"number"==typeof e)for(g=t;g<a;++g)this[g]=e;else{let m=Buffer.isBuffer(e)?e:Buffer.from(e,p),v=m.length;if(0===v)throw TypeError('The value "'+e+'" is invalid for argument "value"');for(g=0;g<a-t;++g)this[g+t]=m[g%v]}return this};let v={};function E(e,t,a){v[e]=class extends a{constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${e}]`,this.stack,delete this.name}get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${e}]: ${this.message}`}}}function addNumericalSeparator(e){let t="",a=e.length,p="-"===e[0]?1:0;for(;a>=p+4;a-=3)t=`_${e.slice(a-3,a)}${t}`;return`${e.slice(0,a)}${t}`}function checkIntBI(e,t,a,p,g,m){if(e>a||e<t){let p;let g="bigint"==typeof t?"n":"";throw p=m>3?0===t||t===BigInt(0)?`>= 0${g} and < 2${g} ** ${(m+1)*8}${g}`:`>= -(2${g} ** ${(m+1)*8-1}${g}) and < 2 ** ${(m+1)*8-1}${g}`:`>= ${t}${g} and <= ${a}${g}`,new v.ERR_OUT_OF_RANGE("value",p,e)}validateNumber(g,"offset"),(void 0===p[g]||void 0===p[g+m])&&boundsError(g,p.length-(m+1))}function validateNumber(e,t){if("number"!=typeof e)throw new v.ERR_INVALID_ARG_TYPE(t,"number",e)}function boundsError(e,t,a){if(Math.floor(e)!==e)throw validateNumber(e,a),new v.ERR_OUT_OF_RANGE(a||"offset","an integer",e);if(t<0)throw new v.ERR_BUFFER_OUT_OF_BOUNDS;throw new v.ERR_OUT_OF_RANGE(a||"offset",`>= ${a?1:0} and <= ${t}`,e)}E("ERR_BUFFER_OUT_OF_BOUNDS",function(e){return e?`${e} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),E("ERR_INVALID_ARG_TYPE",function(e,t){return`The "${e}" argument must be of type number. Received type ${typeof t}`},TypeError),E("ERR_OUT_OF_RANGE",function(e,t,a){let p=`The value of "${e}" is out of range.`,g=a;return Number.isInteger(a)&&Math.abs(a)>4294967296?g=addNumericalSeparator(String(a)):"bigint"==typeof a&&(g=String(a),(a>BigInt(2)**BigInt(32)||a<-(BigInt(2)**BigInt(32)))&&(g=addNumericalSeparator(g)),g+="n"),p+=` It must be ${t}. Received ${g}`},RangeError);let _=/[^+/0-9A-Za-z-_]/g;function utf8ToBytes(e,t){let a;t=t||1/0;let p=e.length,g=null,m=[];for(let v=0;v<p;++v){if((a=e.charCodeAt(v))>55295&&a<57344){if(!g){if(a>56319||v+1===p){(t-=3)>-1&&m.push(239,191,189);continue}g=a;continue}if(a<56320){(t-=3)>-1&&m.push(239,191,189),g=a;continue}a=(g-55296<<10|a-56320)+65536}else g&&(t-=3)>-1&&m.push(239,191,189);if(g=null,a<128){if((t-=1)<0)break;m.push(a)}else if(a<2048){if((t-=2)<0)break;m.push(a>>6|192,63&a|128)}else if(a<65536){if((t-=3)<0)break;m.push(a>>12|224,a>>6&63|128,63&a|128)}else if(a<1114112){if((t-=4)<0)break;m.push(a>>18|240,a>>12&63|128,a>>6&63|128,63&a|128)}else throw Error("Invalid code point")}return m}function base64ToBytes(e){return p.toByteArray(function(e){if((e=(e=e.split("=")[0]).trim().replace(_,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function blitBuffer(e,t,a,p){let g;for(g=0;g<p&&!(g+a>=t.length)&&!(g>=e.length);++g)t[g+a]=e[g];return g}function isInstance(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}let x=function(){let e="0123456789abcdef",t=Array(256);for(let a=0;a<16;++a){let p=16*a;for(let g=0;g<16;++g)t[p+g]=e[a]+e[g]}return t}();function defineBigIntMethod(e){return"undefined"==typeof BigInt?BufferBigIntNotDefined:e}function BufferBigIntNotDefined(){throw Error("BigInt not supported")}},44020:function(e){"use strict";var t="%[a-f0-9]{2}",a=RegExp("("+t+")|([^%]+?)","gi"),p=RegExp("("+t+")+","gi");e.exports=function(e){if("string"!=typeof e)throw TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var t={"%FE%FF":"��","%FF%FE":"��"},g=p.exec(e);g;){try{t[g[0]]=decodeURIComponent(g[0])}catch(e){var m=function(e){try{return decodeURIComponent(e)}catch(g){for(var t=e.match(a)||[],p=1;p<t.length;p++)t=(e=(function decodeComponents(e,t){try{return[decodeURIComponent(e.join(""))]}catch(e){}if(1===e.length)return e;t=t||1;var a=e.slice(0,t),p=e.slice(t);return Array.prototype.concat.call([],decodeComponents(a),decodeComponents(p))})(t,p).join("")).match(a)||[];return e}}(g[0]);m!==g[0]&&(t[g[0]]=m)}g=p.exec(e)}t["%C2"]="�";for(var v=Object.keys(t),_=0;_<v.length;_++){var x=v[_];e=e.replace(RegExp(x,"g"),t[x])}return e}(e)}}},65987:function(e){"use strict";var t={single_source_shortest_paths:function(e,a,p){var g,m,v,_,x,T,F,z={},W={};W[a]=0;var K=t.PriorityQueue.make();for(K.push(a,0);!K.empty();)for(v in m=(g=K.pop()).value,_=g.cost,x=e[m]||{})x.hasOwnProperty(v)&&(T=_+x[v],F=W[v],(void 0===W[v]||F>T)&&(W[v]=T,K.push(v,T),z[v]=m));if(void 0!==p&&void 0===W[p])throw Error(["Could not find a path from ",a," to ",p,"."].join(""));return z},extract_shortest_path_from_predecessor_list:function(e,t){for(var a=[],p=t;p;)a.push(p),e[p],p=e[p];return a.reverse(),a},find_path:function(e,a,p){var g=t.single_source_shortest_paths(e,a,p);return t.extract_shortest_path_from_predecessor_list(g,p)},PriorityQueue:{make:function(e){var a,p=t.PriorityQueue,g={};for(a in e=e||{},p)p.hasOwnProperty(a)&&(g[a]=p[a]);return g.queue=[],g.sorter=e.sorter||p.default_sorter,g},default_sorter:function(e,t){return e.cost-t.cost},push:function(e,t){this.queue.push({value:e,cost:t}),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};e.exports=t},62378:function(e){"use strict";e.exports=function(e){for(var t=[],a=e.length,p=0;p<a;p++){var g=e.charCodeAt(p);if(g>=55296&&g<=56319&&a>p+1){var m=e.charCodeAt(p+1);m>=56320&&m<=57343&&(g=(g-55296)*1024+m-56320+65536,p+=1)}if(g<128){t.push(g);continue}if(g<2048){t.push(g>>6|192),t.push(63&g|128);continue}if(g<55296||g>=57344&&g<65536){t.push(g>>12|224),t.push(g>>6&63|128),t.push(63&g|128);continue}if(g>=65536&&g<=1114111){t.push(g>>18|240),t.push(g>>12&63|128),t.push(g>>6&63|128),t.push(63&g|128);continue}t.push(239,191,189)}return new Uint8Array(t).buffer}},26729:function(e){"use strict";var t=Object.prototype.hasOwnProperty,a="~";function Events(){}function EE(e,t,a){this.fn=e,this.context=t,this.once=a||!1}function addListener(e,t,p,g,m){if("function"!=typeof p)throw TypeError("The listener must be a function");var v=new EE(p,g||e,m),_=a?a+t:t;return e._events[_]?e._events[_].fn?e._events[_]=[e._events[_],v]:e._events[_].push(v):(e._events[_]=v,e._eventsCount++),e}function clearEvent(e,t){0==--e._eventsCount?e._events=new Events:delete e._events[t]}function EventEmitter(){this._events=new Events,this._eventsCount=0}Object.create&&(Events.prototype=Object.create(null),new Events().__proto__||(a=!1)),EventEmitter.prototype.eventNames=function(){var e,p,g=[];if(0===this._eventsCount)return g;for(p in e=this._events)t.call(e,p)&&g.push(a?p.slice(1):p);return Object.getOwnPropertySymbols?g.concat(Object.getOwnPropertySymbols(e)):g},EventEmitter.prototype.listeners=function(e){var t=a?a+e:e,p=this._events[t];if(!p)return[];if(p.fn)return[p.fn];for(var g=0,m=p.length,v=Array(m);g<m;g++)v[g]=p[g].fn;return v},EventEmitter.prototype.listenerCount=function(e){var t=a?a+e:e,p=this._events[t];return p?p.fn?1:p.length:0},EventEmitter.prototype.emit=function(e,t,p,g,m,v){var _=a?a+e:e;if(!this._events[_])return!1;var x,T,F=this._events[_],z=arguments.length;if(F.fn){switch(F.once&&this.removeListener(e,F.fn,void 0,!0),z){case 1:return F.fn.call(F.context),!0;case 2:return F.fn.call(F.context,t),!0;case 3:return F.fn.call(F.context,t,p),!0;case 4:return F.fn.call(F.context,t,p,g),!0;case 5:return F.fn.call(F.context,t,p,g,m),!0;case 6:return F.fn.call(F.context,t,p,g,m,v),!0}for(T=1,x=Array(z-1);T<z;T++)x[T-1]=arguments[T];F.fn.apply(F.context,x)}else{var W,K=F.length;for(T=0;T<K;T++)switch(F[T].once&&this.removeListener(e,F[T].fn,void 0,!0),z){case 1:F[T].fn.call(F[T].context);break;case 2:F[T].fn.call(F[T].context,t);break;case 3:F[T].fn.call(F[T].context,t,p);break;case 4:F[T].fn.call(F[T].context,t,p,g);break;default:if(!x)for(W=1,x=Array(z-1);W<z;W++)x[W-1]=arguments[W];F[T].fn.apply(F[T].context,x)}}return!0},EventEmitter.prototype.on=function(e,t,a){return addListener(this,e,t,a,!1)},EventEmitter.prototype.once=function(e,t,a){return addListener(this,e,t,a,!0)},EventEmitter.prototype.removeListener=function(e,t,p,g){var m=a?a+e:e;if(!this._events[m])return this;if(!t)return clearEvent(this,m),this;var v=this._events[m];if(v.fn)v.fn!==t||g&&!v.once||p&&v.context!==p||clearEvent(this,m);else{for(var _=0,x=[],T=v.length;_<T;_++)(v[_].fn!==t||g&&!v[_].once||p&&v[_].context!==p)&&x.push(v[_]);x.length?this._events[m]=1===x.length?x[0]:x:clearEvent(this,m)}return this},EventEmitter.prototype.removeAllListeners=function(e){var t;return e?(t=a?a+e:e,this._events[t]&&clearEvent(this,t)):(this._events=new Events,this._eventsCount=0),this},EventEmitter.prototype.off=EventEmitter.prototype.removeListener,EventEmitter.prototype.addListener=EventEmitter.prototype.on,EventEmitter.prefixed=a,EventEmitter.EventEmitter=EventEmitter,e.exports=EventEmitter},92806:function(e){"use strict";e.exports=function(e,t){for(var a={},p=Object.keys(e),g=Array.isArray(t),m=0;m<p.length;m++){var v=p[m],_=e[v];(g?-1!==t.indexOf(v):t(v,_,e))&&(a[v]=_)}return a}},80645:function(e,t){/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */t.read=function(e,t,a,p,g){var m,v,_=8*g-p-1,x=(1<<_)-1,T=x>>1,F=-7,z=a?g-1:0,W=a?-1:1,K=e[t+z];for(z+=W,m=K&(1<<-F)-1,K>>=-F,F+=_;F>0;m=256*m+e[t+z],z+=W,F-=8);for(v=m&(1<<-F)-1,m>>=-F,F+=p;F>0;v=256*v+e[t+z],z+=W,F-=8);if(0===m)m=1-T;else{if(m===x)return v?NaN:(K?-1:1)*(1/0);v+=Math.pow(2,p),m-=T}return(K?-1:1)*v*Math.pow(2,m-p)},t.write=function(e,t,a,p,g,m){var v,_,x,T=8*m-g-1,F=(1<<T)-1,z=F>>1,W=23===g?5960464477539062e-23:0,K=p?0:m-1,Z=p?1:-1,Q=t<0||0===t&&1/t<0?1:0;for(isNaN(t=Math.abs(t))||t===1/0?(_=isNaN(t)?1:0,v=F):(v=Math.floor(Math.log(t)/Math.LN2),t*(x=Math.pow(2,-v))<1&&(v--,x*=2),v+z>=1?t+=W/x:t+=W*Math.pow(2,1-z),t*x>=2&&(v++,x/=2),v+z>=F?(_=0,v=F):v+z>=1?(_=(t*x-1)*Math.pow(2,g),v+=z):(_=t*Math.pow(2,z-1)*Math.pow(2,g),v=0));g>=8;e[a+K]=255&_,K+=Z,_/=256,g-=8);for(v=v<<g|_,T+=g;T>0;e[a+K]=255&v,K+=Z,v/=256,T-=8);e[a+K-Z]|=128*Q}},83454:function(e,t,a){"use strict";var p,g;e.exports=(null==(p=a.g.process)?void 0:p.env)&&"object"==typeof(null==(g=a.g.process)?void 0:g.env)?a.g.process:a(77663)},6840:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return a(73938)}])},90880:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return Q}});let p=a(38754),g=a(61757),m=g._(a(67294)),v=p._(a(73935)),_=p._(a(34605)),x=a(73405),T=a(22269),F=a(95264);a(53213);let z=a(95734),W=p._(a(72854)),K={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function handleLoading(e,t,a,p,g,m){let v=null==e?void 0:e.src;if(!e||e["data-loaded-src"]===v)return;e["data-loaded-src"]=v;let _="decode"in e?e.decode():Promise.resolve();_.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&g(!0),null==a?void 0:a.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let p=!1,g=!1;a.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>p,isPropagationStopped:()=>g,persist:()=>{},preventDefault:()=>{p=!0,t.preventDefault()},stopPropagation:()=>{g=!0,t.stopPropagation()}})}(null==p?void 0:p.current)&&p.current(e)}})}function getDynamicProps(e){let[t,a]=m.version.split("."),p=parseInt(t,10),g=parseInt(a,10);return p>18||18===p&&g>=3?{fetchPriority:e}:{fetchpriority:e}}let Z=(0,m.forwardRef)((e,t)=>{let{src:a,srcSet:p,sizes:g,height:v,width:_,decoding:x,className:T,style:F,fetchPriority:z,placeholder:W,loading:K,unoptimized:Z,fill:Q,onLoadRef:X,onLoadingCompleteRef:Y,setBlurComplete:J,setShowAltText:ei,onLoad:en,onError:eo,...ea}=e;return m.default.createElement("img",{...ea,...getDynamicProps(z),loading:K,width:_,height:v,decoding:x,"data-nimg":Q?"fill":"1",className:T,style:F,sizes:g,srcSet:p,src:a,ref:(0,m.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(eo&&(e.src=e.src),e.complete&&handleLoading(e,W,X,Y,J,Z))},[a,W,X,Y,J,eo,Z,t]),onLoad:e=>{let t=e.currentTarget;handleLoading(t,W,X,Y,J,Z)},onError:e=>{ei(!0),"empty"!==W&&J(!0),eo&&eo(e)}})});function ImagePreload(e){let{isAppRouter:t,imgAttributes:a}=e,p={as:"image",imageSrcSet:a.srcSet,imageSizes:a.sizes,crossOrigin:a.crossOrigin,referrerPolicy:a.referrerPolicy,...getDynamicProps(a.fetchPriority)};return t&&v.default.preload?(v.default.preload(a.src,p),null):m.default.createElement(_.default,null,m.default.createElement("link",{key:"__nimg-"+a.src+a.srcSet+a.sizes,rel:"preload",href:a.srcSet?void 0:a.src,...p}))}let Q=(0,m.forwardRef)((e,t)=>{let a=(0,m.useContext)(z.RouterContext),p=(0,m.useContext)(F.ImageConfigContext),g=(0,m.useMemo)(()=>{let e=K||p||T.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),a=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:a}},[p]),{onLoad:v,onLoadingComplete:_}=e,Q=(0,m.useRef)(v);(0,m.useEffect)(()=>{Q.current=v},[v]);let X=(0,m.useRef)(_);(0,m.useEffect)(()=>{X.current=_},[_]);let[Y,J]=(0,m.useState)(!1),[ei,en]=(0,m.useState)(!1),{props:eo,meta:ea}=(0,x.getImgProps)(e,{defaultLoader:W.default,imgConf:g,blurComplete:Y,showAltText:ei});return m.default.createElement(m.default.Fragment,null,m.default.createElement(Z,{...eo,unoptimized:ea.unoptimized,placeholder:ea.placeholder,fill:ea.fill,onLoadRef:Q,onLoadingCompleteRef:X,setBlurComplete:J,setShowAltText:en,ref:t}),ea.priority?m.default.createElement(ImagePreload,{isAppRouter:!a,imgAttributes:eo}):null)});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},73405:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return getImgProps}}),a(53213);let p=a(47736),g=a(22269);function isStaticRequire(e){return void 0!==e.default}function getInt(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function getImgProps(e,t){var a;let m,v,_,{src:x,sizes:T,unoptimized:F=!1,priority:z=!1,loading:W,className:K,quality:Z,width:Q,height:X,fill:Y=!1,style:J,onLoad:ei,onLoadingComplete:en,placeholder:eo="empty",blurDataURL:ea,fetchPriority:es,layout:el,objectFit:ec,objectPosition:eu,lazyBoundary:ed,lazyRoot:eh,...ef}=e,{imgConf:ep,showAltText:eg,blurComplete:em,defaultLoader:ew}=t,eb=ep||g.imageConfigDefault;if("allSizes"in eb)m=eb;else{let e=[...eb.deviceSizes,...eb.imageSizes].sort((e,t)=>e-t),t=eb.deviceSizes.sort((e,t)=>e-t);m={...eb,allSizes:e,deviceSizes:t}}let ey=ef.loader||ew;delete ef.loader,delete ef.srcSet;let ev="__next_img_default"in ey;if(ev){if("custom"===m.loader)throw Error('Image with src "'+x+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=ey;ey=t=>{let{config:a,...p}=t;return e(p)}}if(el){"fill"===el&&(Y=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[el];e&&(J={...J,...e});let t={responsive:"100vw",fill:"100vw"}[el];t&&!T&&(T=t)}let e_="",ex=getInt(Q),eC=getInt(X);if("object"==typeof(a=x)&&(isStaticRequire(a)||void 0!==a.src)){let e=isStaticRequire(x)?x.default:x;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(v=e.blurWidth,_=e.blurHeight,ea=ea||e.blurDataURL,e_=e.src,!Y){if(ex||eC){if(ex&&!eC){let t=ex/e.width;eC=Math.round(e.height*t)}else if(!ex&&eC){let t=eC/e.height;ex=Math.round(e.width*t)}}else ex=e.width,eC=e.height}}let eE=!z&&("lazy"===W||void 0===W);(!(x="string"==typeof x?x:e_)||x.startsWith("data:")||x.startsWith("blob:"))&&(F=!0,eE=!1),m.unoptimized&&(F=!0),ev&&x.endsWith(".svg")&&!m.dangerouslyAllowSVG&&(F=!0),z&&(es="high");let ek=getInt(Z),eS=Object.assign(Y?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:ec,objectPosition:eu}:{},eg?{}:{color:"transparent"},J),eA=em||"empty"===eo?null:"blur"===eo?'url("data:image/svg+xml;charset=utf-8,'+(0,p.getImageBlurSvg)({widthInt:ex,heightInt:eC,blurWidth:v,blurHeight:_,blurDataURL:ea||"",objectFit:eS.objectFit})+'")':'url("'+eo+'")',eP=eA?{backgroundSize:eS.objectFit||"cover",backgroundPosition:eS.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:eA}:{},eD=function(e){let{config:t,src:a,unoptimized:p,width:g,quality:m,sizes:v,loader:_}=e;if(p)return{src:a,srcSet:void 0,sizes:void 0};let{widths:x,kind:T}=function(e,t,a){let{deviceSizes:p,allSizes:g}=e;if(a){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let p;p=e.exec(a);p)t.push(parseInt(p[2]));if(t.length){let e=.01*Math.min(...t);return{widths:g.filter(t=>t>=p[0]*e),kind:"w"}}return{widths:g,kind:"w"}}if("number"!=typeof t)return{widths:p,kind:"w"};let m=[...new Set([t,2*t].map(e=>g.find(t=>t>=e)||g[g.length-1]))];return{widths:m,kind:"x"}}(t,g,v),F=x.length-1;return{sizes:v||"w"!==T?v:"100vw",srcSet:x.map((e,p)=>_({config:t,src:a,quality:m,width:e})+" "+("w"===T?e:p+1)+T).join(", "),src:_({config:t,src:a,quality:m,width:x[F]})}}({config:m,src:x,unoptimized:F,width:ex,quality:ek,sizes:T,loader:ey}),e$={...ef,loading:eE?"lazy":W,fetchPriority:es,width:ex,height:eC,decoding:"async",className:K,style:{...eS,...eP},sizes:eD.sizes,srcSet:eD.srcSet,src:eD.src},eO={unoptimized:F,priority:z,placeholder:eo,fill:Y};return{props:e$,meta:eO}}},47736:function(e,t){"use strict";function getImageBlurSvg(e){let{widthInt:t,heightInt:a,blurWidth:p,blurHeight:g,blurDataURL:m,objectFit:v}=e,_=p?40*p:t,x=g?40*g:a,T=_&&x?"viewBox='0 0 "+_+" "+x+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+T+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(T?"none":"contain"===v?"xMidYMid":"cover"===v?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+m+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return getImageBlurSvg}})},25365:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var a in t)Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}(t,{default:function(){return x},unstable_getImgProps:function(){return unstable_getImgProps}});let p=a(38754),g=a(73405),m=a(53213),v=a(90880),_=p._(a(72854)),unstable_getImgProps=e=>{(0,m.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,g.getImgProps)(e,{defaultLoader:_.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,a]of Object.entries(t))void 0===a&&delete t[e];return{props:t}},x=v.Image},72854:function(e,t){"use strict";function defaultLoader(e){let{config:t,src:a,width:p,quality:g}=e;return t.path+"?url="+encodeURIComponent(a)+"&w="+p+"&q="+(g||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}}),defaultLoader.__next_img_default=!0;let a=defaultLoader},5248:function(e,t,a){"use strict";var p=a(85893),g=a(25675),m=a.n(g),v=a(67294),_=a(22253),x=a.n(_);t.Z=(0,v.forwardRef)(function(e,t){let{className:a,...g}=e,[_,T]=(0,v.useState)(!1),F=_?x().loaded:"";return(0,p.jsx)(m(),{onLoadingComplete:function(){T(!0)},className:"".concat(x().image," ").concat(F," ").concat(a),ref:t,width:0,height:0,...g})})},14803:function(e,t,a){"use strict";var p=a(67891),g=a(67294),m=a(18585),v=a.n(m);t.Z=(0,g.forwardRef)(function(e,t){let{variant:a,children:m,as:_,color:x,className:T,href:F,id:z,target:W,rel:K}=e,Z=(0,p.Z)([v().colorWhite,v().colorBlack,v().colorGrey,v().colorDarkGrey,v().colorLightGrey],["white"===x,"black"===x,"grey"===x,"darkGrey"===x,"lightGrey"===x]);return(0,g.createElement)(_,{ref:t,children:m,href:F,target:W,rel:K,className:"".concat(v()[a]," ").concat(Z," ").concat(null!=T?T:""),id:z})})},67891:function(e,t,a){"use strict";function useConditionalValue(e,t){if("string"==typeof e&&"boolean"==typeof t&&t)return e;if(Array.isArray(e)&&Array.isArray(t)){let a=t.findIndex(e=>e);if(a<0)throw Error("No matching value");return e[a]}throw Error("Invalid useConditionalClass arguments")}a.d(t,{Z:function(){return useConditionalValue}})},73938:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return App}});var p=a(85893),g=a(5248),m=a(14803),v=JSON.parse('[{"title":"WalletConnect","links":[{"title":"Products","link":"https://walletconnect.com/products","type":"internal"},{"title":"Explorer","link":"https://explorer.walletconnect.com/","type":"internal"}]},{"title":"Resources","links":[{"title":"Docs","link":"https://docs.walletconnect.com/","type":"external"},{"title":"GitHub","link":"https://github.com/WalletConnect/","type":"external"},{"title":"FAQ","link":"https://explorer.walletconnect.com/faq","type":"internal"}]},{"title":"Company","links":[{"title":"Blog","link":"https://medium.com/walletconnect/","type":"external"},{"title":"Jobs","link":"https://apply.workable.com/walletconnect/","type":"external"},{"title":"Brand","link":"https://github.com/WalletConnect/walletconnect-assets","type":"external"}]},{"title":"Connect","links":[{"title":"Twitter","link":"https://twitter.com/walletconnect/","type":"external"},{"title":"Discord","link":"https://discord.gg/kdTQHQ6AFQ","type":"external"},{"title":"Mirror","link":"https://walletconnect.mirror.xyz/","type":"external"}]}]'),_=a(69779),x=a.n(_);function Footer(){return(0,p.jsxs)("footer",{className:x().footer,children:[(0,p.jsx)(g.Z,{src:"/images/walletconnect-logo.svg",alt:"WalletConnect logo",className:x().logo}),(0,p.jsx)("nav",{className:x().navigation,children:v.map(e=>(0,p.jsxs)("ul",{className:x().footerList,children:[(0,p.jsx)("li",{className:x().sectionTitle,children:(0,p.jsx)(m.Z,{as:"span",color:"grey",variant:"heading6",children:e.title})}),e.links.map(e=>(0,p.jsx)("li",{className:x().linkItem,children:"internal"===e.type?(0,p.jsx)(m.Z,{as:"a",variant:"anchor",color:"white",href:e.link,className:x().linkAnchor,children:e.title}):(0,p.jsx)(m.Z,{as:"a",variant:"anchor",color:"white",href:e.link,target:"_blank",rel:"noopener noreferrer",className:x().linkAnchor,children:e.title})},e.title))]},e.title))}),(0,p.jsxs)("ul",{className:x().legal,children:[(0,p.jsx)("li",{children:(0,p.jsx)(m.Z,{variant:"heading6",color:"grey",as:"span",children:"\xa9 ".concat(new Date().getFullYear()," WalletConnect, Inc")})}),(0,p.jsx)("li",{children:(0,p.jsx)(m.Z,{as:"a",variant:"anchor",color:"grey",href:"https://explorer.walletconnect.com/terms",target:"_blank",rel:"noopener noreferrer",className:x().linkAnchor,children:"Terms of service"})}),(0,p.jsx)("li",{children:(0,p.jsx)(m.Z,{as:"a",variant:"anchor",color:"grey",href:"https://explorer.walletconnect.com/privacy",target:"_blank",rel:"noopener noreferrer",className:x().linkAnchor,children:"Privacy Policy"})})]})]})}var T=a(67294),F=a(79532),z=a.n(F);function Header(){let{width:e}=function(){let[e,t]=(0,T.useState)({width:0,height:0});return(0,T.useEffect)(()=>{function handleResize(){t({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",handleResize),handleResize(),()=>window.removeEventListener("resize",handleResize)},[]),e}(),t=e<500;return(0,p.jsxs)("header",{className:z().header,children:[(0,p.jsx)("div",{children:(0,p.jsxs)(m.Z,{variant:"heading5",as:"h1",color:"white",children:["Web3Modal"," ",(0,p.jsx)(m.Z,{variant:"anchor",as:"span",color:"white",className:z().version,children:"3.1.0"})]})}),(0,p.jsx)("w3m-button",{label:t?"Connect":"Connect Wallet",balance:t?"hide":"show"})]})}a(10320);var W=a(6802),K=a(4298),Z=a.n(K),Q=a(83454);let getScriptPath=(e,...t)=>{var a,p;let g=null!==(a=e.basePath)&&void 0!==a?a:"";return e.subdirectory&&(g+=`/${e.subdirectory}`),`${g}/js/${[null!==(p=e.scriptName)&&void 0!==p?p:"script",...t.sort().filter(e=>null!==e)].join(".")}.js`},getRemoteScriptName=e=>e?"plausible":"script",getDomain=e=>{var t;return null!==(t=e.customDomain)&&void 0!==t?t:"https://plausible.io"},getApiEndpoint=e=>{var t,a;return`${null!==(t=e.basePath)&&void 0!==t?t:""}/${null!==(a=e.subdirectory)&&void 0!==a?a:"proxy"}/api/event${e.trailingSlash?"/":""}`};function PlausibleProvider(e){let{enabled:t=!Q.env.NEXT_PUBLIC_VERCEL_ENV||"production"===Q.env.NEXT_PUBLIC_VERCEL_ENV}=e,a=Q.env.next_plausible_proxy?{trailingSlash:"true"===Q.env.next_plausible_trailingSlash,basePath:Q.env.next_plausible_basePath,customDomain:Q.env.next_plausible_customDomain,scriptName:Q.env.next_plausible_scriptName,subdirectory:Q.env.next_plausible_subdirectory}:void 0;return T.createElement(T.Fragment,null,t&&T.createElement(Z(),Object.assign({async:!0,defer:!0,"data-api":a?getApiEndpoint(a):void 0,"data-domain":e.domain,"data-exclude":e.exclude,src:(a?"":getDomain(e))+getScriptPath(Object.assign(Object.assign({},a),{scriptName:a?a.scriptName:getRemoteScriptName(e.selfHosted)}),e.trackLocalhost?"local":null,e.manualPageviews?"manual":null,e.pageviewProps?"pageview-props":null,e.trackOutboundLinks?"outbound-links":null,e.exclude?"exclusions":null,e.revenue?"revenue":null,e.trackFileDownloads?"file-downloads":null,e.taggedEvents?"tagged-events":null,e.hash?"hash":null),integrity:e.integrity,crossOrigin:e.integrity?"anonymous":void 0},"object"==typeof e.pageviewProps?Object.fromEntries(Object.entries(e.pageviewProps).map(([e,t])=>[`event-${e}`,t])):void 0,e.scriptProps)),t&&T.createElement(Z(),{id:"next-plausible-init",dangerouslySetInnerHTML:{__html:"window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }"}}),e.children)}var X=a(9008),Y=a.n(X),J=a(66634),ei=a(66403),en=a(22676);let eo=(0,en.ax)({id:42161,name:"Arbitrum One",network:"arbitrum",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{alchemy:{http:["https://arb-mainnet.g.alchemy.com/v2"],webSocket:["wss://arb-mainnet.g.alchemy.com/v2"]},infura:{http:["https://arbitrum-mainnet.infura.io/v3"],webSocket:["wss://arbitrum-mainnet.infura.io/ws/v3"]},default:{http:["https://arb1.arbitrum.io/rpc"]},public:{http:["https://arb1.arbitrum.io/rpc"]}},blockExplorers:{etherscan:{name:"Arbiscan",url:"https://arbiscan.io"},default:{name:"Arbiscan",url:"https://arbiscan.io"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:7654707}}}),ea=(0,en.ax)({id:137,name:"Polygon",network:"matic",nativeCurrency:{name:"MATIC",symbol:"MATIC",decimals:18},rpcUrls:{alchemy:{http:["https://polygon-mainnet.g.alchemy.com/v2"],webSocket:["wss://polygon-mainnet.g.alchemy.com/v2"]},infura:{http:["https://polygon-mainnet.infura.io/v3"],webSocket:["wss://polygon-mainnet.infura.io/ws/v3"]},default:{http:["https://polygon-rpc.com"]},public:{http:["https://polygon-rpc.com"]}},blockExplorers:{etherscan:{name:"PolygonScan",url:"https://polygonscan.com"},default:{name:"PolygonScan",url:"https://polygonscan.com"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:25770160}}}),es=(0,en.ax)({id:43114,name:"Avalanche",network:"avalanche",nativeCurrency:{decimals:18,name:"Avalanche",symbol:"AVAX"},rpcUrls:{default:{http:["https://api.avax.network/ext/bc/C/rpc"]},public:{http:["https://api.avax.network/ext/bc/C/rpc"]}},blockExplorers:{etherscan:{name:"SnowTrace",url:"https://snowtrace.io"},default:{name:"SnowTrace",url:"https://snowtrace.io"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:11907934}}}),el=(0,en.ax)({id:56,name:"BNB Smart Chain",network:"bsc",nativeCurrency:{decimals:18,name:"BNB",symbol:"BNB"},rpcUrls:{default:{http:["https://rpc.ankr.com/bsc"]},public:{http:["https://rpc.ankr.com/bsc"]}},blockExplorers:{etherscan:{name:"BscScan",url:"https://bscscan.com"},default:{name:"BscScan",url:"https://bscscan.com"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:15921452}}});var ec=a(95946),eu=a(43310),ed=a(6073),eh=a(30866);let ef={block:(0,eu.G)({format(e){let t=e.transactions?.map(e=>{if("string"==typeof e)return e;let t=ed.Tr(e);return"0x7e"===t.typeHex&&(t.isSystemTx=e.isSystemTx,t.mint=e.mint?ec.y_(e.mint):void 0,t.sourceHash=e.sourceHash,t.type="deposit"),t});return{transactions:t,stateRoot:e.stateRoot}}}),transaction:(0,ed.y_)({format(e){let t={};return"0x7e"===e.type&&(t.isSystemTx=e.isSystemTx,t.mint=e.mint?(0,ec.y_)(e.mint):void 0,t.sourceHash=e.sourceHash,t.type="deposit"),t}}),transactionReceipt:(0,eh.d)({format:e=>({l1GasPrice:e.l1GasPrice?(0,ec.y_)(e.l1GasPrice):null,l1GasUsed:e.l1GasUsed?(0,ec.y_)(e.l1GasUsed):null,l1Fee:e.l1Fee?(0,ec.y_)(e.l1Fee):null,l1FeeScalar:e.l1FeeScalar?Number(e.l1FeeScalar):null})})},ep=(0,en.ax)({id:10,name:"OP Mainnet",network:"optimism",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{alchemy:{http:["https://opt-mainnet.g.alchemy.com/v2"],webSocket:["wss://opt-mainnet.g.alchemy.com/v2"]},infura:{http:["https://optimism-mainnet.infura.io/v3"],webSocket:["wss://optimism-mainnet.infura.io/ws/v3"]},default:{http:["https://mainnet.optimism.io"]},public:{http:["https://mainnet.optimism.io"]}},blockExplorers:{etherscan:{name:"Etherscan",url:"https://optimistic.etherscan.io"},default:{name:"Optimism Explorer",url:"https://explorer.optimism.io"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:4286263}}},{formatters:ef}),eg=(0,en.ax)({id:100,name:"Gnosis",network:"gnosis",nativeCurrency:{decimals:18,name:"Gnosis",symbol:"xDAI"},rpcUrls:{default:{http:["https://rpc.gnosischain.com"]},public:{http:["https://rpc.gnosischain.com"]}},blockExplorers:{etherscan:{name:"Gnosisscan",url:"https://gnosisscan.io"},default:{name:"Gnosis Chain Explorer",url:"https://blockscout.com/xdai/mainnet"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:21022491}}}),em=(0,en.ax)({id:324,name:"zkSync Era",network:"zksync-era",nativeCurrency:{decimals:18,name:"Ether",symbol:"ETH"},rpcUrls:{default:{http:["https://mainnet.era.zksync.io"],webSocket:["wss://mainnet.era.zksync.io/ws"]},public:{http:["https://mainnet.era.zksync.io"],webSocket:["wss://mainnet.era.zksync.io/ws"]}},blockExplorers:{default:{name:"zkExplorer",url:"https://explorer.zksync.io"}},contracts:{multicall3:{address:"0xF9cda624FBC7e059355ce98a31693d299FACd963"}}}),ew=(0,en.ax)({id:7777777,name:"Zora",network:"zora",nativeCurrency:{decimals:18,name:"Ether",symbol:"ETH"},rpcUrls:{default:{http:["https://rpc.zora.energy"],webSocket:["wss://rpc.zora.energy"]},public:{http:["https://rpc.zora.energy"],webSocket:["wss://rpc.zora.energy"]}},blockExplorers:{default:{name:"Explorer",url:"https://explorer.zora.energy"}},contracts:{multicall3:{address:"0xcA11bde05977b3631167028862bE2a173976CA11",blockCreated:5882}}},{formatters:ef}),eb=(0,en.ax)({id:8453,network:"base",name:"Base",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{alchemy:{http:["https://base-mainnet.g.alchemy.com/v2"],webSocket:["wss://base-mainnet.g.alchemy.com/v2"]},infura:{http:["https://base-mainnet.infura.io/v3"],webSocket:["wss://base-mainnet.infura.io/ws/v3"]},default:{http:["https://mainnet.base.org"]},public:{http:["https://mainnet.base.org"]}},blockExplorers:{blockscout:{name:"Basescout",url:"https://base.blockscout.com"},default:{name:"Basescan",url:"https://basescan.org"},etherscan:{name:"Basescan",url:"https://basescan.org"}},contracts:{multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:5022}}},{formatters:ef});var ey=a(92106),ev=a(74688);let e_={block:(0,eu.G)({exclude:["difficulty","gasLimit","mixHash","nonce","uncles"],format(e){let t=e.transactions?.map(e=>"string"==typeof e?e:{...ed.Tr(e),feeCurrency:e.feeCurrency,gatewayFee:e.gatewayFee?ec.y_(e.gatewayFee):null,gatewayFeeRecipient:e.gatewayFeeRecipient});return{randomness:e.randomness,transactions:t}}}),transaction:(0,ed.y_)({format:e=>({feeCurrency:e.feeCurrency,gatewayFee:e.gatewayFee?(0,ec.y_)(e.gatewayFee):null,gatewayFeeRecipient:e.gatewayFeeRecipient})}),transactionReceipt:(0,eh.d)({format:e=>({feeCurrency:e.feeCurrency,gatewayFee:e.gatewayFee?(0,ec.y_)(e.gatewayFee):null,gatewayFeeRecipient:e.gatewayFeeRecipient})}),transactionRequest:(0,ev.iy)({format(e){let t={feeCurrency:e.feeCurrency,gatewayFee:void 0!==e.gatewayFee?(0,ey.eC)(e.gatewayFee):void 0,gatewayFeeRecipient:e.gatewayFeeRecipient};return"cip42"===e.type&&(t.type="0x7c"),t}})};var ex=a(26087),eC=a(62027),eE=a(80377),ek=a(26445),eS=a(49321),eA=a(57040),eP=a(61836);let NegativeOffsetError=class NegativeOffsetError extends eC.G{constructor({offset:e}){super(`Offset \`${e}\` cannot be negative.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NegativeOffsetError"})}};let PositionOutOfBoundsError=class PositionOutOfBoundsError extends eC.G{constructor({length:e,position:t}){super(`Position \`${t}\` is out of bounds (\`0 < position < ${e}\`).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"PositionOutOfBoundsError"})}};let eD={bytes:new Uint8Array,dataView:new DataView(new ArrayBuffer(0)),position:0,assertPosition(e){if(e<0||e>this.bytes.length-1)throw new PositionOutOfBoundsError({length:this.bytes.length,position:e})},decrementPosition(e){if(e<0)throw new NegativeOffsetError({offset:e});let t=this.position-e;this.assertPosition(t),this.position=t},incrementPosition(e){if(e<0)throw new NegativeOffsetError({offset:e});let t=this.position+e;this.assertPosition(t),this.position=t},inspectByte(e){let t=e??this.position;return this.assertPosition(t),this.bytes[t]},inspectBytes(e,t){let a=t??this.position;return this.assertPosition(a+e-1),this.bytes.subarray(a,a+e)},inspectUint8(e){let t=e??this.position;return this.assertPosition(t),this.bytes[t]},inspectUint16(e){let t=e??this.position;return this.assertPosition(t+1),this.dataView.getUint16(t)},inspectUint24(e){let t=e??this.position;return this.assertPosition(t+2),(this.dataView.getUint16(t)<<8)+this.dataView.getUint8(t+2)},inspectUint32(e){let t=e??this.position;return this.assertPosition(t+3),this.dataView.getUint32(t)},pushByte(e){this.assertPosition(this.position),this.bytes[this.position]=e,this.position++},pushBytes(e){this.assertPosition(this.position+e.length-1),this.bytes.set(e,this.position),this.position+=e.length},pushUint8(e){this.assertPosition(this.position),this.bytes[this.position]=e,this.position++},pushUint16(e){this.assertPosition(this.position+1),this.dataView.setUint16(this.position,e),this.position+=2},pushUint24(e){this.assertPosition(this.position+2),this.dataView.setUint16(this.position,e>>8),this.dataView.setUint8(this.position+2,255&e),this.position+=3},pushUint32(e){this.assertPosition(this.position+3),this.dataView.setUint32(this.position,e),this.position+=4},readByte(){let e=this.inspectByte();return this.position++,e},readBytes(e){let t=this.inspectBytes(e);return this.position+=e,t},readUint8(){let e=this.inspectUint8();return this.position+=1,e},readUint16(){let e=this.inspectUint16();return this.position+=2,e},readUint24(){let e=this.inspectUint24();return this.position+=3,e},readUint32(){let e=this.inspectUint32();return this.position+=4,e},setPosition(e){this.assertPosition(e),this.position=e}};var e$=a(11187);function toRlp(e,t="hex"){let a=function getEncodable(e){return Array.isArray(e)?function(e){let t=e.reduce((e,t)=>e+t.length,0),a=getSizeOfLength(t),p=t<=55?1+t:1+a+t;return{length:p,encode(p){t<=55?p.pushByte(192+t):(p.pushByte(247+a),1===a?p.pushUint8(t):2===a?p.pushUint16(t):3===a?p.pushUint24(t):p.pushUint32(t)),e.forEach(e=>e.encode(p))}}}(e.map(e=>getEncodable(e))):function(e){let t="string"==typeof e?(0,e$.nr)(e):e,a=getSizeOfLength(t.length),p=1===t.length&&t[0]<128?1:t.length<=55?1+t.length:1+a+t.length;return{length:p,encode(e){1===t.length&&t[0]<128||(t.length<=55?e.pushByte(128+t.length):(e.pushByte(183+a),1===a?e.pushUint8(t.length):2===a?e.pushUint16(t.length):3===a?e.pushUint24(t.length):e.pushUint32(t.length))),e.pushBytes(t)}}}(e)}(e),p=function(e){let t=Object.create(eD);return t.bytes=e,t.dataView=new DataView(e.buffer,e.byteOffset,e.byteLength),t}(new Uint8Array(a.length));return(a.encode(p),"hex"===t)?(0,ey.ci)(p.bytes):p.bytes}function getSizeOfLength(e){if(e<256)return 1;if(e<65536)return 2;if(e<16777216)return 3;if(e<4294967296)return 4;throw new eC.G("Length is too large.")}var eO=a(33639);function serializeAccessList(e){if(!e||0===e.length)return[];let t=[];for(let a=0;a<e.length;a++){let{address:p,storageKeys:g}=e[a];for(let e=0;e<g.length;e++)if(g[e].length-2!=64)throw new eO.JC({storageKey:g[e]});if(!(0,eS.U)(p))throw new ex.b({address:p});t.push([p,g])}return t}var eI=a(82994);let eT=(0,en.ax)({id:42220,name:"Celo",network:"celo",nativeCurrency:{decimals:18,name:"CELO",symbol:"CELO"},rpcUrls:{default:{http:["https://forno.celo.org"]},infura:{http:["https://celo-mainnet.infura.io/v3"]},public:{http:["https://forno.celo.org"]}},blockExplorers:{default:{name:"Celo Explorer",url:"https://explorer.celo.org/mainnet"},etherscan:{name:"CeloScan",url:"https://celoscan.io"}},contracts:{multicall3:{address:"0xcA11bde05977b3631167028862bE2a173976CA11",blockCreated:13112599}},testnet:!1},{formatters:e_,serializers:{transaction:(e,t)=>"maxFeePerGas"in e&&"maxPriorityFeePerGas"in e&&("feeCurrency"in e||"gatewayFee"in e||"gatewayFeeRecipient"in e)?function(e,t){!function(e){let{chainId:t,maxPriorityFeePerGas:a,gasPrice:p,maxFeePerGas:g,to:m,feeCurrency:v,gatewayFee:_,gatewayFeeRecipient:x}=e;if(t<=0)throw new eE.hJ({chainId:t});if(m&&!(0,eS.U)(m))throw new ex.b({address:m});if(p)throw new eC.G("`gasPrice` is not a valid CIP-42 Transaction attribute.");if(g&&g>0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffn)throw new ek.Hh({maxFeePerGas:g});if(a&&g&&a>g)throw new ek.cs({maxFeePerGas:g,maxPriorityFeePerGas:a});if(_&&!x||x&&!_)throw new eC.G("`gatewayFee` and `gatewayFeeRecipient` must be provided together.");if(v&&!v?.startsWith("0x"))throw new eC.G("`feeCurrency` MUST be a token address for CIP-42 transactions.");if(!v&&!x)throw new eC.G("Either `feeCurrency` or `gatewayFeeRecipient` must be provided for CIP-42 transactions.")}(e);let{chainId:a,gas:p,nonce:g,to:m,value:v,maxFeePerGas:_,maxPriorityFeePerGas:x,accessList:T,feeCurrency:F,gatewayFeeRecipient:z,gatewayFee:W,data:K}=e,Z=[(0,ey.NC)(a),g?(0,ey.NC)(g):"0x",x?(0,ey.NC)(x):"0x",_?(0,ey.NC)(_):"0x",p?(0,ey.NC)(p):"0x",F??"0x",z??"0x",W?(0,ey.NC)(W):"0x",m??"0x",v?(0,ey.NC)(v):"0x",K??"0x",serializeAccessList(T)];return t&&Z.push(27n===t.v?"0x":(0,ey.NC)(1),(0,eP.f)(t.r),(0,eP.f)(t.s)),(0,eA.SM)(["0x7c",toRlp(Z)])}(e,t):function(e,t){let a=(0,eI.l)(e);return"eip1559"===a?function(e,t){let{chainId:a,gas:p,nonce:g,to:m,value:v,maxFeePerGas:_,maxPriorityFeePerGas:x,accessList:T,data:F}=e;!function(e){let{chainId:t,maxPriorityFeePerGas:a,gasPrice:p,maxFeePerGas:g,to:m}=e;if(t<=0)throw new eE.hJ({chainId:t});if(m&&!(0,eS.U)(m))throw new ex.b({address:m});if(p)throw new eC.G("`gasPrice` is not a valid EIP-1559 Transaction attribute.");if(g&&g>2n**256n-1n)throw new ek.Hh({maxFeePerGas:g});if(a&&g&&a>g)throw new ek.cs({maxFeePerGas:g,maxPriorityFeePerGas:a})}(e);let z=serializeAccessList(T),W=[(0,ey.NC)(a),g?(0,ey.NC)(g):"0x",x?(0,ey.NC)(x):"0x",_?(0,ey.NC)(_):"0x",p?(0,ey.NC)(p):"0x",m??"0x",v?(0,ey.NC)(v):"0x",F??"0x",z];return t&&W.push(27n===t.v?"0x":(0,ey.NC)(1),(0,eP.f)(t.r),(0,eP.f)(t.s)),(0,eA.SM)(["0x02",toRlp(W)])}(e,t):"eip2930"===a?function(e,t){let{chainId:a,gas:p,data:g,nonce:m,to:v,value:_,accessList:x,gasPrice:T}=e;!function(e){let{chainId:t,maxPriorityFeePerGas:a,gasPrice:p,maxFeePerGas:g,to:m}=e;if(t<=0)throw new eE.hJ({chainId:t});if(m&&!(0,eS.U)(m))throw new ex.b({address:m});if(a||g)throw new eC.G("`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid EIP-2930 Transaction attribute.");if(p&&p>2n**256n-1n)throw new ek.Hh({maxFeePerGas:p})}(e);let F=serializeAccessList(x),z=[(0,ey.NC)(a),m?(0,ey.NC)(m):"0x",T?(0,ey.NC)(T):"0x",p?(0,ey.NC)(p):"0x",v??"0x",_?(0,ey.NC)(_):"0x",g??"0x",F];return t&&z.push(27n===t.v?"0x":(0,ey.NC)(1),t.r,t.s),(0,eA.SM)(["0x01",toRlp(z)])}(e,t):function(e,t){let{chainId:a=0,gas:p,data:g,nonce:m,to:v,value:_,gasPrice:x}=e;!function(e){let{chainId:t,maxPriorityFeePerGas:a,gasPrice:p,maxFeePerGas:g,to:m,accessList:v}=e;if(m&&!(0,eS.U)(m))throw new ex.b({address:m});if(void 0!==t&&t<=0)throw new eE.hJ({chainId:t});if(a||g)throw new eC.G("`maxFeePerGas`/`maxPriorityFeePerGas` is not a valid Legacy Transaction attribute.");if(p&&p>2n**256n-1n)throw new ek.Hh({maxFeePerGas:p});if(v)throw new eC.G("`accessList` is not a valid Legacy Transaction attribute.")}(e);let T=[m?(0,ey.NC)(m):"0x",x?(0,ey.NC)(x):"0x",p?(0,ey.NC)(p):"0x",v??"0x",_?(0,ey.NC)(_):"0x",g??"0x"];if(t){let e=27n+(27n===t.v?0n:1n);if(a>0)e=BigInt(2*a)+BigInt(35n+t.v-27n);else if(t.v!==e)throw new eO.vl({v:t.v});T=[...T,(0,ey.NC)(e),t.r,t.s]}else a>0&&(T=[...T,(0,ey.NC)(a),"0x","0x"]);return toRlp(T)}(e,t)}(e,t)}}),eR=(0,en.ax)({id:1313161554,name:"Aurora",network:"aurora",nativeCurrency:{decimals:18,name:"Ether",symbol:"ETH"},rpcUrls:{infura:{http:["https://aurora-mainnet.infura.io/v3"]},default:{http:["https://mainnet.aurora.dev"]},public:{http:["https://mainnet.aurora.dev"]}},blockExplorers:{etherscan:{name:"Aurorascan",url:"https://aurorascan.dev"},default:{name:"Aurorascan",url:"https://aurorascan.dev"}}}),eB="002243e654eae5271202b831393246d3",eN=[ei.R,eo,ea,es,el,ep,eg,em,ew,eb,eT,eR],eU=(0,W.o1)({chains:eN,projectId:eB,metadata:{name:"Web3Modal",description:"Simple, intuitive wallet login",url:"https://web3modal.com",icons:["https://avatars.githubusercontent.com/u/37784886?s=200&v=4"]}});function App(e){let{Component:t,pageProps:a}=e,[g,m]=(0,T.useState)(!1);return(0,T.useEffect)(()=>{m(!0)},[]),!function(){async function onFontsLoaded(){let e=setTimeout(()=>{document.getElementsByTagName("body")[0].classList.add("fontsLoaded")},1e3);void 0!==document.fonts.ready&&await document.fonts.ready,document.getElementsByTagName("body")[0].classList.add("fontsLoaded"),clearTimeout(e)}(0,T.useEffect)(()=>{onFontsLoaded()},[])}(),(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)(PlausibleProvider,{domain:"web3modal.com",children:[(0,p.jsx)(Y(),{children:(0,p.jsx)("title",{children:"Web3Modal"})}),g?(0,p.jsxs)(J.eM,{config:eU,children:[(0,p.jsx)(Header,{}),(0,p.jsx)(t,{...a}),(0,p.jsx)(Footer,{})]}):null]})})}(0,W.OY)({wagmiConfig:eU,chains:eN,projectId:eB,themeMode:"dark",enableAnalytics:!0})},10320:function(){},69779:function(e){e.exports={footer:"styles_footer__D62n0",logo:"styles_logo__u1WEY",navigation:"styles_navigation__8FV4E",footerList:"styles_footerList__zPK2Z",linkItem:"styles_linkItem__PhSF0",linkAnchor:"styles_linkAnchor__3aE3I",sectionTitle:"styles_sectionTitle__aCEkj",legal:"styles_legal__MKlMu",newsLetter:"styles_newsLetter__FCegK",input:"styles_input__LSPIX"}},79532:function(e){e.exports={header:"styles_header__SCD4E",version:"styles_version__TS1ly"}},22253:function(e){e.exports={image:"styles_image__wEhq8",loaded:"styles_loaded__uNyZp"}},18585:function(e){e.exports={heading4:"styles_heading4__DgKI3",heading5:"styles_heading5__nJGEr",heading6:"styles_heading6__p5l5q",text:"styles_text__Zb333",anchor:"styles_anchor__qNWuy",numeric:"styles_numeric__HT2F7",colorWhite:"styles_colorWhite__W4hZC",colorBlack:"styles_colorBlack__v4_I6",colorGrey:"styles_colorGrey__7y9yP",colorDarkGrey:"styles_colorDarkGrey__YM_SC",colorLightGrey:"styles_colorLightGrey__QvBSr"}},77663:function(e){!function(){var t={229:function(e){var t,a,p,g=e.exports={};function defaultSetTimout(){throw Error("setTimeout has not been defined")}function defaultClearTimeout(){throw Error("clearTimeout has not been defined")}function runTimeout(e){if(t===setTimeout)return setTimeout(e,0);if((t===defaultSetTimout||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(a){try{return t.call(null,e,0)}catch(a){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:defaultSetTimout}catch(e){t=defaultSetTimout}try{a="function"==typeof clearTimeout?clearTimeout:defaultClearTimeout}catch(e){a=defaultClearTimeout}}();var m=[],v=!1,_=-1;function cleanUpNextTick(){v&&p&&(v=!1,p.length?m=p.concat(m):_=-1,m.length&&drainQueue())}function drainQueue(){if(!v){var e=runTimeout(cleanUpNextTick);v=!0;for(var t=m.length;t;){for(p=m,m=[];++_<t;)p&&p[_].run();_=-1,t=m.length}p=null,v=!1,function(e){if(a===clearTimeout)return clearTimeout(e);if((a===defaultClearTimeout||!a)&&clearTimeout)return a=clearTimeout,clearTimeout(e);try{a(e)}catch(t){try{return a.call(null,e)}catch(t){return a.call(this,e)}}}(e)}}function Item(e,t){this.fun=e,this.array=t}function noop(){}g.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var a=1;a<arguments.length;a++)t[a-1]=arguments[a];m.push(new Item(e,t)),1!==m.length||v||runTimeout(drainQueue)},Item.prototype.run=function(){this.fun.apply(null,this.array)},g.title="browser",g.browser=!0,g.env={},g.argv=[],g.version="",g.versions={},g.on=noop,g.addListener=noop,g.once=noop,g.off=noop,g.removeListener=noop,g.removeAllListeners=noop,g.emit=noop,g.prependListener=noop,g.prependOnceListener=noop,g.listeners=function(e){return[]},g.binding=function(e){throw Error("process.binding is not supported")},g.cwd=function(){return"/"},g.chdir=function(e){throw Error("process.chdir is not supported")},g.umask=function(){return 0}}},a={};function __nccwpck_require__(e){var p=a[e];if(void 0!==p)return p.exports;var g=a[e]={exports:{}},m=!0;try{t[e](g,g.exports,__nccwpck_require__),m=!1}finally{m&&delete a[e]}return g.exports}__nccwpck_require__.ab="//";var p=__nccwpck_require__(229);e.exports=p}()},9008:function(e,t,a){e.exports=a(34605)},25675:function(e,t,a){e.exports=a(25365)},4298:function(e,t,a){e.exports=a(67616)},92592:function(e,t,a){let p=a(47138),g=a(95115),m=a(6907),v=a(93776);function renderCanvas(e,t,a,m,v){let _=[].slice.call(arguments,1),x=_.length,T="function"==typeof _[x-1];if(!T&&!p())throw Error("Callback required as last argument");if(T){if(x<2)throw Error("Too few arguments provided");2===x?(v=a,a=t,t=m=void 0):3===x&&(t.getContext&&void 0===v?(v=m,m=void 0):(v=m,m=a,a=t,t=void 0))}else{if(x<1)throw Error("Too few arguments provided");return 1===x?(a=t,t=m=void 0):2!==x||t.getContext||(m=a,a=t,t=void 0),new Promise(function(p,v){try{let v=g.create(a,m);p(e(v,t,m))}catch(e){v(e)}})}try{let p=g.create(a,m);v(null,e(p,t,m))}catch(e){v(e)}}t.create=g.create,t.toCanvas=renderCanvas.bind(null,m.render),t.toDataURL=renderCanvas.bind(null,m.renderToDataURL),t.toString=renderCanvas.bind(null,function(e,t,a){return v.render(e,a)})},47138:function(e){e.exports=function(){return"function"==typeof Promise&&Promise.prototype&&Promise.prototype.then}},21845:function(e,t,a){let p=a(10242).getSymbolSize;t.getRowColCoords=function(e){if(1===e)return[];let t=Math.floor(e/7)+2,a=p(e),g=145===a?26:2*Math.ceil((a-13)/(2*t-2)),m=[a-7];for(let e=1;e<t-1;e++)m[e]=m[e-1]-g;return m.push(6),m.reverse()},t.getPositions=function(e){let a=[],p=t.getRowColCoords(e),g=p.length;for(let e=0;e<g;e++)for(let t=0;t<g;t++)(0!==e||0!==t)&&(0!==e||t!==g-1)&&(e!==g-1||0!==t)&&a.push([p[e],p[t]]);return a}},8260:function(e,t,a){let p=a(76910),g=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function AlphanumericData(e){this.mode=p.ALPHANUMERIC,this.data=e}AlphanumericData.getBitsLength=function(e){return 11*Math.floor(e/2)+6*(e%2)},AlphanumericData.prototype.getLength=function(){return this.data.length},AlphanumericData.prototype.getBitsLength=function(){return AlphanumericData.getBitsLength(this.data.length)},AlphanumericData.prototype.write=function(e){let t;for(t=0;t+2<=this.data.length;t+=2){let a=45*g.indexOf(this.data[t]);a+=g.indexOf(this.data[t+1]),e.put(a,11)}this.data.length%2&&e.put(g.indexOf(this.data[t]),6)},e.exports=AlphanumericData},97245:function(e){function BitBuffer(){this.buffer=[],this.length=0}BitBuffer.prototype={get:function(e){return(this.buffer[Math.floor(e/8)]>>>7-e%8&1)==1},put:function(e,t){for(let a=0;a<t;a++)this.putBit((e>>>t-a-1&1)==1)},getLengthInBits:function(){return this.length},putBit:function(e){let t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}},e.exports=BitBuffer},73280:function(e){function BitMatrix(e){if(!e||e<1)throw Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}BitMatrix.prototype.set=function(e,t,a,p){let g=e*this.size+t;this.data[g]=a,p&&(this.reservedBit[g]=!0)},BitMatrix.prototype.get=function(e,t){return this.data[e*this.size+t]},BitMatrix.prototype.xor=function(e,t,a){this.data[e*this.size+t]^=a},BitMatrix.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]},e.exports=BitMatrix},43424:function(e,t,a){let p=a(62378),g=a(76910);function ByteData(e){this.mode=g.BYTE,"string"==typeof e&&(e=p(e)),this.data=new Uint8Array(e)}ByteData.getBitsLength=function(e){return 8*e},ByteData.prototype.getLength=function(){return this.data.length},ByteData.prototype.getBitsLength=function(){return ByteData.getBitsLength(this.data.length)},ByteData.prototype.write=function(e){for(let t=0,a=this.data.length;t<a;t++)e.put(this.data[t],8)},e.exports=ByteData},35393:function(e,t,a){let p=a(64908),g=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],m=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];t.getBlocksCount=function(e,t){switch(t){case p.L:return g[(e-1)*4+0];case p.M:return g[(e-1)*4+1];case p.Q:return g[(e-1)*4+2];case p.H:return g[(e-1)*4+3];default:return}},t.getTotalCodewordsCount=function(e,t){switch(t){case p.L:return m[(e-1)*4+0];case p.M:return m[(e-1)*4+1];case p.Q:return m[(e-1)*4+2];case p.H:return m[(e-1)*4+3];default:return}}},64908:function(e,t){t.L={bit:1},t.M={bit:0},t.Q={bit:3},t.H={bit:2},t.isValid=function(e){return e&&void 0!==e.bit&&e.bit>=0&&e.bit<4},t.from=function(e,a){if(t.isValid(e))return e;try{return function(e){if("string"!=typeof e)throw Error("Param is not a string");let a=e.toLowerCase();switch(a){case"l":case"low":return t.L;case"m":case"medium":return t.M;case"q":case"quartile":return t.Q;case"h":case"high":return t.H;default:throw Error("Unknown EC Level: "+e)}}(e)}catch(e){return a}}},76526:function(e,t,a){let p=a(10242).getSymbolSize;t.getPositions=function(e){let t=p(e);return[[0,0],[t-7,0],[0,t-7]]}},61642:function(e,t,a){let p=a(10242),g=p.getBCHDigit(1335);t.getEncodedBits=function(e,t){let a=e.bit<<3|t,m=a<<10;for(;p.getBCHDigit(m)-g>=0;)m^=1335<<p.getBCHDigit(m)-g;return(a<<10|m)^21522}},69729:function(e,t){let a=new Uint8Array(512),p=new Uint8Array(256);!function(){let e=1;for(let t=0;t<255;t++)a[t]=e,p[e]=t,256&(e<<=1)&&(e^=285);for(let e=255;e<512;e++)a[e]=a[e-255]}(),t.log=function(e){if(e<1)throw Error("log("+e+")");return p[e]},t.exp=function(e){return a[e]},t.mul=function(e,t){return 0===e||0===t?0:a[p[e]+p[t]]}},35442:function(e,t,a){let p=a(76910),g=a(10242);function KanjiData(e){this.mode=p.KANJI,this.data=e}KanjiData.getBitsLength=function(e){return 13*e},KanjiData.prototype.getLength=function(){return this.data.length},KanjiData.prototype.getBitsLength=function(){return KanjiData.getBitsLength(this.data.length)},KanjiData.prototype.write=function(e){let t;for(t=0;t<this.data.length;t++){let a=g.toSJIS(this.data[t]);if(a>=33088&&a<=40956)a-=33088;else if(a>=57408&&a<=60351)a-=49472;else throw Error("Invalid SJIS character: "+this.data[t]+"\nMake sure your charset is UTF-8");a=(a>>>8&255)*192+(255&a),e.put(a,13)}},e.exports=KanjiData},27126:function(e,t){t.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};let a={N1:3,N2:3,N3:40,N4:10};t.isValid=function(e){return null!=e&&""!==e&&!isNaN(e)&&e>=0&&e<=7},t.from=function(e){return t.isValid(e)?parseInt(e,10):void 0},t.getPenaltyN1=function(e){let t=e.size,p=0,g=0,m=0,v=null,_=null;for(let x=0;x<t;x++){g=m=0,v=_=null;for(let T=0;T<t;T++){let t=e.get(x,T);t===v?g++:(g>=5&&(p+=a.N1+(g-5)),v=t,g=1),(t=e.get(T,x))===_?m++:(m>=5&&(p+=a.N1+(m-5)),_=t,m=1)}g>=5&&(p+=a.N1+(g-5)),m>=5&&(p+=a.N1+(m-5))}return p},t.getPenaltyN2=function(e){let t=e.size,p=0;for(let a=0;a<t-1;a++)for(let g=0;g<t-1;g++){let t=e.get(a,g)+e.get(a,g+1)+e.get(a+1,g)+e.get(a+1,g+1);(4===t||0===t)&&p++}return p*a.N2},t.getPenaltyN3=function(e){let t=e.size,p=0,g=0,m=0;for(let a=0;a<t;a++){g=m=0;for(let v=0;v<t;v++)g=g<<1&2047|e.get(a,v),v>=10&&(1488===g||93===g)&&p++,m=m<<1&2047|e.get(v,a),v>=10&&(1488===m||93===m)&&p++}return p*a.N3},t.getPenaltyN4=function(e){let t=0,p=e.data.length;for(let a=0;a<p;a++)t+=e.data[a];let g=Math.abs(Math.ceil(100*t/p/5)-10);return g*a.N4},t.applyMask=function(e,a){let p=a.size;for(let g=0;g<p;g++)for(let m=0;m<p;m++)a.isReserved(m,g)||a.xor(m,g,function(e,a,p){switch(e){case t.Patterns.PATTERN000:return(a+p)%2==0;case t.Patterns.PATTERN001:return a%2==0;case t.Patterns.PATTERN010:return p%3==0;case t.Patterns.PATTERN011:return(a+p)%3==0;case t.Patterns.PATTERN100:return(Math.floor(a/2)+Math.floor(p/3))%2==0;case t.Patterns.PATTERN101:return a*p%2+a*p%3==0;case t.Patterns.PATTERN110:return(a*p%2+a*p%3)%2==0;case t.Patterns.PATTERN111:return(a*p%3+(a+p)%2)%2==0;default:throw Error("bad maskPattern:"+e)}}(e,m,g))},t.getBestMask=function(e,a){let p=Object.keys(t.Patterns).length,g=0,m=1/0;for(let v=0;v<p;v++){a(v),t.applyMask(v,e);let p=t.getPenaltyN1(e)+t.getPenaltyN2(e)+t.getPenaltyN3(e)+t.getPenaltyN4(e);t.applyMask(v,e),p<m&&(m=p,g=v)}return g}},76910:function(e,t,a){let p=a(43114),g=a(7007);t.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},t.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},t.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},t.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},t.MIXED={bit:-1},t.getCharCountIndicator=function(e,t){if(!e.ccBits)throw Error("Invalid mode: "+e);if(!p.isValid(t))throw Error("Invalid version: "+t);return t>=1&&t<10?e.ccBits[0]:t<27?e.ccBits[1]:e.ccBits[2]},t.getBestModeForData=function(e){return g.testNumeric(e)?t.NUMERIC:g.testAlphanumeric(e)?t.ALPHANUMERIC:g.testKanji(e)?t.KANJI:t.BYTE},t.toString=function(e){if(e&&e.id)return e.id;throw Error("Invalid mode")},t.isValid=function(e){return e&&e.bit&&e.ccBits},t.from=function(e,a){if(t.isValid(e))return e;try{return function(e){if("string"!=typeof e)throw Error("Param is not a string");let a=e.toLowerCase();switch(a){case"numeric":return t.NUMERIC;case"alphanumeric":return t.ALPHANUMERIC;case"kanji":return t.KANJI;case"byte":return t.BYTE;default:throw Error("Unknown mode: "+e)}}(e)}catch(e){return a}}},41085:function(e,t,a){let p=a(76910);function NumericData(e){this.mode=p.NUMERIC,this.data=e.toString()}NumericData.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)},NumericData.prototype.getLength=function(){return this.data.length},NumericData.prototype.getBitsLength=function(){return NumericData.getBitsLength(this.data.length)},NumericData.prototype.write=function(e){let t,a;for(t=0;t+3<=this.data.length;t+=3)a=parseInt(this.data.substr(t,3),10),e.put(a,10);let p=this.data.length-t;p>0&&(a=parseInt(this.data.substr(t),10),e.put(a,3*p+1))},e.exports=NumericData},26143:function(e,t,a){let p=a(69729);t.mul=function(e,t){let a=new Uint8Array(e.length+t.length-1);for(let g=0;g<e.length;g++)for(let m=0;m<t.length;m++)a[g+m]^=p.mul(e[g],t[m]);return a},t.mod=function(e,t){let a=new Uint8Array(e);for(;a.length-t.length>=0;){let e=a[0];for(let g=0;g<t.length;g++)a[g]^=p.mul(t[g],e);let g=0;for(;g<a.length&&0===a[g];)g++;a=a.slice(g)}return a},t.generateECPolynomial=function(e){let a=new Uint8Array([1]);for(let g=0;g<e;g++)a=t.mul(a,new Uint8Array([1,p.exp(g)]));return a}},95115:function(e,t,a){let p=a(10242),g=a(64908),m=a(97245),v=a(73280),_=a(21845),x=a(76526),T=a(27126),F=a(35393),z=a(52882),W=a(23103),K=a(61642),Z=a(76910),Q=a(16130);function setupFormatInfo(e,t,a){let p,g;let m=e.size,v=K.getEncodedBits(t,a);for(p=0;p<15;p++)g=(v>>p&1)==1,p<6?e.set(p,8,g,!0):p<8?e.set(p+1,8,g,!0):e.set(m-15+p,8,g,!0),p<8?e.set(8,m-p-1,g,!0):p<9?e.set(8,15-p-1+1,g,!0):e.set(8,15-p-1,g,!0);e.set(m-8,8,1,!0)}t.create=function(e,t){let a,K;if(void 0===e||""===e)throw Error("No input text");let X=g.M;return void 0!==t&&(X=g.from(t.errorCorrectionLevel,g.M),a=W.from(t.version),K=T.from(t.maskPattern),t.toSJISFunc&&p.setToSJISFunction(t.toSJISFunc)),function(e,t,a,g){let K;if(Array.isArray(e))K=Q.fromArray(e);else if("string"==typeof e){let p=t;if(!p){let t=Q.rawSplit(e);p=W.getBestVersionForData(t,a)}K=Q.fromString(e,p||40)}else throw Error("Invalid data");let X=W.getBestVersionForData(K,a);if(!X)throw Error("The amount of data is too big to be stored in a QR Code");if(t){if(t<X)throw Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+X+".\n")}else t=X;let Y=function(e,t,a){let g=new m;a.forEach(function(t){g.put(t.mode.bit,4),g.put(t.getLength(),Z.getCharCountIndicator(t.mode,e)),t.write(g)});let v=p.getSymbolTotalCodewords(e),_=F.getTotalCodewordsCount(e,t),x=(v-_)*8;for(g.getLengthInBits()+4<=x&&g.put(0,4);g.getLengthInBits()%8!=0;)g.putBit(0);let T=(x-g.getLengthInBits())/8;for(let e=0;e<T;e++)g.put(e%2?17:236,8);return function(e,t,a){let g,m;let v=p.getSymbolTotalCodewords(t),_=F.getTotalCodewordsCount(t,a),x=v-_,T=F.getBlocksCount(t,a),W=v%T,K=T-W,Z=Math.floor(v/T),Q=Math.floor(x/T),X=Q+1,Y=Z-Q,J=new z(Y),ei=0,en=Array(T),eo=Array(T),ea=0,es=new Uint8Array(e.buffer);for(let e=0;e<T;e++){let t=e<K?Q:X;en[e]=es.slice(ei,ei+t),eo[e]=J.encode(en[e]),ei+=t,ea=Math.max(ea,t)}let el=new Uint8Array(v),ec=0;for(g=0;g<ea;g++)for(m=0;m<T;m++)g<en[m].length&&(el[ec++]=en[m][g]);for(g=0;g<Y;g++)for(m=0;m<T;m++)el[ec++]=eo[m][g];return el}(g,e,t)}(t,a,K),J=p.getSymbolSize(t),ei=new v(J);return function(e,t){let a=e.size,p=x.getPositions(t);for(let t=0;t<p.length;t++){let g=p[t][0],m=p[t][1];for(let t=-1;t<=7;t++)if(!(g+t<=-1)&&!(a<=g+t))for(let p=-1;p<=7;p++)m+p<=-1||a<=m+p||(t>=0&&t<=6&&(0===p||6===p)||p>=0&&p<=6&&(0===t||6===t)||t>=2&&t<=4&&p>=2&&p<=4?e.set(g+t,m+p,!0,!0):e.set(g+t,m+p,!1,!0))}}(ei,t),function(e){let t=e.size;for(let a=8;a<t-8;a++){let t=a%2==0;e.set(a,6,t,!0),e.set(6,a,t,!0)}}(ei),function(e,t){let a=_.getPositions(t);for(let t=0;t<a.length;t++){let p=a[t][0],g=a[t][1];for(let t=-2;t<=2;t++)for(let a=-2;a<=2;a++)-2===t||2===t||-2===a||2===a||0===t&&0===a?e.set(p+t,g+a,!0,!0):e.set(p+t,g+a,!1,!0)}}(ei,t),setupFormatInfo(ei,a,0),t>=7&&function(e,t){let a,p,g;let m=e.size,v=W.getEncodedBits(t);for(let t=0;t<18;t++)a=Math.floor(t/3),p=t%3+m-8-3,g=(v>>t&1)==1,e.set(a,p,g,!0),e.set(p,a,g,!0)}(ei,t),function(e,t){let a=e.size,p=-1,g=a-1,m=7,v=0;for(let _=a-1;_>0;_-=2)for(6===_&&_--;;){for(let a=0;a<2;a++)if(!e.isReserved(g,_-a)){let p=!1;v<t.length&&(p=(t[v]>>>m&1)==1),e.set(g,_-a,p),-1==--m&&(v++,m=7)}if((g+=p)<0||a<=g){g-=p,p=-p;break}}}(ei,Y),isNaN(g)&&(g=T.getBestMask(ei,setupFormatInfo.bind(null,ei,a))),T.applyMask(g,ei),setupFormatInfo(ei,a,g),{modules:ei,version:t,errorCorrectionLevel:a,maskPattern:g,segments:K}}(e,a,X,K)}},52882:function(e,t,a){let p=a(26143);function ReedSolomonEncoder(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}ReedSolomonEncoder.prototype.initialize=function(e){this.degree=e,this.genPoly=p.generateECPolynomial(this.degree)},ReedSolomonEncoder.prototype.encode=function(e){if(!this.genPoly)throw Error("Encoder not initialized");let t=new Uint8Array(e.length+this.degree);t.set(e);let a=p.mod(t,this.genPoly),g=this.degree-a.length;if(g>0){let e=new Uint8Array(this.degree);return e.set(a,g),e}return a},e.exports=ReedSolomonEncoder},7007:function(e,t){let a="[0-9]+",p="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";p=p.replace(/u/g,"\\u");let g="(?:(?![A-Z0-9 $%*+\\-./:]|"+p+")(?:.|[\r\n]))+";t.KANJI=RegExp(p,"g"),t.BYTE_KANJI=RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),t.BYTE=RegExp(g,"g"),t.NUMERIC=RegExp(a,"g"),t.ALPHANUMERIC=RegExp("[A-Z $%*+\\-./:]+","g");let m=RegExp("^"+p+"$"),v=RegExp("^"+a+"$"),_=RegExp("^[A-Z0-9 $%*+\\-./:]+$");t.testKanji=function(e){return m.test(e)},t.testNumeric=function(e){return v.test(e)},t.testAlphanumeric=function(e){return _.test(e)}},16130:function(e,t,a){let p=a(76910),g=a(41085),m=a(8260),v=a(43424),_=a(35442),x=a(7007),T=a(10242),F=a(65987);function getStringByteLength(e){return unescape(encodeURIComponent(e)).length}function getSegments(e,t,a){let p;let g=[];for(;null!==(p=e.exec(a));)g.push({data:p[0],index:p.index,mode:t,length:p[0].length});return g}function getSegmentsFromString(e){let t,a;let g=getSegments(x.NUMERIC,p.NUMERIC,e),m=getSegments(x.ALPHANUMERIC,p.ALPHANUMERIC,e);T.isKanjiModeEnabled()?(t=getSegments(x.BYTE,p.BYTE,e),a=getSegments(x.KANJI,p.KANJI,e)):(t=getSegments(x.BYTE_KANJI,p.BYTE,e),a=[]);let v=g.concat(m,t,a);return v.sort(function(e,t){return e.index-t.index}).map(function(e){return{data:e.data,mode:e.mode,length:e.length}})}function getSegmentBitsLength(e,t){switch(t){case p.NUMERIC:return g.getBitsLength(e);case p.ALPHANUMERIC:return m.getBitsLength(e);case p.KANJI:return _.getBitsLength(e);case p.BYTE:return v.getBitsLength(e)}}function buildSingleSegment(e,t){let a;let x=p.getBestModeForData(e);if((a=p.from(t,x))!==p.BYTE&&a.bit<x.bit)throw Error('"'+e+'" cannot be encoded with mode '+p.toString(a)+".\n Suggested mode is: "+p.toString(x));switch(a!==p.KANJI||T.isKanjiModeEnabled()||(a=p.BYTE),a){case p.NUMERIC:return new g(e);case p.ALPHANUMERIC:return new m(e);case p.KANJI:return new _(e);case p.BYTE:return new v(e)}}t.fromArray=function(e){return e.reduce(function(e,t){return"string"==typeof t?e.push(buildSingleSegment(t,null)):t.data&&e.push(buildSingleSegment(t.data,t.mode)),e},[])},t.fromString=function(e,a){let g=getSegmentsFromString(e,T.isKanjiModeEnabled()),m=function(e){let t=[];for(let a=0;a<e.length;a++){let g=e[a];switch(g.mode){case p.NUMERIC:t.push([g,{data:g.data,mode:p.ALPHANUMERIC,length:g.length},{data:g.data,mode:p.BYTE,length:g.length}]);break;case p.ALPHANUMERIC:t.push([g,{data:g.data,mode:p.BYTE,length:g.length}]);break;case p.KANJI:t.push([g,{data:g.data,mode:p.BYTE,length:getStringByteLength(g.data)}]);break;case p.BYTE:t.push([{data:g.data,mode:p.BYTE,length:getStringByteLength(g.data)}])}}return t}(g),v=function(e,t){let a={},g={start:{}},m=["start"];for(let v=0;v<e.length;v++){let _=e[v],x=[];for(let e=0;e<_.length;e++){let T=_[e],F=""+v+e;x.push(F),a[F]={node:T,lastCount:0},g[F]={};for(let e=0;e<m.length;e++){let v=m[e];a[v]&&a[v].node.mode===T.mode?(g[v][F]=getSegmentBitsLength(a[v].lastCount+T.length,T.mode)-getSegmentBitsLength(a[v].lastCount,T.mode),a[v].lastCount+=T.length):(a[v]&&(a[v].lastCount=T.length),g[v][F]=getSegmentBitsLength(T.length,T.mode)+4+p.getCharCountIndicator(T.mode,t))}}m=x}for(let e=0;e<m.length;e++)g[m[e]].end=0;return{map:g,table:a}}(m,a),_=F.find_path(v.map,"start","end"),x=[];for(let e=1;e<_.length-1;e++)x.push(v.table[_[e]].node);return t.fromArray(x.reduce(function(e,t){let a=e.length-1>=0?e[e.length-1]:null;return a&&a.mode===t.mode?e[e.length-1].data+=t.data:e.push(t),e},[]))},t.rawSplit=function(e){return t.fromArray(getSegmentsFromString(e,T.isKanjiModeEnabled()))}},10242:function(e,t){let a;let p=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];t.getSymbolSize=function(e){if(!e)throw Error('"version" cannot be null or undefined');if(e<1||e>40)throw Error('"version" should be in range from 1 to 40');return 4*e+17},t.getSymbolTotalCodewords=function(e){return p[e]},t.getBCHDigit=function(e){let t=0;for(;0!==e;)t++,e>>>=1;return t},t.setToSJISFunction=function(e){if("function"!=typeof e)throw Error('"toSJISFunc" is not a valid function.');a=e},t.isKanjiModeEnabled=function(){return void 0!==a},t.toSJIS=function(e){return a(e)}},43114:function(e,t){t.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40}},23103:function(e,t,a){let p=a(10242),g=a(35393),m=a(64908),v=a(76910),_=a(43114),x=p.getBCHDigit(7973);function getReservedBitsCount(e,t){return v.getCharCountIndicator(e,t)+4}t.from=function(e,t){return _.isValid(e)?parseInt(e,10):t},t.getCapacity=function(e,t,a){if(!_.isValid(e))throw Error("Invalid QR Code version");void 0===a&&(a=v.BYTE);let m=p.getSymbolTotalCodewords(e),x=g.getTotalCodewordsCount(e,t),T=(m-x)*8;if(a===v.MIXED)return T;let F=T-getReservedBitsCount(a,e);switch(a){case v.NUMERIC:return Math.floor(F/10*3);case v.ALPHANUMERIC:return Math.floor(F/11*2);case v.KANJI:return Math.floor(F/13);case v.BYTE:default:return Math.floor(F/8)}},t.getBestVersionForData=function(e,a){let p;let g=m.from(a,m.M);if(Array.isArray(e)){if(e.length>1)return function(e,a){for(let p=1;p<=40;p++){let g=function(e,t){let a=0;return e.forEach(function(e){let p=getReservedBitsCount(e.mode,t);a+=p+e.getBitsLength()}),a}(e,p);if(g<=t.getCapacity(p,a,v.MIXED))return p}}(e,g);if(0===e.length)return 1;p=e[0]}else p=e;return function(e,a,p){for(let g=1;g<=40;g++)if(a<=t.getCapacity(g,p,e))return g}(p.mode,p.getLength(),g)},t.getEncodedBits=function(e){if(!_.isValid(e)||e<7)throw Error("Invalid QR Code version");let t=e<<12;for(;p.getBCHDigit(t)-x>=0;)t^=7973<<p.getBCHDigit(t)-x;return e<<12|t}},6907:function(e,t,a){let p=a(89653);t.render=function(e,t,a){var g;let m=a,v=t;void 0!==m||t&&t.getContext||(m=t,t=void 0),t||(v=function(){try{return document.createElement("canvas")}catch(e){throw Error("You need to specify a canvas element")}}()),m=p.getOptions(m);let _=p.getImageWidth(e.modules.size,m),x=v.getContext("2d"),T=x.createImageData(_,_);return p.qrToImageData(T.data,e,m),g=v,x.clearRect(0,0,g.width,g.height),g.style||(g.style={}),g.height=_,g.width=_,g.style.height=_+"px",g.style.width=_+"px",x.putImageData(T,0,0),v},t.renderToDataURL=function(e,a,p){let g=p;void 0!==g||a&&a.getContext||(g=a,a=void 0),g||(g={});let m=t.render(e,a,g),v=g.type||"image/png",_=g.rendererOpts||{};return m.toDataURL(v,_.quality)}},93776:function(e,t,a){let p=a(89653);function getColorAttrib(e,t){let a=e.a/255,p=t+'="'+e.hex+'"';return a<1?p+" "+t+'-opacity="'+a.toFixed(2).slice(1)+'"':p}function svgCmd(e,t,a){let p=e+t;return void 0!==a&&(p+=" "+a),p}t.render=function(e,t,a){let g=p.getOptions(t),m=e.modules.size,v=e.modules.data,_=m+2*g.margin,x=g.color.light.a?"<path "+getColorAttrib(g.color.light,"fill")+' d="M0 0h'+_+"v"+_+'H0z"/>':"",T="<path "+getColorAttrib(g.color.dark,"stroke")+' d="'+function(e,t,a){let p="",g=0,m=!1,v=0;for(let _=0;_<e.length;_++){let x=Math.floor(_%t),T=Math.floor(_/t);x||m||(m=!0),e[_]?(v++,_>0&&x>0&&e[_-1]||(p+=m?svgCmd("M",x+a,.5+T+a):svgCmd("m",g,0),g=0,m=!1),x+1<t&&e[_+1]||(p+=svgCmd("h",v),v=0)):g++}return p}(v,m,g.margin)+'"/>',F=g.width?'width="'+g.width+'" height="'+g.width+'" ':"",z='<svg xmlns="http://www.w3.org/2000/svg" '+F+('viewBox="0 0 '+_)+" "+_+'" shape-rendering="crispEdges">'+x+T+"</svg>\n";return"function"==typeof a&&a(null,z),z}},89653:function(e,t){function hex2rgba(e){if("number"==typeof e&&(e=e.toString()),"string"!=typeof e)throw Error("Color should be defined as hex string");let t=e.slice().replace("#","").split("");if(t.length<3||5===t.length||t.length>8)throw Error("Invalid hex color: "+e);(3===t.length||4===t.length)&&(t=Array.prototype.concat.apply([],t.map(function(e){return[e,e]}))),6===t.length&&t.push("F","F");let a=parseInt(t.join(""),16);return{r:a>>24&255,g:a>>16&255,b:a>>8&255,a:255&a,hex:"#"+t.slice(0,6).join("")}}t.getOptions=function(e){e||(e={}),e.color||(e.color={});let t=void 0===e.margin||null===e.margin||e.margin<0?4:e.margin,a=e.width&&e.width>=21?e.width:void 0,p=e.scale||4;return{width:a,scale:a?4:p,margin:t,color:{dark:hex2rgba(e.color.dark||"#000000ff"),light:hex2rgba(e.color.light||"#ffffffff")},type:e.type,rendererOpts:e.rendererOpts||{}}},t.getScale=function(e,t){return t.width&&t.width>=e+2*t.margin?t.width/(e+2*t.margin):t.scale},t.getImageWidth=function(e,a){let p=t.getScale(e,a);return Math.floor((e+2*a.margin)*p)},t.qrToImageData=function(e,a,p){let g=a.modules.size,m=a.modules.data,v=t.getScale(g,p),_=Math.floor((g+2*p.margin)*v),x=p.margin*v,T=[p.color.light,p.color.dark];for(let t=0;t<_;t++)for(let a=0;a<_;a++){let F=(t*_+a)*4,z=p.color.light;if(t>=x&&a>=x&&t<_-x&&a<_-x){let e=Math.floor((t-x)/v),p=Math.floor((a-x)/v);z=T[m[e*g+p]?1:0]}e[F++]=z.r,e[F++]=z.g,e[F++]=z.b,e[F]=z.a}}},80500:function(e){"use strict";e.exports=(e,t)=>{if(!("string"==typeof e&&"string"==typeof t))throw TypeError("Expected the arguments to be of type `string`");if(""===t)return[e];let a=e.indexOf(t);return -1===a?[e]:[e.slice(0,a),e.slice(a+t.length)]}},70610:function(e){"use strict";e.exports=e=>encodeURIComponent(e).replace(/[!'()*]/g,e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`)},70655:function(e,t,a){"use strict";a.r(t),a.d(t,{__assign:function(){return __assign},__asyncDelegator:function(){return __asyncDelegator},__asyncGenerator:function(){return __asyncGenerator},__asyncValues:function(){return __asyncValues},__await:function(){return __await},__awaiter:function(){return __awaiter},__classPrivateFieldGet:function(){return __classPrivateFieldGet},__classPrivateFieldSet:function(){return __classPrivateFieldSet},__createBinding:function(){return __createBinding},__decorate:function(){return __decorate},__exportStar:function(){return __exportStar},__extends:function(){return __extends},__generator:function(){return __generator},__importDefault:function(){return __importDefault},__importStar:function(){return __importStar},__makeTemplateObject:function(){return __makeTemplateObject},__metadata:function(){return __metadata},__param:function(){return __param},__read:function(){return __read},__rest:function(){return __rest},__spread:function(){return __spread},__spreadArrays:function(){return __spreadArrays},__values:function(){return __values}});/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var extendStatics=function(e,t){return(extendStatics=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var a in t)t.hasOwnProperty(a)&&(e[a]=t[a])})(e,t)};function __extends(e,t){function __(){this.constructor=e}extendStatics(e,t),e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}var __assign=function(){return(__assign=Object.assign||function(e){for(var t,a=1,p=arguments.length;a<p;a++)for(var g in t=arguments[a])Object.prototype.hasOwnProperty.call(t,g)&&(e[g]=t[g]);return e}).apply(this,arguments)};function __rest(e,t){var a={};for(var p in e)Object.prototype.hasOwnProperty.call(e,p)&&0>t.indexOf(p)&&(a[p]=e[p]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var g=0,p=Object.getOwnPropertySymbols(e);g<p.length;g++)0>t.indexOf(p[g])&&Object.prototype.propertyIsEnumerable.call(e,p[g])&&(a[p[g]]=e[p[g]]);return a}function __decorate(e,t,a,p){var g,m=arguments.length,v=m<3?t:null===p?p=Object.getOwnPropertyDescriptor(t,a):p;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)v=Reflect.decorate(e,t,a,p);else for(var _=e.length-1;_>=0;_--)(g=e[_])&&(v=(m<3?g(v):m>3?g(t,a,v):g(t,a))||v);return m>3&&v&&Object.defineProperty(t,a,v),v}function __param(e,t){return function(a,p){t(a,p,e)}}function __metadata(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function __awaiter(e,t,a,p){return new(a||(a=Promise))(function(g,m){function fulfilled(e){try{step(p.next(e))}catch(e){m(e)}}function rejected(e){try{step(p.throw(e))}catch(e){m(e)}}function step(e){var t;e.done?g(e.value):((t=e.value)instanceof a?t:new a(function(e){e(t)})).then(fulfilled,rejected)}step((p=p.apply(e,t||[])).next())})}function __generator(e,t){var a,p,g,m,v={label:0,sent:function(){if(1&g[0])throw g[1];return g[1]},trys:[],ops:[]};return m={next:verb(0),throw:verb(1),return:verb(2)},"function"==typeof Symbol&&(m[Symbol.iterator]=function(){return this}),m;function verb(m){return function(_){return function(m){if(a)throw TypeError("Generator is already executing.");for(;v;)try{if(a=1,p&&(g=2&m[0]?p.return:m[0]?p.throw||((g=p.return)&&g.call(p),0):p.next)&&!(g=g.call(p,m[1])).done)return g;switch(p=0,g&&(m=[2&m[0],g.value]),m[0]){case 0:case 1:g=m;break;case 4:return v.label++,{value:m[1],done:!1};case 5:v.label++,p=m[1],m=[0];continue;case 7:m=v.ops.pop(),v.trys.pop();continue;default:if(!(g=(g=v.trys).length>0&&g[g.length-1])&&(6===m[0]||2===m[0])){v=0;continue}if(3===m[0]&&(!g||m[1]>g[0]&&m[1]<g[3])){v.label=m[1];break}if(6===m[0]&&v.label<g[1]){v.label=g[1],g=m;break}if(g&&v.label<g[2]){v.label=g[2],v.ops.push(m);break}g[2]&&v.ops.pop(),v.trys.pop();continue}m=t.call(e,v)}catch(e){m=[6,e],p=0}finally{a=g=0}if(5&m[0])throw m[1];return{value:m[0]?m[1]:void 0,done:!0}}([m,_])}}}function __createBinding(e,t,a,p){void 0===p&&(p=a),e[p]=t[a]}function __exportStar(e,t){for(var a in e)"default"===a||t.hasOwnProperty(a)||(t[a]=e[a])}function __values(e){var t="function"==typeof Symbol&&Symbol.iterator,a=t&&e[t],p=0;if(a)return a.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&p>=e.length&&(e=void 0),{value:e&&e[p++],done:!e}}};throw TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function __read(e,t){var a="function"==typeof Symbol&&e[Symbol.iterator];if(!a)return e;var p,g,m=a.call(e),v=[];try{for(;(void 0===t||t-- >0)&&!(p=m.next()).done;)v.push(p.value)}catch(e){g={error:e}}finally{try{p&&!p.done&&(a=m.return)&&a.call(m)}finally{if(g)throw g.error}}return v}function __spread(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(__read(arguments[t]));return e}function __spreadArrays(){for(var e=0,t=0,a=arguments.length;t<a;t++)e+=arguments[t].length;for(var p=Array(e),g=0,t=0;t<a;t++)for(var m=arguments[t],v=0,_=m.length;v<_;v++,g++)p[g]=m[v];return p}function __await(e){return this instanceof __await?(this.v=e,this):new __await(e)}function __asyncGenerator(e,t,a){if(!Symbol.asyncIterator)throw TypeError("Symbol.asyncIterator is not defined.");var p,g=a.apply(e,t||[]),m=[];return p={},verb("next"),verb("throw"),verb("return"),p[Symbol.asyncIterator]=function(){return this},p;function verb(e){g[e]&&(p[e]=function(t){return new Promise(function(a,p){m.push([e,t,a,p])>1||resume(e,t)})})}function resume(e,t){try{var a;(a=g[e](t)).value instanceof __await?Promise.resolve(a.value.v).then(fulfill,reject):settle(m[0][2],a)}catch(e){settle(m[0][3],e)}}function fulfill(e){resume("next",e)}function reject(e){resume("throw",e)}function settle(e,t){e(t),m.shift(),m.length&&resume(m[0][0],m[0][1])}}function __asyncDelegator(e){var t,a;return t={},verb("next"),verb("throw",function(e){throw e}),verb("return"),t[Symbol.iterator]=function(){return this},t;function verb(p,g){t[p]=e[p]?function(t){return(a=!a)?{value:__await(e[p](t)),done:"return"===p}:g?g(t):t}:g}}function __asyncValues(e){if(!Symbol.asyncIterator)throw TypeError("Symbol.asyncIterator is not defined.");var t,a=e[Symbol.asyncIterator];return a?a.call(e):(e=__values(e),t={},verb("next"),verb("throw"),verb("return"),t[Symbol.asyncIterator]=function(){return this},t);function verb(a){t[a]=e[a]&&function(t){return new Promise(function(p,g){!function(e,t,a,p){Promise.resolve(p).then(function(t){e({value:t,done:a})},t)}(p,g,(t=e[a](t)).done,t.value)})}}}function __makeTemplateObject(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}function __importStar(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}function __importDefault(e){return e&&e.__esModule?e:{default:e}}function __classPrivateFieldGet(e,t){if(!t.has(e))throw TypeError("attempted to get private field on non-instance");return t.get(e)}function __classPrivateFieldSet(e,t,a){if(!t.has(e))throw TypeError("attempted to set private field on non-instance");return t.set(e,a),a}},53250:function(e,t,a){"use strict";/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p=a(67294),g="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},m=p.useState,v=p.useEffect,_=p.useLayoutEffect,x=p.useDebugValue;function r(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!g(e,a)}catch(e){return!0}}var T="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var a=t(),p=m({inst:{value:a,getSnapshot:t}}),g=p[0].inst,T=p[1];return _(function(){g.value=a,g.getSnapshot=t,r(g)&&T({inst:g})},[e,a,t]),v(function(){return r(g)&&T({inst:g}),e(function(){r(g)&&T({inst:g})})},[e]),x(a),a};t.useSyncExternalStore=void 0!==p.useSyncExternalStore?p.useSyncExternalStore:T},50139:function(e,t,a){"use strict";/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p=a(67294);a(61688).useSyncExternalStore,p.useRef,p.useEffect,p.useMemo,p.useDebugValue},61688:function(e,t,a){"use strict";e.exports=a(53250)},52798:function(e,t,a){"use strict";a(50139)},35883:function(){},74278:function(e,t,a){"use strict";a.d(t,{_:function(){return W}});var p,g=a(57858),m=a(53516),v=a(75276),_=a(45775),x=a(39028),T=a(21032),F=a(3980),z=a(92106),W=class extends v.wR{constructor({chains:e,options:t}={}){let a={shimDisconnect:!0,getProvider(){if("undefined"==typeof window)return;let e=window.ethereum;return e?.providers?e.providers[0]:e},...t};super({chains:e,options:a}),this.id="injected",(0,v.Ko)(this,p,void 0),this.shimDisconnectKey=`${this.id}.shimDisconnect`,this.onAccountsChanged=e=>{0===e.length?this.emit("disconnect"):this.emit("change",{account:(0,_.K)(e[0])})},this.onChainChanged=e=>{let t=(0,m.J)(e),a=this.isChainUnsupported(t);this.emit("change",{chain:{id:t,unsupported:a}})},this.onDisconnect=async e=>{if(1013===e.code){let e=await this.getProvider();if(e){let e=await this.getAccount();if(e)return}}this.emit("disconnect"),this.options.shimDisconnect&&this.storage?.removeItem(this.shimDisconnectKey)};let g=a.getProvider();if("string"==typeof a.name)this.name=a.name;else if(g){let e=function(e){if(!e)return"Injected";let getName=e=>e.isApexWallet?"Apex Wallet":e.isAvalanche?"Core Wallet":e.isBackpack?"Backpack":e.isBifrost?"Bifrost Wallet":e.isBitKeep?"BitKeep":e.isBitski?"Bitski":e.isBlockWallet?"BlockWallet":e.isBraveWallet?"Brave Wallet":e.isCoin98?"Coin98 Wallet":e.isCoinbaseWallet?"Coinbase Wallet":e.isDawn?"Dawn Wallet":e.isDefiant?"Defiant":e.isDesig?"Desig Wallet":e.isEnkrypt?"Enkrypt":e.isExodus?"Exodus":e.isFordefi?"Fordefi":e.isFrame?"Frame":e.isFrontier?"Frontier Wallet":e.isGamestop?"GameStop Wallet":e.isHaqqWallet?"HAQQ Wallet":e.isHyperPay?"HyperPay Wallet":e.isImToken?"ImToken":e.isHaloWallet?"Halo Wallet":e.isKuCoinWallet?"KuCoin Wallet":e.isMathWallet?"MathWallet":e.isNovaWallet?"Nova Wallet":e.isOkxWallet||e.isOKExWallet?"OKX Wallet":e.isOneInchIOSWallet||e.isOneInchAndroidWallet?"1inch Wallet":e.isOpera?"Opera":e.isPhantom?"Phantom":e.isPortal?"Ripio Portal":e.isRabby?"Rabby Wallet":e.isRainbow?"Rainbow":e.isStatus?"Status":e.isSubWallet?"SubWallet":e.isTalisman?"Talisman":e.isTally?"Taho":e.isTokenPocket?"TokenPocket":e.isTokenary?"Tokenary":e.isTrust||e.isTrustWallet?"Trust Wallet":e.isTTWallet?"TTWallet":e.isXDEFI?"XDEFI Wallet":e.isZeal?"Zeal":e.isZerion?"Zerion":e.isMetaMask?"MetaMask":void 0;if(e.providers?.length){let t=new Set,a=1;for(let p of e.providers){let e=getName(p);e||(e=`Unknown Wallet #${a}`,a+=1),t.add(e)}let p=[...t];return p.length?p:p[0]??"Injected"}return getName(e)??"Injected"}(g);a.name?this.name=a.name(e):"string"==typeof e?this.name=e:this.name=e[0]}else this.name="Injected";this.ready=!!g}async connect({chainId:e}={}){try{let t=await this.getProvider();if(!t)throw new g.N;t.on&&(t.on("accountsChanged",this.onAccountsChanged),t.on("chainChanged",this.onChainChanged),t.on("disconnect",this.onDisconnect)),this.emit("message",{type:"connecting"});let a=await t.request({method:"eth_requestAccounts"}),p=(0,_.K)(a[0]),m=await this.getChainId(),v=this.isChainUnsupported(m);if(e&&m!==e){let t=await this.switchChain(e);m=t.id,v=this.isChainUnsupported(m)}return this.options.shimDisconnect&&this.storage?.setItem(this.shimDisconnectKey,!0),{account:p,chain:{id:m,unsupported:v}}}catch(e){if(this.isUserRejectedRequestError(e))throw new x.ab(e);if(-32002===e.code)throw new x.pT(e);throw e}}async disconnect(){let e=await this.getProvider();e?.removeListener&&(e.removeListener("accountsChanged",this.onAccountsChanged),e.removeListener("chainChanged",this.onChainChanged),e.removeListener("disconnect",this.onDisconnect),this.options.shimDisconnect&&this.storage?.removeItem(this.shimDisconnectKey))}async getAccount(){let e=await this.getProvider();if(!e)throw new g.N;let t=await e.request({method:"eth_accounts"});return(0,_.K)(t[0])}async getChainId(){let e=await this.getProvider();if(!e)throw new g.N;return e.request({method:"eth_chainId"}).then(m.J)}async getProvider(){let e=this.options.getProvider();return e&&(0,v.qx)(this,p,e),(0,v.ac)(this,p)}async getWalletClient({chainId:e}={}){let[t,a]=await Promise.all([this.getProvider(),this.getAccount()]),p=this.chains.find(t=>t.id===e);if(!t)throw Error("provider is required.");return(0,T.K)({account:a,chain:p,transport:(0,F.P)(t)})}async isAuthorized(){try{if(this.options.shimDisconnect&&!this.storage?.getItem(this.shimDisconnectKey))return!1;let e=await this.getProvider();if(!e)throw new g.N;let t=await this.getAccount();return!!t}catch{return!1}}async switchChain(e){let t=await this.getProvider();if(!t)throw new g.N;let a=(0,z.eC)(e);try{return await Promise.all([t.request({method:"wallet_switchEthereumChain",params:[{chainId:a}]}),new Promise(t=>this.on("change",({chain:a})=>{a?.id===e&&t()}))]),this.chains.find(t=>t.id===e)??{id:e,name:`Chain ${a}`,network:`${a}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpcUrls:{default:{http:[""]},public:{http:[""]}}}}catch(m){let p=this.chains.find(t=>t.id===e);if(!p)throw new g.B({chainId:e,connectorId:this.id});if(4902===m.code||m?.data?.originalError?.code===4902)try{await t.request({method:"wallet_addEthereumChain",params:[{chainId:a,chainName:p.name,nativeCurrency:p.nativeCurrency,rpcUrls:[p.rpcUrls.public?.http[0]??""],blockExplorerUrls:this.getBlockExplorerUrls(p)}]});let g=await this.getChainId();if(g!==e)throw new x.ab(Error("User rejected switch after adding network."));return p}catch(e){throw new x.ab(e)}if(this.isUserRejectedRequestError(m))throw new x.ab(m);throw new x.x3(m)}}async watchAsset({address:e,decimals:t=18,image:a,symbol:p}){let m=await this.getProvider();if(!m)throw new g.N;return m.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:e,decimals:t,image:a,symbol:p}}})}isUserRejectedRequestError(e){return 4001===e.code}};p=new WeakMap},53516:function(e,t,a){"use strict";function normalizeChainId(e){return"string"==typeof e?Number.parseInt(e,"0x"===e.trim().substring(0,2)?16:10):"bigint"==typeof e?Number(e):e}a.d(t,{J:function(){return normalizeChainId}})},57858:function(e,t,a){"use strict";a.d(t,{B:function(){return p},N:function(){return g}});var p=class extends Error{constructor({chainId:e,connectorId:t}){super(`Chain "${e}" not configured for connector "${t}".`),this.name="ChainNotConfiguredForConnectorError"}},g=class extends Error{constructor(){super(...arguments),this.name="ConnectorNotFoundError",this.message="Connector not found"}}},75276:function(e,t,a){"use strict";a.d(t,{wR:function(){return _},Ko:function(){return __privateAdd},ac:function(){return __privateGet},U9:function(){return __privateMethod},qx:function(){return __privateSet}});var p=a(26729),g=a(66403),m=a(22676);let v=(0,m.ax)({id:5,network:"goerli",name:"Goerli",nativeCurrency:{name:"Goerli Ether",symbol:"ETH",decimals:18},rpcUrls:{alchemy:{http:["https://eth-goerli.g.alchemy.com/v2"],webSocket:["wss://eth-goerli.g.alchemy.com/v2"]},infura:{http:["https://goerli.infura.io/v3"],webSocket:["wss://goerli.infura.io/ws/v3"]},default:{http:["https://rpc.ankr.com/eth_goerli"]},public:{http:["https://rpc.ankr.com/eth_goerli"]}},blockExplorers:{etherscan:{name:"Etherscan",url:"https://goerli.etherscan.io"},default:{name:"Etherscan",url:"https://goerli.etherscan.io"}},contracts:{ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0x56522D00C410a43BFfDF00a9A569489297385790",blockCreated:8765204},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:6507670}},testnet:!0});var __accessCheck=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},__privateGet=(e,t,a)=>(__accessCheck(e,t,"read from private field"),a?a.call(e):t.get(e)),__privateAdd=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},__privateSet=(e,t,a,p)=>(__accessCheck(e,t,"write to private field"),p?p.call(e,a):t.set(e,a),a),__privateMethod=(e,t,a)=>(__accessCheck(e,t,"access private method"),a),_=class extends p{constructor({chains:e=[g.R,v],options:t}){super(),this.chains=e,this.options=t}getBlockExplorerUrls(e){let{default:t,...a}=e.blockExplorers??{};if(t)return[t.url,...Object.values(a).map(e=>e.url)]}isChainUnsupported(e){return!this.chains.some(t=>t.id===e)}setStorage(e){this.storage=e}}},72147:function(e,t,a){"use strict";a.d(t,{QB:function(){return configureChains},$j:function(){return connect},_g:function(){return createConfig},o6:function(){return createStorage},zP:function(){return disconnect},EG:function(){return fetchBalance},w6:function(){return fetchEnsAvatar},Lk:function(){return fetchEnsName},D0:function(){return getAccount},Hy:function(){return getNetwork},wp:function(){return e7},If:function(){return switchNetwork},uH:function(){return watchAccount},QC:function(){return watchNetwork}});var p,g,m,v,_,x=a(74278),__accessCheck=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)},__privateGet=(e,t,a)=>(__accessCheck(e,t,"read from private field"),a?a.call(e):t.get(e)),__privateAdd=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},__privateSet=(e,t,a,p)=>(__accessCheck(e,t,"write to private field"),p?p.call(e,a):t.set(e,a),a),__privateMethod=(e,t,a)=>(__accessCheck(e,t,"access private method"),a),T=a(16189),F=a(16693),z=a(7210),W=a(77799),K=a(22676),Z=a(61836),Q=a(92106),X=a(21746),Y=a(62027),J=a(97405);function isNullUniversalResolverError(e,t){if(!(e instanceof Y.G))return!1;let a=e.walk(e=>e instanceof J.Lu);return a instanceof J.Lu&&(!!(a.data?.errorName==="ResolverNotFound"||a.data?.errorName==="ResolverWildcardNotSupported"||a.reason?.includes("Wildcard on non-extended resolvers is not supported"))||"reverse"===t&&a.reason===X.$[50])}var ei=a(57040),en=a(11187),eo=a(56254),ea=a(15102);function encodedLabelToLabelhash(e){if(66!==e.length||0!==e.indexOf("[")||65!==e.indexOf("]"))return null;let t=`0x${e.slice(1,65)}`;return(0,ea.v)(t)?t:null}function namehash(e){let t=new Uint8Array(32).fill(0);if(!e)return(0,Q.ci)(t);let a=e.split(".");for(let e=a.length-1;e>=0;e-=1){let p=encodedLabelToLabelhash(a[e]),g=p?(0,en.O0)(p):(0,eo.w)((0,en.qX)(a[e]),"bytes");t=(0,eo.w)((0,ei.zo)([t,g]),"bytes")}return(0,Q.ci)(t)}function packetToBytes(e){let t=e.replace(/^\.|\.$/gm,"");if(0===t.length)return new Uint8Array(1);let a=new Uint8Array((0,en.qX)(t).byteLength+2),p=0,g=t.split(".");for(let e=0;e<g.length;e++){let t=(0,en.qX)(g[e]);if(t.byteLength>255){var m;t=(0,en.qX)((m=function(e){let t=new Uint8Array(32).fill(0);return e?encodedLabelToLabelhash(e)||(0,eo.w)((0,en.qX)(e)):(0,Q.ci)(t)}(g[e]),`[${m.slice(2)}]`))}a[p]=t.length,a.set(t,p+1),p+=t.length+1}return a.byteLength!==p+1?a.slice(0,p+1):a}var es=a(57412),el=a(39028);function getContractError(e,{abi:t,address:a,args:p,docsPath:g,functionName:m,sender:v}){let{code:_,data:x,message:T,shortMessage:F}=e instanceof J.VQ?e:e instanceof Y.G?e.walk(e=>"data"in e)||e.walk():{},z=e instanceof es.wb?new J.Dk({functionName:m}):[3,el.XS.code].includes(_)&&(x||T||F)?new J.Lu({abi:t,data:"object"==typeof x?x.data:x,functionName:m,message:F??T}):e;return new J.uq(z,{abi:t,args:p,contractAddress:a,docsPath:g,functionName:m,sender:v})}var ec=a(61376);async function readContract(e,{abi:t,address:a,args:p,functionName:g,...m}){let v=(0,W.R)({abi:t,args:p,functionName:g});try{let{data:_}=await (0,ec.R)(e,{data:v,to:a,...m});return(0,z.k)({abi:t,args:p,functionName:g,data:_||"0x"})}catch(e){throw getContractError(e,{abi:t,address:a,args:p,docsPath:"/docs/contract/readContract",functionName:g})}}async function getEnsAddress(e,{blockNumber:t,blockTag:a,coinType:p,name:g,universalResolverAddress:m}){let v=m;if(!v){if(!e.chain)throw Error("client chain not configured. universalResolverAddress is required.");v=(0,K.LI)({blockNumber:t,chain:e.chain,contract:"ensUniversalResolver"})}try{let m=(0,W.R)({abi:F.X$,functionName:"addr",...null!=p?{args:[namehash(g),BigInt(p)]}:{args:[namehash(g)]}}),_=await readContract(e,{address:v,abi:F.k3,functionName:"resolve",args:[(0,Q.NC)(packetToBytes(g)),m],blockNumber:t,blockTag:a});if("0x"===_[0])return null;let x=(0,z.k)({abi:F.X$,args:null!=p?[namehash(g),BigInt(p)]:void 0,functionName:"addr",data:_[0]});if("0x"===x||"0x00"===(0,Z.f)(x))return null;return x}catch(e){if(isNullUniversalResolverError(e,"resolve"))return null;throw e}}let EnsAvatarInvalidMetadataError=class EnsAvatarInvalidMetadataError extends Y.G{constructor({data:e}){super("Unable to extract image from metadata. The metadata may be malformed or invalid.",{metaMessages:["- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.","",`Provided data: ${JSON.stringify(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarInvalidMetadataError"})}};let EnsAvatarInvalidNftUriError=class EnsAvatarInvalidNftUriError extends Y.G{constructor({reason:e}){super(`ENS NFT avatar URI is invalid. ${e}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarInvalidNftUriError"})}};let EnsAvatarUriResolutionError=class EnsAvatarUriResolutionError extends Y.G{constructor({uri:e}){super(`Unable to resolve ENS avatar URI "${e}". The URI may be malformed, invalid, or does not respond with a valid image.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarUriResolutionError"})}};let EnsAvatarUnsupportedNamespaceError=class EnsAvatarUnsupportedNamespaceError extends Y.G{constructor({namespace:e}){super(`ENS NFT avatar namespace "${e}" is not supported. Must be "erc721" or "erc1155".`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EnsAvatarUnsupportedNamespaceError"})}};let eu=/(?<protocol>https?:\/\/[^\/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/,ed=/^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/,eh=/^data:([a-zA-Z\-/+]*);base64,([^"].*)/,ef=/^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;async function isImageUri(e){try{let t=await fetch(e,{method:"HEAD"});if(200===t.status){let e=t.headers.get("content-type");return e?.startsWith("image/")}return!1}catch(t){if("object"==typeof t&&void 0!==t.response||!globalThis.hasOwnProperty("Image"))return!1;return new Promise(t=>{let a=new Image;a.onload=()=>{t(!0)},a.onerror=()=>{t(!1)},a.src=e})}}function getGateway(e,t){return e?e.endsWith("/")?e.slice(0,-1):e:t}function resolveAvatarUri({uri:e,gatewayUrls:t}){let a=eh.test(e);if(a)return{uri:e,isOnChain:!0,isEncoded:a};let p=getGateway(t?.ipfs,"https://ipfs.io"),g=getGateway(t?.arweave,"https://arweave.net"),m=e.match(eu),{protocol:v,subpath:_,target:x,subtarget:T=""}=m?.groups||{},F="ipns:/"===v||"ipns/"===_,z="ipfs:/"===v||"ipfs/"===_||ed.test(e);if(e.startsWith("http")&&!F&&!z){let a=e;return t?.arweave&&(a=e.replace(/https:\/\/arweave.net/g,t?.arweave)),{uri:a,isOnChain:!1,isEncoded:!1}}if((F||z)&&x)return{uri:`${p}/${F?"ipns":"ipfs"}/${x}${T}`,isOnChain:!1,isEncoded:!1};if("ar:/"===v&&x)return{uri:`${g}/${x}${T||""}`,isOnChain:!1,isEncoded:!1};let W=e.replace(ef,"");if(W.startsWith("<svg")&&(W=`data:image/svg+xml;base64,${btoa(W)}`),W.startsWith("data:")||W.startsWith("{"))return{uri:W,isOnChain:!0,isEncoded:!1};throw new EnsAvatarUriResolutionError({uri:e})}function getJsonImage(e){if("object"!=typeof e||!("image"in e)&&!("image_url"in e)&&!("image_data"in e))throw new EnsAvatarInvalidMetadataError({data:e});return e.image||e.image_url||e.image_data}async function getMetadataAvatarUri({gatewayUrls:e,uri:t}){try{let a=await fetch(t).then(e=>e.json()),p=await parseAvatarUri({gatewayUrls:e,uri:getJsonImage(a)});return p}catch{throw new EnsAvatarUriResolutionError({uri:t})}}async function parseAvatarUri({gatewayUrls:e,uri:t}){let{uri:a,isOnChain:p}=resolveAvatarUri({uri:t,gatewayUrls:e});if(p)return a;let g=await isImageUri(a);if(g)return a;throw new EnsAvatarUriResolutionError({uri:t})}async function getNftTokenUri(e,{nft:t}){if("erc721"===t.namespace)return readContract(e,{address:t.contractAddress,abi:[{name:"tokenURI",type:"function",stateMutability:"view",inputs:[{name:"tokenId",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"tokenURI",args:[BigInt(t.tokenID)]});if("erc1155"===t.namespace)return readContract(e,{address:t.contractAddress,abi:[{name:"uri",type:"function",stateMutability:"view",inputs:[{name:"_id",type:"uint256"}],outputs:[{name:"",type:"string"}]}],functionName:"uri",args:[BigInt(t.tokenID)]});throw new EnsAvatarUnsupportedNamespaceError({namespace:t.namespace})}async function parseAvatarRecord(e,{gatewayUrls:t,record:a}){return/eip155:/i.test(a)?parseNftAvatarUri(e,{gatewayUrls:t,record:a}):parseAvatarUri({uri:a,gatewayUrls:t})}async function parseNftAvatarUri(e,{gatewayUrls:t,record:a}){let p=function(e){let t=e;t.startsWith("did:nft:")&&(t=t.replace("did:nft:","").replace(/_/g,"/"));let[a,p,g]=t.split("/"),[m,v]=a.split(":"),[_,x]=p.split(":");if(!m||"eip155"!==m.toLowerCase())throw new EnsAvatarInvalidNftUriError({reason:"Only EIP-155 supported"});if(!v)throw new EnsAvatarInvalidNftUriError({reason:"Chain ID not found"});if(!x)throw new EnsAvatarInvalidNftUriError({reason:"Contract address not found"});if(!g)throw new EnsAvatarInvalidNftUriError({reason:"Token ID not found"});if(!_)throw new EnsAvatarInvalidNftUriError({reason:"ERC namespace not found"});return{chainID:parseInt(v),namespace:_.toLowerCase(),contractAddress:x,tokenID:g}}(a),g=await getNftTokenUri(e,{nft:p}),{uri:m,isOnChain:v,isEncoded:_}=resolveAvatarUri({uri:g,gatewayUrls:t});if(v&&(m.includes("data:application/json;base64,")||m.startsWith("{"))){let e=_?atob(m.replace("data:application/json;base64,","")):m,a=JSON.parse(e);return parseAvatarUri({uri:getJsonImage(a),gatewayUrls:t})}let x=p.tokenID;return"erc1155"===p.namespace&&(x=x.replace("0x","").padStart(64,"0")),getMetadataAvatarUri({gatewayUrls:t,uri:m.replace(/(?:0x)?{id}/,x)})}async function getEnsText(e,{blockNumber:t,blockTag:a,name:p,key:g,universalResolverAddress:m}){let v=m;if(!v){if(!e.chain)throw Error("client chain not configured. universalResolverAddress is required.");v=(0,K.LI)({blockNumber:t,chain:e.chain,contract:"ensUniversalResolver"})}try{let m=await readContract(e,{address:v,abi:F.k3,functionName:"resolve",args:[(0,Q.NC)(packetToBytes(p)),(0,W.R)({abi:F.nZ,functionName:"text",args:[namehash(p),g]})],blockNumber:t,blockTag:a});if("0x"===m[0])return null;let _=(0,z.k)({abi:F.nZ,functionName:"text",data:m[0]});return""===_?null:_}catch(e){if(isNullUniversalResolverError(e,"resolve"))return null;throw e}}async function getEnsAvatar(e,{blockNumber:t,blockTag:a,gatewayUrls:p,name:g,universalResolverAddress:m}){let v=await getEnsText(e,{blockNumber:t,blockTag:a,key:"avatar",name:g,universalResolverAddress:m});if(!v)return null;try{return await parseAvatarRecord(e,{record:v,gatewayUrls:p})}catch{return null}}async function getEnsName(e,{address:t,blockNumber:a,blockTag:p,universalResolverAddress:g}){let m=g;if(!m){if(!e.chain)throw Error("client chain not configured. universalResolverAddress is required.");m=(0,K.LI)({blockNumber:a,chain:e.chain,contract:"ensUniversalResolver"})}let v=`${t.toLowerCase().substring(2)}.addr.reverse`;try{let t=await readContract(e,{address:m,abi:F.du,functionName:"reverse",args:[(0,Q.NC)(packetToBytes(v))],blockNumber:a,blockTag:p});return t[0]}catch(e){if(isNullUniversalResolverError(e,"reverse"))return null;throw e}}async function getEnsResolver(e,{blockNumber:t,blockTag:a,name:p,universalResolverAddress:g}){let m=g;if(!m){if(!e.chain)throw Error("client chain not configured. universalResolverAddress is required.");m=(0,K.LI)({blockNumber:t,chain:e.chain,contract:"ensUniversalResolver"})}let[v]=await readContract(e,{address:m,abi:[{inputs:[{type:"bytes"}],name:"findResolver",outputs:[{type:"address"},{type:"bytes32"}],stateMutability:"view",type:"function"}],functionName:"findResolver",args:[(0,Q.NC)(packetToBytes(p))],blockNumber:t,blockTag:a});return v}function createFilterRequestScope(e,{method:t}){let a={};return"fallback"===e.transport.type&&e.transport.onResponse?.(({method:e,response:p,status:g,transport:m})=>{"success"===g&&t===e&&(a[p]=m.request)}),t=>a[t]||e.request}async function createBlockFilter(e){let t=createFilterRequestScope(e,{method:"eth_newBlockFilter"}),a=await e.request({method:"eth_newBlockFilter"});return{id:a,request:t(a),type:"block"}}let FilterTypeNotSupportedError=class FilterTypeNotSupportedError extends Y.G{constructor(e){super(`Filter type "${e}" is not supported.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FilterTypeNotSupportedError"})}};var ep=a(74059),eg=a(45444),em=a(80522),ew=a(40840);function encodeEventTopics({abi:e,eventName:t,args:a}){let p=e[0];if(t&&!(p=(0,ew.m)({abi:e,args:a,name:t})))throw new es.mv(t,{docsPath:"/docs/contract/encodeEventTopics"});if("event"!==p.type)throw new es.mv(void 0,{docsPath:"/docs/contract/encodeEventTopics"});let g=(0,em.t)(p),m=(0,ep.e)(g),v=[];if(a&&"inputs"in p){let e=p.inputs?.filter(e=>"indexed"in e&&e.indexed),t=Array.isArray(a)?a:Object.values(a).length>0?e?.map(e=>a[e.name])??[]:[];t.length>0&&(v=e?.map((e,a)=>Array.isArray(t[a])?t[a].map((p,g)=>encodeArg({param:e,value:t[a][g]})):t[a]?encodeArg({param:e,value:t[a]}):null)??[])}return[m,...v]}function encodeArg({param:e,value:t}){if("string"===e.type||"bytes"===e.type)return(0,eo.w)((0,en.O0)(t));if("tuple"===e.type||e.type.match(/^(.*)\[(\d+)?\]$/))throw new FilterTypeNotSupportedError(e.type);return(0,eg.E)([e],[t])}async function createContractEventFilter(e,{address:t,abi:a,args:p,eventName:g,fromBlock:m,strict:v,toBlock:_}){let x=createFilterRequestScope(e,{method:"eth_newFilter"}),T=g?encodeEventTopics({abi:a,args:p,eventName:g}):void 0,F=await e.request({method:"eth_newFilter",params:[{address:t,fromBlock:"bigint"==typeof m?(0,Q.eC)(m):m,toBlock:"bigint"==typeof _?(0,Q.eC)(_):_,topics:T}]});return{abi:a,args:p,eventName:g,id:F,request:x(F),strict:v,type:"event"}}async function createEventFilter(e,{address:t,args:a,event:p,events:g,fromBlock:m,strict:v,toBlock:_}={}){let x=g??(p?[p]:void 0),T=createFilterRequestScope(e,{method:"eth_newFilter"}),F=[];x&&(F=[x.flatMap(e=>encodeEventTopics({abi:[e],eventName:e.name,args:a}))],p&&(F=F[0]));let z=await e.request({method:"eth_newFilter",params:[{address:t,fromBlock:"bigint"==typeof m?(0,Q.eC)(m):m,toBlock:"bigint"==typeof _?(0,Q.eC)(_):_,...F.length?{topics:F}:{}}]});return{abi:x,args:a,eventName:p?p.name:void 0,fromBlock:m,id:z,request:T(z),strict:v,toBlock:_,type:"event"}}async function createPendingTransactionFilter(e){let t=createFilterRequestScope(e,{method:"eth_newPendingTransactionFilter"}),a=await e.request({method:"eth_newPendingTransactionFilter"});return{id:a,request:t(a),type:"transaction"}}var eb=a(14503),ey=a(81841);async function estimateContractGas(e,{abi:t,address:a,args:p,functionName:g,...m}){let v=(0,W.R)({abi:t,args:p,functionName:g});try{let t=await (0,ey.Q)(e,{data:v,to:a,...m});return t}catch(v){let e=m.account?(0,eb.T)(m.account):void 0;throw getContractError(v,{abi:t,address:a,args:p,docsPath:"/docs/contract/estimateContractGas",functionName:g,sender:e?.address})}}var ev=a(43861),e_=a(79379);async function getBalance(e,{address:t,blockNumber:a,blockTag:p="latest"}){let g=a?(0,Q.eC)(a):void 0,m=await e.request({method:"eth_getBalance",params:[t,g||p]});return BigInt(m)}var ex=a(36765);let eC=new Map,eE=new Map;async function withCache(e,{cacheKey:t,cacheTime:a=1/0}){let p=function(e){let buildCache=(e,t)=>({clear:()=>t.delete(e),get:()=>t.get(e),set:a=>t.set(e,a)}),t=buildCache(e,eC),a=buildCache(e,eE);return{clear:()=>{t.clear(),a.clear()},promise:t,response:a}}(t),g=p.response.get();if(g&&a>0){let e=new Date().getTime()-g.created.getTime();if(e<a)return g.data}let m=p.promise.get();m||(m=e(),p.promise.set(m));try{let e=await m;return p.response.set({created:new Date,data:e}),e}finally{p.promise.clear()}}let cacheKey=e=>`blockNumber.${e}`;async function getBlockNumber(e,{cacheTime:t=e.cacheTime,maxAge:a}={}){let p=await withCache(()=>e.request({method:"eth_blockNumber"}),{cacheKey:cacheKey(e.uid),cacheTime:a??t});return BigInt(p)}var ek=a(95946);async function getBlockTransactionCount(e,{blockHash:t,blockNumber:a,blockTag:p="latest"}={}){let g;let m=void 0!==a?(0,Q.eC)(a):void 0;return g=t?await e.request({method:"eth_getBlockTransactionCountByHash",params:[t]}):await e.request({method:"eth_getBlockTransactionCountByNumber",params:[m||p]}),(0,ek.ly)(g)}async function getBytecode(e,{address:t,blockNumber:a,blockTag:p="latest"}){let g=void 0!==a?(0,Q.eC)(a):void 0,m=await e.request({method:"eth_getCode",params:[t,g||p]});if("0x"!==m)return m}var eS=a(79524),eA=a(34450);let eP="/docs/contract/decodeEventLog";function decodeEventLog({abi:e,data:t,strict:a,topics:p}){let g=a??!0,[m,...v]=p;if(!m)throw new es.FM({docsPath:eP});let _=e.find(e=>"event"===e.type&&m===(0,ep.e)((0,em.t)(e)));if(!(_&&"name"in _)||"event"!==_.type)throw new es.lC(m,{docsPath:eP});let{name:x,inputs:T}=_,F=T?.some(e=>!("name"in e&&e.name)),z=F?[]:{},W=T.filter(e=>"indexed"in e&&e.indexed);if(v.length>0)for(let e=0;e<W.length;e++){let t=W[e],a=v[e];if(!a)throw new es.Gy({abiItem:_,param:t});z[t.name||e]=function({param:e,value:t}){if("string"===e.type||"bytes"===e.type||"tuple"===e.type||e.type.match(/^(.*)\[(\d+)?\]$/))return t;let a=(0,eA.r)([e],t)||[];return a[0]}({param:t,value:a})}let K=T.filter(e=>!("indexed"in e&&e.indexed));if(K.length>0){if(t&&"0x"!==t)try{let e=(0,eA.r)(K,t);if(e){if(F)z=[...z,...e];else for(let t=0;t<K.length;t++)z[K[t].name]=e[t]}}catch(e){if(g){if(e instanceof es.xB)throw new es.SM({abiItem:_,data:e.data,params:e.params,size:e.size});throw e}}else if(g)throw new es.SM({abiItem:_,data:"0x",params:K,size:0})}return{eventName:x,args:Object.values(z).length>0?z:void 0}}var eD=a(53992);async function getLogs(e,{address:t,blockHash:a,fromBlock:p,toBlock:g,event:m,events:v,args:_,strict:x}={}){let T=x??!1,F=v??(m?[m]:void 0),z=[];return F&&(z=[F.flatMap(e=>encodeEventTopics({abi:[e],eventName:e.name,args:_}))],m&&(z=z[0])),(a?await e.request({method:"eth_getLogs",params:[{address:t,topics:z,blockHash:a}]}):await e.request({method:"eth_getLogs",params:[{address:t,topics:z,fromBlock:"bigint"==typeof p?(0,Q.eC)(p):p,toBlock:"bigint"==typeof g?(0,Q.eC)(g):g}]})).map(e=>{try{let{eventName:t,args:a}=F?decodeEventLog({abi:F,data:e.data,topics:e.topics,strict:T}):{eventName:void 0,args:void 0};return(0,eD.U)(e,{args:a,eventName:t})}catch(p){let t,a;if(p instanceof es.SM||p instanceof es.Gy){if(T)return;t=p.abiItem.name,a=p.abiItem.inputs?.some(e=>!("name"in e&&e.name))}return(0,eD.U)(e,{args:a?[]:{},eventName:t})}}).filter(Boolean)}async function getContractEvents(e,{abi:t,address:a,args:p,blockHash:g,eventName:m,fromBlock:v,toBlock:_,strict:x}){let T=m?(0,ew.m)({abi:t,name:m}):void 0,F=T?void 0:t.filter(e=>"event"===e.type);return getLogs(e,{address:a,args:p,blockHash:g,event:T,events:F,fromBlock:v,toBlock:_,strict:x})}async function getFeeHistory(e,{blockCount:t,blockNumber:a,blockTag:p="latest",rewardPercentiles:g}){let m=a?(0,Q.eC)(a):void 0,v=await e.request({method:"eth_feeHistory",params:[(0,Q.eC)(t),m||p,g]});return{baseFeePerGas:v.baseFeePerGas.map(e=>BigInt(e)),gasUsedRatio:v.gasUsedRatio,oldestBlock:BigInt(v.oldestBlock),reward:v.reward?.map(e=>e.map(e=>BigInt(e)))}}async function getFilterChanges(e,{filter:t}){let a="strict"in t&&t.strict,p=await t.request({method:"eth_getFilterChanges",params:[t.id]});return p.map(e=>{if("string"==typeof e)return e;try{let{eventName:p,args:g}="abi"in t&&t.abi?decodeEventLog({abi:t.abi,data:e.data,topics:e.topics,strict:a}):{eventName:void 0,args:void 0};return(0,eD.U)(e,{args:g,eventName:p})}catch(g){let a,p;if(g instanceof es.SM||g instanceof es.Gy){if("strict"in t&&t.strict)return;a=g.abiItem.name,p=g.abiItem.inputs?.some(e=>!("name"in e&&e.name))}return(0,eD.U)(e,{args:p?[]:{},eventName:a})}}).filter(Boolean)}async function getFilterLogs(e,{filter:t}){let a=t.strict??!1,p=await t.request({method:"eth_getFilterLogs",params:[t.id]});return p.map(e=>{try{let{eventName:p,args:g}="abi"in t&&t.abi?decodeEventLog({abi:t.abi,data:e.data,topics:e.topics,strict:a}):{eventName:void 0,args:void 0};return(0,eD.U)(e,{args:g,eventName:p})}catch(g){let a,p;if(g instanceof es.SM||g instanceof es.Gy){if("strict"in t&&t.strict)return;a=g.abiItem.name,p=g.abiItem.inputs?.some(e=>!("name"in e&&e.name))}return(0,eD.U)(e,{args:p?[]:{},eventName:a})}}).filter(Boolean)}var e$=a(24453);async function getProof(e,{address:t,blockNumber:a,blockTag:p,storageKeys:g}){let m=void 0!==a?(0,Q.eC)(a):void 0,v=await e.request({method:"eth_getProof",params:[t,g,m||(p??"latest")]});return{...v,balance:v.balance?BigInt(v.balance):void 0,nonce:v.nonce?(0,ek.ly)(v.nonce):void 0,storageProof:v.storageProof?v.storageProof.map(e=>({...e,value:BigInt(e.value)})):void 0}}async function getStorageAt(e,{address:t,blockNumber:a,blockTag:p="latest",slot:g}){let m=void 0!==a?(0,Q.eC)(a):void 0,v=await e.request({method:"eth_getStorageAt",params:[t,g,m||p]});return v}var eO=a(33639),eI=a(6073);async function getTransaction(e,{blockHash:t,blockNumber:a,blockTag:p,hash:g,index:m}){let v=p||"latest",_=void 0!==a?(0,Q.eC)(a):void 0,x=null;if(g?x=await e.request({method:"eth_getTransactionByHash",params:[g]}):t?x=await e.request({method:"eth_getTransactionByBlockHashAndIndex",params:[t,(0,Q.eC)(m)]}):(_||v)&&(x=await e.request({method:"eth_getTransactionByBlockNumberAndIndex",params:[_||v,(0,Q.eC)(m)]})),!x)throw new eO.Bh({blockHash:t,blockNumber:a,blockTag:v,hash:g,index:m});let T=e.chain?.formatters?.transaction?.format||eI.Tr;return T(x)}async function getTransactionConfirmations(e,{hash:t,transactionReceipt:a}){let[p,g]=await Promise.all([getBlockNumber(e),t?getTransaction(e,{hash:t}):void 0]),m=a?.blockNumber||g?.blockNumber;return m?p-m+1n:0n}var eT=a(86162),eR=a(30866);async function getTransactionReceipt(e,{hash:t}){let a=await e.request({method:"eth_getTransactionReceipt",params:[t]});if(!a)throw new eO.Yb({hash:t});let p=e.chain?.formatters?.transactionReceipt?.format||eR.f;return p(a)}async function multicall(e,t){let{allowFailure:a=!0,batchSize:p,blockNumber:g,blockTag:m,contracts:v,multicallAddress:_}=t,x=p??("object"==typeof e.batch?.multicall&&e.batch.multicall.batchSize||1024),T=_;if(!T){if(!e.chain)throw Error("client chain not configured. multicallAddress is required.");T=(0,K.LI)({blockNumber:g,chain:e.chain,contract:"multicall3"})}let Z=[[]],Q=0,X=0;for(let e=0;e<v.length;e++){let{abi:t,address:p,args:g,functionName:m}=v[e];try{let e=(0,W.R)({abi:t,args:g,functionName:m});X+=(e.length-2)/2,x>0&&X>x&&Z[Q].length>0&&(Q++,X=(e.length-2)/2,Z[Q]=[]),Z[Q]=[...Z[Q],{allowFailure:!0,callData:e,target:p}]}catch(v){let e=getContractError(v,{abi:t,address:p,args:g,docsPath:"/docs/contract/multicall",functionName:m});if(!a)throw e;Z[Q]=[...Z[Q],{allowFailure:!0,callData:"0x",target:p}]}}let ei=await Promise.allSettled(Z.map(t=>readContract(e,{abi:F.F8,address:T,args:[t],blockNumber:g,blockTag:m,functionName:"aggregate3"}))),en=[];for(let e=0;e<ei.length;e++){let t=ei[e];if("rejected"===t.status){if(!a)throw t.reason;for(let a=0;a<Z[e].length;a++)en.push({status:"failure",error:t.reason,result:void 0});continue}let p=t.value;for(let t=0;t<p.length;t++){let{returnData:g,success:m}=p[t],{callData:_}=Z[e][t],{abi:x,address:T,functionName:F,args:W}=v[en.length];try{if("0x"===_)throw new es.wb;if(!m)throw new J.VQ({data:g});let e=(0,z.k)({abi:x,args:W,data:g,functionName:F});en.push(a?{result:e,status:"success"}:e)}catch(t){let e=getContractError(t,{abi:x,address:T,args:W,docsPath:"/docs/contract/multicall",functionName:F});if(!a)throw e;en.push({error:e,result:void 0,status:"failure"})}}}if(en.length!==v.length)throw new Y.G("multicall results mismatch");return en}async function simulateContract(e,{abi:t,address:a,args:p,dataSuffix:g,functionName:m,...v}){let _=v.account?(0,eb.T)(v.account):void 0,x=(0,W.R)({abi:t,args:p,functionName:m});try{let{data:_}=await (0,ec.R)(e,{batch:!1,data:`${x}${g?g.replace("0x",""):""}`,to:a,...v}),T=(0,z.k)({abi:t,args:p,functionName:m,data:_||"0x"});return{result:T,request:{abi:t,address:a,args:p,dataSuffix:g,functionName:m,...v}}}catch(e){throw getContractError(e,{abi:t,address:a,args:p,docsPath:"/docs/contract/simulateContract",functionName:m,sender:_?.address})}}async function uninstallFilter(e,{filter:t}){return t.request({method:"eth_uninstallFilter",params:[t.id]})}BigInt(0),BigInt(1),BigInt(2);var eB=a(30286);async function verifyHash(e,{address:t,hash:a,signature:p,...g}){let m=(0,ea.v)(p)?p:(0,Q.NC)(p);try{let{data:p}=await (0,ec.R)(e,{data:(0,eB.w)({abi:F.$o,args:[t,a,m],bytecode:"0x60806040523480156200001157600080fd5b50604051620007003803806200070083398101604081905262000034916200056f565b6000620000438484846200004f565b9050806000526001601ff35b600080846001600160a01b0316803b806020016040519081016040528181526000908060200190933c90507f6492649264926492649264926492649264926492649264926492649264926492620000a68462000451565b036200021f57600060608085806020019051810190620000c79190620005ce565b8651929550909350915060000362000192576000836001600160a01b031683604051620000f5919062000643565b6000604051808303816000865af19150503d806000811462000134576040519150601f19603f3d011682016040523d82523d6000602084013e62000139565b606091505b5050905080620001905760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b505b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90620001c4908b90869060040162000661565b602060405180830381865afa158015620001e2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200020891906200069d565b6001600160e01b031916149450505050506200044a565b805115620002b157604051630b135d3f60e11b808252906001600160a01b03871690631626ba7e9062000259908890889060040162000661565b602060405180830381865afa15801562000277573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200029d91906200069d565b6001600160e01b031916149150506200044a565b8251604114620003195760405162461bcd60e51b815260206004820152603a6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e677468000000000000606482015260840162000187565b620003236200046b565b506020830151604080850151855186939260009185919081106200034b576200034b620006c9565b016020015160f81c9050601b81148015906200036b57508060ff16601c14155b15620003cf5760405162461bcd60e51b815260206004820152603b6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c75650000000000606482015260840162000187565b6040805160008152602081018083528a905260ff83169181019190915260608101849052608081018390526001600160a01b038a169060019060a0016020604051602081039080840390855afa1580156200042e573d6000803e3d6000fd5b505050602060405103516001600160a01b031614955050505050505b9392505050565b60006020825110156200046357600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b03811681146200049f57600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620004d5578181015183820152602001620004bb565b50506000910152565b600082601f830112620004f057600080fd5b81516001600160401b03808211156200050d576200050d620004a2565b604051601f8301601f19908116603f01168101908282118183101715620005385762000538620004a2565b816040528381528660208588010111156200055257600080fd5b62000565846020830160208901620004b8565b9695505050505050565b6000806000606084860312156200058557600080fd5b8351620005928162000489565b6020850151604086015191945092506001600160401b03811115620005b657600080fd5b620005c486828701620004de565b9150509250925092565b600080600060608486031215620005e457600080fd5b8351620005f18162000489565b60208501519093506001600160401b03808211156200060f57600080fd5b6200061d87838801620004de565b935060408601519150808211156200063457600080fd5b50620005c486828701620004de565b6000825162000657818460208701620004b8565b9190910192915050565b828152604060208201526000825180604084015262000688816060850160208701620004b8565b601f01601f1916919091016060019392505050565b600060208284031215620006b057600080fd5b81516001600160e01b0319811681146200044a57600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572"}),...g});return function(e,t){let a=(0,ea.v)(e)?(0,en.O0)(e):e,p=(0,ea.v)(t)?(0,en.O0)(t):t;return function(e,t){if(e.length!==t.length)return!1;for(let a=0;a<e.length;a++)if(e[a]!==t[a])return!1;return!0}(a,p)}(p??"0x0","0x1")}catch(e){if(e instanceof J.cg)return!1;throw e}}async function verifyMessage(e,{address:t,message:a,signature:p,...g}){let m=function(e,t){let a="string"==typeof e?(0,en.qX)(e):e.raw instanceof Uint8Array?e.raw:(0,en.O0)(e.raw),p=(0,en.qX)(`\x19Ethereum Signed Message:
${a.length}`);return(0,eo.w)((0,ei.zo)([p,a]),void 0)}(a);return verifyHash(e,{address:t,hash:m,signature:p,...g})}var eN=a(71352);function hashStruct({data:e,primaryType:t,types:a}){let p=function encodeData({data:e,primaryType:t,types:a}){let p=[{type:"bytes32"}],g=[function({primaryType:e,types:t}){let a=(0,Q.NC)(function({primaryType:e,types:t}){let a="",p=function findTypeDependencies({primaryType:e,types:t},a=new Set){let p=e.match(/^\w*/u),g=p?.[0];if(a.has(g)||void 0===t[g])return a;for(let e of(a.add(g),t[g]))findTypeDependencies({primaryType:e.type,types:t},a);return a}({primaryType:e,types:t});p.delete(e);let g=[e,...Array.from(p).sort()];for(let e of g)a+=`${e}(${t[e].map(({name:e,type:t})=>`${t} ${e}`).join(",")})`;return a}({primaryType:e,types:t}));return(0,eo.w)(a)}({primaryType:t,types:a})];for(let m of a[t]){let[t,v]=function encodeField({types:e,name:t,type:a,value:p}){if(void 0!==e[a])return[{type:"bytes32"},(0,eo.w)(encodeData({data:p,primaryType:a,types:e}))];if("bytes"===a){let e=p.length%2?"0":"";return p=`0x${e+p.slice(2)}`,[{type:"bytes32"},(0,eo.w)(p)]}if("string"===a)return[{type:"bytes32"},(0,eo.w)((0,Q.NC)(p))];if(a.lastIndexOf("]")===a.length-1){let g=a.slice(0,a.lastIndexOf("[")),m=p.map(a=>encodeField({name:t,type:g,types:e,value:a}));return[{type:"bytes32"},(0,eo.w)((0,eg.E)(m.map(([e])=>e),m.map(([,e])=>e)))]}return[{type:a},p]}({types:a,name:m.name,type:m.type,value:e[m.name]});p.push(t),g.push(v)}return(0,eg.E)(p,g)}({data:e,primaryType:t,types:a});return(0,eo.w)(p)}async function verifyTypedData(e,{address:t,signature:a,message:p,primaryType:g,types:m,domain:v,..._}){let x=function({domain:e,message:t,primaryType:a,types:p}){let g=void 0===e?{}:e,m={EIP712Domain:(0,eN.cj)({domain:g}),...p};(0,eN.iC)({domain:g,message:t,primaryType:a,types:m});let v=["0x1901"];return g&&v.push(function({domain:e,types:t}){return hashStruct({data:e,primaryType:"EIP712Domain",types:t})}({domain:g,types:m})),"EIP712Domain"!==a&&v.push(hashStruct({data:t,primaryType:a,types:m})),(0,eo.w)((0,ei.zo)(v))}({message:p,primaryType:g,types:m,domain:v});return verifyHash(e,{address:t,hash:x,signature:a,..._})}let eU=new Map,eM=new Map,ej=0;function observe(e,t,a){let p=++ej,getListeners=()=>eU.get(e)||[],unsubscribe=()=>{let t=getListeners();eU.set(e,t.filter(e=>e.id!==p))},unwatch=()=>{let t=eM.get(e);1===getListeners().length&&t&&t(),unsubscribe()},g=getListeners();if(eU.set(e,[...g,{id:p,fns:t}]),g&&g.length>0)return unwatch;let m={};for(let e in t)m[e]=(...t)=>{let a=getListeners();0!==a.length&&a.forEach(a=>a.fns[e]?.(...t))};let v=a(m);return"function"==typeof v&&eM.set(e,v),unwatch}var eL=a(7760),eF=a(96070),ez=a(62914);function poll(e,{emitOnBegin:t,initialWaitTime:a,interval:p}){let g=!0,unwatch=()=>g=!1,watch=async()=>{let m;t&&(m=await e({unpoll:unwatch}));let v=await a?.(m)??p;await (0,ez.D)(v);let poll=async()=>{g&&(await e({unpoll:unwatch}),await (0,ez.D)(p),poll())};poll()};return watch(),unwatch}function watchBlockNumber(e,{emitOnBegin:t=!1,emitMissed:a=!1,onBlockNumber:p,onError:g,poll:m,pollingInterval:v=e.pollingInterval}){let _,x,T;let F=void 0!==m?m:"webSocket"!==e.transport.type;return F?(()=>{let m=(0,eF.P)(["watchBlockNumber",e.uid,t,a,v]);return observe(m,{onBlockNumber:p,onError:g},p=>poll(async()=>{try{let t=await getBlockNumber(e,{cacheTime:0});if(_){if(t===_)return;if(t-_>1&&a)for(let e=_+1n;e<t;e++)p.onBlockNumber(e,_),_=e}(!_||t>_)&&(p.onBlockNumber(t,_),_=t)}catch(e){p.onError?.(e)}},{emitOnBegin:t,interval:v}))})():(x=!0,T=()=>x=!1,(async()=>{try{let{unsubscribe:t}=await e.transport.subscribe({params:["newHeads"],onData(e){if(!x)return;let t=(0,ek.y_)(e.result?.number);p(t,_),_=t},onError(e){g?.(e)}});T=t,x||T()}catch(e){g?.(e)}})(),T)}async function waitForTransactionReceipt(e,{confirmations:t=1,hash:a,onReplaced:p,pollingInterval:g=e.pollingInterval,timeout:m}){let v,_,x;let T=(0,eF.P)(["waitForTransactionReceipt",e.uid,a]),F=!1;return new Promise((z,W)=>{m&&setTimeout(()=>W(new eO.mc({hash:a})),m);let K=observe(T,{onReplaced:p,resolve:z,reject:W},p=>{let m=watchBlockNumber(e,{emitMissed:!0,emitOnBegin:!0,poll:!0,pollingInterval:g,async onBlockNumber(g){if(F)return;let T=g,done=e=>{m(),e(),K()};try{if(x){if(t>1&&(!x.blockNumber||T-x.blockNumber+1n<t))return;done(()=>p.resolve(x));return}if(v||(F=!0,await (0,eL.J)(async()=>{(v=await getTransaction(e,{hash:a})).blockNumber&&(T=v.blockNumber)},{delay:({count:e})=>200*~~(1<<e),retryCount:6}),F=!1),x=await getTransactionReceipt(e,{hash:a}),t>1&&(!x.blockNumber||T-x.blockNumber+1n<t))return;done(()=>p.resolve(x))}catch(a){if(v&&(a instanceof eO.Bh||a instanceof eO.Yb))try{_=v;let a=await (0,ex.Q)(e,{blockNumber:T,includeTransactions:!0}),g=a.transactions.find(({from:e,nonce:t})=>e===_.from&&t===_.nonce);if(!g||(x=await getTransactionReceipt(e,{hash:g.hash}),t>1&&(!x.blockNumber||T-x.blockNumber+1n<t)))return;let m="replaced";g.to===_.to&&g.value===_.value?m="repriced":g.from===g.to&&0n===g.value&&(m="cancelled"),done(()=>{p.onReplaced?.({reason:m,replacedTransaction:_,transaction:g,transactionReceipt:x}),p.resolve(x)})}catch(e){done(()=>p.reject(e))}else done(()=>p.reject(a))}}})})})}var eW=a(43310),eH=a(37397),eq=a(99238);function publicActions(e){return{call:t=>(0,ec.R)(e,t),createBlockFilter:()=>createBlockFilter(e),createContractEventFilter:t=>createContractEventFilter(e,t),createEventFilter:t=>createEventFilter(e,t),createPendingTransactionFilter:()=>createPendingTransactionFilter(e),estimateContractGas:t=>estimateContractGas(e,t),estimateGas:t=>(0,ey.Q)(e,t),getBalance:t=>getBalance(e,t),getBlock:t=>(0,ex.Q)(e,t),getBlockNumber:t=>getBlockNumber(e,t),getBlockTransactionCount:t=>getBlockTransactionCount(e,t),getBytecode:t=>getBytecode(e,t),getChainId:()=>(0,eS.L)(e),getContractEvents:t=>getContractEvents(e,t),getEnsAddress:t=>getEnsAddress(e,t),getEnsAvatar:t=>getEnsAvatar(e,t),getEnsName:t=>getEnsName(e,t),getEnsResolver:t=>getEnsResolver(e,t),getEnsText:t=>getEnsText(e,t),getFeeHistory:t=>getFeeHistory(e,t),estimateFeesPerGas:t=>(0,ev.X)(e,t),getFilterChanges:t=>getFilterChanges(e,t),getFilterLogs:t=>getFilterLogs(e,t),getGasPrice:()=>(0,e$.o)(e),getLogs:t=>getLogs(e,t),getProof:t=>getProof(e,t),estimateMaxPriorityFeePerGas:t=>(0,e_._)(e,t),getStorageAt:t=>getStorageAt(e,t),getTransaction:t=>getTransaction(e,t),getTransactionConfirmations:t=>getTransactionConfirmations(e,t),getTransactionCount:t=>(0,eT.K)(e,t),getTransactionReceipt:t=>getTransactionReceipt(e,t),multicall:t=>multicall(e,t),prepareTransactionRequest:t=>(0,eH.Z)(e,t),readContract:t=>readContract(e,t),sendRawTransaction:t=>(0,eq.p)(e,t),simulateContract:t=>simulateContract(e,t),verifyMessage:t=>verifyMessage(e,t),verifyTypedData:t=>verifyTypedData(e,t),uninstallFilter:t=>uninstallFilter(e,t),waitForTransactionReceipt:t=>waitForTransactionReceipt(e,t),watchBlocks:t=>(function(e,{blockTag:t="latest",emitMissed:a=!1,emitOnBegin:p=!1,onBlock:g,onError:m,includeTransactions:v,poll:_,pollingInterval:x=e.pollingInterval}){let T,F,z;let W=void 0!==_?_:"webSocket"!==e.transport.type,K=v??!1;return W?(()=>{let v=(0,eF.P)(["watchBlocks",e.uid,a,p,K,x]);return observe(v,{onBlock:g,onError:m},g=>poll(async()=>{try{let p=await (0,ex.Q)(e,{blockTag:t,includeTransactions:K});if(p.number&&T?.number){if(p.number===T.number)return;if(p.number-T.number>1&&a)for(let t=T?.number+1n;t<p.number;t++){let a=await (0,ex.Q)(e,{blockNumber:t,includeTransactions:K});g.onBlock(a,T),T=a}}(!T?.number||"pending"===t&&!p?.number||p.number&&p.number>T.number)&&(g.onBlock(p,T),T=p)}catch(e){g.onError?.(e)}},{emitOnBegin:p,interval:x}))})():(F=!0,z=()=>F=!1,(async()=>{try{let{unsubscribe:t}=await e.transport.subscribe({params:["newHeads"],onData(t){if(!F)return;let a=e.chain?.formatters?.block?.format||eW.Z,p=a(t.result);g(p,T),T=p},onError(e){m?.(e)}});z=t,F||z()}catch(e){m?.(e)}})(),z)})(e,t),watchBlockNumber:t=>watchBlockNumber(e,t),watchContractEvent:t=>(function(e,{abi:t,address:a,args:p,batch:g=!0,eventName:m,onError:v,onLogs:_,poll:x,pollingInterval:T=e.pollingInterval,strict:F}){let z,W;let K=void 0!==x?x:"webSocket"!==e.transport.type;return K?(()=>{let x=(0,eF.P)(["watchContractEvent",a,p,g,e.uid,m,T]),z=F??!1;return observe(x,{onLogs:_,onError:v},v=>{let _,x;let F=!1,W=poll(async()=>{if(!F){try{x=await createContractEventFilter(e,{abi:t,address:a,args:p,eventName:m,strict:z})}catch{}F=!0;return}try{let m;if(x)m=await getFilterChanges(e,{filter:x});else{let g=await getBlockNumber(e);m=_&&_!==g?await getContractEvents(e,{abi:t,address:a,args:p,fromBlock:_+1n,toBlock:g,strict:z}):[],_=g}if(0===m.length)return;g?v.onLogs(m):m.forEach(e=>v.onLogs([e]))}catch(e){x&&e instanceof el.yR&&(F=!1),v.onError?.(e)}},{emitOnBegin:!0,interval:T});return async()=>{x&&await uninstallFilter(e,{filter:x}),W()}})})():(z=!0,W=()=>z=!1,(async()=>{try{let g=m?encodeEventTopics({abi:t,eventName:m,args:p}):[],{unsubscribe:x}=await e.transport.subscribe({params:["logs",{address:a,topics:g}],onData(e){if(!z)return;let a=e.result;try{let{eventName:e,args:p}=decodeEventLog({abi:t,data:a.data,topics:a.topics,strict:F}),g=(0,eD.U)(a,{args:p,eventName:e});_([g])}catch(g){let e,t;if(g instanceof es.SM||g instanceof es.Gy){if(F)return;e=g.abiItem.name,t=g.abiItem.inputs?.some(e=>!("name"in e&&e.name))}let p=(0,eD.U)(a,{args:t?[]:{},eventName:e});_([p])}},onError(e){v?.(e)}});W=x,z||W()}catch(e){v?.(e)}})(),W)})(e,t),watchEvent:t=>(function(e,{address:t,args:a,batch:p=!0,event:g,events:m,onError:v,onLogs:_,poll:x,pollingInterval:T=e.pollingInterval,strict:F}){let z,W;let K=void 0!==x?x:"webSocket"!==e.transport.type,Z=F??!1;return K?(()=>{let x=(0,eF.P)(["watchEvent",t,a,p,e.uid,g,T]);return observe(x,{onLogs:_,onError:v},v=>{let _,x;let F=!1,z=poll(async()=>{if(!F){try{x=await createEventFilter(e,{address:t,args:a,event:g,events:m,strict:Z})}catch{}F=!0;return}try{let T;if(x)T=await getFilterChanges(e,{filter:x});else{let p=await getBlockNumber(e);T=_&&_!==p?await getLogs(e,{address:t,args:a,event:g,events:m,fromBlock:_+1n,toBlock:p}):[],_=p}if(0===T.length)return;p?v.onLogs(T):T.forEach(e=>v.onLogs([e]))}catch(e){x&&e instanceof el.yR&&(F=!1),v.onError?.(e)}},{emitOnBegin:!0,interval:T});return async()=>{x&&await uninstallFilter(e,{filter:x}),z()}})})():(z=!0,W=()=>z=!1,(async()=>{try{let p=m??(g?[g]:void 0),x=[];p&&(x=[p.flatMap(e=>encodeEventTopics({abi:[e],eventName:e.name,args:a}))],g&&(x=x[0]));let{unsubscribe:T}=await e.transport.subscribe({params:["logs",{address:t,topics:x}],onData(e){if(!z)return;let t=e.result;try{let{eventName:e,args:a}=decodeEventLog({abi:p,data:t.data,topics:t.topics,strict:Z}),g=(0,eD.U)(t,{args:a,eventName:e});_([g])}catch(g){let e,a;if(g instanceof es.SM||g instanceof es.Gy){if(F)return;e=g.abiItem.name,a=g.abiItem.inputs?.some(e=>!("name"in e&&e.name))}let p=(0,eD.U)(t,{args:a?[]:{},eventName:e});_([p])}},onError(e){v?.(e)}});W=T,z||W()}catch(e){v?.(e)}})(),W)})(e,t),watchPendingTransactions:t=>(function(e,{batch:t=!0,onError:a,onTransactions:p,poll:g,pollingInterval:m=e.pollingInterval}){let v,_;let x=void 0!==g?g:"webSocket"!==e.transport.type;return x?(()=>{let g=(0,eF.P)(["watchPendingTransactions",e.uid,t,m]);return observe(g,{onTransactions:p,onError:a},a=>{let p;let g=poll(async()=>{try{if(!p)try{p=await createPendingTransactionFilter(e);return}catch(e){throw g(),e}let m=await getFilterChanges(e,{filter:p});if(0===m.length)return;t?a.onTransactions(m):m.forEach(e=>a.onTransactions([e]))}catch(e){a.onError?.(e)}},{emitOnBegin:!0,interval:m});return async()=>{p&&await uninstallFilter(e,{filter:p}),g()}})})():(v=!0,_=()=>v=!1,(async()=>{try{let{unsubscribe:t}=await e.transport.subscribe({params:["newPendingTransactions"],onData(e){if(!v)return;let t=e.result;p([t])},onError(e){a?.(e)}});_=t,v||_()}catch(e){a?.(e)}})(),_)})(e,t)}}function createPublicClient(e){let{key:t="public",name:a="Public Client"}=e,p=(0,T.e)({...e,key:t,name:a,type:"publicClient"});return p.extend(publicActions)}var eG=a(37029),eV=a(31031);function fallback(e,t={}){let{key:a="fallback",name:p="Fallback",rank:g=!1,retryCount:m,retryDelay:v}=t;return({chain:t,pollingInterval:_=4e3,timeout:x})=>{let T=e,onResponse=()=>{},F=(0,eV.q)({key:a,name:p,async request({method:e,params:a}){let fetch=async(p=0)=>{let g=T[p]({chain:t,retryCount:0,timeout:x});try{let t=await g.request({method:e,params:a});return onResponse({method:e,params:a,response:t,transport:g,status:"success"}),t}catch(t){if(onResponse({error:t,method:e,params:a,transport:g,status:"error"}),(0,eG.y)(t)||p===T.length-1)throw t;return fetch(p+1)}};return fetch()},retryCount:m,retryDelay:v,type:"fallback"},{onResponse:e=>onResponse=e,transports:T.map(e=>e({chain:t,retryCount:0}))});if(g){let e="object"==typeof g?g:{};!function({chain:e,interval:t=4e3,onTransports:a,sampleCount:p=10,timeout:g=1e3,transports:m,weights:v={}}){let{stability:_=.7,latency:x=.3}=v,T=[],rankTransports_=async()=>{let v=await Promise.all(m.map(async t=>{let a,p;let m=t({chain:e,retryCount:0,timeout:g}),v=Date.now();try{await m.request({method:"net_listening"}),p=1}catch{p=0}finally{a=Date.now()}let _=a-v;return{latency:_,success:p}}));T.push(v),T.length>p&&T.shift();let F=Math.max(...T.map(e=>Math.max(...e.map(({latency:e})=>e)))),z=m.map((e,t)=>{let a=T.map(e=>e[t].latency),p=a.reduce((e,t)=>e+t,0)/a.length,g=T.map(e=>e[t].success),m=g.reduce((e,t)=>e+t,0)/g.length;return 0===m?[0,t]:[x*(1-p/F)+_*m,t]}).sort((e,t)=>t[0]-e[0]);a(z.map(([,e])=>m[e])),await (0,ez.D)(t),rankTransports_()};rankTransports_()}({chain:t,interval:e.interval??_,onTransports:e=>T=e,sampleCount:e.sampleCount,timeout:e.timeout,transports:T,weights:e.weights})}return F}}var eK=a(78863);let UrlRequiredError=class UrlRequiredError extends Y.G{constructor(){super("No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.",{docsPath:"/docs/clients/intro"})}};var eZ=a(32357);let eQ=function(){if("undefined"!=typeof WebSocket)return WebSocket;if(void 0!==global.WebSocket)return global.WebSocket;if(void 0!==window.WebSocket)return window.WebSocket;if(void 0!==self.WebSocket)return self.WebSocket;throw Error("`WebSocket` is not supported in this environment")}();function withTimeout(e,{errorInstance:t,timeout:a,signal:p}){return new Promise((g,m)=>{(async()=>{let v;try{let _=new AbortController;a>0&&(v=setTimeout(()=>{p?_.abort():m(t)},a)),g(await e({signal:_?.signal}))}catch(e){"AbortError"===e.name&&m(t),m(e)}finally{clearTimeout(v)}})()})}let eX=0;async function http(e,{body:t,fetchOptions:a={},timeout:p=1e4}){let{headers:g,method:m,signal:v}=a;try{let _;let x=await withTimeout(async({signal:_})=>{let x=await fetch(e,{...a,body:Array.isArray(t)?(0,eF.P)(t.map(e=>({jsonrpc:"2.0",id:e.id??eX++,...e}))):(0,eF.P)({jsonrpc:"2.0",id:t.id??eX++,...t}),headers:{...g,"Content-Type":"application/json"},method:m||"POST",signal:v||(p>0?_:void 0)});return x},{errorInstance:new eK.W5({body:t,url:e}),timeout:p,signal:!0});if(_=x.headers.get("Content-Type")?.startsWith("application/json")?await x.json():await x.text(),!x.ok)throw new eK.Gg({body:t,details:(0,eF.P)(_.error)||x.statusText,headers:x.headers,status:x.status,url:e});return _}catch(a){if(a instanceof eK.Gg||a instanceof eK.W5)throw a;throw new eK.Gg({body:t,details:a.message,url:e})}}let eY=new Map;async function getSocket(e){let t=eY.get(e);if(t)return t;let{schedule:a}=(0,eZ.S)({id:e,fn:async()=>{let a=new eQ(e),p=new Map,g=new Map,onMessage=({data:e})=>{let t=JSON.parse(e),a="eth_subscription"===t.method,m=a?t.params.subscription:t.id,v=a?g:p,_=v.get(m);_&&_({data:e}),a||v.delete(m)},onClose=()=>{eY.delete(e),a.removeEventListener("close",onClose),a.removeEventListener("message",onMessage)};return a.addEventListener("close",onClose),a.addEventListener("message",onMessage),a.readyState===eQ.CONNECTING&&await new Promise((e,t)=>{a&&(a.onopen=e,a.onerror=t)}),t=Object.assign(a,{requests:p,subscriptions:g}),eY.set(e,t),[t]}}),[p,[g]]=await a();return g}async function webSocketAsync(e,{body:t,timeout:a=1e4}){return withTimeout(()=>new Promise(a=>eJ.webSocket(e,{body:t,onResponse:a})),{errorInstance:new eK.W5({body:t,url:e.url}),timeout:a})}let eJ={http,webSocket:function(e,{body:t,onResponse:a}){if(e.readyState===e.CLOSED||e.readyState===e.CLOSING)throw new eK.c9({body:t,url:e.url,details:"Socket is closed."});let p=eX++,callback=({data:g})=>{let m=JSON.parse(g);("number"!=typeof m.id||p===m.id)&&(a?.(m),"eth_subscribe"===t.method&&"string"==typeof m.result&&e.subscriptions.set(m.result,callback),"eth_unsubscribe"===t.method&&e.subscriptions.delete(t.params?.[0]))};return e.requests.set(p,callback),e.send(JSON.stringify({jsonrpc:"2.0",...t,id:p})),e},webSocketAsync};var e0=a(57858),e1=a(84192);let subscribeWithSelector=e=>(t,a,p)=>{let g=p.subscribe;p.subscribe=(e,t,a)=>{let m=e;if(t){let g=(null==a?void 0:a.equalityFn)||Object.is,v=e(p.getState());m=a=>{let p=e(a);if(!g(v,p)){let e=v;t(v=p,e)}},(null==a?void 0:a.fireImmediately)&&t(v,v)}return g(m)};let m=e(t,a,p);return m},toThenable=e=>t=>{try{let a=e(t);if(a instanceof Promise)return a;return{then:e=>toThenable(e)(a),catch(e){return this}}}catch(e){return{then(e){return this},catch:t=>toThenable(t)(e)}}},oldImpl=(e,t)=>(a,p,g)=>{let m,v,_={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:e=>e,version:0,merge:(e,t)=>({...t,...e}),...t},x=!1,T=new Set,F=new Set;try{m=_.getStorage()}catch(e){}if(!m)return e((...e)=>{console.warn(`[zustand persist middleware] Unable to update item '${_.name}', the given storage is currently unavailable.`),a(...e)},p,g);let z=toThenable(_.serialize),setItem=()=>{let e;let t=_.partialize({...p()}),a=z({state:t,version:_.version}).then(e=>m.setItem(_.name,e)).catch(t=>{e=t});if(e)throw e;return a},W=g.setState;g.setState=(e,t)=>{W(e,t),setItem()};let K=e((...e)=>{a(...e),setItem()},p,g),hydrate=()=>{var e;if(!m)return;x=!1,T.forEach(e=>e(p()));let t=(null==(e=_.onRehydrateStorage)?void 0:e.call(_,p()))||void 0;return toThenable(m.getItem.bind(m))(_.name).then(e=>{if(e)return _.deserialize(e)}).then(e=>{if(e){if("number"!=typeof e.version||e.version===_.version)return e.state;if(_.migrate)return _.migrate(e.state,e.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}}).then(e=>{var t;return a(v=_.merge(e,null!=(t=p())?t:K),!0),setItem()}).then(()=>{null==t||t(v,void 0),x=!0,F.forEach(e=>e(v))}).catch(e=>{null==t||t(void 0,e)})};return g.persist={setOptions:e=>{_={..._,...e},e.getStorage&&(m=e.getStorage())},clearStorage:()=>{null==m||m.removeItem(_.name)},getOptions:()=>_,rehydrate:()=>hydrate(),hasHydrated:()=>x,onHydrate:e=>(T.add(e),()=>{T.delete(e)}),onFinishHydration:e=>(F.add(e),()=>{F.delete(e)})},hydrate(),v||K},newImpl=(e,t)=>(a,p,g)=>{let m,v={storage:function(e,t){let a;try{a=e()}catch(e){return}return{getItem:e=>{var p;let parse=e=>null===e?null:JSON.parse(e,null==t?void 0:t.reviver),g=null!=(p=a.getItem(e))?p:null;return g instanceof Promise?g.then(parse):parse(g)},setItem:(e,p)=>a.setItem(e,JSON.stringify(p,null==t?void 0:t.replacer)),removeItem:e=>a.removeItem(e)}}(()=>localStorage),partialize:e=>e,version:0,merge:(e,t)=>({...t,...e}),...t},_=!1,x=new Set,T=new Set,F=v.storage;if(!F)return e((...e)=>{console.warn(`[zustand persist middleware] Unable to update item '${v.name}', the given storage is currently unavailable.`),a(...e)},p,g);let setItem=()=>{let e=v.partialize({...p()});return F.setItem(v.name,{state:e,version:v.version})},z=g.setState;g.setState=(e,t)=>{z(e,t),setItem()};let W=e((...e)=>{a(...e),setItem()},p,g),hydrate=()=>{var e,t;if(!F)return;_=!1,x.forEach(e=>{var t;return e(null!=(t=p())?t:W)});let g=(null==(t=v.onRehydrateStorage)?void 0:t.call(v,null!=(e=p())?e:W))||void 0;return toThenable(F.getItem.bind(F))(v.name).then(e=>{if(e){if("number"!=typeof e.version||e.version===v.version)return e.state;if(v.migrate)return v.migrate(e.state,e.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}}).then(e=>{var t;return a(m=v.merge(e,null!=(t=p())?t:W),!0),setItem()}).then(()=>{null==g||g(m,void 0),m=p(),_=!0,T.forEach(e=>e(m))}).catch(e=>{null==g||g(void 0,e)})};return g.persist={setOptions:e=>{v={...v,...e},e.storage&&(F=e.storage)},clearStorage:()=>{null==F||F.removeItem(v.name)},getOptions:()=>v,rehydrate:()=>hydrate(),hasHydrated:()=>_,onHydrate:e=>(x.add(e),()=>{x.delete(e)}),onFinishHydration:e=>(T.add(e),()=>{T.delete(e)})},v.skipHydration||hydrate(),m||W},persist=(e,t)=>"getStorage"in t||"serialize"in t||"deserialize"in t?(console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."),oldImpl(e,t)):newImpl(e,t),createStoreImpl=e=>{let t;let a=new Set,setState=(e,p)=>{let g="function"==typeof e?e(t):e;if(!Object.is(g,t)){let e=t;t=(null!=p?p:"object"!=typeof g)?g:Object.assign({},t,g),a.forEach(a=>a(t,e))}},getState=()=>t,p={setState,getState,subscribe:e=>(a.add(e),()=>a.delete(e)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),a.clear()}};return t=e(setState,getState,p),p},createStore=e=>e?createStoreImpl(e):createStoreImpl;var e2=a(15229);function shallow$1(e,t){if(Object.is(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;if(e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(let[a,p]of e)if(!Object.is(p,t.get(a)))return!1;return!0}if(e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(let a of e)if(!t.has(a))return!1;return!0}let a=Object.keys(e);if(a.length!==Object.keys(t).length)return!1;for(let p=0;p<a.length;p++)if(!Object.prototype.hasOwnProperty.call(t,a[p])||!Object.is(e[a[p]],t[a[p]]))return!1;return!0}var e3=a(45775);function configureChains(e,t,{batch:a={multicall:{wait:32}},pollingInterval:p=4e3,rank:g,retryCount:m,retryDelay:v,stallTimeout:_}={}){if(!e.length)throw Error("must have at least one chain");let x=[],T={},F={};for(let a of e){let e=!1;for(let p of t){let t=p(a);t&&(e=!0,x.some(({id:e})=>e===a.id)||(x=[...x,t.chain]),T[a.id]=[...T[a.id]||[],...t.rpcUrls.http],t.rpcUrls.webSocket&&(F[a.id]=[...F[a.id]||[],...t.rpcUrls.webSocket]))}if(!e)throw Error(`Could not find valid provider configuration for chain "${a.name}".

You may need to add \`jsonRpcProvider\` to \`configureChains\` with the chain's RPC URLs.
Read more: https://wagmi.sh/core/providers/jsonRpc`)}return{chains:x,publicClient:({chainId:t})=>{let F=x.find(e=>e.id===t)??e[0],z=T[F.id];if(!z||!z[0])throw Error(`No providers configured for chain "${F.id}"`);let W=createPublicClient({batch:a,chain:F,transport:fallback(z.map(e=>(function(e,t={}){let{batch:a,fetchOptions:p,key:g="http",name:m="HTTP JSON-RPC",retryDelay:v}=t;return({chain:_,retryCount:x,timeout:T})=>{let{batchSize:F=1e3,wait:z=0}="object"==typeof a?a:{},W=t.retryCount??x,K=T??t.timeout??1e4,Z=e||_?.rpcUrls.default.http[0];if(!Z)throw new UrlRequiredError;return(0,eV.q)({key:g,name:m,async request({method:t,params:g}){let m={method:t,params:g},{schedule:v}=(0,eZ.S)({id:`${e}`,wait:z,shouldSplitBatch:e=>e.length>F,fn:e=>eJ.http(Z,{body:e,fetchOptions:p,timeout:K})}),fn=async e=>a?v(e):[await eJ.http(Z,{body:e,fetchOptions:p,timeout:K})],[{error:_,result:x}]=await fn(m);if(_)throw new eK.bs({body:m,error:_,url:Z});return x},retryCount:W,retryDelay:v,timeout:K,type:"http"},{fetchOptions:p,url:e})}})(e,{timeout:_})),{rank:g,retryCount:m,retryDelay:v}),pollingInterval:p});return Object.assign(W,{chains:x})},webSocketPublicClient:({chainId:t})=>{let T=x.find(e=>e.id===t)??e[0],z=F[T.id];if(!z||!z[0])return;let W=createPublicClient({batch:a,chain:T,transport:fallback(z.map(e=>(function(e,t={}){let{key:a="webSocket",name:p="WebSocket JSON-RPC",retryDelay:g}=t;return({chain:m,retryCount:v,timeout:_})=>{let x=t.retryCount??v,T=_??t.timeout??1e4,F=e||m?.rpcUrls.default.webSocket?.[0];if(!F)throw new UrlRequiredError;return(0,eV.q)({key:a,name:p,async request({method:e,params:t}){let a={method:e,params:t},p=await getSocket(F),{error:g,result:m}=await eJ.webSocketAsync(p,{body:a,timeout:T});if(g)throw new eK.bs({body:a,error:g,url:F});return m},retryCount:x,retryDelay:g,timeout:T,type:"webSocket"},{getSocket:()=>getSocket(F),async subscribe({params:e,onData:t,onError:a}){let p=await getSocket(F),{result:g}=await new Promise((g,m)=>eJ.webSocket(p,{body:{method:"eth_subscribe",params:e},onResponse(e){if(e.error){m(e.error),a?.(e.error);return}if("number"==typeof e.id){g(e);return}"eth_subscription"===e.method&&t(e.params)}}));return{subscriptionId:g,unsubscribe:async()=>new Promise(e=>eJ.webSocket(p,{body:{method:"eth_unsubscribe",params:[g]},onResponse:e}))}}})}})(e,{timeout:_})),{rank:g,retryCount:m,retryDelay:v}),pollingInterval:p});return Object.assign(W,{chains:x})}}}var e5=class extends Error{constructor({chainId:e,connectorId:t}){super(`Chain "${e}" not configured${t?` for connector "${t}"`:""}.`),this.name="ChainNotConfigured"}},e6=class extends Error{constructor(){super(...arguments),this.name="ConnectorAlreadyConnectedError",this.message="Connector already connected"}},e4=class extends Error{constructor(){super(...arguments),this.name="ConfigChainsNotFound",this.message="No chains were found on the wagmi config. Some functions that require a chain may not work."}},e8=class extends Error{constructor({connector:e}){super(`"${e.name}" does not support programmatic chain switching.`),this.name="SwitchChainNotSupportedError"}},findAndReplace=(e,{find:t,replace:a})=>e&&t(e)?a(e):"object"!=typeof e?e:Array.isArray(e)?e.map(e=>findAndReplace(e,{find:t,replace:a})):e instanceof Object?Object.entries(e).reduce((e,[p,g])=>({...e,[p]:findAndReplace(g,{find:t,replace:a})}),{}):e;function deserialize(e){let t=JSON.parse(e),a=findAndReplace(t,{find:e=>"string"==typeof e&&e.startsWith("#bigint."),replace:e=>BigInt(e.replace("#bigint.",""))});return a}function getUnit(e){return"number"==typeof e?e:"wei"===e?0:Math.abs(e1.Bd[e])}function getReferenceKey(e,t){return e.slice(0,t).join(".")||"."}function getCutoff(e,t){let{length:a}=e;for(let p=0;p<a;++p)if(e[p]===t)return p+1;return 0}function serialize(e,t,a,p){return JSON.stringify(e,function(e,t){let a="function"==typeof e,p="function"==typeof t,g=[],m=[];return function(v,_){if("object"==typeof _){if(g.length){let e=getCutoff(g,this);0===e?g[g.length]=this:(g.splice(e),m.splice(e)),m[m.length]=v;let a=getCutoff(g,_);if(0!==a)return p?t.call(this,v,_,getReferenceKey(m,a)):`[ref=${getReferenceKey(m,a)}]`}else g[0]=_,m[0]=v}return a?e.call(this,v,_):_}}((e,a)=>{let p="bigint"==typeof a?`#bigint.${a.toString()}`:a;return t?.(e,p)||p},p),a??void 0)}var e7={getItem:e=>"",setItem:(e,t)=>null,removeItem:e=>null};function createStorage({deserialize:e=deserialize,key:t="wagmi",serialize:a=serialize,storage:p}){return{...p,getItem:(a,g=null)=>{let m=p.getItem(`${t}.${a}`);try{return m?e(m):g}catch(e){return console.warn(e),g}},setItem:(e,g)=>{if(null===g)p.removeItem(`${t}.${e}`);else try{p.setItem(`${t}.${e}`,a(g))}catch(e){console.error(e)}},removeItem:e=>p.removeItem(`${t}.${e}`)}}var e9="store",tt=class{constructor({autoConnect:e=!1,connectors:t=[new x._],publicClient:a,storage:_=createStorage({storage:"undefined"!=typeof window?window.localStorage:e7}),logger:T={warn:console.warn},webSocketPublicClient:F}){let z;__privateAdd(this,m),this.publicClients=new Map,this.webSocketPublicClients=new Map,__privateAdd(this,p,void 0),__privateAdd(this,g,void 0),this.args={autoConnect:e,connectors:t,logger:T,publicClient:a,storage:_,webSocketPublicClient:F};let W="disconnected";if(e)try{let e=_.getItem(e9),t=e?.state?.data;W=t?.account?"reconnecting":"connecting",z=t?.chain?.id}catch(e){}let K="function"==typeof t?t():t;K.forEach(e=>e.setStorage(_)),this.store=createStore(subscribeWithSelector(persist(()=>({connectors:K,publicClient:this.getPublicClient({chainId:z}),status:W,webSocketPublicClient:this.getWebSocketPublicClient({chainId:z})}),{name:e9,storage:_,partialize:t=>({...e&&{data:{account:t?.data?.account,chain:t?.data?.chain}},chains:t?.chains}),version:2}))),this.storage=_,__privateSet(this,g,_?.getItem("wallet")),__privateMethod(this,m,v).call(this),e&&"undefined"!=typeof window&&setTimeout(async()=>await this.autoConnect(),0)}get chains(){return this.store.getState().chains}get connectors(){return this.store.getState().connectors}get connector(){return this.store.getState().connector}get data(){return this.store.getState().data}get error(){return this.store.getState().error}get lastUsedChainId(){return this.data?.chain?.id}get publicClient(){return this.store.getState().publicClient}get status(){return this.store.getState().status}get subscribe(){return this.store.subscribe}get webSocketPublicClient(){return this.store.getState().webSocketPublicClient}setState(e){let t="function"==typeof e?e(this.store.getState()):e;this.store.setState(t,!0)}clearState(){this.setState(e=>({...e,chains:void 0,connector:void 0,data:void 0,error:void 0,status:"disconnected"}))}async destroy(){this.connector&&await this.connector.disconnect?.(),__privateSet(this,p,!1),this.clearState(),this.store.destroy()}async autoConnect(){if(__privateGet(this,p))return;__privateSet(this,p,!0),this.setState(e=>({...e,status:e.data?.account?"reconnecting":"connecting"}));let e=__privateGet(this,g)?[...this.connectors].sort(e=>e.id===__privateGet(this,g)?-1:1):this.connectors,t=!1;for(let a of e){if(!a.ready||!a.isAuthorized)continue;let e=await a.isAuthorized();if(!e)continue;let p=await a.connect();this.setState(e=>({...e,connector:a,chains:a?.chains,data:p,status:"connected"})),t=!0;break}return t||this.setState(e=>({...e,data:void 0,status:"disconnected"})),__privateSet(this,p,!1),this.data}setConnectors(e){this.args={...this.args,connectors:e};let t="function"==typeof e?e():e;t.forEach(e=>e.setStorage(this.args.storage)),this.setState(e=>({...e,connectors:t}))}getPublicClient({chainId:e}={}){let t=this.publicClients.get(-1);if(t&&t?.chain.id===e||(t=this.publicClients.get(e??-1)))return t;let{publicClient:a}=this.args;return t="function"==typeof a?a({chainId:e}):a,this.publicClients.set(e??-1,t),t}setPublicClient(e){let t=this.data?.chain?.id;this.args={...this.args,publicClient:e},this.publicClients.clear(),this.setState(e=>({...e,publicClient:this.getPublicClient({chainId:t})}))}getWebSocketPublicClient({chainId:e}={}){let t=this.webSocketPublicClients.get(-1);if(t&&t?.chain.id===e||(t=this.webSocketPublicClients.get(e??-1)))return t;let{webSocketPublicClient:a}=this.args;return(t="function"==typeof a?a({chainId:e}):a)&&this.webSocketPublicClients.set(e??-1,t),t}setWebSocketPublicClient(e){let t=this.data?.chain?.id;this.args={...this.args,webSocketPublicClient:e},this.webSocketPublicClients.clear(),this.setState(e=>({...e,webSocketPublicClient:this.getWebSocketPublicClient({chainId:t})}))}setLastUsedConnector(e=null){this.storage?.setItem("wallet",e)}};function createConfig(e){let t=new tt(e);return _=t,t}function getConfig(){if(!_)throw Error("No wagmi config found. Ensure you have set up a config: https://wagmi.sh/react/config");return _}async function connect({chainId:e,connector:t}){let a=getConfig(),p=a.connector;if(p&&t.id===p.id)throw new e6;try{a.setState(e=>({...e,status:"connecting"}));let p=await t.connect({chainId:e});return a.setLastUsedConnector(t.id),a.setState(e=>({...e,connector:t,chains:t?.chains,data:p,status:"connected"})),a.storage.setItem("connected",!0),{...p,connector:t}}catch(e){throw a.setState(e=>({...e,status:e.connector?"connected":"disconnected"})),e}}async function disconnect(){let e=getConfig();e.connector&&await e.connector.disconnect(),e.clearState(),e.storage.removeItem("connected")}p=new WeakMap,g=new WeakMap,m=new WeakSet,v=function(){let onChange=e=>{this.setState(t=>({...t,data:{...t.data,...e}}))},onDisconnect=()=>{this.clearState()},onError=e=>{this.setState(t=>({...t,error:e}))};this.store.subscribe(({connector:e})=>e,(e,t)=>{t?.off?.("change",onChange),t?.off?.("disconnect",onDisconnect),t?.off?.("error",onError),e&&(e.on?.("change",onChange),e.on?.("disconnect",onDisconnect),e.on?.("error",onError))});let{publicClient:e,webSocketPublicClient:t}=this.args;("function"==typeof e||"function"==typeof t)&&this.store.subscribe(({data:e})=>e?.chain?.id,e=>{this.setState(t=>({...t,publicClient:this.getPublicClient({chainId:e}),webSocketPublicClient:this.getWebSocketPublicClient({chainId:e})}))})};var tr=[{type:"event",name:"Approval",inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"event",name:"Transfer",inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"function",name:"allowance",stateMutability:"view",inputs:[{name:"owner",type:"address"},{name:"spender",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"approve",stateMutability:"nonpayable",inputs:[{name:"spender",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"balanceOf",stateMutability:"view",inputs:[{name:"account",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"decimals",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint8"}]},{type:"function",name:"name",stateMutability:"view",inputs:[],outputs:[{name:"",type:"string"}]},{type:"function",name:"symbol",stateMutability:"view",inputs:[],outputs:[{name:"",type:"string"}]},{type:"function",name:"totalSupply",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"sender",type:"address"},{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]}],ti=[{type:"event",name:"Approval",inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"event",name:"Transfer",inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}]},{type:"function",name:"allowance",stateMutability:"view",inputs:[{name:"owner",type:"address"},{name:"spender",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"approve",stateMutability:"nonpayable",inputs:[{name:"spender",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"balanceOf",stateMutability:"view",inputs:[{name:"account",type:"address"}],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"decimals",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint8"}]},{type:"function",name:"name",stateMutability:"view",inputs:[],outputs:[{name:"",type:"bytes32"}]},{type:"function",name:"symbol",stateMutability:"view",inputs:[],outputs:[{name:"",type:"bytes32"}]},{type:"function",name:"totalSupply",stateMutability:"view",inputs:[],outputs:[{name:"",type:"uint256"}]},{type:"function",name:"transfer",stateMutability:"nonpayable",inputs:[{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]},{type:"function",name:"transferFrom",stateMutability:"nonpayable",inputs:[{name:"sender",type:"address"},{name:"recipient",type:"address"},{name:"amount",type:"uint256"}],outputs:[{name:"",type:"bool"}]}];function getPublicClient({chainId:e}={}){let t=getConfig();return e&&t.getPublicClient({chainId:e})||t.publicClient}async function chunk_YAPWLAI7_multicall({chainId:e,contracts:t,blockNumber:a,blockTag:p,...g}){let m=getPublicClient({chainId:e});if(!m.chains)throw new e4;if(e&&m.chain.id!==e)throw new e5({chainId:e});return m.multicall({allowFailure:g.allowFailure??!0,blockNumber:a,blockTag:p,contracts:t})}async function chunk_YAPWLAI7_readContract({address:e,account:t,chainId:a,abi:p,args:g,functionName:m,blockNumber:v,blockTag:_}){let x=getPublicClient({chainId:a});return x.readContract({abi:p,address:e,account:t,functionName:m,args:g,blockNumber:v,blockTag:_})}async function readContracts({contracts:e,blockNumber:t,blockTag:a,...p}){let{allowFailure:g=!0}=p;try{let p=getPublicClient(),m=e.reduce((e,t,a)=>{let g=t.chainId??p.chain.id;return{...e,[g]:[...e[g]||[],{contract:t,index:a}]}},{}),v=(await Promise.all(Object.entries(m).map(([e,p])=>chunk_YAPWLAI7_multicall({allowFailure:g,chainId:parseInt(e),contracts:p.map(({contract:e})=>e),blockNumber:t,blockTag:a})))).flat(),_=Object.values(m).flatMap(e=>e.map(({index:e})=>e));return v.reduce((e,t,a)=>(e&&(e[_[a]]=t),e),[])}catch(p){if(p instanceof J.uq)throw p;let promises=()=>e.map(e=>chunk_YAPWLAI7_readContract({...e,blockNumber:t,blockTag:a}));if(g)return(await Promise.allSettled(promises())).map(e=>"fulfilled"===e.status?{result:e.value,status:"success"}:{error:e.reason,result:void 0,status:"failure"});return await Promise.all(promises())}}async function fetchBalance({address:e,chainId:t,formatUnits:a,token:p}){let g=getConfig(),m=getPublicClient({chainId:t});if(p){let fetchContractBalance=async({abi:g})=>{let m={abi:g,address:p,chainId:t},[v,_,x]=await readContracts({allowFailure:!1,contracts:[{...m,functionName:"balanceOf",args:[e]},{...m,functionName:"decimals"},{...m,functionName:"symbol"}]});return{decimals:_,formatted:(0,e2.b)(v??"0",getUnit(a??_)),symbol:x,value:v}};try{return await fetchContractBalance({abi:tr})}catch(e){if(e instanceof J.uq){let{symbol:e,...t}=await fetchContractBalance({abi:ti});return{symbol:(0,ek.rR)((0,Z.f)(e,{dir:"right"})),...t}}throw e}}let v=[...g.publicClient.chains||[],...g.chains??[]],_=await m.getBalance({address:e}),x=v.find(e=>e.id===m.chain.id);return{decimals:x?.nativeCurrency.decimals??18,formatted:(0,e2.b)(_??"0",getUnit(a??18)),symbol:x?.nativeCurrency.symbol??"ETH",value:_}}function getAccount(){let{data:e,connector:t,status:a}=getConfig();switch(a){case"connected":return{address:e?.account,connector:t,isConnected:!0,isConnecting:!1,isDisconnected:!1,isReconnecting:!1,status:a};case"reconnecting":return{address:e?.account,connector:t,isConnected:!!e?.account,isConnecting:!1,isDisconnected:!1,isReconnecting:!0,status:a};case"connecting":return{address:e?.account,connector:t,isConnected:!1,isConnecting:!0,isDisconnected:!1,isReconnecting:!1,status:a};case"disconnected":return{address:void 0,connector:void 0,isConnected:!1,isConnecting:!1,isDisconnected:!0,isReconnecting:!1,status:a}}}function getNetwork(){let e=getConfig(),t=e.data?.chain?.id,a=e.chains??[],p=[...e.publicClient?.chains||[],...a].find(e=>e.id===t)??{id:t,name:`Chain ${t}`,network:`${t}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpcUrls:{default:{http:[""]},public:{http:[""]}}};return{chain:t?{...p,...e.data?.chain,id:t}:void 0,chains:a}}async function switchNetwork({chainId:e}){let{connector:t}=getConfig();if(!t)throw new e0.N;if(!t.switchChain)throw new e8({connector:t});return t.switchChain(e)}function watchAccount(e,{selector:t=e=>e}={}){let a=getConfig(),p=a.subscribe(({data:e,connector:a,status:p})=>t({address:e?.account,connector:a,status:p}),()=>e(getAccount()),{equalityFn:shallow$1});return p}function watchNetwork(e,{selector:t=e=>e}={}){let a=getConfig(),p=a.subscribe(({data:e,chains:a})=>t({chainId:e?.chain?.id,chains:a}),()=>e(getNetwork()),{equalityFn:shallow$1});return p}async function fetchEnsAvatar({name:e,chainId:t}){let{normalize:p}=await a.e(512).then(a.bind(a,46512)),g=getPublicClient({chainId:t}),m=await g.getEnsAvatar({name:p(e)});return m}async function fetchEnsName({address:e,chainId:t}){let a=getPublicClient({chainId:t});return a.getEnsName({address:(0,e3.K)(e)})}},36635:function(e,t,a){"use strict";a.d(t,{AccountController:function(){return _},ApiController:function(){return el},WM:function(){return W},fz:function(){return eA},Lr:function(){return eS},ConnectionController:function(){return ey},ConnectorController:function(){return Z},bq:function(){return g},j1:function(){return m},Xs:function(){return ef},IN:function(){return ew},NetworkController:function(){return J},OptionsController:function(){return en},Ie:function(){return X},RouterController:function(){return eg},SnackController:function(){return e_},MO:function(){return F},ThemeController:function(){return eC}});var p=a(17832);function subscribeKey(e,t,a,g){let m=e[t];return(0,p.Ld)(e,()=>{let p=e[t];Object.is(m,p)||a(m=p)},g)}Symbol();let g={FOUR_MINUTES_MS:24e4,TEN_SEC_MS:1e4,ONE_SEC_MS:1e3,RESTRICTED_TIMEZONES:["ASIA/SHANGHAI","ASIA/URUMQI","ASIA/CHONGQING","ASIA/HARBIN","ASIA/KASHGAR","ASIA/MACAU","ASIA/HONG_KONG","ASIA/MACAO","ASIA/BEIJING","ASIA/HARBIN"]},m={isMobile:()=>"undefined"!=typeof window&&!!(window.matchMedia("(pointer:coarse)").matches||/Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)),isAndroid(){let e=navigator.userAgent.toLowerCase();return m.isMobile()&&e.includes("android")},isIos(){let e=navigator.userAgent.toLowerCase();return m.isMobile()&&(e.includes("iphone")||e.includes("ipad"))},isClient:()=>"undefined"!=typeof window,isPairingExpired:e=>!e||e-Date.now()<=g.TEN_SEC_MS,isAllowedRetry:e=>Date.now()-e>=g.ONE_SEC_MS,copyToClopboard(e){navigator.clipboard.writeText(e)},getPairingExpiry:()=>Date.now()+g.FOUR_MINUTES_MS,getPlainAddress:e=>e.split(":")[2],wait:async e=>new Promise(t=>{setTimeout(t,e)}),debounce(e,t=500){let a;return(...p)=>{a&&clearTimeout(a),a=setTimeout(function(){e(...p)},t)}},isHttpUrl:e=>e.startsWith("http://")||e.startsWith("https://"),formatNativeUrl(e,t){if(m.isHttpUrl(e))return this.formatUniversalUrl(e,t);let a=e;a.includes("://")||(a=e.replaceAll("/","").replaceAll(":",""),a=`${a}://`),a.endsWith("/")||(a=`${a}/`);let p=encodeURIComponent(t);return{redirect:`${a}wc?uri=${p}`,href:a}},formatUniversalUrl(e,t){if(!m.isHttpUrl(e))return this.formatNativeUrl(e,t);let a=e;a.endsWith("/")||(a=`${a}/`);let p=encodeURIComponent(t);return{redirect:`${a}wc?uri=${p}`,href:a}},openHref(e,t){window.open(e,t,"noreferrer noopener")},async preloadImage(e){let t=new Promise((t,a)=>{let p=new Image;p.onload=t,p.onerror=a,p.crossOrigin="anonymous",p.src=e});return Promise.race([t,m.wait(2e3)])},formatBalance(e,t){let a;if("0"===e)a="0.000";else if("string"==typeof e){let t=Number(e);t&&(a=t.toString().match(/^-?\d+(?:\.\d{0,3})?/u)?.[0])}return a?`${a} ${t}`:"0.000"},isRestrictedRegion(){try{let{timeZone:e}=new Intl.DateTimeFormat().resolvedOptions(),t=e.toUpperCase();return g.RESTRICTED_TIMEZONES.includes(t)}catch{return!1}},getApiUrl:()=>m.isRestrictedRegion()?"https://api.web3modal.org":"https://api.web3modal.com",getBlockchainApiUrl:()=>m.isRestrictedRegion()?"https://rpc.walletconnect.org":"https://rpc.walletconnect.com",getAnalyticsUrl:()=>m.isRestrictedRegion()?"https://pulse.walletconnect.org":"https://pulse.walletconnect.com",getUUID:()=>crypto?.randomUUID?crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu,e=>{let t=16*Math.random()|0;return("x"===e?t:3&t|8).toString(16)})},v=(0,p.sj)({isConnected:!1}),_={state:v,subscribe:e=>(0,p.Ld)(v,()=>e(v)),subscribeKey:(e,t)=>subscribeKey(v,e,t),setIsConnected(e){v.isConnected=e},setCaipAddress(e){v.caipAddress=e,v.address=e?m.getPlainAddress(e):void 0},setBalance(e,t){v.balance=e,v.balanceSymbol=t},setProfileName(e){v.profileName=e},setProfileImage(e){v.profileImage=e},setAddressExplorerUrl(e){v.addressExplorerUrl=e},resetAccount(){v.isConnected=!1,v.caipAddress=void 0,v.address=void 0,v.balance=void 0,v.balanceSymbol=void 0,v.profileName=void 0,v.profileImage=void 0,v.addressExplorerUrl=void 0}};let FetchUtil=class FetchUtil{constructor({baseUrl:e}){this.baseUrl=e}async get({headers:e,...t}){let a=this.createUrl(t),p=await fetch(a,{method:"GET",headers:e});return p.json()}async getBlob({headers:e,...t}){let a=this.createUrl(t),p=await fetch(a,{method:"GET",headers:e});return p.blob()}async post({body:e,headers:t,...a}){let p=this.createUrl(a),g=await fetch(p,{method:"POST",headers:t,body:e?JSON.stringify(e):void 0});return g.json()}async put({body:e,headers:t,...a}){let p=this.createUrl(a),g=await fetch(p,{method:"PUT",headers:t,body:e?JSON.stringify(e):void 0});return g.json()}async delete({body:e,headers:t,...a}){let p=this.createUrl(a),g=await fetch(p,{method:"DELETE",headers:t,body:e?JSON.stringify(e):void 0});return g.json()}createUrl({path:e,params:t}){let a=new URL(e,this.baseUrl);return t&&Object.entries(t).forEach(([e,t])=>{t&&a.searchParams.append(e,t)}),a}};let x="WALLETCONNECT_DEEPLINK_CHOICE",T="@w3m/recent",F={setWalletConnectDeepLink({href:e,name:t}){try{localStorage.setItem(x,JSON.stringify({href:e,name:t}))}catch{console.info("Unable to set WalletConnect deep link")}},getWalletConnectDeepLink(){try{let e=localStorage.getItem(x);if(e)return JSON.parse(e)}catch{console.info("Unable to get WalletConnect deep link")}},deleteWalletConnectDeepLink(){try{localStorage.removeItem(x)}catch{console.info("Unable to delete WalletConnect deep link")}},setWeb3ModalRecent(e){try{let t=F.getRecentWallets(),a=t.find(t=>t.id===e.id);a||(t.unshift(e),t.length>2&&t.pop(),localStorage.setItem(T,JSON.stringify(t)))}catch{console.info("Unable to set Web3Modal recent")}},getRecentWallets(){try{let e=localStorage.getItem(T);return e?JSON.parse(e):[]}catch{console.info("Unable to get Web3Modal recent")}return[]}},z=(0,p.sj)({walletImages:{},networkImages:{},connectorImages:{},tokenImages:{}}),W={state:z,subscribeNetworkImages:e=>(0,p.Ld)(z.networkImages,()=>e(z.networkImages)),subscribeKey:(e,t)=>subscribeKey(z,e,t),setWalletImage(e,t){z.walletImages[e]=t},setNetworkImage(e,t){z.networkImages[e]=t},setConnectorImage(e,t){z.connectorImages[e]=t},setTokenImage(e,t){z.tokenImages[e]=t}},K=(0,p.sj)({connectors:[]}),Z={state:K,subscribeKey:(e,t)=>subscribeKey(K,e,t),setConnectors(e){K.connectors=e.map(e=>(0,p.iH)(e))},addConnector(e){K.connectors.push((0,p.iH)(e))},getConnectors:()=>K.connectors},Q=(0,p.sj)({open:!1,selectedNetworkId:void 0}),X={state:Q,subscribe:e=>(0,p.Ld)(Q,()=>e(Q)),set(e){Object.assign(Q,{...Q,...e})}},Y=(0,p.sj)({supportsAllNetworks:!0,isDefaultCaipNetwork:!1}),J={state:Y,subscribeKey:(e,t)=>subscribeKey(Y,e,t),_getClient(){if(!Y._client)throw Error("NetworkController client not set");return Y._client},setClient(e){Y._client=(0,p.iH)(e)},setCaipNetwork(e){Y.caipNetwork=e,X.set({selectedNetworkId:e?.id})},setDefaultCaipNetwork(e){Y.caipNetwork=e,X.set({selectedNetworkId:e?.id}),Y.isDefaultCaipNetwork=!0},setRequestedCaipNetworks(e){Y.requestedCaipNetworks=e},async getApprovedCaipNetworksData(){let e=await this._getClient().getApprovedCaipNetworksData();Y.supportsAllNetworks=e.supportsAllNetworks,Y.approvedCaipNetworkIds=e.approvedCaipNetworkIds},async switchActiveNetwork(e){await this._getClient().switchCaipNetwork(e),Y.caipNetwork=e},resetNetwork(){Y.isDefaultCaipNetwork||(Y.caipNetwork=void 0),Y.approvedCaipNetworkIds=void 0,Y.supportsAllNetworks=!0}},ei=(0,p.sj)({projectId:"",sdkType:"w3m",sdkVersion:"html-wagmi-undefined"}),en={state:ei,subscribeKey:(e,t)=>subscribeKey(ei,e,t),setProjectId(e){ei.projectId=e},setIncludeWalletIds(e){ei.includeWalletIds=e},setExcludeWalletIds(e){ei.excludeWalletIds=e},setFeaturedWalletIds(e){ei.featuredWalletIds=e},setTokens(e){ei.tokens=e},setTermsConditionsUrl(e){ei.termsConditionsUrl=e},setPrivacyPolicyUrl(e){ei.privacyPolicyUrl=e},setCustomWallets(e){ei.customWallets=e},setEnableAnalytics(e){ei.enableAnalytics=e},setSdkVersion(e){ei.sdkVersion=e}},eo=m.getApiUrl(),ea=new FetchUtil({baseUrl:eo}),es=(0,p.sj)({page:1,count:0,featured:[],recommended:[],wallets:[],search:[]}),el={state:es,subscribeKey:(e,t)=>subscribeKey(es,e,t),_getApiHeaders(){let{projectId:e,sdkType:t,sdkVersion:a}=en.state;return{"x-project-id":e,"x-sdk-type":t,"x-sdk-version":a}},async _fetchWalletImage(e){let t=`${ea.baseUrl}/getWalletImage/${e}`,a=await ea.getBlob({path:t,headers:el._getApiHeaders()});W.setWalletImage(e,URL.createObjectURL(a))},async _fetchNetworkImage(e){let t=`${ea.baseUrl}/public/getAssetImage/${e}`,a=await ea.getBlob({path:t,headers:el._getApiHeaders()});W.setNetworkImage(e,URL.createObjectURL(a))},async _fetchConnectorImage(e){let t=`${ea.baseUrl}/public/getAssetImage/${e}`,a=await ea.getBlob({path:t,headers:el._getApiHeaders()});W.setConnectorImage(e,URL.createObjectURL(a))},async fetchNetworkImages(){let{requestedCaipNetworks:e}=J.state,t=e?.map(({imageId:e})=>e).filter(Boolean);t&&await Promise.allSettled(t.map(e=>el._fetchNetworkImage(e)))},async fetchConnectorImages(){let{connectors:e}=Z.state,t=e.map(({imageId:e})=>e).filter(Boolean);await Promise.allSettled(t.map(e=>el._fetchConnectorImage(e)))},async fetchFeaturedWallets(){let{featuredWalletIds:e}=en.state;if(e?.length){let{data:t}=await ea.get({path:"/getWallets",headers:el._getApiHeaders(),params:{page:"1",entries:e?.length?String(e.length):"4",include:e?.join(",")}});t.sort((t,a)=>e.indexOf(t.id)-e.indexOf(a.id));let a=t.map(e=>e.image_id).filter(Boolean);await Promise.allSettled(a.map(e=>el._fetchWalletImage(e))),es.featured=t}},async fetchRecommendedWallets(){let{includeWalletIds:e,excludeWalletIds:t,featuredWalletIds:a}=en.state,p=[...t??[],...a??[]].filter(Boolean),{data:g,count:m}=await ea.get({path:"/getWallets",headers:el._getApiHeaders(),params:{page:"1",entries:"4",include:e?.join(","),exclude:p?.join(",")}}),v=F.getRecentWallets(),_=g.map(e=>e.image_id).filter(Boolean),x=v.map(e=>e.image_id).filter(Boolean);await Promise.allSettled([..._,...x].map(e=>el._fetchWalletImage(e))),es.recommended=g,es.count=m??0},async fetchWallets({page:e}){let{includeWalletIds:t,excludeWalletIds:a,featuredWalletIds:p}=en.state,g=[...es.recommended.map(({id:e})=>e),...a??[],...p??[]].filter(Boolean),{data:v,count:_}=await ea.get({path:"/getWallets",headers:el._getApiHeaders(),params:{page:String(e),entries:"40",include:t?.join(","),exclude:g.join(",")}}),x=v.map(e=>e.image_id).filter(Boolean);await Promise.allSettled([...x.map(e=>el._fetchWalletImage(e)),m.wait(300)]),es.wallets=[...es.wallets,...v],es.count=_>es.count?_:es.count,es.page=e},async searchWallet({search:e}){let{includeWalletIds:t,excludeWalletIds:a}=en.state;es.search=[];let{data:p}=await ea.get({path:"/getWallets",headers:el._getApiHeaders(),params:{page:"1",entries:"100",search:e,include:t?.join(","),exclude:a?.join(",")}}),g=p.map(e=>e.image_id).filter(Boolean);await Promise.allSettled([...g.map(e=>el._fetchWalletImage(e)),m.wait(300)]),es.search=p},prefetch(){es.prefetchPromise=Promise.race([Promise.allSettled([el.fetchFeaturedWallets(),el.fetchRecommendedWallets(),el.fetchNetworkImages(),el.fetchConnectorImages()]),m.wait(3e3)])}},ec=m.getAnalyticsUrl(),eu=new FetchUtil({baseUrl:ec}),ed=["MODAL_CREATED"],eh=(0,p.sj)({timestamp:Date.now(),data:{type:"track",event:"MODAL_CREATED"}}),ef={state:eh,subscribe:e=>(0,p.Ld)(eh,()=>e(eh)),_getApiHeaders(){let{projectId:e,sdkType:t,sdkVersion:a}=en.state;return{"x-project-id":e,"x-sdk-type":t,"x-sdk-version":a}},async _sendAnalyticsEvent(e){try{if(ed.includes(e.data.event)||"undefined"==typeof window)return;await eu.post({path:"/e",headers:ef._getApiHeaders(),body:{eventId:m.getUUID(),url:window.location.href,domain:window.location.hostname,timestamp:e.timestamp,props:e.data}})}catch{}},sendEvent(e){eh.timestamp=Date.now(),eh.data=e,en.state.enableAnalytics&&ef._sendAnalyticsEvent(eh)}},ep=(0,p.sj)({view:"Connect",history:["Connect"]}),eg={state:ep,subscribeKey:(e,t)=>subscribeKey(ep,e,t),push(e,t){e!==ep.view&&(ep.view=e,ep.history.push(e),ep.data=t)},reset(e){ep.view=e,ep.history=[e]},replace(e){ep.history.length>1&&ep.history.at(-1)!==e&&(ep.view=e,ep.history[ep.history.length-1]=e)},goBack(){if(ep.history.length>1){ep.history.pop();let[e]=ep.history.slice(-1);e&&(ep.view=e)}}},em=(0,p.sj)({open:!1}),ew={state:em,subscribeKey:(e,t)=>subscribeKey(em,e,t),async open(e){await el.state.prefetchPromise,e?.view?eg.reset(e.view):_.state.isConnected?eg.reset("Account"):eg.reset("Connect"),em.open=!0,X.set({open:!0}),ef.sendEvent({type:"track",event:"MODAL_OPEN"})},close(){em.open=!1,X.set({open:!1}),ef.sendEvent({type:"track",event:"MODAL_CLOSE"})}},eb=(0,p.sj)({wcError:!1,buffering:!1}),ey={state:eb,subscribeKey:(e,t)=>subscribeKey(eb,e,t),_getClient(){if(!eb._client)throw Error("ConnectionController client not set");return eb._client},setClient(e){eb._client=(0,p.iH)(e)},connectWalletConnect(){eb.wcPromise=this._getClient().connectWalletConnect(e=>{eb.wcUri=e,eb.wcPairingExpiry=m.getPairingExpiry()})},async connectExternal(e){await this._getClient().connectExternal?.(e)},checkInstalled(e){return this._getClient().checkInstalled?.(e)},resetWcConnection(){eb.wcUri=void 0,eb.wcPairingExpiry=void 0,eb.wcPromise=void 0,eb.wcLinking=void 0,eb.recentWallet=void 0,F.deleteWalletConnectDeepLink()},setWcLinking(e){eb.wcLinking=e},setWcError(e){eb.wcError=e,eb.buffering=!1},setRecentWallet(e){eb.recentWallet=e},setBuffering(e){eb.buffering=e},async disconnect(){await this._getClient().disconnect(),this.resetWcConnection()}},ev=(0,p.sj)({message:"",variant:"success",open:!1}),e_={state:ev,subscribeKey:(e,t)=>subscribeKey(ev,e,t),showSuccess(e){ev.message=e,ev.variant="success",ev.open=!0},showError(e){ev.message=e,ev.variant="error",ev.open=!0},hide(){ev.open=!1}},ex=(0,p.sj)({themeMode:"dark",themeVariables:{}}),eC={state:ex,subscribe:e=>(0,p.Ld)(ex,()=>e(ex)),setThemeMode(e){ex.themeMode=e},setThemeVariables(e){ex.themeVariables={...ex.themeVariables,...e}}},eE=m.getBlockchainApiUrl(),ek=new FetchUtil({baseUrl:eE}),eS={fetchIdentity:({caipChainId:e,address:t})=>ek.get({path:`/v1/identity/${t}`,params:{chainId:e,projectId:en.state.projectId}})},eA={getWalletImage:e=>e?.image_url?e?.image_url:e?.image_id?W.state.walletImages[e.image_id]:void 0,getNetworkImage:e=>e?.imageUrl?e?.imageUrl:e?.imageId?W.state.networkImages[e.imageId]:void 0,getConnectorImage:e=>e?.imageUrl?e.imageUrl:e?.imageId?W.state.connectorImages[e.imageId]:void 0}},90078:function(e,t,a){"use strict";a.r(t),a.d(t,{W3mModal:function(){return T}});var p=a(36635),g=a(6894),m=a(92233),v=a(18569),_=m.iv`
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  wui-card {
    max-width: 360px;
    width: 100%;
    position: relative;
    animation-delay: 0.3s;
    animation-duration: 0.2s;
    animation-name: zoom-in;
    animation-fill-mode: backwards;
    animation-timing-function: var(--wui-ease-out-power-2);
    outline: none;
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: none;
      animation-name: slide-in;
    }
  }
`,__decorate=function(e,t,a,p){var g,m=arguments.length,v=m<3?t:null===p?p=Object.getOwnPropertyDescriptor(t,a):p;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)v=Reflect.decorate(e,t,a,p);else for(var _=e.length-1;_>=0;_--)(g=e[_])&&(v=(m<3?g(v):m>3?g(t,a,v):g(t,a))||v);return m>3&&v&&Object.defineProperty(t,a,v),v};let x="scroll-lock",T=class extends m.oi{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.open=p.IN.state.open,this.initializeTheming(),p.ApiController.prefetch(),this.unsubscribe.push(p.IN.subscribeKey("open",e=>e?this.onOpen():this.onClose())),p.Xs.sendEvent({type:"track",event:"MODAL_LOADED"})}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.onRemoveKeyboardListener()}render(){return this.open?m.dy`
          <wui-flex @click=${this.onOverlayClick.bind(this)}>
            <wui-card role="alertdialog" aria-modal="true" tabindex="0">
              <w3m-header></w3m-header>
              <w3m-router></w3m-router>
              <w3m-snackbar></w3m-snackbar>
            </wui-card>
          </wui-flex>
        `:null}onOverlayClick(e){e.target===e.currentTarget&&p.IN.close()}initializeTheming(){let{themeVariables:e,themeMode:t}=p.ThemeController.state,a=g.UiHelperUtil.getColorTheme(t);(0,g.initializeTheming)(e,a)}async onClose(){this.onScrollUnlock(),await this.animate([{opacity:1},{opacity:0}],{duration:200,easing:"ease",fill:"forwards"}).finished,p.SnackController.hide(),this.open=!1,this.onRemoveKeyboardListener()}async onOpen(){this.onScrollLock(),this.open=!0,await this.animate([{opacity:0},{opacity:1}],{duration:200,easing:"ease",fill:"forwards",delay:300}).finished,this.onAddKeyboardListener()}onScrollLock(){let e=document.createElement("style");e.dataset.w3m=x,e.textContent=`
      html, body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `,document.head.appendChild(e)}onScrollUnlock(){let e=document.head.querySelector(`style[data-w3m="${x}"]`);e&&e.remove()}onAddKeyboardListener(){this.abortController=new AbortController;let e=this.shadowRoot?.querySelector("wui-card");e?.focus(),window.addEventListener("keydown",t=>{if("Escape"===t.key)p.IN.close();else if("Tab"===t.key){let{tagName:a}=t.target;!a||a.includes("W3M-")||a.includes("WUI-")||e?.focus()}},this.abortController)}onRemoveKeyboardListener(){this.abortController?.abort(),this.abortController=void 0}};T.styles=_,__decorate([(0,v.SB)()],T.prototype,"open",void 0),T=__decorate([(0,g.customElement)("w3m-modal")],T)},3274:function(e,t,a){"use strict";a.d(t,{fl:function(){return b},iv:function(){return i},Ts:function(){return J},Qu:function(){return f}});/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let p=globalThis,g=p.ShadowRoot&&(void 0===p.ShadyCSS||p.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,m=Symbol(),v=new WeakMap;let n=class n{constructor(e,t,a){if(this._$cssResult$=!0,a!==m)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(g&&void 0===e){let a=void 0!==t&&1===t.length;a&&(e=v.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),a&&v.set(t,e))}return e}toString(){return this.cssText}};let r=e=>new n("string"==typeof e?e:e+"",void 0,m),i=(e,...t)=>{let a=1===e.length?e[0]:t.reduce((t,a,p)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(a)+e[p+1],e[0]);return new n(a,e,m)},S=(e,t)=>{if(g)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let a of t){let t=document.createElement("style"),g=p.litNonce;void 0!==g&&t.setAttribute("nonce",g),t.textContent=a.cssText,e.appendChild(t)}},_=g?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(let a of e.cssRules)t+=a.cssText;return r(t)})(e):e,{is:x,defineProperty:T,getOwnPropertyDescriptor:F,getOwnPropertyNames:z,getOwnPropertySymbols:W,getPrototypeOf:K}=Object,Z=globalThis,Q=Z.trustedTypes,X=Q?Q.emptyScript:"",Y=Z.reactiveElementPolyfillSupport,d=(e,t)=>e,J={toAttribute(e,t){switch(t){case Boolean:e=e?X:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let a=e;switch(t){case Boolean:a=null!==e;break;case Number:a=null===e?null:Number(e);break;case Object:case Array:try{a=JSON.parse(e)}catch(e){a=null}}return a}},f=(e,t)=>!x(e,t),ei={attribute:!0,type:String,converter:J,reflect:!1,hasChanged:f};Symbol.metadata??=Symbol("metadata"),Z.litPropertyMetadata??=new WeakMap;let b=class b extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ei){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){let a=Symbol(),p=this.getPropertyDescriptor(e,a,t);void 0!==p&&T(this.prototype,e,p)}}static getPropertyDescriptor(e,t,a){let{get:p,set:g}=F(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return p?.call(this)},set(t){let m=p?.call(this);g.call(this,t),this.requestUpdate(e,m,a)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ei}static _$Ei(){if(this.hasOwnProperty(d("elementProperties")))return;let e=K(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(d("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(d("properties"))){let e=this.properties,t=[...z(e),...W(e)];for(let a of t)this.createProperty(a,e[a])}let e=this[Symbol.metadata];if(null!==e){let t=litPropertyMetadata.get(e);if(void 0!==t)for(let[e,a]of t)this.elementProperties.set(e,a)}for(let[e,t]of(this._$Eh=new Map,this.elementProperties)){let a=this._$Eu(e,t);void 0!==a&&this._$Eh.set(a,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let a=new Set(e.flat(1/0).reverse());for(let e of a)t.unshift(_(e))}else void 0!==e&&t.push(_(e));return t}static _$Eu(e,t){let a=t.attribute;return!1===a?void 0:"string"==typeof a?a:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$ES??=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$ES?.splice(this._$ES.indexOf(e)>>>0,1)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let a of t.keys())this.hasOwnProperty(a)&&(e.set(a,this[a]),delete this[a]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return S(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$ES?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$ES?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,a){this._$AK(e,a)}_$EO(e,t){let a=this.constructor.elementProperties.get(e),p=this.constructor._$Eu(e,a);if(void 0!==p&&!0===a.reflect){let g=(void 0!==a.converter?.toAttribute?a.converter:J).toAttribute(t,a.type);this._$Em=e,null==g?this.removeAttribute(p):this.setAttribute(p,g),this._$Em=null}}_$AK(e,t){let a=this.constructor,p=a._$Eh.get(e);if(void 0!==p&&this._$Em!==p){let e=a.getPropertyOptions(p),g="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:J;this._$Em=p,this[p]=g.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,a,p=!1,g){if(void 0!==e){if(!((a??=this.constructor.getPropertyOptions(e)).hasChanged??f)(p?g:this[e],t))return;this.C(e,t,a)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(e,t,a){this._$AL.has(e)||this._$AL.set(e,t),!0===a.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,a]of e)!0!==a.wrapped||this._$AL.has(t)||void 0===this[t]||this.C(t,this[t],a)}let e=!1,t=this._$AL;try{(e=this.shouldUpdate(t))?(this.willUpdate(t),this._$ES?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$ET()}catch(t){throw e=!1,this._$ET(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$ES?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach(e=>this._$EO(e,this[e])),this._$ET()}updated(e){}firstUpdated(e){}};b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[d("elementProperties")]=new Map,b[d("finalized")]=new Map,Y?.({ReactiveElement:b}),(Z.reactiveElementVersions??=[]).push("2.0.0")},88382:function(e,t,a){"use strict";a.d(t,{Jb:function(){return eo},Ld:function(){return ea},dy:function(){return en},sY:function(){return j}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let p=globalThis,g=p.trustedTypes,m=g?g.createPolicy("lit-html",{createHTML:e=>e}):void 0,v="$lit$",_=`lit$${(Math.random()+"").slice(9)}$`,x="?"+_,T=`<${x}>`,F=document,l=()=>F.createComment(""),c=e=>null===e||"object"!=typeof e&&"function"!=typeof e,z=Array.isArray,u=e=>z(e)||"function"==typeof e?.[Symbol.iterator],W="[ 	\n\f\r]",K=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Z=/-->/g,Q=/>/g,X=RegExp(`>|${W}(?:([^\\s"'>=/]+)(${W}*=${W}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Y=/'/g,J=/"/g,ei=/^(?:script|style|textarea|title)$/i,y=e=>(t,...a)=>({_$litType$:e,strings:t,values:a}),en=y(1),eo=(y(2),Symbol.for("lit-noChange")),ea=Symbol.for("lit-nothing"),es=new WeakMap,el=F.createTreeWalker(F,129);function C(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==m?m.createHTML(t):t}let P=(e,t)=>{let a=e.length-1,p=[],g,m=2===t?"<svg>":"",x=K;for(let t=0;t<a;t++){let a=e[t],F,z,W=-1,en=0;for(;en<a.length&&(x.lastIndex=en,null!==(z=x.exec(a)));)en=x.lastIndex,x===K?"!--"===z[1]?x=Z:void 0!==z[1]?x=Q:void 0!==z[2]?(ei.test(z[2])&&(g=RegExp("</"+z[2],"g")),x=X):void 0!==z[3]&&(x=X):x===X?">"===z[0]?(x=g??K,W=-1):void 0===z[1]?W=-2:(W=x.lastIndex-z[2].length,F=z[1],x=void 0===z[3]?X:'"'===z[3]?J:Y):x===J||x===Y?x=X:x===Z||x===Q?x=K:(x=X,g=void 0);let eo=x===X&&e[t+1].startsWith("/>")?" ":"";m+=x===K?a+T:W>=0?(p.push(F),a.slice(0,W)+v+a.slice(W)+_+eo):a+_+(-2===W?t:eo)}return[C(e,m+(e[a]||"<?>")+(2===t?"</svg>":"")),p]};let V=class V{constructor({strings:e,_$litType$:t},a){let p;this.parts=[];let m=0,T=0,F=e.length-1,z=this.parts,[W,K]=P(e,t);if(this.el=V.createElement(W,a),el.currentNode=this.el.content,2===t){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(p=el.nextNode())&&z.length<F;){if(1===p.nodeType){if(p.hasAttributes())for(let e of p.getAttributeNames())if(e.endsWith(v)){let t=K[T++],a=p.getAttribute(e).split(_),g=/([.?@])?(.*)/.exec(t);z.push({type:1,index:m,name:g[2],strings:a,ctor:"."===g[1]?k:"?"===g[1]?H:"@"===g[1]?I:R}),p.removeAttribute(e)}else e.startsWith(_)&&(z.push({type:6,index:m}),p.removeAttribute(e));if(ei.test(p.tagName)){let e=p.textContent.split(_),t=e.length-1;if(t>0){p.textContent=g?g.emptyScript:"";for(let a=0;a<t;a++)p.append(e[a],l()),el.nextNode(),z.push({type:2,index:++m});p.append(e[t],l())}}}else if(8===p.nodeType){if(p.data===x)z.push({type:2,index:m});else{let e=-1;for(;-1!==(e=p.data.indexOf(_,e+1));)z.push({type:7,index:m}),e+=_.length-1}}m++}}static createElement(e,t){let a=F.createElement("template");return a.innerHTML=e,a}};function N(e,t,a=e,p){if(t===eo)return t;let g=void 0!==p?a._$Co?.[p]:a._$Cl,m=c(t)?void 0:t._$litDirective$;return g?.constructor!==m&&(g?._$AO?.(!1),void 0===m?g=void 0:(g=new m(e))._$AT(e,a,p),void 0!==p?(a._$Co??=[])[p]=g:a._$Cl=g),void 0!==g&&(t=N(e,g._$AS(e,t.values),g,p)),t}let S=class S{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:a}=this._$AD,p=(e?.creationScope??F).importNode(t,!0);el.currentNode=p;let g=el.nextNode(),m=0,v=0,_=a[0];for(;void 0!==_;){if(m===_.index){let t;2===_.type?t=new M(g,g.nextSibling,this,e):1===_.type?t=new _.ctor(g,_.name,_.strings,this,e):6===_.type&&(t=new L(g,this,e)),this._$AV.push(t),_=a[++v]}m!==_?.index&&(g=el.nextNode(),m++)}return el.currentNode=F,p}p(e){let t=0;for(let a of this._$AV)void 0!==a&&(void 0!==a.strings?(a._$AI(e,a,t),t+=a.strings.length-2):a._$AI(e[t])),t++}};let M=class M{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,a,p){this.type=2,this._$AH=ea,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=a,this.options=p,this._$Cv=p?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){c(e=N(this,e,t))?e===ea||null==e||""===e?(this._$AH!==ea&&this._$AR(),this._$AH=ea):e!==this._$AH&&e!==eo&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):u(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==ea&&c(this._$AH)?this._$AA.nextSibling.data=e:this.$(F.createTextNode(e)),this._$AH=e}g(e){let{values:t,_$litType$:a}=e,p="number"==typeof a?this._$AC(e):(void 0===a.el&&(a.el=V.createElement(C(a.h,a.h[0]),this.options)),a);if(this._$AH?._$AD===p)this._$AH.p(t);else{let e=new S(p,this),a=e.u(this.options);e.p(t),this.$(a),this._$AH=e}}_$AC(e){let t=es.get(e.strings);return void 0===t&&es.set(e.strings,t=new V(e)),t}T(e){z(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,a,p=0;for(let g of e)p===t.length?t.push(a=new M(this.k(l()),this.k(l()),this,this.options)):a=t[p],a._$AI(g),p++;p<t.length&&(this._$AR(a&&a._$AB.nextSibling,p),t.length=p)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}};let R=class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,a,p,g){this.type=1,this._$AH=ea,this._$AN=void 0,this.element=e,this.name=t,this._$AM=p,this.options=g,a.length>2||""!==a[0]||""!==a[1]?(this._$AH=Array(a.length-1).fill(new String),this.strings=a):this._$AH=ea}_$AI(e,t=this,a,p){let g=this.strings,m=!1;if(void 0===g)(m=!c(e=N(this,e,t,0))||e!==this._$AH&&e!==eo)&&(this._$AH=e);else{let p,v;let _=e;for(e=g[0],p=0;p<g.length-1;p++)(v=N(this,_[a+p],t,p))===eo&&(v=this._$AH[p]),m||=!c(v)||v!==this._$AH[p],v===ea?e=ea:e!==ea&&(e+=(v??"")+g[p+1]),this._$AH[p]=v}m&&!p&&this.j(e)}j(e){e===ea?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}};let k=class k extends R{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===ea?void 0:e}};let H=class H extends R{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==ea)}};let I=class I extends R{constructor(e,t,a,p,g){super(e,t,a,p,g),this.type=5}_$AI(e,t=this){if((e=N(this,e,t,0)??ea)===eo)return;let a=this._$AH,p=e===ea&&a!==ea||e.capture!==a.capture||e.once!==a.once||e.passive!==a.passive,g=e!==ea&&(a===ea||p);p&&this.element.removeEventListener(this.name,this,a),g&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}};let L=class L{constructor(e,t,a){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=a}get _$AU(){return this._$AM._$AU}_$AI(e){N(this,e)}};let ec=p.litHtmlPolyfillSupport;ec?.(V,M),(p.litHtmlVersions??=[]).push("3.0.0");let j=(e,t,a)=>{let p=a?.renderBefore??t,g=p._$litPart$;if(void 0===g){let e=a?.renderBefore??null;p._$litPart$=g=new M(t.insertBefore(l(),e),e,void 0,a??{})}return g._$AI(e),g}},18569:function(e,t,a){"use strict";a.d(t,{Cb:function(){return n},SB:function(){return state_r}});var p=a(3274);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let g={attribute:!0,type:String,converter:p.Ts,reflect:!1,hasChanged:p.Qu},r=(e=g,t,a)=>{let{kind:p,metadata:m}=a,v=globalThis.litPropertyMetadata.get(m);if(void 0===v&&globalThis.litPropertyMetadata.set(m,v=new Map),v.set(a.name,e),"accessor"===p){let{name:p}=a;return{set(a){let g=t.get.call(this);t.set.call(this,a),this.requestUpdate(p,g,e)},init(t){return void 0!==t&&this.C(p,void 0,e),t}}}if("setter"===p){let{name:p}=a;return function(a){let g=this[p];t.call(this,a),this.requestUpdate(p,g,e)}}throw Error("Unsupported decorator location: "+p)};function n(e){return(t,a)=>"object"==typeof a?r(e,t,a):((e,t,a)=>{let p=t.hasOwnProperty(a);return t.constructor.createProperty(a,p?{...e,wrapped:!0}:e),p?Object.getOwnPropertyDescriptor(t,a):void 0})(e,t,a)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function state_r(e){return n({...e,state:!0,attribute:!1})}},92233:function(e,t,a){"use strict";a.d(t,{oi:function(){return s},iv:function(){return p.iv},dy:function(){return g.dy}});var p=a(3274),g=a(88382);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let s=class s extends p.fl{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=(0,g.sY)(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return g.Jb}};s._$litElement$=!0,s.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:s});let m=globalThis.litElementPolyfillSupport;m?.({LitElement:s}),(globalThis.litElementVersions??=[]).push("4.0.0")},6894:function(e,t,a){"use strict";let p,g,m;a.r(t),a.d(t,{UiHelperUtil:function(){return t5},WuiAccountButton:function(){return ri},WuiAllWalletsImage:function(){return rs},WuiAvatar:function(){return t7},WuiButton:function(){return rc},WuiCard:function(){return eN},WuiCardSelect:function(){return rw},WuiCardSelectLoader:function(){return rh},WuiChip:function(){return ry},WuiConnectButton:function(){return r_},WuiCtaButton:function(){return rC},WuiEmailInput:function(){return r$},WuiFlex:function(){return t4},WuiGrid:function(){return ip},WuiIcon:function(){return tP},WuiIconBox:function(){return rt},WuiIconLink:function(){return rI},WuiImage:function(){return t$},WuiInputElement:function(){return rR},WuiInputNumeric:function(){return rN},WuiInputText:function(){return rP},WuiLink:function(){return rM},WuiListItem:function(){return rL},WuiListTransaction:function(){return rK},WuiListWallet:function(){return rY},WuiLoadingHexagon:function(){return tI},WuiLoadingSpinner:function(){return tR},WuiLoadingThumbnail:function(){return tN},WuiLogo:function(){return r0},WuiLogoSelect:function(){return r2},WuiNetworkButton:function(){return r5},WuiNetworkImage:function(){return rg},WuiOtp:function(){return r4},WuiQrCode:function(){return ir},WuiSearchBar:function(){return io},WuiSeparator:function(){return im},WuiShimmer:function(){return tM},WuiSnackbar:function(){return is},WuiTabs:function(){return ic},WuiTag:function(){return rQ},WuiText:function(){return tF},WuiTooltip:function(){return id},WuiTransactionVisual:function(){return rG},WuiVisual:function(){return t3},WuiWalletImage:function(){return ro},customElement:function(){return customElement},initializeTheming:function(){return initializeTheming},setColorTheme:function(){return setColorTheme},setThemeVariables:function(){return setThemeVariables}});/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let v=globalThis,_=v.ShadowRoot&&(void 0===v.ShadyCSS||v.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,x=Symbol(),T=new WeakMap;let n=class n{constructor(e,t,a){if(this._$cssResult$=!0,a!==x)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(_&&void 0===e){let a=void 0!==t&&1===t.length;a&&(e=T.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),a&&T.set(t,e))}return e}toString(){return this.cssText}};let r=e=>new n("string"==typeof e?e:e+"",void 0,x),i=(e,...t)=>{let a=1===e.length?e[0]:t.reduce((t,a,p)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(a)+e[p+1],e[0]);return new n(a,e,x)},S=(e,t)=>{if(_)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let a of t){let t=document.createElement("style"),p=v.litNonce;void 0!==p&&t.setAttribute("nonce",p),t.textContent=a.cssText,e.appendChild(t)}},F=_?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(let a of e.cssRules)t+=a.cssText;return r(t)})(e):e,{is:z,defineProperty:W,getOwnPropertyDescriptor:K,getOwnPropertyNames:Z,getOwnPropertySymbols:Q,getPrototypeOf:X}=Object,Y=globalThis,J=Y.trustedTypes,ei=J?J.emptyScript:"",en=Y.reactiveElementPolyfillSupport,d=(e,t)=>e,eo={toAttribute(e,t){switch(t){case Boolean:e=e?ei:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let a=e;switch(t){case Boolean:a=null!==e;break;case Number:a=null===e?null:Number(e);break;case Object:case Array:try{a=JSON.parse(e)}catch(e){a=null}}return a}},f=(e,t)=>!z(e,t),ea={attribute:!0,type:String,converter:eo,reflect:!1,hasChanged:f};Symbol.metadata??=Symbol("metadata"),Y.litPropertyMetadata??=new WeakMap;let b=class b extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ea){if(t.state&&(t.attribute=!1),this._$Ei(),this.elementProperties.set(e,t),!t.noAccessor){let a=Symbol(),p=this.getPropertyDescriptor(e,a,t);void 0!==p&&W(this.prototype,e,p)}}static getPropertyDescriptor(e,t,a){let{get:p,set:g}=K(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get(){return p?.call(this)},set(t){let m=p?.call(this);g.call(this,t),this.requestUpdate(e,m,a)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ea}static _$Ei(){if(this.hasOwnProperty(d("elementProperties")))return;let e=X(this);e.finalize(),void 0!==e.l&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(d("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(d("properties"))){let e=this.properties,t=[...Z(e),...Q(e)];for(let a of t)this.createProperty(a,e[a])}let e=this[Symbol.metadata];if(null!==e){let t=litPropertyMetadata.get(e);if(void 0!==t)for(let[e,a]of t)this.elementProperties.set(e,a)}for(let[e,t]of(this._$Eh=new Map,this.elementProperties)){let a=this._$Eu(e,t);void 0!==a&&this._$Eh.set(a,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let a=new Set(e.flat(1/0).reverse());for(let e of a)t.unshift(F(e))}else void 0!==e&&t.push(F(e));return t}static _$Eu(e,t){let a=t.attribute;return!1===a?void 0:"string"==typeof a?a:"string"==typeof e?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$ES??=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$ES?.splice(this._$ES.indexOf(e)>>>0,1)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let a of t.keys())this.hasOwnProperty(a)&&(e.set(a,this[a]),delete this[a]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return S(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$ES?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$ES?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,a){this._$AK(e,a)}_$EO(e,t){let a=this.constructor.elementProperties.get(e),p=this.constructor._$Eu(e,a);if(void 0!==p&&!0===a.reflect){let g=(void 0!==a.converter?.toAttribute?a.converter:eo).toAttribute(t,a.type);this._$Em=e,null==g?this.removeAttribute(p):this.setAttribute(p,g),this._$Em=null}}_$AK(e,t){let a=this.constructor,p=a._$Eh.get(e);if(void 0!==p&&this._$Em!==p){let e=a.getPropertyOptions(p),g="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==e.converter?.fromAttribute?e.converter:eo;this._$Em=p,this[p]=g.fromAttribute(t,e.type),this._$Em=null}}requestUpdate(e,t,a,p=!1,g){if(void 0!==e){if(!((a??=this.constructor.getPropertyOptions(e)).hasChanged??f)(p?g:this[e],t))return;this.C(e,t,a)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(e,t,a){this._$AL.has(e)||this._$AL.set(e,t),!0===a.reflect&&this._$Em!==e&&(this._$Ej??=new Set).add(e)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,a]of e)!0!==a.wrapped||this._$AL.has(t)||void 0===this[t]||this.C(t,this[t],a)}let e=!1,t=this._$AL;try{(e=this.shouldUpdate(t))?(this.willUpdate(t),this._$ES?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$ET()}catch(t){throw e=!1,this._$ET(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$ES?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(e){return!0}update(e){this._$Ej&&=this._$Ej.forEach(e=>this._$EO(e,this[e])),this._$ET()}updated(e){}firstUpdated(e){}};b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[d("elementProperties")]=new Map,b[d("finalized")]=new Map,en?.({ReactiveElement:b}),(Y.reactiveElementVersions??=[]).push("2.0.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let es=globalThis,el=es.trustedTypes,ec=el?el.createPolicy("lit-html",{createHTML:e=>e}):void 0,eu="$lit$",ed=`lit$${(Math.random()+"").slice(9)}$`,eh="?"+ed,ef=`<${eh}>`,ep=document,lit_html_l=()=>ep.createComment(""),lit_html_c=e=>null===e||"object"!=typeof e&&"function"!=typeof e,eg=Array.isArray,lit_html_u=e=>eg(e)||"function"==typeof e?.[Symbol.iterator],em="[ 	\n\f\r]",ew=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,eb=/-->/g,ey=/>/g,ev=RegExp(`>|${em}(?:([^\\s"'>=/]+)(${em}*=${em}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),e_=/'/g,ex=/"/g,eC=/^(?:script|style|textarea|title)$/i,lit_html_y=e=>(t,...a)=>({_$litType$:e,strings:t,values:a}),eE=lit_html_y(1),ek=lit_html_y(2),eS=Symbol.for("lit-noChange"),eA=Symbol.for("lit-nothing"),eP=new WeakMap,eD=ep.createTreeWalker(ep,129);function C(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==ec?ec.createHTML(t):t}let P=(e,t)=>{let a=e.length-1,p=[],g,m=2===t?"<svg>":"",v=ew;for(let t=0;t<a;t++){let a=e[t],_,x,T=-1,F=0;for(;F<a.length&&(v.lastIndex=F,null!==(x=v.exec(a)));)F=v.lastIndex,v===ew?"!--"===x[1]?v=eb:void 0!==x[1]?v=ey:void 0!==x[2]?(eC.test(x[2])&&(g=RegExp("</"+x[2],"g")),v=ev):void 0!==x[3]&&(v=ev):v===ev?">"===x[0]?(v=g??ew,T=-1):void 0===x[1]?T=-2:(T=v.lastIndex-x[2].length,_=x[1],v=void 0===x[3]?ev:'"'===x[3]?ex:e_):v===ex||v===e_?v=ev:v===eb||v===ey?v=ew:(v=ev,g=void 0);let z=v===ev&&e[t+1].startsWith("/>")?" ":"";m+=v===ew?a+ef:T>=0?(p.push(_),a.slice(0,T)+eu+a.slice(T)+ed+z):a+ed+(-2===T?t:z)}return[C(e,m+(e[a]||"<?>")+(2===t?"</svg>":"")),p]};let V=class V{constructor({strings:e,_$litType$:t},a){let p;this.parts=[];let g=0,m=0,v=e.length-1,_=this.parts,[x,T]=P(e,t);if(this.el=V.createElement(x,a),eD.currentNode=this.el.content,2===t){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;null!==(p=eD.nextNode())&&_.length<v;){if(1===p.nodeType){if(p.hasAttributes())for(let e of p.getAttributeNames())if(e.endsWith(eu)){let t=T[m++],a=p.getAttribute(e).split(ed),v=/([.?@])?(.*)/.exec(t);_.push({type:1,index:g,name:v[2],strings:a,ctor:"."===v[1]?k:"?"===v[1]?H:"@"===v[1]?I:R}),p.removeAttribute(e)}else e.startsWith(ed)&&(_.push({type:6,index:g}),p.removeAttribute(e));if(eC.test(p.tagName)){let e=p.textContent.split(ed),t=e.length-1;if(t>0){p.textContent=el?el.emptyScript:"";for(let a=0;a<t;a++)p.append(e[a],lit_html_l()),eD.nextNode(),_.push({type:2,index:++g});p.append(e[t],lit_html_l())}}}else if(8===p.nodeType){if(p.data===eh)_.push({type:2,index:g});else{let e=-1;for(;-1!==(e=p.data.indexOf(ed,e+1));)_.push({type:7,index:g}),e+=ed.length-1}}g++}}static createElement(e,t){let a=ep.createElement("template");return a.innerHTML=e,a}};function N(e,t,a=e,p){if(t===eS)return t;let g=void 0!==p?a._$Co?.[p]:a._$Cl,m=lit_html_c(t)?void 0:t._$litDirective$;return g?.constructor!==m&&(g?._$AO?.(!1),void 0===m?g=void 0:(g=new m(e))._$AT(e,a,p),void 0!==p?(a._$Co??=[])[p]=g:a._$Cl=g),void 0!==g&&(t=N(e,g._$AS(e,t.values),g,p)),t}let lit_html_S=class lit_html_S{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:a}=this._$AD,p=(e?.creationScope??ep).importNode(t,!0);eD.currentNode=p;let g=eD.nextNode(),m=0,v=0,_=a[0];for(;void 0!==_;){if(m===_.index){let t;2===_.type?t=new M(g,g.nextSibling,this,e):1===_.type?t=new _.ctor(g,_.name,_.strings,this,e):6===_.type&&(t=new L(g,this,e)),this._$AV.push(t),_=a[++v]}m!==_?.index&&(g=eD.nextNode(),m++)}return eD.currentNode=ep,p}p(e){let t=0;for(let a of this._$AV)void 0!==a&&(void 0!==a.strings?(a._$AI(e,a,t),t+=a.strings.length-2):a._$AI(e[t])),t++}};let M=class M{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,a,p){this.type=2,this._$AH=eA,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=a,this.options=p,this._$Cv=p?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return void 0!==t&&11===e?.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){lit_html_c(e=N(this,e,t))?e===eA||null==e||""===e?(this._$AH!==eA&&this._$AR(),this._$AH=eA):e!==this._$AH&&e!==eS&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):lit_html_u(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==eA&&lit_html_c(this._$AH)?this._$AA.nextSibling.data=e:this.$(ep.createTextNode(e)),this._$AH=e}g(e){let{values:t,_$litType$:a}=e,p="number"==typeof a?this._$AC(e):(void 0===a.el&&(a.el=V.createElement(C(a.h,a.h[0]),this.options)),a);if(this._$AH?._$AD===p)this._$AH.p(t);else{let e=new lit_html_S(p,this),a=e.u(this.options);e.p(t),this.$(a),this._$AH=e}}_$AC(e){let t=eP.get(e.strings);return void 0===t&&eP.set(e.strings,t=new V(e)),t}T(e){eg(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,a,p=0;for(let g of e)p===t.length?t.push(a=new M(this.k(lit_html_l()),this.k(lit_html_l()),this,this.options)):a=t[p],a._$AI(g),p++;p<t.length&&(this._$AR(a&&a._$AB.nextSibling,p),t.length=p)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e&&e!==this._$AB;){let t=e.nextSibling;e.remove(),e=t}}setConnected(e){void 0===this._$AM&&(this._$Cv=e,this._$AP?.(e))}};let R=class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,a,p,g){this.type=1,this._$AH=eA,this._$AN=void 0,this.element=e,this.name=t,this._$AM=p,this.options=g,a.length>2||""!==a[0]||""!==a[1]?(this._$AH=Array(a.length-1).fill(new String),this.strings=a):this._$AH=eA}_$AI(e,t=this,a,p){let g=this.strings,m=!1;if(void 0===g)(m=!lit_html_c(e=N(this,e,t,0))||e!==this._$AH&&e!==eS)&&(this._$AH=e);else{let p,v;let _=e;for(e=g[0],p=0;p<g.length-1;p++)(v=N(this,_[a+p],t,p))===eS&&(v=this._$AH[p]),m||=!lit_html_c(v)||v!==this._$AH[p],v===eA?e=eA:e!==eA&&(e+=(v??"")+g[p+1]),this._$AH[p]=v}m&&!p&&this.j(e)}j(e){e===eA?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}};let k=class k extends R{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===eA?void 0:e}};let H=class H extends R{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==eA)}};let I=class I extends R{constructor(e,t,a,p,g){super(e,t,a,p,g),this.type=5}_$AI(e,t=this){if((e=N(this,e,t,0)??eA)===eS)return;let a=this._$AH,p=e===eA&&a!==eA||e.capture!==a.capture||e.once!==a.once||e.passive!==a.passive,g=e!==eA&&(a===eA||p);p&&this.element.removeEventListener(this.name,this,a),g&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}};let L=class L{constructor(e,t,a){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=a}get _$AU(){return this._$AM._$AU}_$AI(e){N(this,e)}};let e$=es.litHtmlPolyfillSupport;e$?.(V,M),(es.litHtmlVersions??=[]).push("3.0.0");let j=(e,t,a)=>{let p=a?.renderBefore??t,g=p._$litPart$;if(void 0===g){let e=a?.renderBefore??null;p._$litPart$=g=new M(t.insertBefore(lit_html_l(),e),e,void 0,a??{})}return g._$AI(e),g};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let lit_element_s=class lit_element_s extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=j(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return eS}};lit_element_s._$litElement$=!0,lit_element_s.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:lit_element_s});let eO=globalThis.litElementPolyfillSupport;function initializeTheming(e,t){p=document.createElement("style"),g=document.createElement("style"),m=document.createElement("style"),p.textContent=createRootStyles(e).core.cssText,g.textContent=createRootStyles(e).dark.cssText,m.textContent=createRootStyles(e).light.cssText,document.head.appendChild(p),document.head.appendChild(g),document.head.appendChild(m),setColorTheme(t)}function setColorTheme(e){g&&m&&("light"===e?(g.removeAttribute("media"),m.media="enabled"):(m.removeAttribute("media"),g.media="enabled"))}function setThemeVariables(e){p&&g&&m&&(p.textContent=createRootStyles(e).core.cssText,g.textContent=createRootStyles(e).dark.cssText,m.textContent=createRootStyles(e).light.cssText)}function createRootStyles(e){return{core:i`
      :root {
        --w3m-color-mix-strength: ${r(e?.["--w3m-color-mix-strength"]?`${e["--w3m-color-mix-strength"]}%`:"0%")};
        --w3m-font-family: ${r(e?.["--w3m-font-family"]||"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif")};
        --w3m-font-size-master: ${r(e?.["--w3m-font-size-master"]||"10px")};
        --w3m-border-radius-master: ${r(e?.["--w3m-border-radius-master"]||"4px")};
        --w3m-z-index: ${r(e?.["--w3m-z-index"]||100)};

        --wui-font-family: var(--w3m-font-family);

        --wui-font-size-micro: var(--w3m-font-size-master);
        --wui-font-size-tiny: calc(var(--w3m-font-size-master) * 1.2);
        --wui-font-size-small: calc(var(--w3m-font-size-master) * 1.4);
        --wui-font-size-paragraph: calc(var(--w3m-font-size-master) * 1.6);
        --wui-font-size-large: calc(var(--w3m-font-size-master) * 2);

        --wui-border-radius-5xs: var(--w3m-border-radius-master);
        --wui-border-radius-4xs: calc(var(--w3m-border-radius-master) * 1.5);
        --wui-border-radius-3xs: calc(var(--w3m-border-radius-master) * 2);
        --wui-border-radius-xxs: calc(var(--w3m-border-radius-master) * 3);
        --wui-border-radius-xs: calc(var(--w3m-border-radius-master) * 4);
        --wui-border-radius-s: calc(var(--w3m-border-radius-master) * 5);
        --wui-border-radius-m: calc(var(--w3m-border-radius-master) * 7);
        --wui-border-radius-l: calc(var(--w3m-border-radius-master) * 9);
        --wui-border-radius-3xl: calc(var(--w3m-border-radius-master) * 20);

        --wui-font-weight-regular: 500;
        --wui-font-weight-medium: 600;
        --wui-font-weight-bold: 700;

        --wui-letter-spacing-large: -0.8px;
        --wui-letter-spacing-paragraph: -0.64px;
        --wui-letter-spacing-small: -0.56px;
        --wui-letter-spacing-tiny: -0.48px;
        --wui-letter-spacing-micro: -0.2px;

        --wui-spacing-0: 0px;
        --wui-spacing-4xs: 2px;
        --wui-spacing-3xs: 4px;
        --wui-spacing-xxs: 6px;
        --wui-spacing-2xs: 7px;
        --wui-spacing-xs: 8px;
        --wui-spacing-1xs: 10px;
        --wui-spacing-s: 12px;
        --wui-spacing-m: 14px;
        --wui-spacing-l: 16px;
        --wui-spacing-2l: 18px;
        --wui-spacing-xl: 20px;
        --wui-spacing-xxl: 24px;
        --wui-spacing-3xl: 40px;

        --wui-icon-box-size-xs: 20px;
        --wui-icon-box-size-sm: 24px;
        --wui-icon-box-size-md: 32px;
        --wui-icon-box-size-lg: 40px;

        --wui-icon-size-inherit: inherit;
        --wui-icon-size-xxs: 10px;
        --wui-icon-size-xs: 12px;
        --wui-icon-size-sm: 14px;
        --wui-icon-size-md: 16px;
        --wui-icon-size-mdl: 18px;
        --wui-icon-size-lg: 20px;

        --wui-wallet-image-size-inherit: inherit;
        --wui-wallet-image-size-sm: 40px;
        --wui-wallet-image-size-md: 56px;
        --wui-wallet-image-size-lg: 80px;

        --wui-box-size-md: 100px;
        --wui-box-size-lg: 120px;

        --wui-ease-out-power-2: cubic-bezier(0, 0, 0.22, 1);
        --wui-ease-out-power-1: cubic-bezier(0, 0, 0.55, 1);

        --wui-ease-in-power-3: cubic-bezier(0.66, 0, 1, 1);
        --wui-ease-in-power-2: cubic-bezier(0.45, 0, 1, 1);
        --wui-ease-in-power-1: cubic-bezier(0.3, 0, 1, 1);

        --wui-ease-inout-power-1: cubic-bezier(0.45, 0, 0.55, 1);

        --wui-duration-lg: 200ms;
        --wui-duration-md: 125ms;
        --wui-duration-sm: 75ms;

        --wui-path-network: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --wui-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --wui-color-inherit: inherit;

        --wui-color-inverse-100: #fff;
        --wui-color-inverse-000: #000;

        --wui-cover: rgba(0, 0, 0, 0.3);

        --wui-color-blue-100: var(--wui-color-blue-base-100);
        --wui-color-blue-015: var(--wui-color-accent-base-015);

        --wui-color-accent-100: var(--wui-color-accent-base-100);
        --wui-color-accent-090: var(--wui-color-accent-base-090);
        --wui-color-accent-080: var(--wui-color-accent-base-080);

        --wui-accent-glass-090: var(--wui-accent-glass-base-090);
        --wui-accent-glass-080: var(--wui-accent-glass-base-080);
        --wui-accent-glass-020: var(--wui-accent-glass-base-020);
        --wui-accent-glass-015: var(--wui-accent-glass-base-015);
        --wui-accent-glass-010: var(--wui-accent-glass-base-010);
        --wui-accent-glass-005: var(--wui-accent-glass-base-005);
        --wui-accent-glass-002: var(--wui-accent-glass-base-002);

        --wui-color-fg-100: var(--wui-color-fg-base-100);
        --wui-color-fg-125: var(--wui-color-fg-base-125);
        --wui-color-fg-150: var(--wui-color-fg-base-150);
        --wui-color-fg-175: var(--wui-color-fg-base-175);
        --wui-color-fg-200: var(--wui-color-fg-base-200);
        --wui-color-fg-225: var(--wui-color-fg-base-225);
        --wui-color-fg-250: var(--wui-color-fg-base-250);
        --wui-color-fg-275: var(--wui-color-fg-base-275);
        --wui-color-fg-300: var(--wui-color-fg-base-300);

        --wui-color-bg-100: var(--wui-color-bg-base-100);
        --wui-color-bg-125: var(--wui-color-bg-base-125);
        --wui-color-bg-150: var(--wui-color-bg-base-150);
        --wui-color-bg-175: var(--wui-color-bg-base-175);
        --wui-color-bg-200: var(--wui-color-bg-base-200);
        --wui-color-bg-225: var(--wui-color-bg-base-225);
        --wui-color-bg-250: var(--wui-color-bg-base-250);
        --wui-color-bg-275: var(--wui-color-bg-base-275);
        --wui-color-bg-300: var(--wui-color-bg-base-300);

        --wui-color-success-100: var(--wui-color-success-base-100);
        --wui-color-error-100: var(--wui-color-error-base-100);

        --wui-icon-box-bg-error-100: var(--wui-icon-box-bg-error-base-100);
        --wui-icon-box-bg-blue-100: var(--wui-icon-box-bg-blue-base-100);
        --wui-icon-box-bg-success-100: var(--wui-icon-box-bg-success-base-100);
        --wui-icon-box-bg-inverse-100: var(--wui-icon-box-bg-inverse-base-100);

        --wui-all-wallets-bg-100: var(--wui-all-wallets-bg-base-100);

        --wui-avatar-border: var(--wui-avatar-border-base);

        --wui-box-shadow-blue: rgba(71, 161, 255, 0.16);
      }

      @supports (background: color-mix(in srgb, white 50%, black)) {
        :root {
          --wui-box-shadow-blue: color-mix(in srgb, var(--wui-color-accent-100) 16%, transparent);

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            var(--w3m-default)
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            var(--w3m-default)
          );

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );

          --wui-accent-glass-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-accent-glass-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-accent-glass-020: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 20%,
            transparent
          );
          --wui-accent-glass-015: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 15%,
            transparent
          );
          --wui-accent-glass-010: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 10%,
            transparent
          );
          --wui-accent-glass-005: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 5%,
            transparent
          );
          --wui-color-accent-002: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 2%,
            transparent
          );

          --wui-color-fg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-100)
          );
          --wui-color-fg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-125)
          );
          --wui-color-fg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-150)
          );
          --wui-color-fg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-175)
          );
          --wui-color-fg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-200)
          );
          --wui-color-fg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-225)
          );
          --wui-color-fg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-250)
          );
          --wui-color-fg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-275)
          );
          --wui-color-fg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-300)
          );

          --wui-color-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-100)
          );
          --wui-color-bg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-125)
          );
          --wui-color-bg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-150)
          );
          --wui-color-bg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-175)
          );
          --wui-color-bg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-200)
          );
          --wui-color-bg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-225)
          );
          --wui-color-bg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-250)
          );
          --wui-color-bg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-275)
          );
          --wui-color-bg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-300)
          );

          --wui-color-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-100)
          );
          --wui-color-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-100)
          );

          --wui-icon-box-bg-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-error-base-100)
          );
          --wui-icon-box-bg-accent-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-blue-base-100)
          );
          --wui-icon-box-bg-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-success-base-100)
          );
          --wui-icon-box-bg-inverse-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-inverse-base-100)
          );

          --wui-all-wallets-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-all-wallets-bg-base-100)
          );

          --wui-avatar-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-avatar-border-base)
          );
        }
      }
    `,light:i`
      :root {
        --w3m-color-mix: ${r(e?.["--w3m-color-mix"]||"#fff")};
        --w3m-accent: ${r(e?.["--w3m-accent"]||"#47a1ff")};
        --w3m-default: #fff;

        --wui-color-blue-base-100: #47a1ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #59aaff;
        --wui-color-accent-base-080: #6cb4ff;

        --wui-accent-glass-base-090: rgba(71, 161, 255, 0.9);
        --wui-accent-glass-base-080: rgba(71, 161, 255, 0.8);
        --wui-accent-glass-base-020: rgba(71, 161, 255, 0.2);
        --wui-accent-glass-base-015: rgba(71, 161, 255, 0.15);
        --wui-accent-glass-base-010: rgba(71, 161, 255, 0.1);
        --wui-accent-glass-base-005: rgba(71, 161, 255, 0.05);
        --wui-accent-glass-base-002: rgba(71, 161, 255, 0.02);

        --wui-color-fg-base-100: #e4e7e7;
        --wui-color-fg-base-125: #d0d5d5;
        --wui-color-fg-base-150: #a8b1b1;
        --wui-color-fg-base-175: #a8b0b0;
        --wui-color-fg-base-200: #949e9e;
        --wui-color-fg-base-225: #868f8f;
        --wui-color-fg-base-250: #788080;
        --wui-color-fg-base-275: #788181;
        --wui-color-fg-base-300: #6e7777;

        --wui-color-bg-base-100: #141414;
        --wui-color-bg-base-125: #191a1a;
        --wui-color-bg-base-150: #1e1f1f;
        --wui-color-bg-base-175: #222525;
        --wui-color-bg-base-200: #272a2a;
        --wui-color-bg-base-225: #2c3030;
        --wui-color-bg-base-250: #313535;
        --wui-color-bg-base-275: #363b3b;
        --wui-color-bg-base-300: #3b4040;

        --wui-color-success-base-100: #26d962;
        --wui-color-error-base-100: #f25a67;

        --wui-icon-box-bg-error-base-100: #3c2426;
        --wui-icon-box-bg-blue-base-100: #20303f;
        --wui-icon-box-bg-success-base-100: #1f3a28;
        --wui-icon-box-bg-inverse-base-100: #243240;

        --wui-all-wallets-bg-base-100: #222b35;

        --wui-avatar-border-base: #252525;

        --wui-gray-glass-001: rgba(255, 255, 255, 0.01);
        --wui-gray-glass-002: rgba(255, 255, 255, 0.02);
        --wui-gray-glass-005: rgba(255, 255, 255, 0.05);
        --wui-gray-glass-010: rgba(255, 255, 255, 0.1);
        --wui-gray-glass-015: rgba(255, 255, 255, 0.15);
        --wui-gray-glass-020: rgba(255, 255, 255, 0.2);
        --wui-gray-glass-025: rgba(255, 255, 255, 0.25);
        --wui-gray-glass-030: rgba(255, 255, 255, 0.3);
        --wui-gray-glass-060: rgba(255, 255, 255, 0.6);
        --wui-gray-glass-080: rgba(255, 255, 255, 0.8);
      }
    `,dark:i`
      :root {
        --w3m-color-mix: ${r(e?.["--w3m-color-mix"]||"#000")};
        --w3m-accent: ${r(e?.["--w3m-accent"]||"#3396ff")};
        --w3m-default: #000;

        --wui-color-blue-base-100: #3396ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #2d7dd2;
        --wui-color-accent-base-080: #2978cc;

        --wui-accent-glass-base-090: rgba(51, 150, 255, 0.9);
        --wui-accent-glass-base-080: rgba(51, 150, 255, 0.8);
        --wui-accent-glass-base-020: rgba(51, 150, 255, 0.2);
        --wui-accent-glass-base-015: rgba(51, 150, 255, 0.15);
        --wui-accent-glass-base-010: rgba(51, 150, 255, 0.1);
        --wui-accent-glass-base-005: rgba(51, 150, 255, 0.05);
        --wui-accent-glass-base-002: rgba(51, 150, 255, 0.02);

        --wui-color-fg-base-100: #141414;
        --wui-color-fg-base-125: #2d3131;
        --wui-color-fg-base-150: #474d4d;
        --wui-color-fg-base-175: #636d6d;
        --wui-color-fg-base-200: #798686;
        --wui-color-fg-base-225: #828f8f;
        --wui-color-fg-base-250: #8b9797;
        --wui-color-fg-base-275: #95a0a0;
        --wui-color-fg-base-300: #9ea9a9;

        --wui-color-bg-base-100: #ffffff;
        --wui-color-bg-base-125: #f5fafa;
        --wui-color-bg-base-150: #f3f8f8;
        --wui-color-bg-base-175: #eef4f4;
        --wui-color-bg-base-200: #eaf1f1;
        --wui-color-bg-base-225: #e5eded;
        --wui-color-bg-base-250: #e1e9e9;
        --wui-color-bg-base-275: #dce7e7;
        --wui-color-bg-base-300: #d8e3e3;

        --wui-color-success-base-100: #26b562;
        --wui-color-error-base-100: #f05142;

        --wui-icon-box-bg-error-base-100: #f4dfdd;
        --wui-icon-box-bg-blue-base-100: #d9ecfb;
        --wui-icon-box-bg-success-base-100: #daf0e4;
        --wui-icon-box-bg-inverse-base-100: #dcecfc;

        --wui-all-wallets-bg-base-100: #e8f1fa;

        --wui-avatar-border-base: #f3f4f4;

        --wui-gray-glass-001: rgba(0, 0, 0, 0.01);
        --wui-gray-glass-002: rgba(0, 0, 0, 0.02);
        --wui-gray-glass-005: rgba(0, 0, 0, 0.05);
        --wui-gray-glass-010: rgba(0, 0, 0, 0.1);
        --wui-gray-glass-015: rgba(0, 0, 0, 0.15);
        --wui-gray-glass-020: rgba(0, 0, 0, 0.2);
        --wui-gray-glass-025: rgba(0, 0, 0, 0.25);
        --wui-gray-glass-030: rgba(0, 0, 0, 0.3);
        --wui-gray-glass-060: rgba(0, 0, 0, 0.6);
        --wui-gray-glass-080: rgba(0, 0, 0, 0.8);
      }
    `}}eO?.({LitElement:lit_element_s}),(globalThis.litElementVersions??=[]).push("4.0.0");let eI=i`
  *,
  *::after,
  *::before,
  :host {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    font-family: var(--wui-font-family);
    backface-visibility: hidden;
  }
`,eT=i`
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    outline: none;
    border: 1px solid transparent;
    column-gap: var(--wui-spacing-3xs);
    background-color: transparent;
    text-decoration: none;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-005);
    }

    button:active:enabled {
      transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
      background-color: var(--wui-gray-glass-010);
    }

    button[data-variant='fill']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }
  }

  button:disabled {
    cursor: not-allowed;
    background-color: var(--wui-gray-glass-005);
  }

  button[data-variant='shade']:disabled,
  button[data-variant='accent']:disabled {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-gray-glass-015);
    filter: grayscale(1);
  }

  button:disabled > wui-wallet-image,
  button:disabled > wui-all-wallets-image,
  button:disabled > wui-network-image,
  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-transaction-visual,
  button:disabled > wui-logo {
    filter: grayscale(1);
  }

  button:focus-visible,
  a:focus-visible {
    border: 1px solid var(--wui-color-accent-100);
    background-color: var(--wui-gray-glass-005);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  button[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  button[data-variant='fill']:disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
  }

  button[data-variant='fill']:disabled > wui-icon {
    color: var(--wui-gray-glass-015);
  }

  button[data-variant='shade'] {
    color: var(--wui-color-fg-200);
  }

  button[data-variant='accent'] {
    color: var(--wui-color-accent-100);
  }

  button[data-variant='fullWidth'] {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    height: 56px;
    border: none;
    background-color: var(--wui-gray-glass-002);
    color: var(--wui-color-fg-200);
    gap: var(--wui-spacing-xs);
  }

  button:active:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  button[data-variant='fill']:active:enabled {
    background-color: var(--wui-color-accent-080);
    border: 1px solid var(--wui-gray-glass-010);
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`,eR=i`
  .wui-color-inherit {
    color: var(--wui-color-inherit);
  }

  .wui-color-accent-100 {
    color: var(--wui-color-accent-100);
  }

  .wui-color-error-100 {
    color: var(--wui-color-error-100);
  }

  .wui-color-success-100 {
    color: var(--wui-color-success-100);
  }

  .wui-color-inverse-100 {
    color: var(--wui-color-inverse-100);
  }

  .wui-color-inverse-000 {
    color: var(--wui-color-inverse-000);
  }

  .wui-color-fg-100 {
    color: var(--wui-color-fg-100);
  }

  .wui-color-fg-200 {
    color: var(--wui-color-fg-200);
  }

  .wui-color-fg-300 {
    color: var(--wui-color-fg-300);
  }

  .wui-bg-color-inherit {
    background-color: var(--wui-color-inherit);
  }

  .wui-bg-color-blue-100 {
    background-color: var(--wui-color-accent-100);
  }

  .wui-bg-color-error-100 {
    background-color: var(--wui-color-error-100);
  }

  .wui-bg-color-success-100 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-inverse-100 {
    background-color: var(--wui-color-inverse-100);
  }

  .wui-bg-color-inverse-000 {
    background-color: var(--wui-color-inverse-000);
  }

  .wui-bg-color-fg-100 {
    background-color: var(--wui-color-fg-100);
  }

  .wui-bg-color-fg-200 {
    background-color: var(--wui-color-fg-200);
  }

  .wui-bg-color-fg-300 {
    background-color: var(--wui-color-fg-300);
  }
`;function customElement(e){return function(t){return"function"==typeof t?(customElements.get(e)||customElements.define(e,t),t):function(e,t){let{kind:a,elements:p}=t;return{kind:a,elements:p,finisher(t){customElements.get(e)||customElements.define(e,t)}}}(e,t)}}var eB=i`
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-color-bg-125);
    overflow: hidden;
  }
`;let eN=class extends lit_element_s{render(){return eE`<slot></slot>`}};eN.styles=[eI,eB],eN=function(e,t,a,p){var g,m=arguments.length,v=m<3?t:null===p?p=Object.getOwnPropertyDescriptor(t,a):p;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)v=Reflect.decorate(e,t,a,p);else for(var _=e.length-1;_>=0;_--)(g=e[_])&&(v=(m<3?g(v):m>3?g(t,a,v):g(t,a))||v);return m>3&&v&&Object.defineProperty(t,a,v),v}([customElement("wui-card")],eN);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let eU={attribute:!0,type:String,converter:eo,reflect:!1,hasChanged:f},property_r=(e=eU,t,a)=>{let{kind:p,metadata:g}=a,m=globalThis.litPropertyMetadata.get(g);if(void 0===m&&globalThis.litPropertyMetadata.set(g,m=new Map),m.set(a.name,e),"accessor"===p){let{name:p}=a;return{set(a){let g=t.get.call(this);t.set.call(this,a),this.requestUpdate(p,g,e)},init(t){return void 0!==t&&this.C(p,void 0,e),t}}}if("setter"===p){let{name:p}=a;return function(a){let g=this[p];t.call(this,a),this.requestUpdate(p,g,e)}}throw Error("Unsupported decorator location: "+p)};function property_n(e){return(t,a)=>"object"==typeof a?property_r(e,t,a):((e,t,a)=>{let p=t.hasOwnProperty(a);return t.constructor.createProperty(a,p?{...e,wrapped:!0}:e),p?Object.getOwnPropertyDescriptor(t,a):void 0})(e,t,a)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function state_r(e){return property_n({...e,state:!0,attribute:!1})}var eM=i`
  :host {
    display: flex;
    aspect-ratio: 1 / 1;
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }
`;let ej=ek`<svg fill="none" viewBox="0 0 24 24">
  <path
    style="fill: var(--wui-color-accent-100);"
    d="M10.2 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM10.2 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0Z"
  />
</svg>`,eL=ek`
<svg width="36" height="36">
  <path
    d="M28.724 0H7.271A7.269 7.269 0 0 0 0 7.272v21.46A7.268 7.268 0 0 0 7.271 36H28.73A7.272 7.272 0 0 0 36 28.728V7.272A7.275 7.275 0 0 0 28.724 0Z"
    fill="url(#a)"
  />
  <path
    d="m17.845 8.271.729-1.26a1.64 1.64 0 1 1 2.843 1.638l-7.023 12.159h5.08c1.646 0 2.569 1.935 1.853 3.276H6.434a1.632 1.632 0 0 1-1.638-1.638c0-.909.73-1.638 1.638-1.638h4.176l5.345-9.265-1.67-2.898a1.642 1.642 0 0 1 2.844-1.638l.716 1.264Zm-6.317 17.5-1.575 2.732a1.64 1.64 0 1 1-2.844-1.638l1.17-2.025c1.323-.41 2.398-.095 3.249.931Zm13.56-4.954h4.262c.909 0 1.638.729 1.638 1.638 0 .909-.73 1.638-1.638 1.638h-2.367l1.597 2.772c.45.788.185 1.782-.602 2.241a1.642 1.642 0 0 1-2.241-.603c-2.69-4.666-4.711-8.159-6.052-10.485-1.372-2.367-.391-4.743.576-5.549 1.075 1.846 2.682 4.631 4.828 8.348Z"
    fill="#fff"
  />
  <defs>
    <linearGradient id="a" x1="18" y1="0" x2="18" y2="36" gradientUnits="userSpaceOnUse">
      <stop stop-color="#18BFFB" />
      <stop offset="1" stop-color="#2072F3" />
    </linearGradient>
  </defs>
</svg>`,eF=ek`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#000" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M28.77 23.3c-.69 1.99-2.75 5.52-4.87 5.56-1.4.03-1.86-.84-3.46-.84-1.61 0-2.12.81-3.45.86-2.25.1-5.72-5.1-5.72-9.62 0-4.15 2.9-6.2 5.42-6.25 1.36-.02 2.64.92 3.47.92.83 0 2.38-1.13 4.02-.97.68.03 2.6.28 3.84 2.08-3.27 2.14-2.76 6.61.75 8.25ZM24.2 7.88c-2.47.1-4.49 2.69-4.2 4.84 2.28.17 4.47-2.39 4.2-4.84Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,ez=ek`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 1.99a1 1 0 0 1 1 1v7.58l2.46-2.46a1 1 0 0 1 1.41 1.42L7.7 13.69a1 1 0 0 1-1.41 0L2.12 9.53A1 1 0 0 1 3.54 8.1L6 10.57V3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,eW=ek`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13 7.99a1 1 0 0 1-1 1H4.4l2.46 2.46a1 1 0 1 1-1.41 1.41L1.29 8.7a1 1 0 0 1 0-1.41L5.46 3.1a1 1 0 0 1 1.41 1.42L4.41 6.99H12a1 1 0 0 1 1 1Z"
    clip-rule="evenodd"
  />
</svg>`,eH=ek`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1 7.99a1 1 0 0 1 1-1h7.58L7.12 4.53A1 1 0 1 1 8.54 3.1l4.16 4.17a1 1 0 0 1 0 1.41l-4.16 4.17a1 1 0 1 1-1.42-1.41l2.46-2.46H2a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,eq=ek`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 13.99a1 1 0 0 1-1-1V5.4L3.54 7.86a1 1 0 0 1-1.42-1.41L6.3 2.28a1 1 0 0 1 1.41 0l4.17 4.17a1 1 0 1 1-1.41 1.41L8 5.4v7.59a1 1 0 0 1-1 1Z"
    clip-rule="evenodd"
  />
</svg>`,eG=ek`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4 6.4a1 1 0 0 1-.46.89 6.98 6.98 0 0 0 .38 6.18A7 7 0 0 0 16.46 7.3a1 1 0 0 1-.47-.92 7 7 0 0 0-12 .03Zm-2.02-.5a9 9 0 1 1 16.03 8.2A9 9 0 0 1 1.98 5.9Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.03 8.63c-1.46-.3-2.72-.75-3.6-1.35l-.02-.01-.14-.11a1 1 0 0 1 1.2-1.6l.1.08c.6.4 1.52.74 2.69 1 .16-.99.39-1.88.67-2.65.3-.79.68-1.5 1.15-2.02A2.58 2.58 0 0 1 9.99 1c.8 0 1.45.44 1.92.97.47.52.84 1.23 1.14 2.02.29.77.52 1.66.68 2.64a8 8 0 0 0 2.7-1l.26-.18h.48a1 1 0 0 1 .12 2c-.86.51-2.01.91-3.34 1.18a22.24 22.24 0 0 1-.03 3.19c1.45.29 2.7.73 3.58 1.31a1 1 0 0 1-1.1 1.68c-.6-.4-1.56-.76-2.75-1-.15.8-.36 1.55-.6 2.2-.3.79-.67 1.5-1.14 2.02-.47.53-1.12.97-1.92.97-.8 0-1.45-.44-1.91-.97a6.51 6.51 0 0 1-1.15-2.02c-.24-.65-.44-1.4-.6-2.2-1.18.24-2.13.6-2.73.99a1 1 0 1 1-1.1-1.67c.88-.58 2.12-1.03 3.57-1.31a22.03 22.03 0 0 1-.04-3.2Zm2.2-1.7c.15-.86.34-1.61.58-2.24.24-.65.51-1.12.76-1.4.25-.28.4-.29.42-.29.03 0 .17.01.42.3.25.27.52.74.77 1.4.23.62.43 1.37.57 2.22a19.96 19.96 0 0 1-3.52 0Zm-.18 4.6a20.1 20.1 0 0 1-.03-2.62 21.95 21.95 0 0 0 3.94 0 20.4 20.4 0 0 1-.03 2.63 21.97 21.97 0 0 0-3.88 0Zm.27 2c.13.66.3 1.26.49 1.78.24.65.51 1.12.76 1.4.25.28.4.29.42.29.03 0 .17-.01.42-.3.25-.27.52-.74.77-1.4.19-.5.36-1.1.49-1.78a20.03 20.03 0 0 0-3.35 0Z"
    clip-rule="evenodd"
  />
</svg>`,eV=ek`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M12.04 2.65c.47.3.6.91.3 1.38l-5.78 9a1 1 0 0 1-1.61.1L1.73 9.27A1 1 0 1 1 3.27 8L5.6 10.8l5.05-7.85a1 1 0 0 1 1.38-.3Z"
    clip-rule="evenodd"
  />
</svg>`,eK=ek`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1.46 4.96a1 1 0 0 1 1.41 0L8 10.09l5.13-5.13a1 1 0 1 1 1.41 1.41l-5.83 5.84a1 1 0 0 1-1.42 0L1.46 6.37a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,eZ=ek`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M11.04 1.46a1 1 0 0 1 0 1.41L5.91 8l5.13 5.13a1 1 0 1 1-1.41 1.41L3.79 8.71a1 1 0 0 1 0-1.42l5.84-5.83a1 1 0 0 1 1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,eQ=ek`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.96 14.54a1 1 0 0 1 0-1.41L10.09 8 4.96 2.87a1 1 0 0 1 1.41-1.41l5.84 5.83a1 1 0 0 1 0 1.42l-5.84 5.83a1 1 0 0 1-1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,eX=ek`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.54 11.04a1 1 0 0 1-1.41 0L8 5.92l-5.13 5.12a1 1 0 1 1-1.41-1.41l5.83-5.84a1 1 0 0 1 1.42 0l5.83 5.84a1 1 0 0 1 0 1.41Z"
    clip-rule="evenodd"
  />
</svg>`,eY=ek`<svg width="36" height="36" fill="none">
  <path
    fill="#fff"
    fill-opacity=".05"
    d="M0 14.94c0-5.55 0-8.326 1.182-10.4a9 9 0 0 1 3.359-3.358C6.614 0 9.389 0 14.94 0h6.12c5.55 0 8.326 0 10.4 1.182a9 9 0 0 1 3.358 3.359C36 6.614 36 9.389 36 14.94v6.12c0 5.55 0 8.326-1.182 10.4a9 9 0 0 1-3.359 3.358C29.386 36 26.611 36 21.06 36h-6.12c-5.55 0-8.326 0-10.4-1.182a9 9 0 0 1-3.358-3.359C0 29.386 0 26.611 0 21.06v-6.12Z"
  />
  <path
    stroke="#fff"
    stroke-opacity=".05"
    d="M14.94.5h6.12c2.785 0 4.84 0 6.46.146 1.612.144 2.743.43 3.691.97a8.5 8.5 0 0 1 3.172 3.173c.541.948.826 2.08.971 3.692.145 1.62.146 3.675.146 6.459v6.12c0 2.785 0 4.84-.146 6.46-.145 1.612-.43 2.743-.97 3.691a8.5 8.5 0 0 1-3.173 3.172c-.948.541-2.08.826-3.692.971-1.62.145-3.674.146-6.459.146h-6.12c-2.784 0-4.84 0-6.46-.146-1.612-.145-2.743-.43-3.691-.97a8.5 8.5 0 0 1-3.172-3.173c-.541-.948-.827-2.08-.971-3.692C.5 25.9.5 23.845.5 21.06v-6.12c0-2.784 0-4.84.146-6.46.144-1.612.43-2.743.97-3.691A8.5 8.5 0 0 1 4.79 1.617C5.737 1.076 6.869.79 8.48.646 10.1.5 12.156.5 14.94.5Z"
  />
  <path
    fill="url(#a)"
    d="M17.998 10.8h12.469a14.397 14.397 0 0 0-24.938.001l6.234 10.798.006-.001a7.19 7.19 0 0 1 6.23-10.799Z"
  />
  <path
    fill="url(#b)"
    d="m24.237 21.598-6.234 10.798A14.397 14.397 0 0 0 30.47 10.798H18.002l-.002.006a7.191 7.191 0 0 1 6.237 10.794Z"
  />
  <path
    fill="url(#c)"
    d="M11.765 21.601 5.531 10.803A14.396 14.396 0 0 0 18.001 32.4l6.235-10.798-.004-.004a7.19 7.19 0 0 1-12.466.004Z"
  />
  <path fill="#fff" d="M18 25.2a7.2 7.2 0 1 0 0-14.4 7.2 7.2 0 0 0 0 14.4Z" />
  <path fill="#1A73E8" d="M18 23.7a5.7 5.7 0 1 0 0-11.4 5.7 5.7 0 0 0 0 11.4Z" />
  <defs>
    <linearGradient
      id="a"
      x1="6.294"
      x2="41.1"
      y1="5.995"
      y2="5.995"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#D93025" />
      <stop offset="1" stop-color="#EA4335" />
    </linearGradient>
    <linearGradient
      id="b"
      x1="20.953"
      x2="37.194"
      y1="32.143"
      y2="2.701"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#FCC934" />
      <stop offset="1" stop-color="#FBBC04" />
    </linearGradient>
    <linearGradient
      id="c"
      x1="25.873"
      x2="9.632"
      y1="31.2"
      y2="1.759"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#1E8E3E" />
      <stop offset="1" stop-color="#34A853" />
    </linearGradient>
  </defs>
</svg>`,eJ=ek`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 2.99a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-7 5a7 7 0 1 1 14 0 7 7 0 0 1-14 0Zm7-4a1 1 0 0 1 1 1v2.58l1.85 1.85a1 1 0 0 1-1.41 1.42L6.29 8.69A1 1 0 0 1 6 8v-3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,e0=ek`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M2.54 2.54a1 1 0 0 1 1.42 0L8 6.6l4.04-4.05a1 1 0 1 1 1.42 1.42L9.4 8l4.05 4.04a1 1 0 0 1-1.42 1.42L8 9.4l-4.04 4.05a1 1 0 0 1-1.42-1.42L6.6 8 2.54 3.96a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,e1=ek`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 3a7 7 0 0 0-6.85 8.44l8.29-8.3C10.97 3.06 10.49 3 10 3Zm3.49.93-9.56 9.56c.32.55.71 1.06 1.16 1.5L15 5.1a7.03 7.03 0 0 0-1.5-1.16Zm2.7 2.8-9.46 9.46a7 7 0 0 0 9.46-9.46ZM1.99 5.9A9 9 0 1 1 18 14.09 9 9 0 0 1 1.98 5.91Z"
    clip-rule="evenodd"
  />
</svg>`,e2=ek`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm10.66-2.65a1 1 0 0 1 .23 1.06L9.83 9.24a1 1 0 0 1-.59.58l-2.83 1.06A1 1 0 0 1 5.13 9.6l1.06-2.82a1 1 0 0 1 .58-.59L9.6 5.12a1 1 0 0 1 1.06.23ZM7.9 7.89l-.13.35.35-.13.12-.35-.34.13Z"
    clip-rule="evenodd"
  />
</svg>`,e3=ek`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.5 0h1.67c.68 0 1.26 0 1.73.04.5.05.97.14 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73V6.5c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.43.03-.95.03-1.57.03 0 .62 0 1.14-.04 1.57-.04.5-.14.97-.4 1.42-.29.52-.72.95-1.24 1.24-.44.26-.92.35-1.41.4-.48.04-1.05.04-1.74.04H4.83c-.68 0-1.26 0-1.73-.04-.5-.05-.97-.14-1.42-.4-.52-.3-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.42A20.9 20.9 0 0 1 0 11.17V9.5c0-.69 0-1.26.04-1.74.05-.5.14-.97.4-1.41.3-.52.72-.95 1.24-1.25.45-.25.92-.35 1.42-.4.43-.03.95-.03 1.57-.03 0-.62 0-1.14.04-1.57.04-.5.14-.97.4-1.42.29-.52.72-.95 1.24-1.24.44-.26.92-.35 1.41-.4A20.9 20.9 0 0 1 9.5 0ZM4.67 6.67c-.63 0-1.06 0-1.4.03-.35.03-.5.09-.6.14-.2.12-.38.3-.5.5-.05.1-.1.24-.14.6C2 8.32 2 8.8 2 9.54v1.59c0 .73 0 1.22.03 1.6.04.35.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h1.58c.74 0 1.22 0 1.6-.03.36-.04.5-.1.6-.15.2-.11.38-.29.5-.5.05-.09.1-.24.14-.6.03-.33.03-.76.03-1.39-.6 0-1.13 0-1.57-.04-.5-.04-.97-.14-1.41-.4-.52-.29-.95-.72-1.25-1.24a3.39 3.39 0 0 1-.4-1.41c-.03-.44-.03-.96-.03-1.57Zm3.27-4.64c-.36.04-.5.1-.6.15-.2.11-.38.29-.5.5-.05.09-.1.24-.14.6-.03.37-.03.86-.03 1.6v1.58c0 .74 0 1.22.03 1.6.03.36.09.5.14.6.12.2.3.38.5.5.1.05.24.1.6.14.38.03.86.03 1.6.03h1.59c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6V4.87c0-.73 0-1.22-.03-1.6a1.46 1.46 0 0 0-.15-.6c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.14-.37-.03-.86-.03-1.6-.03H9.55c-.74 0-1.22 0-1.6.03Z"
    clip-rule="evenodd"
  />
</svg>`,e5=ek` <svg fill="none" viewBox="0 0 13 4">
  <path fill="currentColor" d="M.5 0h12L8.9 3.13a3.76 3.76 0 0 1-4.8 0L.5 0Z" />
</svg>`,e6=ek`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13.66 2H6.34c-1.07 0-1.96 0-2.68.08-.74.08-1.42.25-2.01.68a4 4 0 0 0-.89.89c-.43.6-.6 1.27-.68 2.01C0 6.38 0 7.26 0 8.34v.89c0 1.07 0 1.96.08 2.68.08.74.25 1.42.68 2.01a4 4 0 0 0 .89.89c.6.43 1.27.6 2.01.68a27 27 0 0 0 2.68.08h7.32a27 27 0 0 0 2.68-.08 4.03 4.03 0 0 0 2.01-.68 4 4 0 0 0 .89-.89c.43-.6.6-1.27.68-2.01.08-.72.08-1.6.08-2.68v-.89c0-1.07 0-1.96-.08-2.68a4.04 4.04 0 0 0-.68-2.01 4 4 0 0 0-.89-.89c-.6-.43-1.27-.6-2.01-.68C15.62 2 14.74 2 13.66 2ZM2.82 4.38c.2-.14.48-.25 1.06-.31C4.48 4 5.25 4 6.4 4h7.2c1.15 0 1.93 0 2.52.07.58.06.86.17 1.06.31a2 2 0 0 1 .44.44c.14.2.25.48.31 1.06.07.6.07 1.37.07 2.52v.77c0 1.15 0 1.93-.07 2.52-.06.58-.17.86-.31 1.06a2 2 0 0 1-.44.44c-.2.14-.48.25-1.06.32-.6.06-1.37.06-2.52.06H6.4c-1.15 0-1.93 0-2.52-.06-.58-.07-.86-.18-1.06-.32a2 2 0 0 1-.44-.44c-.14-.2-.25-.48-.31-1.06C2 11.1 2 10.32 2 9.17V8.4c0-1.15 0-1.93.07-2.52.06-.58.17-.86.31-1.06a2 2 0 0 1 .44-.44Z"
    clip-rule="evenodd"
  />
  <path fill="currentColor" d="M6.14 17.57a1 1 0 1 0 0 2h7.72a1 1 0 1 0 0-2H6.14Z" />
</svg>`,e4=ek`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.07 1h.57a1 1 0 0 1 0 2h-.52c-.98 0-1.64 0-2.14.06-.48.05-.7.14-.84.24-.13.1-.25.22-.34.35-.1.14-.2.35-.25.83-.05.5-.05 1.16-.05 2.15v2.74c0 .99 0 1.65.05 2.15.05.48.14.7.25.83.1.14.2.25.34.35.14.1.36.2.84.25.5.05 1.16.05 2.14.05h.52a1 1 0 0 1 0 2h-.57c-.92 0-1.69 0-2.3-.07a3.6 3.6 0 0 1-1.8-.61c-.3-.22-.57-.49-.8-.8a3.6 3.6 0 0 1-.6-1.79C.5 11.11.5 10.35.5 9.43V6.58c0-.92 0-1.7.06-2.31a3.6 3.6 0 0 1 .62-1.8c.22-.3.48-.57.79-.79a3.6 3.6 0 0 1 1.8-.61C4.37 1 5.14 1 6.06 1ZM9.5 3a1 1 0 0 1 1.42 0l4.28 4.3a1 1 0 0 1 0 1.4L10.93 13a1 1 0 0 1-1.42-1.42L12.1 9H6.8a1 1 0 1 1 0-2h5.3L9.51 4.42a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,e8=ek`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,e7=ek`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M4.25 7a.63.63 0 0 0-.63.63v3.97c0 .28-.2.51-.47.54l-.75.07a.93.93 0 0 1-.9-.47A7.51 7.51 0 0 1 5.54.92a7.5 7.5 0 0 1 9.54 4.62c.12.35.06.72-.16 1-.74.97-1.68 1.78-2.6 2.44V4.44a.64.64 0 0 0-.63-.64h-1.06c-.35 0-.63.3-.63.64v5.5c0 .23-.12.42-.32.5l-.52.23V6.05c0-.36-.3-.64-.64-.64H7.45c-.35 0-.64.3-.64.64v4.97c0 .25-.17.46-.4.52a5.8 5.8 0 0 0-.45.11v-4c0-.36-.3-.65-.64-.65H4.25ZM14.07 12.4A7.49 7.49 0 0 1 3.6 14.08c4.09-.58 9.14-2.5 11.87-6.6v.03a7.56 7.56 0 0 1-1.41 4.91Z"
  />
</svg>`,e9=ek`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.71 2.99a.57.57 0 0 0-.57.57 1 1 0 0 1-1 1c-.58 0-.96 0-1.24.03-.27.03-.37.07-.42.1a.97.97 0 0 0-.36.35c-.04.08-.09.21-.11.67a2.57 2.57 0 0 1 0 5.13c.02.45.07.6.11.66.09.15.21.28.36.36.07.04.21.1.67.12a2.57 2.57 0 0 1 5.12 0c.46-.03.6-.08.67-.12a.97.97 0 0 0 .36-.36c.03-.04.07-.14.1-.41.02-.29.03-.66.03-1.24a1 1 0 0 1 1-1 .57.57 0 0 0 0-1.15 1 1 0 0 1-1-1c0-.58 0-.95-.03-1.24a1.04 1.04 0 0 0-.1-.42.97.97 0 0 0-.36-.36 1.04 1.04 0 0 0-.42-.1c-.28-.02-.65-.02-1.24-.02a1 1 0 0 1-1-1 .57.57 0 0 0-.57-.57ZM5.15 13.98a1 1 0 0 0 .99-1v-.78a.57.57 0 0 1 1.14 0v.78a1 1 0 0 0 .99 1H8.36a66.26 66.26 0 0 0 .73 0 3.78 3.78 0 0 0 1.84-.38c.46-.26.85-.64 1.1-1.1.23-.4.32-.8.36-1.22.02-.2.03-.4.03-.63a2.57 2.57 0 0 0 0-4.75c0-.23-.01-.44-.03-.63a2.96 2.96 0 0 0-.35-1.22 2.97 2.97 0 0 0-1.1-1.1c-.4-.22-.8-.31-1.22-.35a8.7 8.7 0 0 0-.64-.04 2.57 2.57 0 0 0-4.74 0c-.23 0-.44.02-.63.04-.42.04-.83.13-1.22.35-.46.26-.84.64-1.1 1.1-.33.57-.37 1.2-.39 1.84a21.39 21.39 0 0 0 0 .72v.1a1 1 0 0 0 1 .99h.78a.57.57 0 0 1 0 1.15h-.77a1 1 0 0 0-1 .98v.1a63.87 63.87 0 0 0 0 .73c0 .64.05 1.27.38 1.83.26.47.64.85 1.1 1.11.56.32 1.2.37 1.84.38a20.93 20.93 0 0 0 .72 0h.1Z"
    clip-rule="evenodd"
  />
</svg>`,tt=ek`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.74 3.99a1 1 0 0 1 1-1H11a1 1 0 0 1 1 1v6.26a1 1 0 0 1-2 0V6.4l-6.3 6.3a1 1 0 0 1-1.4-1.42l6.29-6.3H4.74a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,tr=ek`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1877F2" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M26 12.38h-2.89c-.92 0-1.61.38-1.61 1.34v1.66H26l-.36 4.5H21.5v12H17v-12h-3v-4.5h3V12.5c0-3.03 1.6-4.62 5.2-4.62H26v4.5Z"
        />
      </g>
    </g>
    <path
      fill="#1877F2"
      d="M40 20a20 20 0 1 0-23.13 19.76V25.78H11.8V20h5.07v-4.4c0-5.02 3-7.79 7.56-7.79 2.19 0 4.48.4 4.48.4v4.91h-2.53c-2.48 0-3.25 1.55-3.25 3.13V20h5.54l-.88 5.78h-4.66v13.98A20 20 0 0 0 40 20Z"
    />
    <path
      fill="#fff"
      d="m27.79 25.78.88-5.78h-5.55v-3.75c0-1.58.78-3.13 3.26-3.13h2.53V8.2s-2.3-.39-4.48-.39c-4.57 0-7.55 2.77-7.55 7.78V20H11.8v5.78h5.07v13.98a20.15 20.15 0 0 0 6.25 0V25.78h4.67Z"
    />
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,ti=ek`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 3a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Zm2.63 5.25a1 1 0 0 1 1-1h8.75a1 1 0 1 1 0 2H3.63a1 1 0 0 1-1-1Zm2.62 5.25a1 1 0 0 1 1-1h3.5a1 1 0 0 1 0 2h-3.5a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,tn=ek`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1B1F23" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M8 19.89a12 12 0 1 1 15.8 11.38c-.6.12-.8-.26-.8-.57v-3.3c0-1.12-.4-1.85-.82-2.22 2.67-.3 5.48-1.31 5.48-5.92 0-1.31-.47-2.38-1.24-3.22.13-.3.54-1.52-.12-3.18 0 0-1-.32-3.3 1.23a11.54 11.54 0 0 0-6 0c-2.3-1.55-3.3-1.23-3.3-1.23a4.32 4.32 0 0 0-.12 3.18 4.64 4.64 0 0 0-1.24 3.22c0 4.6 2.8 5.63 5.47 5.93-.34.3-.65.83-.76 1.6-.69.31-2.42.84-3.5-1 0 0-.63-1.15-1.83-1.23 0 0-1.18-.02-.09.73 0 0 .8.37 1.34 1.76 0 0 .7 2.14 4.03 1.41v2.24c0 .31-.2.68-.8.57A12 12 0 0 1 8 19.9Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,to=ek`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#fff" fill-opacity=".05" />
      <g clip-path="url(#c)">
        <path
          fill="#4285F4"
          d="M20 17.7v4.65h6.46a5.53 5.53 0 0 1-2.41 3.61l3.9 3.02c2.26-2.09 3.57-5.17 3.57-8.82 0-.85-.08-1.67-.22-2.46H20Z"
        />
        <path
          fill="#34A853"
          d="m13.27 22.17-.87.67-3.11 2.42A12 12 0 0 0 20 31.9c3.24 0 5.96-1.07 7.94-2.9l-3.9-3.03A7.15 7.15 0 0 1 20 27.12a7.16 7.16 0 0 1-6.72-4.94v-.01Z"
        />
        <path
          fill="#FBBC05"
          d="M9.29 14.5a11.85 11.85 0 0 0 0 10.76l3.99-3.1a7.19 7.19 0 0 1 0-4.55l-4-3.1Z"
        />
        <path
          fill="#EA4335"
          d="M20 12.66c1.77 0 3.34.61 4.6 1.8l3.43-3.44A11.51 11.51 0 0 0 20 7.89c-4.7 0-8.74 2.69-10.71 6.62l3.99 3.1A7.16 7.16 0 0 1 20 12.66Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,ta=ek`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M8.51 5.66a.83.83 0 0 0-.57-.2.83.83 0 0 0-.52.28.8.8 0 0 0-.25.52 1 1 0 0 1-2 0c0-.75.34-1.43.81-1.91a2.75 2.75 0 0 1 4.78 1.92c0 1.24-.8 1.86-1.25 2.2l-.04.03c-.47.36-.5.43-.5.65a1 1 0 1 1-2 0c0-1.25.8-1.86 1.24-2.2l.04-.04c.47-.36.5-.43.5-.65 0-.3-.1-.49-.24-.6ZM9.12 11.87a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z"
    clip-rule="evenodd"
  />
</svg>`,ts=ek`<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    d="M6 10.49a1 1 0 1 0 2 0v-2a1 1 0 0 0-2 0v2ZM7 4.49a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 14.99a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5-7a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
    clip-rule="evenodd"
  />
</svg>`,tl=ek`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.83 1.34h6.34c.68 0 1.26 0 1.73.04.5.05.97.15 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73v3.71c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.47.03-1.05.03-1.73.03H4.83c-.68 0-1.26 0-1.73-.04-.5-.04-.97-.14-1.42-.4-.52-.29-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.41A20.9 20.9 0 0 1 0 9.88v-3.7c0-.7 0-1.27.04-1.74.05-.5.14-.97.4-1.42.3-.52.72-.95 1.24-1.24.45-.25.92-.35 1.42-.4.47-.04 1.05-.04 1.73-.04ZM3.28 3.38c-.36.03-.51.08-.6.14-.21.11-.39.29-.5.5a.8.8 0 0 0-.08.19l5.16 3.44c.45.3 1.03.3 1.48 0L13.9 4.2a.79.79 0 0 0-.08-.2c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.13-.37-.04-.86-.04-1.6-.04H4.88c-.73 0-1.22 0-1.6.04ZM14 6.54 9.85 9.31a3.33 3.33 0 0 1-3.7 0L2 6.54v3.3c0 .74 0 1.22.03 1.6.04.36.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h6.25c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6v-3.3Z"
    clip-rule="evenodd"
  />
</svg>`,tc=ek`<svg fill="none" viewBox="0 0 20 20">
  <path fill="currentColor" d="M10.81 5.81a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3 4.75A4.75 4.75 0 0 1 7.75 0h4.5A4.75 4.75 0 0 1 17 4.75v10.5A4.75 4.75 0 0 1 12.25 20h-4.5A4.75 4.75 0 0 1 3 15.25V4.75ZM7.75 2A2.75 2.75 0 0 0 5 4.75v10.5A2.75 2.75 0 0 0 7.75 18h4.5A2.75 2.75 0 0 0 15 15.25V4.75A2.75 2.75 0 0 0 12.25 2h-4.5Z"
    clip-rule="evenodd"
  />
</svg>`,tu=ek`<svg fill="none" viewBox="0 0 22 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M16.32 13.62a3.14 3.14 0 1 1-.99 1.72l-1.6-.93a3.83 3.83 0 0 1-3.71 1 3.66 3.66 0 0 1-1.74-1l-1.6.94a3.14 3.14 0 1 1-1-1.73l1.6-.94a3.7 3.7 0 0 1 0-2 3.81 3.81 0 0 1 1.8-2.33c.29-.17.6-.3.92-.38V6.1a3.14 3.14 0 1 1 2 0l-.01.02v1.85H12a3.82 3.82 0 0 1 2.33 1.8 3.7 3.7 0 0 1 .39 2.91l1.6.93ZM2.6 16.54a1.14 1.14 0 0 0 1.98-1.14 1.14 1.14 0 0 0-1.98 1.14ZM11 2.01a1.14 1.14 0 1 0 0 2.28 1.14 1.14 0 0 0 0-2.28Zm1.68 10.45c.08-.19.14-.38.16-.58v-.05l.02-.13v-.13a1.92 1.92 0 0 0-.24-.8l-.11-.15a1.89 1.89 0 0 0-.74-.6 1.86 1.86 0 0 0-.77-.17h-.19a1.97 1.97 0 0 0-.89.34 1.98 1.98 0 0 0-.61.74 1.99 1.99 0 0 0-.16.9v.05a1.87 1.87 0 0 0 .24.74l.1.15c.12.16.26.3.42.42l.16.1.13.07.04.02a1.84 1.84 0 0 0 .76.17h.17a2 2 0 0 0 .91-.35 1.78 1.78 0 0 0 .52-.58l.03-.05a.84.84 0 0 0 .05-.11Zm5.15 4.5a1.14 1.14 0 0 0 1.14-1.97 1.13 1.13 0 0 0-1.55.41c-.32.55-.13 1.25.41 1.56Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.63 9.43a1.5 1.5 0 1 0 1.5-2.6 1.5 1.5 0 0 0-1.5 2.6Zm.32-1.55a.5.5 0 0 1 .68-.19.5.5 0 0 1 .18.68.5.5 0 0 1-.68.19.5.5 0 0 1-.18-.68ZM17.94 8.88a1.5 1.5 0 1 1-2.6-1.5 1.5 1.5 0 1 1 2.6 1.5ZM16.9 7.69a.5.5 0 0 0-.68.19.5.5 0 0 0 .18.68.5.5 0 0 0 .68-.19.5.5 0 0 0-.18-.68ZM9.75 17.75a1.5 1.5 0 1 1 2.6 1.5 1.5 1.5 0 1 1-2.6-1.5Zm1.05 1.18a.5.5 0 0 0 .68-.18.5.5 0 0 0-.18-.68.5.5 0 0 0-.68.18.5.5 0 0 0 .18.68Z"
    clip-rule="evenodd"
  />
</svg>`,td=ek`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.13 1h1.71c1.46 0 2.63 0 3.56.1.97.1 1.8.33 2.53.85a5 5 0 0 1 1.1 1.11c.53.73.75 1.56.86 2.53.1.93.1 2.1.1 3.55v1.72c0 1.45 0 2.62-.1 3.55-.1.97-.33 1.8-.86 2.53a5 5 0 0 1-1.1 1.1c-.73.53-1.56.75-2.53.86-.93.1-2.1.1-3.55.1H9.13c-1.45 0-2.62 0-3.56-.1-.96-.1-1.8-.33-2.52-.85a5 5 0 0 1-1.1-1.11 5.05 5.05 0 0 1-.86-2.53c-.1-.93-.1-2.1-.1-3.55V9.14c0-1.45 0-2.62.1-3.55.1-.97.33-1.8.85-2.53a5 5 0 0 1 1.1-1.1 5.05 5.05 0 0 1 2.53-.86C6.51 1 7.67 1 9.13 1ZM5.79 3.09a3.1 3.1 0 0 0-1.57.48 3 3 0 0 0-.66.67c-.24.32-.4.77-.48 1.56-.1.82-.1 1.88-.1 3.4v1.6c0 1.15 0 2.04.05 2.76l.41-.42c.5-.5.93-.92 1.32-1.24.41-.33.86-.6 1.43-.7a3 3 0 0 1 .94 0c.35.06.66.2.95.37a17.11 17.11 0 0 0 .8.45c.1-.08.2-.2.41-.4l.04-.03a27 27 0 0 1 1.95-1.84 4.03 4.03 0 0 1 1.91-.94 4 4 0 0 1 1.25 0c.73.11 1.33.46 1.91.94l.64.55V9.2c0-1.52 0-2.58-.1-3.4a3.1 3.1 0 0 0-.48-1.56 3 3 0 0 0-.66-.67 3.1 3.1 0 0 0-1.56-.48C13.37 3 12.3 3 10.79 3h-1.6c-1.52 0-2.59 0-3.4.09Zm11.18 10-.04-.05a26.24 26.24 0 0 0-1.83-1.74c-.45-.36-.73-.48-.97-.52a2 2 0 0 0-.63 0c-.24.04-.51.16-.97.52-.46.38-1.01.93-1.83 1.74l-.02.02c-.17.18-.34.34-.49.47a2.04 2.04 0 0 1-1.08.5 1.97 1.97 0 0 1-1.25-.27l-.79-.46-.02-.02a.65.65 0 0 0-.24-.1 1 1 0 0 0-.31 0c-.08.02-.21.06-.49.28-.3.24-.65.59-1.2 1.14l-.56.56-.65.66a3 3 0 0 0 .62.6c.33.24.77.4 1.57.49.81.09 1.88.09 3.4.09h1.6c1.52 0 2.58 0 3.4-.09a3.1 3.1 0 0 0 1.56-.48 3 3 0 0 0 .66-.67c.24-.32.4-.77.49-1.56l.07-1.12Zm-8.02-1.03ZM4.99 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
    clip-rule="evenodd"
  />
</svg>`,th=ek`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 0a1 1 0 0 1 1 1v5.38a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1ZM5.26 2.6a1 1 0 0 1-.28 1.39 5.46 5.46 0 1 0 6.04 0 1 1 0 1 1 1.1-1.67 7.46 7.46 0 1 1-8.25 0 1 1 0 0 1 1.4.28Z"
    clip-rule="evenodd"
  />
</svg>`,tf=ek` <svg
  width="36"
  height="36"
  fill="none"
>
  <path
    d="M0 8a8 8 0 0 1 8-8h20a8 8 0 0 1 8 8v20a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8Z"
    fill="#fff"
    fill-opacity=".05"
  />
  <path
    d="m18.262 17.513-8.944 9.49v.01a2.417 2.417 0 0 0 3.56 1.452l.026-.017 10.061-5.803-4.703-5.132Z"
    fill="#EA4335"
  />
  <path
    d="m27.307 15.9-.008-.008-4.342-2.52-4.896 4.36 4.913 4.912 4.325-2.494a2.42 2.42 0 0 0 .008-4.25Z"
    fill="#FBBC04"
  />
  <path
    d="M9.318 8.997c-.05.202-.084.403-.084.622V26.39c0 .218.025.42.084.621l9.246-9.247-9.246-8.768Z"
    fill="#4285F4"
  />
  <path
    d="m18.33 18 4.627-4.628-10.053-5.828a2.427 2.427 0 0 0-3.586 1.444L18.329 18Z"
    fill="#34A853"
  />
  <path
    d="M8 .5h20A7.5 7.5 0 0 1 35.5 8v20a7.5 7.5 0 0 1-7.5 7.5H8A7.5 7.5 0 0 1 .5 28V8A7.5 7.5 0 0 1 8 .5Z"
    stroke="#fff"
    stroke-opacity=".05"
  />
</svg>`,tp=ek`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M3 6a3 3 0 0 1 3-3h1a1 1 0 1 0 0-2H6a5 5 0 0 0-5 5v1a1 1 0 0 0 2 0V6ZM13 1a1 1 0 1 0 0 2h1a3 3 0 0 1 3 3v1a1 1 0 1 0 2 0V6a5 5 0 0 0-5-5h-1ZM3 13a1 1 0 1 0-2 0v1a5 5 0 0 0 5 5h1a1 1 0 1 0 0-2H6a3 3 0 0 1-3-3v-1ZM19 13a1 1 0 1 0-2 0v1a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1.01a5 5 0 0 0 5-5v-1ZM5.3 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05A1.5 1.5 0 0 0 9.2 8.14c.06-.2.06-.43.06-.89s0-.7-.06-.89A1.5 1.5 0 0 0 8.14 5.3c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM10.8 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM5.26 12.75c0-.46 0-.7.05-.89a1.5 1.5 0 0 1 1.06-1.06c.19-.05.42-.05.89-.05.46 0 .7 0 .88.05.52.14.93.54 1.06 1.06.06.2.06.43.06.89s0 .7-.06.89a1.5 1.5 0 0 1-1.06 1.06c-.19.05-.42.05-.88.05-.47 0-.7 0-.9-.05a1.5 1.5 0 0 1-1.05-1.06c-.05-.2-.05-.43-.05-.89ZM10.8 11.86c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06Z"
  />
</svg>`,tg=ek`<svg fill="none" viewBox="0 0 14 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.94 1.04a1 1 0 0 1 .7 1.23l-.48 1.68a5.85 5.85 0 0 1 8.53 4.32 5.86 5.86 0 0 1-11.4 2.56 1 1 0 0 1 1.9-.57 3.86 3.86 0 1 0 1.83-4.5l1.87.53a1 1 0 0 1-.55 1.92l-4.1-1.15a1 1 0 0 1-.69-1.23l1.16-4.1a1 1 0 0 1 1.23-.7Z"
    clip-rule="evenodd"
  />
</svg>`,tm=ek`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.36 4.21a5.14 5.14 0 1 0 0 10.29 5.14 5.14 0 0 0 0-10.29ZM1.64 9.36a7.71 7.71 0 1 1 14 4.47l2.52 2.5a1.29 1.29 0 1 1-1.82 1.83l-2.51-2.51A7.71 7.71 0 0 1 1.65 9.36Z"
    clip-rule="evenodd"
  />
</svg>`,tw=ek`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.76.3a1 1 0 0 1 0 1.4L4.07 4.4h9a1 1 0 1 1 0 2h-9l2.69 2.68a1 1 0 1 1-1.42 1.42L.95 6.09a1 1 0 0 1 0-1.4l4.4-4.4a1 1 0 0 1 1.4 0Zm6.49 9.21a1 1 0 0 1 1.41 0l4.39 4.4a1 1 0 0 1 0 1.4l-4.39 4.4a1 1 0 0 1-1.41-1.42l2.68-2.68h-9a1 1 0 0 1 0-2h9l-2.68-2.68a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,tb=ek`<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.48 2.18a1 1 0 0 1 1.41 0l2.68 2.68a1 1 0 1 1-1.41 1.42l-.98-.98v4.56a1 1 0 0 1-2 0V5.3l-.97.98A1 1 0 0 1 .79 4.86l2.69-2.68Zm6.34 2.93a1 1 0 0 1 1 1v4.56l.97-.98a1 1 0 1 1 1.42 1.42l-2.69 2.68a1 1 0 0 1-1.41 0l-2.68-2.68a1 1 0 0 1 1.41-1.42l.98.98V6.1a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,ty=ek`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg> `,tv=ek`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5A3E85" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M18.22 25.7 20 23.91h3.34l2.1-2.1v-6.68H15.4v8.78h2.82v1.77Zm3.87-8.16h1.25v3.66H22.1v-3.66Zm-3.34 0H20v3.66h-1.25v-3.66ZM20 7.9a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm6.69 14.56-3.66 3.66h-2.72l-1.77 1.78h-1.88V26.1H13.3v-9.82l.94-2.4H26.7v8.56Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,t_=ek`<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1D9BF0" />
      <path
        fill="#fff"
        d="M30 13.81c-.74.33-1.53.55-2.36.65.85-.51 1.5-1.32 1.8-2.27-.79.47-1.66.8-2.6 1a4.1 4.1 0 0 0-7 3.73c-3.4-.17-6.42-1.8-8.45-4.28a4.1 4.1 0 0 0 1.27 5.47c-.67-.02-1.3-.2-1.86-.5a4.1 4.1 0 0 0 3.3 4.07c-.58.15-1.21.19-1.86.07a4.1 4.1 0 0 0 3.83 2.85A8.25 8.25 0 0 1 10 26.3a11.62 11.62 0 0 0 6.29 1.84c7.62 0 11.92-6.44 11.66-12.2.8-.59 1.5-1.3 2.05-2.13Z"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,tx=ek`<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="m14.36 4.74.01.42c0 4.34-3.3 9.34-9.34 9.34A9.3 9.3 0 0 1 0 13.03a6.6 6.6 0 0 0 4.86-1.36 3.29 3.29 0 0 1-3.07-2.28c.5.1 1 .07 1.48-.06A3.28 3.28 0 0 1 .64 6.11v-.04c.46.26.97.4 1.49.41A3.29 3.29 0 0 1 1.11 2.1a9.32 9.32 0 0 0 6.77 3.43 3.28 3.28 0 0 1 5.6-3 6.59 6.59 0 0 0 2.08-.8 3.3 3.3 0 0 1-1.45 1.82A6.53 6.53 0 0 0 16 3.04c-.44.66-1 1.23-1.64 1.7Z"
  />
</svg>`,tC=ek`
  <svg fill="none" viewBox="0 0 48 44">
    <path
      style="fill: var(--wui-color-bg-300);"
      d="M4.56 8.64c-1.23 1.68-1.23 4.08-1.23 8.88v8.96c0 4.8 0 7.2 1.23 8.88.39.55.87 1.02 1.41 1.42C7.65 38 10.05 38 14.85 38h14.3c4.8 0 7.2 0 8.88-1.22a6.4 6.4 0 0 0 1.41-1.42c.83-1.14 1.1-2.6 1.19-4.92a6.4 6.4 0 0 0 5.16-4.65c.21-.81.21-1.8.21-3.79 0-1.98 0-2.98-.22-3.79a6.4 6.4 0 0 0-5.15-4.65c-.1-2.32-.36-3.78-1.19-4.92a6.4 6.4 0 0 0-1.41-1.42C36.35 6 33.95 6 29.15 6h-14.3c-4.8 0-7.2 0-8.88 1.22a6.4 6.4 0 0 0-1.41 1.42Z"
    />
    <path
      style="fill: var(--wui-color-fg-200);"
      fill-rule="evenodd"
      d="M2.27 11.33a6.4 6.4 0 0 1 6.4-6.4h26.66a6.4 6.4 0 0 1 6.4 6.4v1.7a6.4 6.4 0 0 1 5.34 6.3v5.34a6.4 6.4 0 0 1-5.34 6.3v1.7a6.4 6.4 0 0 1-6.4 6.4H8.67a6.4 6.4 0 0 1-6.4-6.4V11.33ZM39.6 31.07h-6.93a9.07 9.07 0 1 1 0-18.14h6.93v-1.6a4.27 4.27 0 0 0-4.27-4.26H8.67a4.27 4.27 0 0 0-4.27 4.26v21.34a4.27 4.27 0 0 0 4.27 4.26h26.66a4.27 4.27 0 0 0 4.27-4.26v-1.6Zm-6.93-16a6.93 6.93 0 0 0 0 13.86h8a4.27 4.27 0 0 0 4.26-4.26v-5.34a4.27 4.27 0 0 0-4.26-4.26h-8Z"
      clip-rule="evenodd"
    />
  </svg>
`,tE=ek`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 5.5c0-1.8 1.46-3.25 3.25-3.25H14.5c1.8 0 3.25 1.46 3.25 3.25v.28A3.25 3.25 0 0 1 20 8.88v2.24c0 1.45-.94 2.68-2.25 3.1v.28c0 1.8-1.46 3.25-3.25 3.25H3.25A3.25 3.25 0 0 1 0 14.5v-9Zm15.75 8.88h-2.38a4.38 4.38 0 0 1 0-8.76h2.38V5.5c0-.69-.56-1.25-1.25-1.25H3.25C2.56 4.25 2 4.81 2 5.5v9c0 .69.56 1.25 1.25 1.25H14.5c.69 0 1.25-.56 1.25-1.25v-.13Zm-2.38-6.76a2.37 2.37 0 1 0 0 4.75h3.38c.69 0 1.25-.55 1.25-1.24V8.87c0-.69-.56-1.24-1.25-1.24h-3.38Z"
    clip-rule="evenodd"
  />
</svg>`,tk=ek`<svg fill="none" viewBox="0 0 96 67">
  <path
    fill="currentColor"
    d="M25.32 18.8a32.56 32.56 0 0 1 45.36 0l1.5 1.47c.63.62.63 1.61 0 2.22l-5.15 5.05c-.31.3-.82.3-1.14 0l-2.07-2.03a22.71 22.71 0 0 0-31.64 0l-2.22 2.18c-.31.3-.82.3-1.14 0l-5.15-5.05a1.55 1.55 0 0 1 0-2.22l1.65-1.62Zm56.02 10.44 4.59 4.5c.63.6.63 1.6 0 2.21l-20.7 20.26c-.62.61-1.63.61-2.26 0L48.28 41.83a.4.4 0 0 0-.56 0L33.03 56.21c-.63.61-1.64.61-2.27 0L10.07 35.95a1.55 1.55 0 0 1 0-2.22l4.59-4.5a1.63 1.63 0 0 1 2.27 0L31.6 43.63a.4.4 0 0 0 .57 0l14.69-14.38a1.63 1.63 0 0 1 2.26 0l14.69 14.38a.4.4 0 0 0 .57 0l14.68-14.38a1.63 1.63 0 0 1 2.27 0Z"
  />
  <path
    stroke="#000"
    stroke-opacity=".1"
    d="M25.67 19.15a32.06 32.06 0 0 1 44.66 0l1.5 1.48c.43.42.43 1.09 0 1.5l-5.15 5.05a.31.31 0 0 1-.44 0l-2.07-2.03a23.21 23.21 0 0 0-32.34 0l-2.22 2.18a.31.31 0 0 1-.44 0l-5.15-5.05a1.05 1.05 0 0 1 0-1.5l1.65-1.63ZM81 29.6l4.6 4.5c.42.41.42 1.09 0 1.5l-20.7 20.26c-.43.43-1.14.43-1.57 0L48.63 41.47a.9.9 0 0 0-1.26 0L32.68 55.85c-.43.43-1.14.43-1.57 0L10.42 35.6a1.05 1.05 0 0 1 0-1.5l4.59-4.5a1.13 1.13 0 0 1 1.57 0l14.68 14.38a.9.9 0 0 0 1.27 0l-.35-.35.35.35L47.22 29.6a1.13 1.13 0 0 1 1.56 0l14.7 14.38a.9.9 0 0 0 1.26 0L79.42 29.6a1.13 1.13 0 0 1 1.57 0Z"
  />
</svg>`,tS=ek`<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M11 6.67a1 1 0 1 0-2 0v2.66a1 1 0 0 0 2 0V6.67ZM10 14.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-7 9a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"
    clip-rule="evenodd"
  />
</svg>`;var wui_icon_decorate=function(e,t,a,p){var g,m=arguments.length,v=m<3?t:null===p?p=Object.getOwnPropertyDescriptor(t,a):p;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)v=Reflect.decorate(e,t,a,p);else for(var _=e.length-1;_>=0;_--)(g=e[_])&&(v=(m<3?g(v):m>3?g(t,a,v):g(t,a))||v);return m>3&&v&&Object.defineProperty(t,a,v),v};let tA={allWallets:ej,appStore:eL,chromeStore:eY,apple:eF,arrowBottom:ez,arrowLeft:eW,arrowRight:eH,arrowTop:eq,browser:eG,checkmark:eV,chevronBottom:eK,chevronLeft:eZ,chevronRight:eQ,chevronTop:eX,clock:eJ,close:e0,compass:e2,coinPlaceholder:e1,copy:e3,cursor:e5,desktop:e6,disconnect:e4,discord:e8,etherscan:e7,extension:e9,externalLink:tt,facebook:tr,filters:ti,github:tn,google:to,helpCircle:ta,infoCircle:ts,mail:tl,mobile:tc,networkPlaceholder:tu,nftPlaceholder:td,off:th,playStore:tf,qrCode:tp,refresh:tg,search:tm,swapHorizontal:tw,swapVertical:tb,telegram:ty,twitch:tv,twitter:t_,twitterIcon:tx,wallet:tE,walletConnect:tk,walletPlaceholder:tC,warningCircle:tS},tP=class extends lit_element_s{constructor(){super(...arguments),this.size="md",this.name="copy",this.color="fg-300"}render(){return this.style.cssText=`
      --local-color: var(--wui-color-${this.color});
      --local-width: var(--wui-icon-size-${this.size});
    `,eE`${tA[this.name]}`}};tP.styles=[eI,eR,eM],wui_icon_decorate([property_n()],tP.prototype,"size",void 0),wui_icon_decorate([property_n()],tP.prototype,"name",void 0),wui_icon_decorate([property_n()],tP.prototype,"color",void 0),tP=wui_icon_decorate([customElement("wui-icon")],tP);var tD=i`
  :host {
    display: block;
    width: 100%;
    height: 100%;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`,wui_image_decorate=function(e,t,a,p){var g,m=arguments.length,v=m<3?t:null===p?p=Object.getOwnPropertyDescriptor(t,a):p;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)v=Reflect.decorate(e,t,a,p);else for(var _=e.length-1;_>=0;_--)(g=e[_])&&(v=(m<3?g(v):m>3?g(t,a,v):g(t,a))||v);return m>3&&v&&Object.defineProperty(t,a,v),v};let t$=class extends lit_element_s{constructor(){super(...arguments),this.src="./path/to/image.jpg",this.alt="Image"}render(){return eE`<img src=${this.src} alt=${this.alt} />`}};t$.styles=[eI,eR,tD],wui_image_decorate([property_n()],t$.prototype,"src",void 0),wui_image_decorate([property_n()],t$.prototype,"alt",void 0),t$=wui_image_decorate([customElement("wui-image")],t$);var tO=i`
  :host {
    display: block;
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
  }

  svg {
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  use {
    stroke: var(--wui-color-accent-100);
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;let tI=class extends lit_element_s{render(){return eE`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `}};tI.styles=[eI,tO],tI=function(e,t,a,p){var g,m=arguments.length,v=m<3?t:null===p?p=Object.getOwnPropertyDescriptor(t,a):p;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)v=Reflect.decorate(e,t,a,p);else for(var _=e.length-1;_>=0;_--)(g=e[_])&&(v=(m<3?g(v):m>3?g(t,a,v):g(t,a))||v);return m>3&&v&&Object.defineProperty(t,a,v),v}([customElement("wui-loading-hexagon")],tI);var tT=i`
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 14px;
    height: 14px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  svg {
    animation: rotate 2s linear infinite;
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`,wui_loading_spinner_decorate=function(e,t,a,p){var g,m=arguments.length,v=m<3?t:null===p?p=Object.getOwnPropertyDescriptor(t,a):p;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)v=Reflect.decorate(e,t,a,p);else for(var _=e.length-1;_>=0;_--)(g=e[_])&&(v=(m<3?g(v):m>3?g(t,a,v):g(t,a))||v);return m>3&&v&&Object.defineProperty(t,a,v),v};let tR=class extends lit_element_s{constructor(){super(...arguments),this.color="accent-100",this.size="lg"}render(){return this.style.cssText=`--local-color: var(--wui-color-${this.color});`,this.dataset.size=this.size,eE`<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`}};tR.styles=[eI,tT],wui_loading_spinner_decorate([property_n()],tR.prototype,"color",void 0),wui_loading_spinner_decorate([property_n()],tR.prototype,"size",void 0),tR=wui_loading_spinner_decorate([customElement("wui-loading-spinner")],tR);var tB=i`
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`,wui_loading_thumbnail_decorate=function(e,t,a,p){var g,m=arguments.length,v=m<3?t:null===p?p=Object.getOwnPropertyDescriptor(t,a):p;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)v=Reflect.decorate(e,t,a,p);else for(var _=e.length-1;_>=0;_--)(g=e[_])&&(v=(m<3?g(v):m>3?g(t,a,v):g(t,a))||v);return m>3&&v&&Object.defineProperty(t,a,v),v};let tN=class extends lit_element_s{constructor(){super(...arguments),this.radius=36}render(){return this.svgLoaderTemplate()}svgLoaderTemplate(){let e=this.radius>50?50:this.radius,t=36-e;return eE`
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${e}
          stroke-dasharray="${116+t} ${245+t}"
          stroke-dashoffset=${360+1.75*t}
        />
      </svg>
    `}};tN.styles=[eI,tB],wui_loading_thumbnail_decorate([property_n({type:Number})],tN.prototype,"radius",void 0),tN=wui_loading_thumbnail_decorate([customElement("wui-loading-thumbnail")],tN);var tU=i`
  :host {
    display: block;
    outline: 1px solid var(--wui-gray-glass-005);
    background: linear-gradient(
      90deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 2.5s linear infinite reverse;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`,wui_shimmer_decorate=function(e,t,a,p){var g,m=arguments.length,v=m<3?t:null===p?p=Object.getOwnPropertyDescriptor(t,a):p;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)v=Reflect.decorate(e,t,a,p);else for(var _=e.length-1;_>=0;_--)(g=e[_])&&(v=(m<3?g(v):m>3?g(t,a,v):g(t,a))||v);return m>3&&v&&Object.defineProperty(t,a,v),v};let tM=class extends lit_element_s{constructor(){super(...arguments),this.width="",this.height="",this.borderRadius="m"}render(){return this.style.cssText=`
      width: ${this.width};
      height: ${this.height};
      border-radius: clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px);
    `,eE`<slot></slot>`}};tM.styles=[tU],wui_shimmer_decorate([property_n()],tM.prototype,"width",void 0),wui_shimmer_decorate([property_n()],tM.prototype,"height",void 0),wui_shimmer_decorate([property_n()],tM.prototype,"borderRadius",void 0),tM=wui_shimmer_decorate([customElement("wui-shimmer")],tM);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let directive_e=e=>(...t)=>({_$litDirective$:e,values:t});let directive_i=class directive_i{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,a){this._$Ct=e,this._$AM=t,this._$Ci=a}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let tj=directive_e(class extends directive_i{constructor(e){if(super(e),1!==e.type||"class"!==e.name||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){if(void 0===this.it){for(let a in this.it=new Set,void 0!==e.strings&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter(e=>""!==e))),t)t[a]&&!this.st?.has(a)&&this.it.add(a);return this.render(t)}let a=e.element.classList;for(let e of this.it)e in t||(a.remove(e),this.it.delete(e));for(let e in t){let p=!!t[e];p===this.it.has(e)||this.st?.has(e)||(p?(a.add(e),this.it.add(e)):(a.remove(e),this.it.delete(e)))}return eS}});var tL=i`
  :host {
    display: flex !important;
  }

  slot {
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }
`,wui_text_decorate=function(e,t,a,p){var g,m=arguments.length,v=m<3?t:null===p?p=Object.getOwnPropertyDescriptor(t,a):p;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)v=Reflect.decorate(e,t,a,p);else for(var _=e.length-1;_>=0;_--)(g=e[_])&&(v=(m<3?g(v):m>3?g(t,a,v):g(t,a))||v);return m>3&&v&&Object.defineProperty(t,a,v),v};let tF=class extends lit_element_s{constructor(){super(...arguments),this.variant="paragraph-500",this.color="fg-300",this.align="left"}render(){let e={[`wui-font-${this.variant}`]:!0,[`wui-color-${this.color}`]:!0};return this.style.cssText=`
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `,eE`<slot class=${tj(e)}></slot>`}};tF.styles=[eI,tL],wui_text_decorate([property_n()],tF.prototype,"variant",void 0),wui_text_decorate([property_n()],tF.prototype,"color",void 0),wui_text_decorate([property_n()],tF.prototype,"align",void 0),tF=wui_text_decorate([customElement("wui-text")],tF);let tz=ek`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="30" />
  <circle cx="30" cy="30" r="3" fill="#fff" />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m45.32 17.9-.88-.42.88.42.02-.05c.1-.2.21-.44.26-.7l-.82-.15.82.16a2 2 0 0 0-.24-1.4c-.13-.23-.32-.42-.47-.57a8.42 8.42 0 0 1-.04-.04l-.04-.04a2.9 2.9 0 0 0-.56-.47l-.51.86.5-.86a2 2 0 0 0-1.4-.24c-.26.05-.5.16-.69.26l-.05.02-15.05 7.25-.1.05c-1.14.55-1.85.89-2.46 1.37a7 7 0 0 0-1.13 1.14c-.5.6-.83 1.32-1.38 2.45l-.05.11-7.25 15.05-.02.05c-.1.2-.21.43-.26.69a2 2 0 0 0 .24 1.4l.85-.5-.85.5c.13.23.32.42.47.57l.04.04.04.04c.15.15.34.34.56.47a2 2 0 0 0 1.41.24l-.2-.98.2.98c.25-.05.5-.17.69-.26l.05-.02-.42-.87.42.87 15.05-7.25.1-.05c1.14-.55 1.85-.89 2.46-1.38a7 7 0 0 0 1.13-1.13 12.87 12.87 0 0 0 1.43-2.56l7.25-15.05Z"
  />
  <path
    fill="#1DC956"
    d="M33.38 32.72 30.7 29.3 15.86 44.14l.2.2a1 1 0 0 0 1.14.2l15.1-7.27a3 3 0 0 0 1.08-4.55Z"
  />
  <path
    fill="#86F999"
    d="m26.62 27.28 2.67 3.43 14.85-14.85-.2-.2a1 1 0 0 0-1.14-.2l-15.1 7.27a3 3 0 0 0-1.08 4.55Z"
  />
  <circle cx="30" cy="30" r="3" fill="#fff" transform="rotate(45 30 30)" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
</svg> `,tW=ek`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#clip0_7734_50402)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#EB8B47"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M19 52C24.5228 52 29 47.5228 29 42C29 36.4772 24.5228 32 19 32C13.4772 32 9 36.4772 9 42C9 47.5228 13.4772 52 19 52Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.8437 8.3264C42.4507 7.70891 41.5493 7.70891 41.1564 8.32641L28.978 27.4638C28.5544 28.1295 29.0326 29.0007 29.8217 29.0007H54.1783C54.9674 29.0007 55.4456 28.1295 55.022 27.4638L42.8437 8.3264Z"
      fill="white"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.3348 11.6456C42.659 11.7608 42.9061 12.1492 43.4005 12.926L50.7332 24.4488C51.2952 25.332 51.5763 25.7737 51.5254 26.1382C51.4915 26.3808 51.3698 26.6026 51.1833 26.7614C50.9031 27 50.3796 27 49.3327 27H34.6673C33.6204 27 33.0969 27 32.8167 26.7614C32.6302 26.6026 32.5085 26.3808 32.4746 26.1382C32.4237 25.7737 32.7048 25.332 33.2669 24.4488L40.5995 12.926C41.0939 12.1492 41.341 11.7608 41.6652 11.6456C41.8818 11.5687 42.1182 11.5687 42.3348 11.6456ZM35.0001 26.999C38.8661 26.999 42.0001 23.865 42.0001 19.999C42.0001 23.865 45.1341 26.999 49.0001 26.999H35.0001Z"
      fill="#FF974C"
    />
    <path
      d="M10.1061 9.35712C9.9973 9.67775 9.99867 10.0388 9.99978 10.3323C9.99989 10.3611 10 10.3893 10 10.4167V25.5833C10 25.6107 9.99989 25.6389 9.99978 25.6677C9.99867 25.9612 9.9973 26.3222 10.1061 26.6429C10.306 27.2317 10.7683 27.694 11.3571 27.8939C11.6777 28.0027 12.0388 28.0013 12.3323 28.0002C12.3611 28.0001 12.3893 28 12.4167 28H19C24.5228 28 29 23.5228 29 18C29 12.4772 24.5228 8 19 8H12.4167C12.3893 8 12.3611 7.99989 12.3323 7.99978C12.0388 7.99867 11.6778 7.9973 11.3571 8.10614C10.7683 8.306 10.306 8.76834 10.1061 9.35712Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="19" cy="18" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
    <circle cx="19" cy="42" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="clip0_7734_50402">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,tH=ek`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#1DC956"
      d="M0 25.01c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02.11 15.65.11 24.9.11h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.13 60 15.76 60 25v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-3.45 1.97-8.08 1.97-17.33 1.97H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 49.1 0 44.46 0 35.21v-10.2Z"
    />
    <path
      fill="#2BEE6C"
      d="M16.1 60c-3.82-.18-6.4-.64-8.53-1.86a15 15 0 0 1-5.6-5.6C.55 50.06.16 46.97.04 41.98L4.2 40.6a4 4 0 0 0 2.48-2.39l4.65-12.4a2 2 0 0 1 2.5-1.2l2.53.84a2 2 0 0 0 2.43-1l2.96-5.94a2 2 0 0 1 3.7.32l3.78 12.58a2 2 0 0 0 3.03 1.09l3.34-2.23a2 2 0 0 0 .65-.7l5.3-9.72a2 2 0 0 1 1.42-1.01l4.14-.69a2 2 0 0 1 1.6.44l3.9 3.24a2 2 0 0 0 2.7-.12l4.62-4.63c.08 2.2.08 4.8.08 7.93v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-2.13 1.22-4.7 1.68-8.54 1.86H16.11Z"
    />
    <path
      fill="#fff"
      d="m.07 43.03-.05-2.1 3.85-1.28a3 3 0 0 0 1.86-1.79l4.66-12.4a3 3 0 0 1 3.75-1.8l2.53.84a1 1 0 0 0 1.21-.5l2.97-5.94a3 3 0 0 1 5.56.48l3.77 12.58a1 1 0 0 0 1.51.55l3.34-2.23a1 1 0 0 0 .33-.35l5.3-9.71a3 3 0 0 1 2.14-1.53l4.13-.69a3 3 0 0 1 2.41.66l3.9 3.24a1 1 0 0 0 1.34-.06l5.28-5.28c.05.85.08 1.75.1 2.73L56 22.41a3 3 0 0 1-4.04.19l-3.9-3.25a1 1 0 0 0-.8-.21l-4.13.69a1 1 0 0 0-.72.5l-5.3 9.72a3 3 0 0 1-.97 1.05l-3.34 2.23a3 3 0 0 1-4.53-1.63l-3.78-12.58a1 1 0 0 0-1.85-.16l-2.97 5.94a3 3 0 0 1-3.63 1.5l-2.53-.84a1 1 0 0 0-1.25.6l-4.65 12.4a5 5 0 0 1-3.1 3L.07 43.02Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M49.5 19a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M45 .28v59.66l-2 .1V.19c.7.02 1.37.05 2 .1Z" />
    <path fill="#2BEE6C" d="M47.5 19a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
    <path
      stroke="#fff"
      stroke-opacity=".1"
      d="M.5 25.01c0-4.63 0-8.08.24-10.8.25-2.7.73-4.64 1.66-6.28a14.5 14.5 0 0 1 5.42-5.41C9.46 1.58 11.39 1.1 14.1.85A133 133 0 0 1 24.9.61h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.67a14.5 14.5 0 0 1 5.42 5.4c.93 1.65 1.41 3.58 1.66 6.3.24 2.71.24 6.16.24 10.79v10.2c0 4.64 0 8.08-.24 10.8-.25 2.7-.73 4.65-1.66 6.28a14.5 14.5 0 0 1-5.42 5.42c-1.63.93-3.57 1.41-6.28 1.66-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.66a14.5 14.5 0 0 1-5.42-5.42C1.47 50.66 1 48.72.74 46.01A133 133 0 0 1 .5 35.2v-10.2Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg>`,tq=ek`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="30" />
    <path
      fill="#E87DE8"
      d="M57.98.01v19.5a4.09 4.09 0 0 0-2.63 2.29L50.7 34.2a2 2 0 0 1-2.5 1.2l-2.53-.84a2 2 0 0 0-2.42 1l-2.97 5.94a2 2 0 0 1-3.7-.32L32.8 28.6a2 2 0 0 0-3.02-1.09l-3.35 2.23a2 2 0 0 0-.64.7l-5.3 9.72a2 2 0 0 1-1.43 1.01l-4.13.69a2 2 0 0 1-1.61-.44l-3.9-3.24a2 2 0 0 0-2.69.12L2.1 42.93.02 43V.01h57.96Z"
    />
    <path
      fill="#fff"
      d="m61.95 16.94.05 2.1-3.85 1.28a3 3 0 0 0-1.86 1.79l-4.65 12.4a3 3 0 0 1-3.76 1.8l-2.53-.84a1 1 0 0 0-1.2.5l-2.98 5.94a3 3 0 0 1-5.55-.48l-3.78-12.58a1 1 0 0 0-1.5-.55l-3.35 2.23a1 1 0 0 0-.32.35l-5.3 9.72a3 3 0 0 1-2.14 1.52l-4.14.69a3 3 0 0 1-2.41-.66l-3.9-3.24a1 1 0 0 0-1.34.06l-5.28 5.28c-.05-.84-.08-1.75-.1-2.73l3.97-3.96a3 3 0 0 1 4.04-.19l3.89 3.25a1 1 0 0 0 .8.21l4.14-.68a1 1 0 0 0 .71-.51l5.3-9.71a3 3 0 0 1 .97-1.06l3.34-2.23a3 3 0 0 1 4.54 1.63l3.77 12.58a1 1 0 0 0 1.86.16l2.96-5.93a3 3 0 0 1 3.64-1.5l2.52.83a1 1 0 0 0 1.25-.6l4.66-12.4a5 5 0 0 1 3.1-2.99l4.43-1.48Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M35.5 27a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M31 0v60h-2V0h2Z" />
    <path fill="#E87DE8" d="M33.5 27a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,tG=ek`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#987DE8" rx="30" />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="m15.48 28.37 11.97-19.3a3 3 0 0 1 5.1 0l11.97 19.3a6 6 0 0 1 .9 3.14v.03a6 6 0 0 1-1.16 3.56L33.23 50.2a4 4 0 0 1-6.46 0L15.73 35.1a6 6 0 0 1-1.15-3.54v-.03a6 6 0 0 1 .9-3.16Z"
      clip-rule="evenodd"
    />
    <path
      fill="#643CDD"
      d="M30.84 10.11a1 1 0 0 0-.84-.46V24.5l12.6 5.53a2 2 0 0 0-.28-1.4L30.84 10.11Z"
    />
    <path
      fill="#BDADEB"
      d="M30 9.65a1 1 0 0 0-.85.46L17.66 28.64a2 2 0 0 0-.26 1.39L30 24.5V9.65Z"
    />
    <path
      fill="#643CDD"
      d="M30 50.54a1 1 0 0 0 .8-.4l11.24-15.38c.3-.44-.2-1-.66-.73l-9.89 5.68a3 3 0 0 1-1.5.4v10.43Z"
    />
    <path
      fill="#BDADEB"
      d="m17.97 34.76 11.22 15.37c.2.28.5.41.8.41V40.11a3 3 0 0 1-1.49-.4l-9.88-5.68c-.47-.27-.97.3-.65.73Z"
    />
    <path
      fill="#401AB3"
      d="M42.6 30.03 30 24.5v13.14a3 3 0 0 0 1.5-.4l10.14-5.83a2 2 0 0 0 .95-1.38Z"
    />
    <path
      fill="#7C5AE2"
      d="M30 37.64V24.46l-12.6 5.57a2 2 0 0 0 .97 1.39l10.13 5.82a3 3 0 0 0 1.5.4Z"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,tV=ek`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="3" />
  <path
    fill="#1FAD7E"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 29.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 19.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#86F999"
    stroke="#fff"
    stroke-width="2"
    d="m46.69 21.06-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-6.32-3.51-.18-.1c-2.33-1.3-3.72-2.06-5.22-2.33a9 9 0 0 0-3.08 0c-1.5.27-2.9 1.04-5.22 2.33l-.17.1-6.33 3.51-.05.03c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45Z"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,tK=ek`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#C653C6" rx="3" />
  <path
    fill="#fff"
    d="M20.03 15.22C20 15.6 20 16.07 20 17v2.8c0 1.14 0 1.7-.2 2.12-.15.31-.3.5-.58.71-.37.28-1.06.42-2.43.7-.59.12-1.11.29-1.6.51a9 9 0 0 0-4.35 4.36C10 30 10 32.34 10 37c0 4.66 0 7 .84 8.8a9 9 0 0 0 4.36 4.36C17 51 19.34 51 24 51h12c4.66 0 7 0 8.8-.84a9 9 0 0 0 4.36-4.36C50 44 50 41.66 50 37c0-4.66 0-7-.84-8.8a9 9 0 0 0-4.36-4.36c-.48-.22-1-.39-1.6-.5-1.36-.29-2.05-.43-2.42-.7-.27-.22-.43-.4-.58-.72-.2-.42-.2-.98-.2-2.11V17c0-.93 0-1.4-.03-1.78a9 9 0 0 0-8.19-8.19C31.4 7 30.93 7 30 7s-1.4 0-1.78.03a9 9 0 0 0-8.19 8.19Z"
  />
  <path
    fill="#E87DE8"
    d="M22 17c0-.93 0-1.4.04-1.78a7 7 0 0 1 6.18-6.18C28.6 9 29.07 9 30 9s1.4 0 1.78.04a7 7 0 0 1 6.18 6.18c.04.39.04.85.04 1.78v4.5a1.5 1.5 0 0 1-3 0V17c0-.93 0-1.4-.08-1.78a4 4 0 0 0-3.14-3.14C31.39 12 30.93 12 30 12s-1.4 0-1.78.08a4 4 0 0 0-3.14 3.14c-.08.39-.08.85-.08 1.78v4.5a1.5 1.5 0 0 1-3 0V17Z"
  />
  <path
    fill="#E87DE8"
    fill-rule="evenodd"
    d="M12 36.62c0-4.32 0-6.48.92-8.09a7 7 0 0 1 2.61-2.61C17.14 25 19.3 25 23.62 25h6.86c.46 0 .7 0 .9.02 2.73.22 4.37 2.43 4.62 4.98.27-2.7 2.11-5 5.02-5A6.98 6.98 0 0 1 48 31.98v5.4c0 4.32 0 6.48-.92 8.09a7 7 0 0 1-2.61 2.61c-1.61.92-3.77.92-8.09.92h-5.86c-.46 0-.7 0-.9-.02-2.73-.22-4.37-2.43-4.62-4.98-.26 2.58-1.94 4.82-4.71 4.99l-.7.01c-.55 0-.82 0-1.05-.02a7 7 0 0 1-6.52-6.52c-.02-.23-.02-.5-.02-1.05v-4.79Zm21.24-.27a4 4 0 1 0-6.48 0 31.28 31.28 0 0 1 1.57 2.23c.17.4.17.81.17 1.24V42.5a1.5 1.5 0 0 0 3 0V39.82c0-.43 0-.85.17-1.24.09-.2.58-.87 1.57-2.23Z"
    clip-rule="evenodd"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,tZ=ek`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#EB8B47"
      d="M0 24.9c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02 0 15.65 0 24.9 0h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.02 60 15.65 60 24.9v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6C48.98 60 44.35 60 35.1 60H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 48.98 0 44.35 0 35.1V24.9Z"
    />
    <path
      stroke="#062B2B"
      stroke-opacity=".1"
      d="M.5 24.9c0-4.64 0-8.08.24-10.8.25-2.7.73-4.65 1.66-6.28A14.5 14.5 0 0 1 7.82 2.4C9.46 1.47 11.39 1 14.1.74A133 133 0 0 1 24.9.5h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.66a14.5 14.5 0 0 1 5.42 5.42c.93 1.63 1.41 3.57 1.66 6.28.24 2.72.24 6.16.24 10.8v10.2c0 4.63 0 8.08-.24 10.8-.25 2.7-.73 4.64-1.66 6.28a14.5 14.5 0 0 1-5.42 5.41c-1.63.94-3.57 1.42-6.28 1.67-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.67a14.5 14.5 0 0 1-5.42-5.4C1.47 50.53 1 48.6.74 45.88A133 133 0 0 1 .5 35.1V24.9Z"
    />
    <path
      fill="#FF974C"
      stroke="#fff"
      stroke-width="2"
      d="M39.2 29.2a13 13 0 1 0-18.4 0l1.3 1.28a12.82 12.82 0 0 1 2.1 2.39 6 6 0 0 1 .6 1.47c.2.76.2 1.56.2 3.17v11.24c0 1.08 0 1.61.13 2.12a4 4 0 0 0 .41.98c.26.45.64.83 1.4 1.6l.3.29c.65.65.98.98 1.36 1.09.26.07.54.07.8 0 .38-.11.7-.44 1.36-1.1l3.48-3.47c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.47-.48c-.65-.65-.98-.98-1.09-1.36a1.5 1.5 0 0 1 0-.8c.1-.38.44-.7 1.1-1.36l.47-.48c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.48-.5c-.65-.64-.98-.97-1.08-1.35a1.5 1.5 0 0 1 0-.79c.1-.38.42-.7 1.06-1.36l5.46-5.55Z"
    />
    <circle cx="30" cy="17" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg> `,tQ=ek`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#00ACE6" rx="30" />
    <circle cx="64" cy="39" r="50" fill="#1AC6FF" stroke="#fff" stroke-width="2" />
    <circle cx="78" cy="30" r="50" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="72" cy="15" r="35" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-17" r="45" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-5" r="50" stroke="#fff" stroke-width="2" />
    <circle cx="30" cy="45" r="4" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="39.5" cy="27.5" r="4" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="16" cy="24" r="4" fill="#19C6FF" stroke="#fff" stroke-width="2" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg>`,tX=ek`<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="3" />
    <path
      fill="#E87DE8"
      stroke="#fff"
      stroke-width="2"
      d="M52.1 47.34c0-4.24-1.44-9.55-5.9-12.4a2.86 2.86 0 0 0-1.6-3.89v-.82c0-1.19-.52-2.26-1.35-3a4.74 4.74 0 0 0-2.4-6.26v-5.5a11.31 11.31 0 1 0-22.63 0v2.15a3.34 3.34 0 0 0-1.18 5.05 4.74 4.74 0 0 0-.68 6.44A5.22 5.22 0 0 0 14 35.92c-3.06 4.13-6.1 8.3-6.1 15.64 0 2.67.37 4.86.74 6.39a20.3 20.3 0 0 0 .73 2.39l.02.04v.01l.92-.39-.92.4.26.6h38.26l.3-.49-.87-.51.86.5.02-.01.03-.07a16.32 16.32 0 0 0 .57-1.05c.36-.72.85-1.74 1.33-2.96a25.51 25.51 0 0 0 1.94-9.07Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M26.5 29.5c-3-.5-5.5-3-5.5-7v-7c0-.47 0-.7.03-.9a3 3 0 0 1 2.58-2.57c.2-.03.42-.03.89-.03 2 0 2.5-2.5 2.5-2.5s0 2.5 2.5 2.5c1.4 0 2.1 0 2.65.23a3 3 0 0 1 1.62 1.62c.23.55.23 1.25.23 2.65v6c0 4-3 7-6.5 7 1.35.23 4 0 6.5-2v9.53C34 38.5 31.5 40 28 40s-6-1.5-6-2.97L24 34l2.5 1.5v-6ZM26 47h4.5c2.5 0 3 4 3 5.5h-3l-1-1.5H26v-4Zm-6.25 5.5H24V57h-8c0-1 1-4.5 3.75-4.5Z"
      clip-rule="evenodd"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="3" /></clipPath>
  </defs>
</svg> `,tY=ek`<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#794CFF" rx="3" />
  <path
    fill="#987DE8"
    stroke="#fff"
    stroke-width="2"
    d="M33 22.5v-1H16v5H8.5V36H13v-5h3v7.5h17V31h1v7.5h17v-17H34v5h-1v-4Z"
  />
  <path fill="#fff" d="M37.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M42.5 25h5v10h-5z" />
  <path fill="#fff" d="M19.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M24.5 25h5v10h-5z" />
  <path fill="#fff" d="M12 30.5h4V37h-4v-6.5Z" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,tJ=ek`<svg
  viewBox="0 0 60 60"
  fill="none"
>
  <g clip-path="url(#1)">
    <rect width="60" height="60" rx="30" fill="#00ACE6" />
    <path
      d="M59 73C59 89.0163 46.0163 102 30 102C13.9837 102 1 89.0163 1 73C1 56.9837 12 44 30 44C48 44 59 56.9837 59 73Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M18.6904 19.9015C19.6264 15.3286 23.3466 11.8445 27.9708 11.2096C29.3231 11.024 30.6751 11.0238 32.0289 11.2096C36.6532 11.8445 40.3733 15.3286 41.3094 19.9015C41.4868 20.7681 41.6309 21.6509 41.7492 22.5271C41.8811 23.5041 41.8811 24.4944 41.7492 25.4715C41.6309 26.3476 41.4868 27.2304 41.3094 28.097C40.3733 32.6699 36.6532 36.154 32.0289 36.7889C30.6772 36.9744 29.3216 36.9743 27.9708 36.7889C23.3466 36.154 19.6264 32.6699 18.6904 28.097C18.513 27.2304 18.3689 26.3476 18.2506 25.4715C18.1186 24.4944 18.1186 23.5041 18.2506 22.5271C18.3689 21.6509 18.513 20.7681 18.6904 19.9015Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="24.5" cy="23.5" r="1.5" fill="white" />
    <circle cx="35.5" cy="23.5" r="1.5" fill="white" />
    <path
      d="M31 20L28 28H32"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>
  <rect x="0.5" y="0.5" width="59" height="59" rx="29.5" stroke="white" stroke-opacity="0.1" />
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" rx="30" fill="white" />
    </clipPath>
  </defs>
</svg> `,t0=ek`<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#1)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#794CFF"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M35.1403 31.5016C35.1193 30.9637 35.388 30.4558 35.8446 30.1707C36.1207 29.9982 36.4761 29.8473 36.7921 29.7685C37.3143 29.6382 37.8664 29.7977 38.2386 30.1864C38.8507 30.8257 39.3004 31.6836 39.8033 32.408C40.2796 33.0942 41.4695 33.2512 41.9687 32.5047C42.4839 31.7341 42.9405 30.8229 43.572 30.1399C43.9375 29.7447 44.4866 29.5756 45.0111 29.6967C45.3283 29.7701 45.6863 29.9147 45.9655 30.0823C46.4269 30.3595 46.7045 30.8626 46.6928 31.4008C46.6731 32.3083 46.3764 33.2571 46.2158 34.1473C46.061 35.0048 46.9045 35.8337 47.7592 35.664C48.6464 35.4878 49.5899 35.1747 50.497 35.1391C51.0348 35.1181 51.5427 35.3868 51.8279 35.8433C52.0004 36.1195 52.1513 36.4749 52.2301 36.7908C52.3604 37.3131 52.2009 37.8651 51.8121 38.2374C51.1729 38.8495 50.3151 39.2991 49.5908 39.8019C48.9046 40.2782 48.7473 41.4683 49.4939 41.9675C50.2644 42.4827 51.1757 42.9393 51.8587 43.5708C52.2539 43.9362 52.423 44.4854 52.3018 45.0099C52.2285 45.3271 52.0839 45.6851 51.9162 45.9642C51.6391 46.4257 51.1359 46.7032 50.5978 46.6916C49.6903 46.6719 48.7417 46.3753 47.8516 46.2146C46.9939 46.0598 46.1648 46.9035 46.3346 47.7583C46.5108 48.6454 46.8239 49.5888 46.8594 50.4958C46.8805 51.0336 46.6117 51.5415 46.1552 51.8267C45.879 51.9992 45.5236 52.15 45.2077 52.2289C44.6854 52.3592 44.1334 52.1997 43.7611 51.8109C43.1491 51.1718 42.6996 50.314 42.1968 49.5897C41.7203 48.9034 40.5301 48.7463 40.0309 49.493C39.5157 50.2634 39.0592 51.1746 38.4278 51.8574C38.0623 52.2527 37.5132 52.4218 36.9887 52.3006C36.6715 52.2273 36.3135 52.0826 36.0343 51.915C35.5729 51.6379 35.2953 51.1347 35.307 50.5966C35.3267 49.6891 35.6233 48.7405 35.7839 47.8505C35.9388 46.9928 35.0951 46.1636 34.2402 46.3334C33.3531 46.5096 32.4098 46.8227 31.5028 46.8582C30.9649 46.8793 30.457 46.6105 30.1719 46.154C29.9994 45.8778 29.8485 45.5224 29.7697 45.2065C29.6394 44.6842 29.7989 44.1322 30.1877 43.7599C30.8269 43.1479 31.6847 42.6982 32.4091 42.1954C33.0954 41.7189 33.2522 40.5289 32.5056 40.0297C31.7351 39.5145 30.824 39.058 30.1411 38.4265C29.7459 38.0611 29.5768 37.5119 29.698 36.9875C29.7713 36.6702 29.9159 36.3122 30.0836 36.0331C30.3607 35.5717 30.8638 35.2941 31.402 35.3058C32.3095 35.3255 33.2583 35.6221 34.1485 35.7828C35.006 35.9376 35.8349 35.094 35.6652 34.2393C35.489 33.3521 35.1759 32.4087 35.1403 31.5016Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M20.7706 8.22357C20.9036 7.51411 21.5231 7 22.2449 7H23.7551C24.4769 7 25.0964 7.51411 25.2294 8.22357C25.5051 9.69403 25.4829 11.6321 27.1202 12.2606C27.3092 12.3331 27.4958 12.4105 27.6798 12.4926C29.2818 13.2072 30.6374 11.8199 31.8721 10.9752C32.4678 10.5676 33.2694 10.6421 33.7798 11.1525L34.8477 12.2204C35.3581 12.7308 35.4326 13.5323 35.025 14.128C34.1802 15.3627 32.7931 16.7183 33.5077 18.3202C33.5898 18.5043 33.6672 18.6909 33.7398 18.88C34.3683 20.5171 36.3061 20.4949 37.7764 20.7706C38.4859 20.9036 39 21.5231 39 22.2449V23.7551C39 24.4769 38.4859 25.0964 37.7764 25.2294C36.3061 25.5051 34.3685 25.483 33.7401 27.1201C33.6675 27.3093 33.59 27.4961 33.5079 27.6803C32.7934 29.282 34.1803 30.6374 35.025 31.8719C35.4326 32.4677 35.3581 33.2692 34.8477 33.7796L33.7798 34.8475C33.2694 35.3579 32.4678 35.4324 31.8721 35.0248C30.6376 34.1801 29.2823 32.7934 27.6806 33.508C27.4962 33.5903 27.3093 33.6678 27.12 33.7405C25.483 34.3688 25.5051 36.3062 25.2294 37.7764C25.0964 38.4859 24.4769 39 23.7551 39H22.2449C21.5231 39 20.9036 38.4859 20.7706 37.7764C20.4949 36.3062 20.517 34.3688 18.88 33.7405C18.6908 33.6678 18.5039 33.5903 18.3196 33.5081C16.7179 32.7936 15.3625 34.1804 14.1279 35.0251C13.5322 35.4327 12.7307 35.3582 12.2203 34.8478L11.1524 33.7799C10.642 33.2695 10.5675 32.4679 10.9751 31.8722C11.8198 30.6376 13.2067 29.2822 12.4922 27.6804C12.41 27.4962 12.3325 27.3093 12.2599 27.1201C11.6315 25.483 9.69392 25.5051 8.22357 25.2294C7.51411 25.0964 7 24.4769 7 23.7551V22.2449C7 21.5231 7.51411 20.9036 8.22357 20.7706C9.69394 20.4949 11.6317 20.5171 12.2602 18.88C12.3328 18.6909 12.4103 18.5042 12.4924 18.3201C13.207 16.7181 11.8198 15.3625 10.975 14.1278C10.5674 13.5321 10.6419 12.7305 11.1523 12.2201L12.2202 11.1522C12.7306 10.6418 13.5322 10.5673 14.1279 10.9749C15.3626 11.8197 16.7184 13.2071 18.3204 12.4925C18.5044 12.4105 18.6909 12.3331 18.8799 12.2606C20.5171 11.6321 20.4949 9.69403 20.7706 8.22357Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="23" cy="23" r="6" fill="#794CFF" stroke="white" stroke-width="2" />
    <circle cx="41" cy="41" r="4" fill="#794CFF" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `;var t1=i`
  :host {
    display: block;
    width: 55px;
    height: 55px;
  }
`,wui_visual_decorate=function(e,t,a,p){var g,m=arguments.length,v=m<3?t:null===p?p=Object.getOwnPropertyDescriptor(t,a):p;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)v=Reflect.decorate(e,t,a,p);else for(var _=e.length-1;_>=0;_--)(g=e[_])&&(v=(m<3?g(v):m>3?g(t,a,v):g(t,a))||v);return m>3&&v&&Object.defineProperty(t,a,v),v};let t2={browser:tz,dao:tW,defi:tH,defiAlt:tq,eth:tG,layers:tV,lock:tK,login:tZ,network:tQ,nft:tX,noun:tY,profile:tJ,system:t0},t3=class extends lit_element_s{constructor(){super(...arguments),this.name="browser"}render(){return eE`${t2[this.name]}`}};t3.styles=[eI,t1],wui_visual_decorate([property_n()],t3.prototype,"name",void 0),t3=wui_visual_decorate([customElement("wui-visual")],t3);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let if_defined_o=e=>e??eA,t5={getSpacingStyles:(e,t)=>Array.isArray(e)?e[t]?`var(--wui-spacing-${e[t]})`:void 0:"string"==typeof e?`var(--wui-spacing-${e})`:void 0,getFormattedDate:e=>new Intl.DateTimeFormat("en-US",{month:"short",day:"numeric"}).format(e),getHostName(e){let t=new URL(e);return t.hostname},getTruncateString:({string:e,charsStart:t,charsEnd:a,truncate:p})=>e.length<=t+a?e:"end"===p?`${e.substring(0,t)}...`:"start"===p?`...${e.substring(e.length-a)}`:`${e.substring(0,Math.floor(t))}...${e.substring(e.length-Math.floor(a))}`,generateAvatarColors(e){let t=e.toLowerCase().replace(/^0x/iu,""),a=t.substring(0,6),p=this.hexToRgb(a),g=[];for(let e=0;e<5;e+=1){let t=this.tintColor(p,.15*e);g.push(`rgb(${t[0]}, ${t[1]}, ${t[2]})`)}return`
    --local-color-1: ${g[0]};
    --local-color-2: ${g[1]};
    --local-color-3: ${g[2]};
    --local-color-4: ${g[3]};
    --local-color-5: ${g[4]};
   `},hexToRgb(e){let t=parseInt(e,16);return[t>>16&255,t>>8&255,255&t]},tintColor(e,t){let[a,p,g]=e;return[Math.round(a+(255-a)*t),Math.round(p+(255-p)*t),Math.round(g+(255-g)*t)]},isNumber:e=>/^[0-9]+$/u.test(e),getColorTheme:e=>e||("undefined"!=typeof window&&window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":"dark")};var t6=i`
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`,wui_flex_decorate=function(e,t,a,p){var g,m=arguments.length,v=m<3?t:null===p?p=Object.getOwnPropertyDescriptor(t,a):p;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)v=Reflect.decorate(e,t,a,p);else for(var _=e.length-1;_>=0;_--)(g=e[_])&&(v=(m<3?g(v):m>3?g(t,a,v):g(t,a))||v);return m>3&&v&&Object.defineProperty(t,a,v),v};let t4=class extends lit_element_s{render(){return this.style.cssText=`
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&t5.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&t5.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&t5.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&t5.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&t5.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&t5.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&t5.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&t5.getSpacingStyles(this.margin,3)};
    `,eE`<slot></slot>`}};t4.styles=[eI,t6],wui_flex_decorate([property_n()],t4.prototype,"flexDirection",void 0),wui_flex_decorate([property_n()],t4.prototype,"flexWrap",void 0),wui_flex_decorate([property_n()],t4.prototype,"flexBasis",void 0),wui_flex_decorate([property_n()],t4.prototype,"flexGrow",void 0),wui_flex_decorate([property_n()],t4.prototype,"flexShrink",void 0),wui_flex_decorate([property_n()],t4.prototype,"alignItems",void 0),wui_flex_decorate([property_n()],t4.prototype,"justifyContent",void 0),wui_flex_decorate([property_n()],t4.prototype,"columnGap",void 0),wui_flex_decorate([property_n()],t4.prototype,"rowGap",void 0),wui_flex_decorate([property_n()],t4.prototype,"gap",void 0),wui_flex_decorate([property_n()],t4.prototype,"padding",void 0),wui_flex_decorate([property_n()],t4.prototype,"margin",void 0),t4=wui_flex_decorate([customElement("wui-flex")],t4);var t8=i`
  :host {
    display: block;
    width: 64px;
    height: 64px;
    outline: 8px solid var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host([data-variant='generated']) {
      --mixed-local-color-1: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-1)
      );
      --mixed-local-color-2: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-2)
      );
      --mixed-local-color-3: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-3)
      );
      --mixed-local-color-4: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-4)
      );
      --mixed-local-color-5: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-5)
      );
    }
  }

  :host([data-variant='generated']) {
    outline: 8px solid var(--wui-avatar-border);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    outline: 8px solid var(--wui-avatar-border);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`,wui_avatar_decorate=function(e,t,a,p){var g,m=arguments.length,v=m<3?t:null===p?p=Object.getOwnPropertyDescriptor(t,a):p;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)v=Reflect.decorate(e,t,a,p);else for(var _=e.length-1;_>=0;_--)(g=e[_])&&(v=(m<3?g(v):m>3?g(t,a,v):g(t,a))||v);return m>3&&v&&Object.defineProperty(t,a,v),v};let t7=class extends lit_element_s{constructor(){super(...arguments),this.imageSrc=void 0,this.alt=void 0,this.address=void 0}render(){return eE`${this.visualTemplate()}`}visualTemplate(){if(this.imageSrc)return this.dataset.variant="image",eE`<wui-image src=${this.imageSrc} alt=${this.alt??"avatar"}></wui-image>`;if(this.address){this.dataset.variant="generated";let e=t5.generateAvatarColors(this.address);return this.style.cssText=e,null}return this.dataset.variant="default",null}};t7.styles=[eI,t8],wui_avatar_decorate([property_n()],t7.prototype,"imageSrc",void 0),wui_avatar_decorate([property_n()],t7.prototype,"alt",void 0),wui_avatar_decorate([property_n()],t7.prototype,"address",void 0),t7=wui_avatar_decorate([customElement("wui-avatar")],t7);var t9=i`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-gray-glass-020);
    border-radius: var(--local-border-radius);
    border: var(--local-border);
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`,wui_icon_box_decorate=function(e,t,a,p){var g,m=arguments.length,v=m<3?t:null===p?p=Object.getOwnPropertyDescriptor(t,a):p;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)v=Reflect.decorate(e,t,a,p);else for(var _=e.length-1;_>=0;_--)(g=e[_])&&(v=(m<3?g(v):m>3?g(t,a,v):g(t,a))||v);return m>3&&v&&Object.defineProperty(t,a,v),v};let rt=class extends lit_element_s{constructor(){super(...arguments),this.size="md",this.backgroundColor="accent-100",this.iconColor="accent-100",this.background="transparent",this.border=!1,this.borderColor="wui-color-bg-125",this.icon="copy"}render(){let e="xxs";switch(this.size){case"lg":e="lg";break;case"md":e="md";break;case"mdl":e="mdl";break;case"sm":e="xs";break;default:e="xxs"}let t="lg"===this.size,a="opaque"===this.background,p="accent-100"===this.backgroundColor&&a||"success-100"===this.backgroundColor&&a||"error-100"===this.backgroundColor&&a||"inverse-100"===this.backgroundColor&&a;return this.style.cssText=`
       --local-bg-value: ${p?`var(--wui-icon-box-bg-${this.backgroundColor})`:`var(--wui-color-${this.backgroundColor})`};
       --local-bg-mix: ${p?"100%":t?"12%":"16%"};
       --local-border-radius: var(--wui-border-radius-${t?"xxs":"3xl"});
       --local-size: var(--wui-icon-box-size-${this.size});
       --local-border: ${"wui-color-bg-125"===this.borderColor?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}
   `,eE` <wui-icon color=${this.iconColor} size=${e} name=${this.icon}></wui-icon> `}};rt.styles=[eI,eT,t9],wui_icon_box_decorate([property_n()],rt.prototype,"size",void 0),wui_icon_box_decorate([property_n()],rt.prototype,"backgroundColor",void 0),wui_icon_box_decorate([property_n()],rt.prototype,"iconColor",void 0),wui_icon_box_decorate([property_n()],rt.prototype,"background",void 0),wui_icon_box_decorate([property_n({type:Boolean})],rt.prototype,"border",void 0),wui_icon_box_decorate([property_n()],rt.prototype,"borderColor",void 0),wui_icon_box_decorate([property_n()],rt.prototype,"icon",void 0),rt=wui_icon_box_decorate([customElement("wui-icon-box")],rt);var rr=i`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    background: var(--wui-gray-glass-002);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-005);
  }

  button:disabled {
    background: var(--wui-gray-glass-015);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-flex > wui-avatar {
    filter: grayscale(1);
  }

  button:has(wui-image) {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-3xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
  }

  wui-text {
    color: var(--wui-color-fg-100);
  }

  wui-flex > wui-text {
    color: var(--wui-color-fg-200);
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    outline: 2px solid var(--wui-gray-glass-005);
  }

  wui-flex {
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    padding: 4px var(--wui-spacing-m) 4px var(--wui-spacing-xxs);
  }

  wui-flex.local-no-balance {
    border-radius: 0px;
    border: none;
    background: transparent;
  }

  wui-avatar {
    width: 20px;
    height: 20px;
    outline: 2px solid var(--wui-gray-glass-010);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }

    button:active:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }
  }
`,wui_account_button_decorate=function(e,t,a,p){var g,m=arguments.length,v=m<3?t:null===p?p=Object.getOwnPropertyDescriptor(t,a):p;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)v=Reflect.decorate(e,t,a,p);else for(var _=e.length-1;_>=0;_--)(g=e[_])&&(v=(m<3?g(v):m>3?g(t,a,v):g(t,a))||v);return m>3&&v&&Object.defineProperty(t,a,v),v};let ri=class extends lit_element_s{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.balance=void 0,this.disabled=!1,this.isProfileName=!1,this.address=""}render(){return eE`
      <button ?disabled=${this.disabled}>
        ${this.balanceTemplate()}
        <wui-flex
          gap="xxs"
          alignItems="center"
          class=${if_defined_o(this.balance?void 0:"local-no-balance")}
        >
          <wui-avatar
            .imageSrc=${this.avatarSrc}
            alt=${this.address}
            address=${this.address}
          ></wui-avatar>
          <wui-text variant="paragraph-600" color="inherit">
            ${t5.getTruncateString({string:this.address,charsStart:this.isProfileName?18:4,charsEnd:this.isProfileName?0:6,truncate:this.isProfileName?"end":"middle"})}
          </wui-text>
        </wui-flex>
      </button>
    `}balanceTemplate(){if(this.balance){let e=this.networkSrc?eE`<wui-image src=${this.networkSrc}></wui-image>`:eE`
            <wui-icon-box
              size="sm"
              iconColor="fg-200"
              backgroundColor="fg-300"
              icon="networkPlaceholder"
            ></wui-icon-box>
          `;return eE`
        ${e}
        <wui-text variant="paragraph-600" color="inherit"> ${this.balance} </wui-text>
      `}return null}};ri.styles=[eI,eT,rr],wui_account_button_decorate([property_n()],ri.prototype,"networkSrc",void 0),wui_account_button_decorate([property_n()],ri.prototype,"avatarSrc",void 0),wui_account_button_decorate([property_n()],ri.prototype,"balance",void 0),wui_account_button_decorate([property_n({type:Boolean})],ri.prototype,"disabled",void 0),wui_account_button_decorate([property_n({type:Boolean})],ri.prototype,"isProfileName",void 0),wui_account_button_decorate([property_n()],ri.prototype,"address",void 0),ri=wui_account_button_decorate([customElement("wui-account-button")],ri);var rn=i`
  :host {
    position: relative;
    border-radius: inherit;
    overflow: hidden;
    background-color: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }
`,wui_wallet_image_decorate=function(e,t,a,p){var g,m=arguments.length,v=m<3?t:null===p?p=Object.getOwnPropertyDescriptor(t,a):p;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)v=Reflect.decorate(e,t,a,p);else for(var _=e.length-1;_>=0;_--)(g=e[_])&&(v=(m<3?g(v):m>3?g(t,a,v):g(t,a))||v);return m>3&&v&&Object.defineProperty(t,a,v),v};let ro=class extends lit_element_s{constructor(){super(...arguments),this.size="md",this.name=""}render(){let e="xxs";return e="lg"===this.size?"m":"md"===this.size?"xs":"xxs",this.style.cssText=`
       --local-border-radius: var(--wui-border-radius-${e});
       --local-size: var(--wui-wallet-image-size-${this.size});
   `,this.walletIcon&&(this.dataset.walletIcon=this.walletIcon),eE` ${this.templateVisual()}`}templateVisual(){return this.imageSrc?eE`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:this.walletIcon?eE`<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>`:eE`<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`}};ro.styles=[eI,rn],wui_wallet_image_decorate([property_n()],ro.prototype,"size",void 0),wui_wallet_image_decorate([property_n()],ro.prototype,"name",void 0),wui_wallet_image_decorate([property_n()],ro.prototype,"imageSrc",void 0),wui_wallet_image_decorate([property_n()],ro.prototype,"walletIcon",void 0),ro=wui_wallet_image_decorate([customElement("wui-wallet-image")],ro);var ra=i`
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }
`,wui_all_wallets_image_decorate=function(e,t,a,p){var g,m=arguments.length,v=m<3?t:null===p?p=Object.getOwnPropertyDescriptor(t,a):p;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)v=Reflect.decorate(e,t,a,p);else for(var _=e.length-1;_>=0;_--)(g=e[_])&&(v=(m<3?g(v):m>3?g(t,a,v):g(t,a))||v);return m>3&&v&&Object.defineProperty(t,a,v),v};let rs=class extends lit_element_s{constructor(){super(...arguments),this.walletImages=[]}render(){let e=this.walletImages.length<4;return eE`${this.walletImages.slice(0,4).map(({src:e,walletName:t})=>eE`
          <wui-wallet-image
            size="inherit"
            imageSrc=${e}
            name=${if_defined_o(t)}
          ></wui-wallet-image>
        `)}
    ${e?[...Array(4-this.walletImages.length)].map(()=>eE` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`):null}`}};rs.styles=[eI,ra],wui_all_wallets_image_decorate([property_n({type:Array})],rs.prototype,"walletImages",void 0),rs=wui_all_wallets_image_decorate([customElement("wui-all-wallets-image")],rs);var rl=i`
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-010);
  }

  button[data-size='sm'] {
    padding: 6px 12px;
  }

  ::slotted(*) {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transition: all 200ms ease-in-out;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`,wui_button_decorate=function(e,t,a,p){var g,m=arguments.length,v=m<3?t:null===p?p=Object.getOwnPropertyDescriptor(t,a):p;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)v=Reflect.decorate(e,t,a,p);else for(var _=e.length-1;_>=0;_--)(g=e[_])&&(v=(m<3?g(v):m>3?g(t,a,v):g(t,a))||v);return m>3&&v&&Object.defineProperty(t,a,v),v};let rc=class extends lit_element_s{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.loading=!1,this.variant="fill"}render(){this.style.cssText=`
    --local-width: ${"fullWidth"===this.variant?"100%":"auto"};
    --local-opacity-100: ${this.loading?0:1};
    --local-opacity-000: ${this.loading?1:0};`;let e="md"===this.size?"paragraph-600":"small-600";return eE`
      <button
        data-variant=${this.variant}
        data-size=${this.size}
        ?disabled=${this.disabled||this.loading}
        ontouchstart
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft"></slot>
        <wui-text variant=${e} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}loadingTemplate(){return this.loading?eE`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:eE``}};rc.styles=[eI,eT,rl],wui_button_decorate([property_n()],rc.prototype,"size",void 0),wui_button_decorate([property_n({type:Boolean})],rc.prototype,"disabled",void 0),wui_button_decorate([property_n({type:Boolean})],rc.prototype,"loading",void 0),wui_button_decorate([property_n()],rc.prototype,"variant",void 0),rc=wui_button_decorate([customElement("wui-button")],rc);let ru=ek`<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`;var rd=i`
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-gray-glass-010);
    stroke-width: 1px;
  }
`,wui_card_select_loader_decorate=function(e,t,a,p){var g,m=arguments.length,v=m<3?t:null===p?p=Object.getOwnPropertyDescriptor(t,a):p;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)v=Reflect.decorate(e,t,a,p);else for(var _=e.length-1;_>=0;_--)(g=e[_])&&(v=(m<3?g(v):m>3?g(t,a,v):g(t,a))||v);return m>3&&v&&Object.defineProperty(t,a,v),v};let rh=class extends lit_element_s{constructor(){super(...arguments),this.type="wallet"}render(){return eE`
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `}shimmerTemplate(){return"network"===this.type?eE` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${ru}`:eE`<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`}};rh.styles=[eI,eT,rd],wui_card_select_loader_decorate([property_n()],rh.prototype,"type",void 0),rh=wui_card_select_loader_decorate([customElement("wui-card-select-loader")],rh);let rf=ek`<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`;var rp=i`
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    fill: var(--wui-gray-glass-002);
  }

  svg > path {
    stroke: var(--local-stroke);
    transition: stroke var(--wui-ease-out-power-1) var(--wui-duration-lg);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: var(--wui-gray-glass-002);
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`,wui_network_image_decorate=function(e,t,a,p){var g,m=arguments.length,v=m<3?t:null===p?p=Object.getOwnPropertyDescriptor(t,a):p;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)v=Reflect.decorate(e,t,a,p);else for(var _=e.length-1;_>=0;_--)(g=e[_])&&(v=(m<3?g(v):m>3?g(t,a,v):g(t,a))||v);return m>3&&v&&Object.defineProperty(t,a,v),v};let rg=class extends lit_element_s{constructor(){super(...arguments),this.size="md",this.name="uknown",this.selected=!1}render(){let e="lg"===this.size;return this.style.cssText=`
      --local-stroke: ${this.selected?"var(--wui-color-accent-100)":"var(--wui-gray-glass-010)"};
      --local-path: ${e?"var(--wui-path-network-lg)":"var(--wui-path-network)"};
      --local-width: ${e?"86px":"48px"};
      --local-height: ${e?"96px":"54px"};
      --local-icon-size: ${e?"42px":"24px"};
    `,eE`${this.templateVisual()} ${e?rf:ru}`}templateVisual(){return this.imageSrc?eE`<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>`:eE`<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`}};rg.styles=[eI,rp],wui_network_image_decorate([property_n()],rg.prototype,"size",void 0),wui_network_image_decorate([property_n()],rg.prototype,"name",void 0),wui_network_image_decorate([property_n()],rg.prototype,"imageSrc",void 0),wui_network_image_decorate([property_n({type:Boolean})],rg.prototype,"selected",void 0),rg=wui_network_image_decorate([customElement("wui-network-image")],rg);var rm=i`
  button {
    flex-direction: column;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-0);
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
  }

  button > wui-text {
    color: var(--wui-color-fg-100);
    max-width: 64px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-accent-glass-010);
  }
`,wui_card_select_decorate=function(e,t,a,p){var g,m=arguments.length,v=m<3?t:null===p?p=Object.getOwnPropertyDescriptor(t,a):p;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)v=Reflect.decorate(e,t,a,p);else for(var _=e.length-1;_>=0;_--)(g=e[_])&&(v=(m<3?g(v):m>3?g(t,a,v):g(t,a))||v);return m>3&&v&&Object.defineProperty(t,a,v),v};let rw=class extends lit_element_s{constructor(){super(...arguments),this.name="Unknown",this.type="wallet",this.imageSrc=void 0,this.disabled=!1,this.selected=!1}render(){return eE`
      <button data-selected=${if_defined_o(this.selected)} ?disabled=${this.disabled} ontouchstart>
        ${this.imageTemplate()}
        <wui-text variant="tiny-500" color=${this.selected?"accent-100":"inherit"}>
          ${this.name}
        </wui-text>
      </button>
    `}imageTemplate(){return"network"===this.type?eE`
        <wui-network-image
          .selected=${this.selected}
          imageSrc=${if_defined_o(this.imageSrc)}
          name=${this.name}
        >
        </wui-network-image>
      `:eE`
      <wui-wallet-image size="md" imageSrc=${if_defined_o(this.imageSrc)} name=${this.name}>
      </wui-wallet-image>
    `}};rw.styles=[eI,eT,rm],wui_card_select_decorate([property_n()],rw.prototype,"name",void 0),wui_card_select_decorate([property_n()],rw.prototype,"type",void 0),wui_card_select_decorate([property_n()],rw.prototype,"imageSrc",void 0),wui_card_select_decorate([property_n({type:Boolean})],rw.prototype,"disabled",void 0),wui_card_select_decorate([property_n({type:Boolean})],rw.prototype,"selected",void 0),rw=wui_card_select_decorate([customElement("wui-card-select")],rw);var rb=i`
  a {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  a.disabled > wui-icon,
  a.disabled > wui-image {
    filter: grayscale(1);
  }

  a[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  a[data-variant='shade'] {
    background-color: transparent;
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  a[data-variant='transparent'] {
    column-gap: var(--wui-spacing-xxs);
    background-color: transparent;
    padding: 7px var(--wui-spacing-s) 7px 10px;
    color: var(--wui-color-fg-150);
  }

  a[data-variant='transparent']:has(wui-text:first-child) {
    padding: 7px var(--wui-spacing-s);
  }

  a[data-variant='fill'],
  a[data-variant='shade'] {
    column-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  a[data-variant='fill']:has(wui-text:first-child),
  a[data-variant='shade']:has(wui-text:first-child) {
    padding: 8.5px var(--wui-spacing-m) 9.5px var(--wui-spacing-m);
  }

  a[data-variant='fill'] > wui-image,
  a[data-variant='shade'] > wui-image {
    width: 24px;
    height: 24px;
  }

  a[data-variant='fill'] > wui-image {
    border: 1px solid var(--wui-color-accent-090);
  }

  a[data-variant='shade'] > wui-image {
    border: 1px solid var(--wui-gray-glass-010);
  }

  a[data-variant='fill'] > wui-icon,
  a[data-variant='shade'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-image {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  a[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  a[data-variant='shade']:focus-visible {
    background-color: var(--wui-gray-glass-015);
  }

  a[data-variant='transparent']:focus-visible {
    background-color: var(--wui-gray-glass-005);
  }

  a.disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
    pointer-events: none;
  }

  @media (hover: hover) and (pointer: fine) {
    a[data-variant='fill']:hover {
      background-color: var(--wui-color-accent-090);
    }

    a[data-variant='shade']:hover {
      background-color: var(--wui-gray-glass-015);
    }

    a[data-variant='transparent']:hover {
      background-color: var(--wui-gray-glass-005);
    }
  }

  a[data-variant='fill']:active {
    background-color: var(--wui-color-accent-080);
  }

  a[data-variant='shade']:active {
    background-color: var(--wui-gray-glass-020);
  }

  a[data-variant='transparent']:active {
    background-color: var(--wui-gray-glass-010);
  }
`,wui_chip_decorate=function(e,t,a,p){var g,m=arguments.length,v=m<3?t:null===p?p=Object.getOwnPropertyDescriptor(t,a):p;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)v=Reflect.decorate(e,t,a,p);else for(var _=e.length-1;_>=0;_--)(g=e[_])&&(v=(m<3?g(v):m>3?g(t,a,v):g(t,a))||v);return m>3&&v&&Object.defineProperty(t,a,v),v};let ry=class extends lit_element_s{constructor(){super(...arguments),this.variant="fill",this.imageSrc=void 0,this.disabled=!1,this.icon="externalLink",this.href=""}render(){let e="transparent"===this.variant?"small-600":"paragraph-600";return eE`
      <a
        rel="noreferrer"
        target="_blank"
        href=${this.href}
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
      >
        ${this.imageTemplate()}
        <wui-text variant=${e} color="inherit">
          ${t5.getHostName(this.href)}
        </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </a>
    `}imageTemplate(){return this.imageSrc?eE`<wui-image src=${this.imageSrc}></wui-image>`:null}};ry.styles=[eI,eT,rb],wui_chip_decorate([property_n()],ry.prototype,"variant",void 0),wui_chip_decorate([property_n()],ry.prototype,"imageSrc",void 0),wui_chip_decorate([property_n({type:Boolean})],ry.prototype,"disabled",void 0),wui_chip_decorate([property_n()],ry.prototype,"icon",void 0),wui_chip_decorate([property_n()],ry.prototype,"href",void 0),ry=wui_chip_decorate([customElement("wui-chip")],ry);var rv=i`
  :host {
    position: relative;
    display: block;
  }

  button {
    background: var(--wui-color-accent-100);
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    gap: var(--wui-spacing-xs);
  }

  button.loading {
    background: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    border: 1px solid var(--wui-gray-glass-010);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-080);
    }
  }

  button:focus-visible {
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-color-accent-090);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-size='sm'] {
    padding: 6.75px 10px 7.25px;
  }

  ::slotted(*) {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
    color: var(--wui-color-inverse-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'] + wui-text {
    padding-left: var(--wui-spacing-3xs);
  }

  wui-loading-spinner {
    width: 14px;
    height: 14px;
  }

  wui-loading-spinner::slotted(svg) {
    width: 10px !important;
    height: 10px !important;
  }

  button[data-size='sm'] > wui-loading-spinner {
    width: 12px;
    height: 12px;
  }
`,wui_connect_button_decorate=function(e,t,a,p){var g,m=arguments.length,v=m<3?t:null===p?p=Object.getOwnPropertyDescriptor(t,a):p;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)v=Reflect.decorate(e,t,a,p);else for(var _=e.length-1;_>=0;_--)(g=e[_])&&(v=(m<3?g(v):m>3?g(t,a,v):g(t,a))||v);return m>3&&v&&Object.defineProperty(t,a,v),v};let r_=class extends lit_element_s{constructor(){super(...arguments),this.size="md",this.loading=!1}render(){let e="md"===this.size?"paragraph-600":"small-600";return eE`
      <button data-size=${this.size} ?disabled=${this.loading} ontouchstart>
        ${this.loadingTemplate()}
        <wui-text variant=${e} color=${this.loading?"accent-100":"inherit"}>
          <slot></slot>
        </wui-text>
      </button>
    `}loadingTemplate(){return this.loading?eE`<wui-loading-spinner size=${this.size} color="accent-100"></wui-loading-spinner>`:null}};r_.styles=[eI,eT,rv],wui_connect_button_decorate([property_n()],r_.prototype,"size",void 0),wui_connect_button_decorate([property_n({type:Boolean})],r_.prototype,"loading",void 0),r_=wui_connect_button_decorate([customElement("wui-connect-button")],r_);var rx=i`
  wui-flex {
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`,wui_cta_button_decorate=function(e,t,a,p){var g,m=arguments.length,v=m<3?t:null===p?p=Object.getOwnPropertyDescriptor(t,a):p;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)v=Reflect.decorate(e,t,a,p);else for(var _=e.length-1;_>=0;_--)(g=e[_])&&(v=(m<3?g(v):m>3?g(t,a,v):g(t,a))||v);return m>3&&v&&Object.defineProperty(t,a,v),v};let rC=class extends lit_element_s{constructor(){super(...arguments),this.disabled=!1,this.label="",this.buttonLabel=""}render(){return eE`
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs","2l","1xs","2l"]}
      >
        <wui-text variant="paragraph-500" colo="fg-200">${this.label}</wui-text>
        <wui-button size="sm" variant="accent">
          ${this.buttonLabel}
          <wui-icon size="sm" color="inherit" slot="iconRight" name="chevronRight"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};rC.styles=[eI,eT,rx],wui_cta_button_decorate([property_n({type:Boolean})],rC.prototype,"disabled",void 0),wui_cta_button_decorate([property_n()],rC.prototype,"label",void 0),wui_cta_button_decorate([property_n()],rC.prototype,"buttonLabel",void 0),rC=wui_cta_button_decorate([customElement("wui-cta-button")],rC);/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let{D:rE}={S:eu,A:ed,P:eh,C:1,M:P,L:lit_html_S,R:lit_html_u,V:N,D:M,I:R,H,N:I,U:k,B:L},directive_helpers_f=e=>void 0===e.strings,async_directive_s=(e,t)=>{let a=e._$AN;if(void 0===a)return!1;for(let e of a)e._$AO?.(t,!1),async_directive_s(e,t);return!0},async_directive_o=e=>{let t,a;do{if(void 0===(t=e._$AM))break;(a=t._$AN).delete(e),e=t}while(0===a?.size)},async_directive_r=e=>{for(let t;t=e._$AM;e=t){let a=t._$AN;if(void 0===a)t._$AN=a=new Set;else if(a.has(e))break;a.add(e),async_directive_c(t)}};function async_directive_h(e){void 0!==this._$AN?(async_directive_o(this),this._$AM=e,async_directive_r(this)):this._$AM=e}function async_directive_n(e,t=!1,a=0){let p=this._$AH,g=this._$AN;if(void 0!==g&&0!==g.size){if(t){if(Array.isArray(p))for(let e=a;e<p.length;e++)async_directive_s(p[e],!1),async_directive_o(p[e]);else null!=p&&(async_directive_s(p,!1),async_directive_o(p))}else async_directive_s(this,e)}}let async_directive_c=e=>{2==e.type&&(e._$AP??=async_directive_n,e._$AQ??=async_directive_h)};let async_directive_f=class async_directive_f extends directive_i{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,a){super._$AT(e,t,a),async_directive_r(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(async_directive_s(this,e),async_directive_o(this))}setValue(e){if(directive_helpers_f(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}};/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let ref_e=()=>new ref_h;let ref_h=class ref_h{};let rk=new WeakMap,rS=directive_e(class extends async_directive_f{render(e){return eA}update(e,[t]){let a=t!==this.G;return a&&void 0!==this.G&&this.ot(void 0),(a||this.rt!==this.lt)&&(this.G=t,this.ct=e.options?.host,this.ot(this.lt=e.element)),eA}ot(e){if("function"==typeof this.G){let t=this.ct??globalThis,a=rk.get(t);void 0===a&&(a=new WeakMap,rk.set(t,a)),void 0!==a.get(this.G)&&this.G.call(this.ct,void 0),a.set(this.G,e),void 0!==e&&this.G.call(this.ct,e)}else this.G.value=e}get rt(){return"function"==typeof this.G?rk.get(this.ct??globalThis)?.get(this.G):this.G?.value}disconnected(){this.rt===this.lt&&this.ot(void 0)}reconnected(){this.ot(this.lt)}});var rA=i`
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  input {
    width: 100%;
    border-radius: var(--wui-border-radius-xxs);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    font-size: var(--wui-font-size-paragraph);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-paragraph);
    color: var(--wui-color-fg-100);
    transition: all var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    caret-color: var(--wui-color-accent-100);
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
    background: var(--wui-gray-glass-015);
  }

  input:disabled::placeholder,
  input:disabled + wui-icon {
    color: var(--wui-color-fg-300);
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }

  input:focus:enabled {
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
    background-color: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px var(--wui-spacing-s);
  }

  wui-icon + .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px 36px;
  }

  wui-icon[data-input='sm'] {
    left: var(--wui-spacing-s);
  }

  .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-m);
  }

  wui-icon + .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) 42px;
  }

  wui-icon[data-input='md'] {
    left: var(--wui-spacing-m);
  }

  input:placeholder-shown ~ ::slotted(wui-input-element),
  input:placeholder-shown ~ ::slotted(wui-icon) {
    opacity: 0;
    pointer-events: none;
  }

  ::slotted(wui-input-element),
  ::slotted(wui-icon) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: all var(--wui-ease-in-power-2) var(--wui-duration-md);
  }

  ::slotted(wui-input-element) {
    right: var(--wui-spacing-m);
  }

  ::slotted(wui-icon) {
    right: 0px;
  }
`,wui_input_text_decorate=function(e,t,a,p){var g,m=arguments.length,v=m<3?t:null===p?p=Object.getOwnPropertyDescriptor(t,a):p;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)v=Reflect.decorate(e,t,a,p);else for(var _=e.length-1;_>=0;_--)(g=e[_])&&(v=(m<3?g(v):m>3?g(t,a,v):g(t,a))||v);return m>3&&v&&Object.defineProperty(t,a,v),v};let rP=class extends lit_element_s{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.placeholder="",this.type="text",this.inputElementRef=ref_e()}render(){let e=`wui-size-${this.size}`;return eE` ${this.templateIcon()}
      <input
        ${rS(this.inputElementRef)}
        class=${e}
        type=${this.type}
        enterkeyhint=${if_defined_o(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
      />
      <slot></slot>`}templateIcon(){return this.icon?eE`<wui-icon
        data-input=${this.size}
        size="md"
        color="inherit"
        name=${this.icon}
      ></wui-icon>`:null}dispatchInputChangeEvent(){this.dispatchEvent(new CustomEvent("inputChange",{detail:this.inputElementRef.value?.value,bubbles:!0,composed:!0}))}};rP.styles=[eI,eT,rA],wui_input_text_decorate([property_n()],rP.prototype,"size",void 0),wui_input_text_decorate([property_n()],rP.prototype,"icon",void 0),wui_input_text_decorate([property_n({type:Boolean})],rP.prototype,"disabled",void 0),wui_input_text_decorate([property_n()],rP.prototype,"placeholder",void 0),wui_input_text_decorate([property_n()],rP.prototype,"type",void 0),wui_input_text_decorate([property_n()],rP.prototype,"keyHint",void 0),rP=wui_input_text_decorate([customElement("wui-input-text")],rP);var rD=i`
  :host {
    position: relative;
    display: inline-block;
  }

  wui-icon {
    padding: var(--wui-spacing-xl);
    cursor: pointer;
    transition: all var(--wui-duration-lg) var(--wui-ease-in-power-1);
  }

  wui-icon:hover {
    color: var(--wui-color-fg-200) !important;
  }

  wui-icon::part(chevronRight) {
    width: 12px;
    height: 12px;
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`,wui_email_input_decorate=function(e,t,a,p){var g,m=arguments.length,v=m<3?t:null===p?p=Object.getOwnPropertyDescriptor(t,a):p;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)v=Reflect.decorate(e,t,a,p);else for(var _=e.length-1;_>=0;_--)(g=e[_])&&(v=(m<3?g(v):m>3?g(t,a,v):g(t,a))||v);return m>3&&v&&Object.defineProperty(t,a,v),v};let r$=class extends lit_element_s{render(){return eE`
      <wui-input-text placeholder="Email" icon="mail" size="md">
        <wui-icon size="inherit" color="fg-100" name="chevronRight"></wui-icon>
      </wui-input-text>
      ${this.templateError()}
    `}templateError(){return this.errorMessage?eE`<wui-text variant="tiny-500" color="error-100">${this.errorMessage}</wui-text>`:null}};r$.styles=[eI,rD],wui_email_input_decorate([property_n()],r$.prototype,"errorMessage",void 0),r$=wui_email_input_decorate([customElement("wui-email-input")],r$);var rO=i`
  button {
    border-radius: var(--wui-border-radius-xxs);
    color: var(--wui-color-fg-100);
    padding: var(--wui-spacing-2xs);
  }

  @media (max-width: 700px) {
    button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`,wui_icon_link_decorate=function(e,t,a,p){var g,m=arguments.length,v=m<3?t:null===p?p=Object.getOwnPropertyDescriptor(t,a):p;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)v=Reflect.decorate(e,t,a,p);else for(var _=e.length-1;_>=0;_--)(g=e[_])&&(v=(m<3?g(v):m>3?g(t,a,v):g(t,a))||v);return m>3&&v&&Object.defineProperty(t,a,v),v};let rI=class extends lit_element_s{constructor(){super(...arguments),this.size="md",this.disabled=!1,this.icon="copy",this.iconColor="inherit"}render(){return eE`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `}};rI.styles=[eI,eT,eR,rO],wui_icon_link_decorate([property_n()],rI.prototype,"size",void 0),wui_icon_link_decorate([property_n({type:Boolean})],rI.prototype,"disabled",void 0),wui_icon_link_decorate([property_n()],rI.prototype,"icon",void 0),wui_icon_link_decorate([property_n()],rI.prototype,"iconColor",void 0),rI=wui_icon_link_decorate([customElement("wui-icon-link")],rI);var rT=i`
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  button:active:enabled {
    background-color: var(--wui-color-fg-225);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }
  }
`,wui_input_element_decorate=function(e,t,a,p){var g,m=arguments.length,v=m<3?t:null===p?p=Object.getOwnPropertyDescriptor(t,a):p;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)v=Reflect.decorate(e,t,a,p);else for(var _=e.length-1;_>=0;_--)(g=e[_])&&(v=(m<3?g(v):m>3?g(t,a,v):g(t,a))||v);return m>3&&v&&Object.defineProperty(t,a,v),v};let rR=class extends lit_element_s{constructor(){super(...arguments),this.icon="copy"}render(){return eE`
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `}};rR.styles=[eI,eT,rT],wui_input_element_decorate([property_n()],rR.prototype,"icon",void 0),rR=wui_input_element_decorate([customElement("wui-input-element")],rR);var rB=i`
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-gray-glass-005);
    font-family: var(--wui-font-family);
    font-size: var(--wui-font-size-large);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-large);
    text-align: center;
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    transition: all var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
    background: var(--wui-gray-glass-015);
  }

  input:focus:enabled {
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
    background-color: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-gray-glass-010);
  }
`,wui_input_numeric_decorate=function(e,t,a,p){var g,m=arguments.length,v=m<3?t:null===p?p=Object.getOwnPropertyDescriptor(t,a):p;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)v=Reflect.decorate(e,t,a,p);else for(var _=e.length-1;_>=0;_--)(g=e[_])&&(v=(m<3?g(v):m>3?g(t,a,v):g(t,a))||v);return m>3&&v&&Object.defineProperty(t,a,v),v};let rN=class extends lit_element_s{constructor(){super(...arguments),this.disabled=!1}render(){return eE`<input
      type="number"
      maxlength="1"
      inputmode="numeric"
      autofocus
      ?disabled=${this.disabled}
    /> `}};rN.styles=[eI,eT,rB],wui_input_numeric_decorate([property_n({type:Boolean})],rN.prototype,"disabled",void 0),rN=wui_input_numeric_decorate([customElement("wui-input-numeric")],rN);var rU=i`
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-gray-glass-015);
  }
`,wui_link_decorate=function(e,t,a,p){var g,m=arguments.length,v=m<3?t:null===p?p=Object.getOwnPropertyDescriptor(t,a):p;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)v=Reflect.decorate(e,t,a,p);else for(var _=e.length-1;_>=0;_--)(g=e[_])&&(v=(m<3?g(v):m>3?g(t,a,v):g(t,a))||v);return m>3&&v&&Object.defineProperty(t,a,v),v};let rM=class extends lit_element_s{constructor(){super(...arguments),this.disabled=!1,this.color="inherit"}render(){return eE`
      <button ?disabled=${this.disabled} ontouchstart>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `}};rM.styles=[eI,eT,rU],wui_link_decorate([property_n({type:Boolean})],rM.prototype,"disabled",void 0),wui_link_decorate([property_n()],rM.prototype,"color",void 0),rM=wui_link_decorate([customElement("wui-link")],rM);var rj=i`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 11px 18px 11px var(--wui-spacing-s);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  button[data-iconvariant='square'],
  button[data-iconvariant='square-blue'] {
    padding: 6px 18px 6px 9px;
  }

  button > wui-flex {
    flex: 1;
  }

  button > wui-image {
    width: 32px;
    height: 32px;
    outline: 2px solid var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  button > wui-icon {
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='blue'] {
    outline: 2px solid var(--wui-accent-glass-005);
  }

  button > wui-icon-box[data-variant='overlay'] {
    outline: 2px solid var(--wui-gray-glass-005);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='square-blue']::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-accent-glass-010);
    pointer-events: none;
  }

  button > wui-icon:last-child {
    width: 14px;
    height: 14px;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button[data-loading='true'] > wui-icon {
    transition: opacity 200ms ease-in-out;
    opacity: 0;
  }

  wui-loading-spinner {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`,wui_list_item_decorate=function(e,t,a,p){var g,m=arguments.length,v=m<3?t:null===p?p=Object.getOwnPropertyDescriptor(t,a):p;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)v=Reflect.decorate(e,t,a,p);else for(var _=e.length-1;_>=0;_--)(g=e[_])&&(v=(m<3?g(v):m>3?g(t,a,v):g(t,a))||v);return m>3&&v&&Object.defineProperty(t,a,v),v};let rL=class extends lit_element_s{constructor(){super(...arguments),this.variant="icon",this.disabled=!1,this.imageSrc=void 0,this.alt=void 0,this.chevron=!1,this.loading=!1}render(){return eE`
      <button
        ?disabled=${!!this.loading||!!this.disabled}
        data-loading=${this.loading}
        data-iconvariant=${if_defined_o(this.iconVariant)}
        ontouchstart
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `}visualTemplate(){if("image"===this.variant&&this.imageSrc)return eE`<wui-image src=${this.imageSrc} alt=${this.alt??"list item"}></wui-image>`;if("square"===this.iconVariant&&this.icon&&"icon"===this.variant)return eE`<wui-icon name=${this.icon}></wui-icon>`;if("icon"===this.variant&&this.icon&&this.iconVariant){let e=["blue","square-blue"].includes(this.iconVariant)?"accent-100":"fg-200",t="square-blue"===this.iconVariant?"mdl":"md";return eE`
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          background="transparent"
          iconColor=${e}
          backgroundColor=${e}
          size=${t}
        ></wui-icon-box>
      `}return null}loadingTemplate(){return this.loading?eE`<wui-loading-spinner color="fg-300"></wui-loading-spinner>`:eE``}chevronTemplate(){return this.chevron?eE`<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>`:null}};rL.styles=[eI,eT,rj],wui_list_item_decorate([property_n()],rL.prototype,"icon",void 0),wui_list_item_decorate([property_n()],rL.prototype,"variant",void 0),wui_list_item_decorate([property_n()],rL.prototype,"iconVariant",void 0),wui_list_item_decorate([property_n({type:Boolean})],rL.prototype,"disabled",void 0),wui_list_item_decorate([property_n()],rL.prototype,"imageSrc",void 0),wui_list_item_decorate([property_n()],rL.prototype,"alt",void 0),wui_list_item_decorate([property_n({type:Boolean})],rL.prototype,"chevron",void 0),wui_list_item_decorate([property_n({type:Boolean})],rL.prototype,"loading",void 0),rL=wui_list_item_decorate([customElement("wui-list-item")],rL);var rF=i`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    border: 1px solid var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  :host([data-type='minted']),
  :host([data-type='nftSent']),
  :host([data-type='bought']) {
    border-radius: var(--wui-border-radius-xs);
  }

  wui-image {
    display: block;
    border-radius: inherit;
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }

  wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }
`,wui_transaction_visual_decorate=function(e,t,a,p){var g,m=arguments.length,v=m<3?t:null===p?p=Object.getOwnPropertyDescriptor(t,a):p;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)v=Reflect.decorate(e,t,a,p);else for(var _=e.length-1;_>=0;_--)(g=e[_])&&(v=(m<3?g(v):m>3?g(t,a,v):g(t,a))||v);return m>3&&v&&Object.defineProperty(t,a,v),v};let rz=["withdrawed","buy","cryptoSent","nftSent"],rW=["deposited","received","bought","minted"],rH=["minted","bought","nftSent"],rq=["deposited","withdrawed","cryptoSent","buy","received"],rG=class extends lit_element_s{constructor(){super(...arguments),this.type="buy"}render(){let e="accent-100",t="arrowTop";return rz.includes(this.type)?(e="accent-100",t="arrowTop"):rW.includes(this.type)&&rH.includes(this.type)?(e="success-100",t="arrowBottom"):rW.includes(this.type)&&rq.includes(this.type)?(e="success-100",t="arrowBottom"):(e="accent-100",t="swapVertical"),this.dataset.type=this.type,eE`
      ${this.templateVisual()}
      <wui-icon-box
        size="xs"
        iconColor=${e}
        backgroundColor=${e}
        background="opaque"
        .icon=${t}
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
    `}templateVisual(){return this.imageSrc?eE`<wui-image src=${this.imageSrc} alt=${this.type}></wui-image>`:rH.includes(this.type)?eE`<wui-icon size="inherit" color="fg-200" name="nftPlaceholder"></wui-icon>`:eE`<wui-icon size="inherit" color="fg-200" name="coinPlaceholder"></wui-icon>`}};rG.styles=[eI,rF],wui_transaction_visual_decorate([property_n()],rG.prototype,"type",void 0),wui_transaction_visual_decorate([property_n()],rG.prototype,"imageSrc",void 0),rG=wui_transaction_visual_decorate([customElement("wui-transaction-visual")],rG);var rV=i`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  button > wui-flex > wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  button > wui-flex > wui-text:nth-child(2) {
    text-transform: uppercase;
  }

  button:disabled {
    color: var(--wui-color-fg-300);
  }
`,wui_list_transaction_decorate=function(e,t,a,p){var g,m=arguments.length,v=m<3?t:null===p?p=Object.getOwnPropertyDescriptor(t,a):p;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)v=Reflect.decorate(e,t,a,p);else for(var _=e.length-1;_>=0;_--)(g=e[_])&&(v=(m<3?g(v):m>3?g(t,a,v):g(t,a))||v);return m>3&&v&&Object.defineProperty(t,a,v),v};let rK=class extends lit_element_s{constructor(){super(...arguments),this.type="bought",this.disabled=!1,this.imageSrc="",this.date=new Date,this.transactionDetail=""}render(){let e="nftSent"===this.type||"cryptoSent"===this.type,t=e?"Sent":this.type,a=t5.getFormattedDate(this.date);return eE`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-transaction-visual
          type=${this.type}
          imageSrc=${this.imageSrc}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="3xs">
          <wui-text variant="paragraph-600" color="fg-100">${t}</wui-text>
          <wui-text variant="small-500" color="fg-200">${this.transactionDetail}</wui-text>
        </wui-flex>
        <wui-text variant="micro-700" color="fg-300">${a}</wui-text>
      </button>
    `}};rK.styles=[eI,eT,rV],wui_list_transaction_decorate([property_n()],rK.prototype,"type",void 0),wui_list_transaction_decorate([property_n({type:Boolean})],rK.prototype,"disabled",void 0),wui_list_transaction_decorate([property_n()],rK.prototype,"imageSrc",void 0),wui_list_transaction_decorate([property_n({attribute:!1})],rK.prototype,"date",void 0),wui_list_transaction_decorate([property_n()],rK.prototype,"transactionDetail",void 0),rK=wui_list_transaction_decorate([customElement("wui-list-transaction")],rK);var rZ=i`
  :host {
    display: block;
    padding: 3.5px 5px !important;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }
`,wui_tag_decorate=function(e,t,a,p){var g,m=arguments.length,v=m<3?t:null===p?p=Object.getOwnPropertyDescriptor(t,a):p;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)v=Reflect.decorate(e,t,a,p);else for(var _=e.length-1;_>=0;_--)(g=e[_])&&(v=(m<3?g(v):m>3?g(t,a,v):g(t,a))||v);return m>3&&v&&Object.defineProperty(t,a,v),v};let rQ=class extends lit_element_s{constructor(){super(...arguments),this.variant="main"}render(){return this.dataset.variant=this.variant,eE`
      <wui-text data-variant=${this.variant} variant="micro-700" color="inherit">
        <slot></slot>
      </wui-text>
    `}};rQ.styles=[eI,rZ],wui_tag_decorate([property_n()],rQ.prototype,"variant",void 0),rQ=wui_tag_decorate([customElement("wui-tag")],rQ);var rX=i`
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`,wui_list_wallet_decorate=function(e,t,a,p){var g,m=arguments.length,v=m<3?t:null===p?p=Object.getOwnPropertyDescriptor(t,a):p;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)v=Reflect.decorate(e,t,a,p);else for(var _=e.length-1;_>=0;_--)(g=e[_])&&(v=(m<3?g(v):m>3?g(t,a,v):g(t,a))||v);return m>3&&v&&Object.defineProperty(t,a,v),v};let rY=class extends lit_element_s{constructor(){super(...arguments),this.walletImages=[],this.imageSrc="",this.name="",this.disabled=!1,this.showAllWallets=!1}render(){return eE`
      <button ?disabled=${this.disabled} ontouchstart>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `}templateAllWallets(){return this.showAllWallets&&this.imageSrc?eE` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> `:this.showAllWallets&&this.walletIcon?eE` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> `:null}templateWalletImage(){return!this.showAllWallets&&this.imageSrc?eE`<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
      ></wui-wallet-image>`:this.showAllWallets||this.imageSrc?null:eE`<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`}templateStatus(){return this.tagLabel&&this.tagVariant?eE`<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>`:this.icon?eE`<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>`:null}};rY.styles=[eI,eT,rX],wui_list_wallet_decorate([property_n({type:Array})],rY.prototype,"walletImages",void 0),wui_list_wallet_decorate([property_n()],rY.prototype,"imageSrc",void 0),wui_list_wallet_decorate([property_n()],rY.prototype,"name",void 0),wui_list_wallet_decorate([property_n()],rY.prototype,"tagLabel",void 0),wui_list_wallet_decorate([property_n()],rY.prototype,"tagVariant",void 0),wui_list_wallet_decorate([property_n()],rY.prototype,"icon",void 0),wui_list_wallet_decorate([property_n()],rY.prototype,"walletIcon",void 0),wui_list_wallet_decorate([property_n({type:Boolean})],rY.prototype,"disabled",void 0),wui_list_wallet_decorate([property_n({type:Boolean})],rY.prototype,"showAllWallets",void 0),rY=wui_list_wallet_decorate([customElement("wui-list-wallet")],rY);var rJ=i`
  :host {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-010);
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`,wui_logo_decorate=function(e,t,a,p){var g,m=arguments.length,v=m<3?t:null===p?p=Object.getOwnPropertyDescriptor(t,a):p;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)v=Reflect.decorate(e,t,a,p);else for(var _=e.length-1;_>=0;_--)(g=e[_])&&(v=(m<3?g(v):m>3?g(t,a,v):g(t,a))||v);return m>3&&v&&Object.defineProperty(t,a,v),v};let r0=class extends lit_element_s{constructor(){super(...arguments),this.logo="google"}render(){return eE`<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `}};r0.styles=[eI,rJ],wui_logo_decorate([property_n()],r0.prototype,"logo",void 0),r0=wui_logo_decorate([customElement("wui-logo")],r0);var r1=i`
  :host {
    display: block;
  }

  button {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`,wui_logo_select_decorate=function(e,t,a,p){var g,m=arguments.length,v=m<3?t:null===p?p=Object.getOwnPropertyDescriptor(t,a):p;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)v=Reflect.decorate(e,t,a,p);else for(var _=e.length-1;_>=0;_--)(g=e[_])&&(v=(m<3?g(v):m>3?g(t,a,v):g(t,a))||v);return m>3&&v&&Object.defineProperty(t,a,v),v};let r2=class extends lit_element_s{constructor(){super(...arguments),this.logo="google",this.disabled=!1}render(){return eE`
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-logo logo=${this.logo}></wui-logo>
      </button>
    `}};r2.styles=[eI,eT,r1],wui_logo_select_decorate([property_n()],r2.prototype,"logo",void 0),wui_logo_select_decorate([property_n({type:Boolean})],r2.prototype,"disabled",void 0),r2=wui_logo_select_decorate([customElement("wui-logo-select")],r2);var r3=i`
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-s) var(--wui-spacing-2xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-gray-glass-005);
    color: var(--wui-color-fg-100);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-010);
    }

    button:active:enabled {
      background-color: var(--wui-gray-glass-015);
    }
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    outline: 2px solid var(--wui-gray-glass-005);
  }
`,wui_network_button_decorate=function(e,t,a,p){var g,m=arguments.length,v=m<3?t:null===p?p=Object.getOwnPropertyDescriptor(t,a):p;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)v=Reflect.decorate(e,t,a,p);else for(var _=e.length-1;_>=0;_--)(g=e[_])&&(v=(m<3?g(v):m>3?g(t,a,v):g(t,a))||v);return m>3&&v&&Object.defineProperty(t,a,v),v};let r5=class extends lit_element_s{constructor(){super(...arguments),this.imageSrc=void 0,this.disabled=!1}render(){return eE`
      <button ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant="paragraph-600" color="inherit">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){return this.imageSrc?eE`<wui-image src=${this.imageSrc}></wui-image>`:eE`
      <wui-icon-box
        size="sm"
        iconColor="inverse-100"
        backgroundColor="fg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `}};r5.styles=[eI,eT,r3],wui_network_button_decorate([property_n()],r5.prototype,"imageSrc",void 0),wui_network_button_decorate([property_n({type:Boolean})],r5.prototype,"disabled",void 0),r5=wui_network_button_decorate([customElement("wui-network-button")],r5);var r6=i`
  :host {
    position: relative;
    display: block;
  }
`,wui_otp_decorate=function(e,t,a,p){var g,m=arguments.length,v=m<3?t:null===p?p=Object.getOwnPropertyDescriptor(t,a):p;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)v=Reflect.decorate(e,t,a,p);else for(var _=e.length-1;_>=0;_--)(g=e[_])&&(v=(m<3?g(v):m>3?g(t,a,v):g(t,a))||v);return m>3&&v&&Object.defineProperty(t,a,v),v};let r4=class extends lit_element_s{constructor(){super(...arguments),this.length=6,this.numerics=[],this.handleKeyDown=(e,t)=>{let a=e.target,p=this.getInputElement(a);if(!p)return;["ArrowLeft","ArrowRight","Shift","Delete"].includes(e.key)&&e.preventDefault();let g=p.selectionStart;switch(e.key){case"ArrowLeft":g&&p.setSelectionRange(g+1,g+1),this.focusInputField("prev",t);break;case"ArrowRight":case"Shift":this.focusInputField("next",t);break;case"Delete":case"Backspace":""===p.value?this.focusInputField("prev",t):p.value=""}},this.focusInputField=(e,t)=>{if("next"===e){let e=t+1,a=this.numerics[e<this.length?e:t],p=a?this.getInputElement(a):void 0;p&&p.focus()}if("prev"===e){let e=t-1,a=this.numerics[e>-1?e:t],p=a?this.getInputElement(a):void 0;p&&p.focus()}}}firstUpdated(){let e=this.shadowRoot?.querySelectorAll("wui-input-numeric");e&&(this.numerics=Array.from(e))}render(){return eE`
      <wui-flex gap="xxs">
        ${[...Array(this.length)].map((e,t)=>eE`
            <wui-input-numeric
              @input=${e=>this.handleInput(e,t)}
              @keydown=${e=>this.handleKeyDown(e,t)}
            >
            </wui-input-numeric>
          `)}
      </wui-flex>
    `}handleInput(e,t){let a=e.target,p=this.getInputElement(a);if(p){let a=p.value;if("insertFromPaste"===e.inputType)this.handlePaste(p,a,t);else{let g=t5.isNumber(a);g&&e.data?(p.value=e.data,this.focusInputField("next",t)):p.value=""}}}handlePaste(e,t,a){let p=t[0],g=p&&t5.isNumber(p);if(g){e.value=p;let g=t.substring(1);if(a+1<this.length&&g.length){let e=this.numerics[a+1],t=e?this.getInputElement(e):void 0;t&&this.handlePaste(t,g,a+1)}else this.focusInputField("next",a)}else e.value=""}getInputElement(e){return e.shadowRoot?.querySelector("input")?e.shadowRoot.querySelector("input"):null}};r4.styles=[eI,r6],wui_otp_decorate([property_n({type:Number})],r4.prototype,"length",void 0),r4=wui_otp_decorate([customElement("wui-otp")],r4);var r8=a(92592);function isAdjecentDots(e,t,a){return e!==t&&(e-t<0?t-e:e-t)<=a+.1}let r7={generate(e,t,a){let p="#141414",g=[],m=function(e,t){let a=Array.prototype.slice.call(r8.create(e,{errorCorrectionLevel:"Q"}).modules.data,0),p=Math.sqrt(a.length);return a.reduce((e,t,a)=>(a%p==0?e.push([t]):e[e.length-1].push(t))&&e,[])}(e,0),v=t/m.length,_=[{x:0,y:0},{x:1,y:0},{x:0,y:1}];_.forEach(({x:e,y:t})=>{let a=(m.length-7)*v*e,x=(m.length-7)*v*t;for(let e=0;e<_.length;e+=1){let t=v*(7-2*e);g.push(ek`
            <rect
              fill=${2===e?p:"transparent"}
              width=${0===e?t-5:t}
              rx= ${0===e?(t-5)*.45:.45*t}
              ry= ${0===e?(t-5)*.45:.45*t}
              stroke=${p}
              stroke-width=${0===e?5:0}
              height=${0===e?t-5:t}
              x= ${0===e?x+v*e+2.5:x+v*e}
              y= ${0===e?a+v*e+2.5:a+v*e}
            />
          `)}});let x=Math.floor((a+25)/v),T=m.length/2-x/2,F=m.length/2+x/2-1,z=[];m.forEach((e,t)=>{e.forEach((e,a)=>{if(m[t][a]&&!(t<7&&a<7||t>m.length-8&&a<7||t<7&&a>m.length-8)&&!(t>T&&t<F&&a>T&&a<F)){let e=t*v+v/2,p=a*v+v/2;z.push([e,p])}})});let W={};return z.forEach(([e,t])=>{W[e]?W[e]?.push(t):W[e]=[t]}),Object.entries(W).map(([e,t])=>{let a=t.filter(e=>t.every(t=>!isAdjecentDots(e,t,v)));return[Number(e),a]}).forEach(([e,t])=>{t.forEach(t=>{g.push(ek`<circle cx=${e} cy=${t} fill=${p} r=${v/2.5} />`)})}),Object.entries(W).filter(([e,t])=>t.length>1).map(([e,t])=>{let a=t.filter(e=>t.some(t=>isAdjecentDots(e,t,v)));return[Number(e),a]}).map(([e,t])=>{t.sort((e,t)=>e<t?-1:1);let a=[];for(let e of t){let t=a.find(t=>t.some(t=>isAdjecentDots(e,t,v)));t?t.push(e):a.push([e])}return[e,a.map(e=>[e[0],e[e.length-1]])]}).forEach(([e,t])=>{t.forEach(([t,a])=>{g.push(ek`
              <line
                x1=${e}
                x2=${e}
                y1=${t}
                y2=${a}
                stroke=${p}
                stroke-width=${v/1.25}
                stroke-linecap="round"
              />
            `)})}),g}};var r9=i`
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    outline: 1px solid var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }
`,wui_qr_code_decorate=function(e,t,a,p){var g,m=arguments.length,v=m<3?t:null===p?p=Object.getOwnPropertyDescriptor(t,a):p;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)v=Reflect.decorate(e,t,a,p);else for(var _=e.length-1;_>=0;_--)(g=e[_])&&(v=(m<3?g(v):m>3?g(t,a,v):g(t,a))||v);return m>3&&v&&Object.defineProperty(t,a,v),v};let ir=class extends lit_element_s{constructor(){super(...arguments),this.uri="",this.size=0,this.theme="dark",this.imageSrc=void 0,this.alt=void 0}render(){return this.dataset.theme=this.theme,this.style.cssText=`--local-size: ${this.size}px`,eE`${this.templateVisual()} ${this.templateSvg()}`}templateSvg(){let e="light"===this.theme?this.size:this.size-32;return ek`
      <svg height=${e} width=${e}>
        ${r7.generate(this.uri,e,e/4)}
      </svg>
    `}templateVisual(){return this.imageSrc?eE`<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>`:eE`<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`}};ir.styles=[eI,r9],wui_qr_code_decorate([property_n()],ir.prototype,"uri",void 0),wui_qr_code_decorate([property_n({type:Number})],ir.prototype,"size",void 0),wui_qr_code_decorate([property_n()],ir.prototype,"theme",void 0),wui_qr_code_decorate([property_n()],ir.prototype,"imageSrc",void 0),wui_qr_code_decorate([property_n()],ir.prototype,"alt",void 0),ir=wui_qr_code_decorate([customElement("wui-qr-code")],ir);var ii=i`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;let io=class extends lit_element_s{constructor(){super(...arguments),this.inputComponentRef=ref_e()}render(){return eE`
      <wui-input-text
        ${rS(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `}clearValue(){let e=this.inputComponentRef.value,t=e?.inputElementRef.value;t&&(t.value="",t.focus(),t.dispatchEvent(new Event("input")))}};io.styles=[eI,ii],io=function(e,t,a,p){var g,m=arguments.length,v=m<3?t:null===p?p=Object.getOwnPropertyDescriptor(t,a):p;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)v=Reflect.decorate(e,t,a,p);else for(var _=e.length-1;_>=0;_--)(g=e[_])&&(v=(m<3?g(v):m>3?g(t,a,v):g(t,a))||v);return m>3&&v&&Object.defineProperty(t,a,v),v}([customElement("wui-search-bar")],io);var ia=i`
  :host {
    display: flex;
    column-gap: var(--wui-spacing-xs);
    align-items: center;
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-color-bg-175);
    box-shadow:
      0px 14px 64px -4px rgba(0, 0, 0, 0.15),
      0px 8px 22px -6px rgba(0, 0, 0, 0.15);
  }
`,wui_snackbar_decorate=function(e,t,a,p){var g,m=arguments.length,v=m<3?t:null===p?p=Object.getOwnPropertyDescriptor(t,a):p;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)v=Reflect.decorate(e,t,a,p);else for(var _=e.length-1;_>=0;_--)(g=e[_])&&(v=(m<3?g(v):m>3?g(t,a,v):g(t,a))||v);return m>3&&v&&Object.defineProperty(t,a,v),v};let is=class extends lit_element_s{constructor(){super(...arguments),this.backgroundColor="accent-100",this.iconColor="accent-100",this.icon="checkmark",this.message=""}render(){return eE`
      <wui-icon-box
        size="sm"
        iconColor=${this.iconColor}
        backgroundColor=${this.backgroundColor}
        icon=${this.icon}
      ></wui-icon-box>
      <wui-text variant="paragraph-500" color="fg-100">${this.message}</wui-text>
    `}};is.styles=[eI,ia],wui_snackbar_decorate([property_n()],is.prototype,"backgroundColor",void 0),wui_snackbar_decorate([property_n()],is.prototype,"iconColor",void 0),wui_snackbar_decorate([property_n()],is.prototype,"icon",void 0),wui_snackbar_decorate([property_n()],is.prototype,"message",void 0),is=wui_snackbar_decorate([customElement("wui-snackbar")],is);var il=i`
  :host {
    display: inline-flex;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  button {
    width: var(--local-tab-width);
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    color: var(--wui-color-fg-125);
  }
`,wui_tabs_decorate=function(e,t,a,p){var g,m=arguments.length,v=m<3?t:null===p?p=Object.getOwnPropertyDescriptor(t,a):p;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)v=Reflect.decorate(e,t,a,p);else for(var _=e.length-1;_>=0;_--)(g=e[_])&&(v=(m<3?g(v):m>3?g(t,a,v):g(t,a))||v);return m>3&&v&&Object.defineProperty(t,a,v),v};let ic=class extends lit_element_s{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.buttons=[],this.disabled=!1,this.activeTab=0,this.localTabWidth="100px",this.isDense=!1}render(){return this.isDense=this.tabs.length>3,this.style.cssText=`
      --local-tab: ${this.activeTab};
      --local-tab-width: ${this.localTabWidth};
    `,this.dataset.type=this.isDense?"flex":"block",this.tabs.map((e,t)=>{let a=t===this.activeTab;return eE`
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(t)}
          data-active=${a}
        >
          <wui-icon size="sm" color="inherit" name=${e.icon}></wui-icon>
          <wui-text variant="small-600" color="inherit"> ${e.label} </wui-text>
        </button>
      `})}firstUpdated(){this.shadowRoot&&this.isDense&&(this.buttons=[...this.shadowRoot.querySelectorAll("button")],setTimeout(()=>{this.animateTabs(0,!0)},0))}onTabClick(e){this.buttons&&this.animateTabs(e,!1),this.activeTab=e,this.onTabChange(e)}animateTabs(e,t){let a=this.buttons[this.activeTab],p=this.buttons[e],g=a?.querySelector("wui-text"),m=p?.querySelector("wui-text"),v=p?.getBoundingClientRect(),_=m?.getBoundingClientRect();a&&g&&!t&&e!==this.activeTab&&(g.animate([{opacity:0}],{duration:200,easing:"ease",fill:"forwards"}),a.animate([{width:"34px"}],{duration:500,easing:"ease",fill:"forwards"})),p&&v&&_&&m&&(e!==this.activeTab||t)&&(this.localTabWidth=`${Math.round(v.width+_.width)+6}px`,p.animate([{width:`${v.width+_.width}px`}],{duration:t?0:500,fill:"forwards",easing:"ease"}),m.animate([{opacity:1}],{duration:t?0:250,delay:t?0:50,fill:"forwards",easing:"ease"}))}};ic.styles=[eI,eT,il],wui_tabs_decorate([property_n({type:Array})],ic.prototype,"tabs",void 0),wui_tabs_decorate([property_n()],ic.prototype,"onTabChange",void 0),wui_tabs_decorate([property_n({type:Array})],ic.prototype,"buttons",void 0),wui_tabs_decorate([property_n({type:Boolean})],ic.prototype,"disabled",void 0),wui_tabs_decorate([state_r()],ic.prototype,"activeTab",void 0),wui_tabs_decorate([state_r()],ic.prototype,"localTabWidth",void 0),wui_tabs_decorate([state_r()],ic.prototype,"isDense",void 0),ic=wui_tabs_decorate([customElement("wui-tabs")],ic);var iu=i`
  :host {
    display: block;
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    background-color: var(--wui-color-fg-100);
    color: var(--wui-color-bg-100);
    position: relative;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  wui-icon[data-placement='top'] {
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`,wui_tooltip_decorate=function(e,t,a,p){var g,m=arguments.length,v=m<3?t:null===p?p=Object.getOwnPropertyDescriptor(t,a):p;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)v=Reflect.decorate(e,t,a,p);else for(var _=e.length-1;_>=0;_--)(g=e[_])&&(v=(m<3?g(v):m>3?g(t,a,v):g(t,a))||v);return m>3&&v&&Object.defineProperty(t,a,v),v};let id=class extends lit_element_s{constructor(){super(...arguments),this.placement="top",this.message=""}render(){return eE`<wui-icon
        data-placement=${this.placement}
        color="fg-100"
        size="inherit"
        name="cursor"
      ></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>`}};id.styles=[eI,eT,iu],wui_tooltip_decorate([property_n()],id.prototype,"placement",void 0),wui_tooltip_decorate([property_n()],id.prototype,"message",void 0),id=wui_tooltip_decorate([customElement("wui-tooltip")],id);var ih=i`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`,wui_grid_decorate=function(e,t,a,p){var g,m=arguments.length,v=m<3?t:null===p?p=Object.getOwnPropertyDescriptor(t,a):p;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)v=Reflect.decorate(e,t,a,p);else for(var _=e.length-1;_>=0;_--)(g=e[_])&&(v=(m<3?g(v):m>3?g(t,a,v):g(t,a))||v);return m>3&&v&&Object.defineProperty(t,a,v),v};let ip=class extends lit_element_s{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&t5.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&t5.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&t5.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&t5.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&t5.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&t5.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&t5.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&t5.getSpacingStyles(this.margin,3)};
    `,eE`<slot></slot>`}};ip.styles=[eI,ih],wui_grid_decorate([property_n()],ip.prototype,"gridTemplateRows",void 0),wui_grid_decorate([property_n()],ip.prototype,"gridTemplateColumns",void 0),wui_grid_decorate([property_n()],ip.prototype,"justifyItems",void 0),wui_grid_decorate([property_n()],ip.prototype,"alignItems",void 0),wui_grid_decorate([property_n()],ip.prototype,"justifyContent",void 0),wui_grid_decorate([property_n()],ip.prototype,"alignContent",void 0),wui_grid_decorate([property_n()],ip.prototype,"columnGap",void 0),wui_grid_decorate([property_n()],ip.prototype,"rowGap",void 0),wui_grid_decorate([property_n()],ip.prototype,"gap",void 0),wui_grid_decorate([property_n()],ip.prototype,"padding",void 0),wui_grid_decorate([property_n()],ip.prototype,"margin",void 0),ip=wui_grid_decorate([customElement("wui-grid")],ip);var ig=i`
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: var(--wui-gray-glass-005);
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 10px;
    background-color: var(--wui-color-bg-125);
  }
`,wui_separator_decorate=function(e,t,a,p){var g,m=arguments.length,v=m<3?t:null===p?p=Object.getOwnPropertyDescriptor(t,a):p;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)v=Reflect.decorate(e,t,a,p);else for(var _=e.length-1;_>=0;_--)(g=e[_])&&(v=(m<3?g(v):m>3?g(t,a,v):g(t,a))||v);return m>3&&v&&Object.defineProperty(t,a,v),v};let im=class extends lit_element_s{constructor(){super(...arguments),this.text=""}render(){return eE`${this.template()}`}template(){return this.text?eE`<wui-text variant="small-500" color="fg-200">${this.text}</wui-text>`:null}};im.styles=[eI,ig],wui_separator_decorate([property_n()],im.prototype,"text",void 0),im=wui_separator_decorate([customElement("wui-separator")],im)},6802:function(e,t,a){"use strict";let p;a.d(t,{OY:function(){return createWeb3Modal},o1:function(){return defaultWagmiConfig},y7:function(){return useWeb3ModalTheme}});var g,m,v,_,x,T,F,z,W,K,Z,Q,X,Y,J,ei,en,eo,ea,es,el,ec,eu,ed,eh=a(67294),ef=a(72147),ep=a(66403),eg=a(36635),em=a(6894),ew=a(92233),eb=a(18569),ey=a(88382);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let o=e=>e??ey.Ld;var __decorate=function(e,t,a,p){var g,m=arguments.length,v=m<3?t:null===p?p=Object.getOwnPropertyDescriptor(t,a):p;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)v=Reflect.decorate(e,t,a,p);else for(var _=e.length-1;_>=0;_--)(g=e[_])&&(v=(m<3?g(v):m>3?g(t,a,v):g(t,a))||v);return m>3&&v&&Object.defineProperty(t,a,v),v};let ev=class extends ew.oi{constructor(){super(),this.unsubscribe=[],this.networkImages=eg.WM.state.networkImages,this.disabled=!1,this.balance="show",this.address=eg.AccountController.state.address,this.balanceVal=eg.AccountController.state.balance,this.balanceSymbol=eg.AccountController.state.balanceSymbol,this.profileName=eg.AccountController.state.profileName,this.profileImage=eg.AccountController.state.profileImage,this.network=eg.NetworkController.state.caipNetwork,this.unsubscribe.push(...[eg.AccountController.subscribe(e=>{e.isConnected?(this.address=e.address,this.balanceVal=e.balance,this.profileName=e.profileName,this.profileImage=e.profileImage,this.balanceSymbol=e.balanceSymbol):(this.address="",this.balanceVal="",this.profileName="",this.profileImage="",this.balanceSymbol="")}),eg.NetworkController.subscribeKey("caipNetwork",e=>this.network=e)])}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.networkImages[this.network?.imageId??""],t="show"===this.balance;return ew.dy`
      <wui-account-button
        .disabled=${!!this.disabled}
        address=${o(this.profileName??this.address)}
        ?isProfileName=${!!this.profileName}
        networkSrc=${o(e)}
        avatarSrc=${o(this.profileImage)}
        balance=${t?eg.j1.formatBalance(this.balanceVal,this.balanceSymbol):""}
        @click=${this.onClick.bind(this)}
      >
      </wui-account-button>
    `}onClick(){eg.IN.open()}};__decorate([(0,eb.Cb)({type:Boolean})],ev.prototype,"disabled",void 0),__decorate([(0,eb.Cb)()],ev.prototype,"balance",void 0),__decorate([(0,eb.SB)()],ev.prototype,"address",void 0),__decorate([(0,eb.SB)()],ev.prototype,"balanceVal",void 0),__decorate([(0,eb.SB)()],ev.prototype,"balanceSymbol",void 0),__decorate([(0,eb.SB)()],ev.prototype,"profileName",void 0),__decorate([(0,eb.SB)()],ev.prototype,"profileImage",void 0),__decorate([(0,eb.SB)()],ev.prototype,"network",void 0),ev=__decorate([(0,em.customElement)("w3m-account-button")],ev);var w3m_button_decorate=function(e,t,a,p){var g,m=arguments.length,v=m<3?t:null===p?p=Object.getOwnPropertyDescriptor(t,a):p;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)v=Reflect.decorate(e,t,a,p);else for(var _=e.length-1;_>=0;_--)(g=e[_])&&(v=(m<3?g(v):m>3?g(t,a,v):g(t,a))||v);return m>3&&v&&Object.defineProperty(t,a,v),v};let e_=class extends ew.oi{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.balance=void 0,this.size=void 0,this.label=void 0,this.loadingLabel=void 0,this.isAccount=eg.AccountController.state.isConnected,this.unsubscribe.push(eg.AccountController.subscribeKey("isConnected",e=>{this.isAccount=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return this.isAccount?ew.dy`
          <w3m-account-button
            .disabled=${!!this.disabled}
            balance=${o(this.balance)}
          >
          </w3m-account-button>
        `:ew.dy`
          <w3m-connect-button
            size=${o(this.size)}
            label=${o(this.label)}
            loadingLabel=${o(this.loadingLabel)}
          ></w3m-connect-button>
        `}};w3m_button_decorate([(0,eb.Cb)({type:Boolean})],e_.prototype,"disabled",void 0),w3m_button_decorate([(0,eb.Cb)()],e_.prototype,"balance",void 0),w3m_button_decorate([(0,eb.Cb)()],e_.prototype,"size",void 0),w3m_button_decorate([(0,eb.Cb)()],e_.prototype,"label",void 0),w3m_button_decorate([(0,eb.Cb)()],e_.prototype,"loadingLabel",void 0),w3m_button_decorate([(0,eb.SB)()],e_.prototype,"isAccount",void 0),e_=w3m_button_decorate([(0,em.customElement)("w3m-button")],e_);var w3m_connect_button_decorate=function(e,t,a,p){var g,m=arguments.length,v=m<3?t:null===p?p=Object.getOwnPropertyDescriptor(t,a):p;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)v=Reflect.decorate(e,t,a,p);else for(var _=e.length-1;_>=0;_--)(g=e[_])&&(v=(m<3?g(v):m>3?g(t,a,v):g(t,a))||v);return m>3&&v&&Object.defineProperty(t,a,v),v};let ex=class extends ew.oi{constructor(){super(),this.unsubscribe=[],this.size="md",this.label="Connect Wallet",this.loadingLabel="Connecting...",this.open=eg.IN.state.open,this.unsubscribe.push(eg.IN.subscribeKey("open",e=>this.open=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return ew.dy`
      <wui-connect-button
        size=${o(this.size)}
        .loading=${this.open}
        @click=${this.onClick.bind(this)}
      >
        ${this.open?this.loadingLabel:this.label}
      </wui-connect-button>
    `}onClick(){this.open?eg.IN.close():eg.IN.open()}};w3m_connect_button_decorate([(0,eb.Cb)()],ex.prototype,"size",void 0),w3m_connect_button_decorate([(0,eb.Cb)()],ex.prototype,"label",void 0),w3m_connect_button_decorate([(0,eb.Cb)()],ex.prototype,"loadingLabel",void 0),w3m_connect_button_decorate([(0,eb.SB)()],ex.prototype,"open",void 0),ex=w3m_connect_button_decorate([(0,em.customElement)("w3m-connect-button")],ex),a(90078);var w3m_network_button_decorate=function(e,t,a,p){var g,m=arguments.length,v=m<3?t:null===p?p=Object.getOwnPropertyDescriptor(t,a):p;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)v=Reflect.decorate(e,t,a,p);else for(var _=e.length-1;_>=0;_--)(g=e[_])&&(v=(m<3?g(v):m>3?g(t,a,v):g(t,a))||v);return m>3&&v&&Object.defineProperty(t,a,v),v};let eC=class extends ew.oi{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.network=eg.NetworkController.state.caipNetwork,this.connected=eg.AccountController.state.isConnected,this.unsubscribe.push(...[eg.NetworkController.subscribeKey("caipNetwork",e=>this.network=e),eg.AccountController.subscribeKey("isConnected",e=>this.connected=e)])}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return ew.dy`
      <wui-network-button
        .disabled=${!!this.disabled}
        imageSrc=${o(eg.fz.getNetworkImage(this.network))}
        @click=${this.onClick.bind(this)}
      >
        ${this.network?.name??(this.connected?"Unknown Network":"Select Network")}
      </wui-network-button>
    `}onClick(){eg.IN.open({view:"Networks"})}};w3m_network_button_decorate([(0,eb.Cb)({type:Boolean})],eC.prototype,"disabled",void 0),w3m_network_button_decorate([(0,eb.SB)()],eC.prototype,"network",void 0),w3m_network_button_decorate([(0,eb.SB)()],eC.prototype,"connected",void 0),eC=w3m_network_button_decorate([(0,em.customElement)("w3m-network-button")],eC);var eE=ew.iv`
  :host {
    display: block;
    will-change: transform, opacity;
  }
`,w3m_router_decorate=function(e,t,a,p){var g,m=arguments.length,v=m<3?t:null===p?p=Object.getOwnPropertyDescriptor(t,a):p;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)v=Reflect.decorate(e,t,a,p);else for(var _=e.length-1;_>=0;_--)(g=e[_])&&(v=(m<3?g(v):m>3?g(t,a,v):g(t,a))||v);return m>3&&v&&Object.defineProperty(t,a,v),v};let ek=class extends ew.oi{constructor(){super(),this.resizeObserver=void 0,this.prevHeight="0px",this.prevHistoryLength=1,this.unsubscribe=[],this.view=eg.RouterController.state.view,this.unsubscribe.push(eg.RouterController.subscribeKey("view",e=>this.onViewChange(e)))}firstUpdated(){this.resizeObserver=new ResizeObserver(async([e])=>{let t=`${e?.contentRect.height}px`;"0px"!==this.prevHeight&&(await this.animate([{height:this.prevHeight},{height:t}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.style.height="auto"),this.prevHeight=t}),this.resizeObserver.observe(this.getWrapper())}disconnectedCallback(){this.resizeObserver?.unobserve(this.getWrapper()),this.unsubscribe.forEach(e=>e())}render(){return ew.dy`<div>${this.viewTemplate()}</div>`}viewTemplate(){switch(this.view){case"Connect":default:return ew.dy`<w3m-connect-view></w3m-connect-view>`;case"ConnectingWalletConnect":return ew.dy`<w3m-connecting-wc-view></w3m-connecting-wc-view>`;case"ConnectingExternal":return ew.dy`<w3m-connecting-external-view></w3m-connecting-external-view>`;case"AllWallets":return ew.dy`<w3m-all-wallets-view></w3m-all-wallets-view>`;case"Networks":return ew.dy`<w3m-networks-view></w3m-networks-view>`;case"SwitchNetwork":return ew.dy`<w3m-network-switch-view></w3m-network-switch-view>`;case"Account":return ew.dy`<w3m-account-view></w3m-account-view>`;case"WhatIsAWallet":return ew.dy`<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;case"WhatIsANetwork":return ew.dy`<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;case"GetWallet":return ew.dy`<w3m-get-wallet-view></w3m-get-wallet-view>`;case"Downloads":return ew.dy`<w3m-downloads-view></w3m-downloads-view>`}}async onViewChange(e){let{history:t}=eg.RouterController.state,a=-10,p=10;t.length<this.prevHistoryLength&&(a=10,p=-10),this.prevHistoryLength=t.length,await this.animate([{opacity:1,transform:"translateX(0px)"},{opacity:0,transform:`translateX(${a}px)`}],{duration:150,easing:"ease",fill:"forwards"}).finished,this.view=e,await this.animate([{opacity:0,transform:`translateX(${p}px)`},{opacity:1,transform:"translateX(0px)"}],{duration:150,easing:"ease",fill:"forwards",delay:50}).finished}getWrapper(){return this.shadowRoot?.querySelector("div")}};ek.styles=eE,w3m_router_decorate([(0,eb.SB)()],ek.prototype,"view",void 0),ek=w3m_router_decorate([(0,em.customElement)("w3m-router")],ek);var eS=ew.iv`
  wui-flex {
    width: 100%;
  }

  :host > wui-flex:first-child {
    transform: translateY(calc(var(--wui-spacing-xxs) * -1));
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }
`,w3m_account_view_decorate=function(e,t,a,p){var g,m=arguments.length,v=m<3?t:null===p?p=Object.getOwnPropertyDescriptor(t,a):p;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)v=Reflect.decorate(e,t,a,p);else for(var _=e.length-1;_>=0;_--)(g=e[_])&&(v=(m<3?g(v):m>3?g(t,a,v):g(t,a))||v);return m>3&&v&&Object.defineProperty(t,a,v),v};let eA=class extends ew.oi{constructor(){super(),this.usubscribe=[],this.networkImages=eg.WM.state.networkImages,this.address=eg.AccountController.state.address,this.profileImage=eg.AccountController.state.profileImage,this.profileName=eg.AccountController.state.profileName,this.balance=eg.AccountController.state.balance,this.balanceSymbol=eg.AccountController.state.balanceSymbol,this.network=eg.NetworkController.state.caipNetwork,this.disconecting=!1,this.usubscribe.push(...[eg.AccountController.subscribe(e=>{e.address?(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName,this.balance=e.balance,this.balanceSymbol=e.balanceSymbol):eg.IN.close()})],eg.NetworkController.subscribeKey("caipNetwork",e=>{e?.id&&(this.network=e)}))}disconnectedCallback(){this.usubscribe.forEach(e=>e())}render(){if(!this.address)throw Error("w3m-account-view: No account provided");let e=this.networkImages[this.network?.imageId??""];return ew.dy`
      <wui-flex
        flexDirection="column"
        .padding=${["0","s","m","s"]}
        alignItems="center"
        gap="l"
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${o(this.profileImage)}
        ></wui-avatar>

        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="large-600" color="fg-100">
              ${this.profileName?em.UiHelperUtil.getTruncateString({string:this.profileName,charsStart:20,charsEnd:0,truncate:"end"}):em.UiHelperUtil.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
          <wui-flex gap="s" flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-500" color="fg-200">
              ${eg.j1.formatBalance(this.balance,this.balanceSymbol)}
            </wui-text>

            ${this.explorerBtnTemplate()}
          </wui-flex>
        </wui-flex>
      </wui-flex>

      <wui-flex flexDirection="column" gap="xs" .padding=${["0","s","s","s"]}>
        <wui-list-item
          .variant=${e?"image":"icon"}
          iconVariant="overlay"
          icon="networkPlaceholder"
          imageSrc=${o(e)}
          ?chevron=${this.isAllowedNetworkSwitch()}
          @click=${this.onNetworks.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-100">
            ${this.network?.name??"Unknown"}
          </wui-text>
        </wui-list-item>
        <wui-list-item
          variant="icon"
          iconVariant="overlay"
          icon="disconnect"
          ?chevron=${!1}
          .loading=${this.disconecting}
          @click=${this.onDisconnect.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>
    `}explorerBtnTemplate(){let{addressExplorerUrl:e}=eg.AccountController.state;return e?ew.dy`
      <wui-button size="sm" variant="shade" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `:null}isAllowedNetworkSwitch(){let{requestedCaipNetworks:e}=eg.NetworkController.state,t=!!e&&e.length>1,a=e?.find(({id:e})=>e===this.network?.id);return t||!a}onCopyAddress(){try{this.address&&(eg.j1.copyToClopboard(this.address),eg.SnackController.showSuccess("Address copied"))}catch{eg.SnackController.showError("Failed to copy")}}onNetworks(){this.isAllowedNetworkSwitch()&&eg.RouterController.push("Networks")}async onDisconnect(){try{this.disconecting=!0,await eg.ConnectionController.disconnect(),eg.Xs.sendEvent({type:"track",event:"DISCONNECT_SUCCESS"}),eg.IN.close()}catch{eg.Xs.sendEvent({type:"track",event:"DISCONNECT_ERROR"}),eg.SnackController.showError("Failed to disconnect")}finally{this.disconecting=!1}}onExplorer(){let{addressExplorerUrl:e}=eg.AccountController.state;e&&eg.j1.openHref(e,"_blank")}};eA.styles=eS,w3m_account_view_decorate([(0,eb.SB)()],eA.prototype,"address",void 0),w3m_account_view_decorate([(0,eb.SB)()],eA.prototype,"profileImage",void 0),w3m_account_view_decorate([(0,eb.SB)()],eA.prototype,"profileName",void 0),w3m_account_view_decorate([(0,eb.SB)()],eA.prototype,"balance",void 0),w3m_account_view_decorate([(0,eb.SB)()],eA.prototype,"balanceSymbol",void 0),w3m_account_view_decorate([(0,eb.SB)()],eA.prototype,"network",void 0),w3m_account_view_decorate([(0,eb.SB)()],eA.prototype,"disconecting",void 0),eA=w3m_account_view_decorate([(0,em.customElement)("w3m-account-view")],eA);var w3m_all_wallets_view_decorate=function(e,t,a,p){var g,m=arguments.length,v=m<3?t:null===p?p=Object.getOwnPropertyDescriptor(t,a):p;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)v=Reflect.decorate(e,t,a,p);else for(var _=e.length-1;_>=0;_--)(g=e[_])&&(v=(m<3?g(v):m>3?g(t,a,v):g(t,a))||v);return m>3&&v&&Object.defineProperty(t,a,v),v};let eP=class extends ew.oi{constructor(){super(...arguments),this.search="",this.onDebouncedSearch=eg.j1.debounce(e=>{this.search=e})}render(){let e=this.search.length>=2;return ew.dy`
      <wui-flex padding="s" gap="s">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${e?ew.dy`<w3m-all-wallets-search query=${this.search}></w3m-all-wallets-search>`:ew.dy`<w3m-all-wallets-list></w3m-all-wallets-list>`}
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}qrButtonTemplate(){return eg.j1.isMobile()?ew.dy`
        <wui-icon-box
          size="lg"
          iconcolor="accent-100"
          backgroundcolor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){eg.RouterController.push("ConnectingWalletConnect")}};w3m_all_wallets_view_decorate([(0,eb.SB)()],eP.prototype,"search",void 0),eP=w3m_all_wallets_view_decorate([(0,em.customElement)("w3m-all-wallets-view")],eP);var eD=ew.iv`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  wui-flex::-webkit-scrollbar {
    display: none;
  }
`,w3m_connect_view_decorate=function(e,t,a,p){var g,m=arguments.length,v=m<3?t:null===p?p=Object.getOwnPropertyDescriptor(t,a):p;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)v=Reflect.decorate(e,t,a,p);else for(var _=e.length-1;_>=0;_--)(g=e[_])&&(v=(m<3?g(v):m>3?g(t,a,v):g(t,a))||v);return m>3&&v&&Object.defineProperty(t,a,v),v};let e$=class extends ew.oi{constructor(){super(),this.unsubscribe=[],this.connectors=eg.ConnectorController.state.connectors,this.unsubscribe.push(eg.ConnectorController.subscribeKey("connectors",e=>this.connectors=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return ew.dy`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.walletConnectConnectorTemplate()} ${this.recentTemplate()}
        ${this.announcedTemplate()} ${this.injectedTemplate()} ${this.featuredTemplate()}
        ${this.customTemplate()} ${this.recommendedTemplate()} ${this.connectorsTemplate()}
        ${this.allWalletsTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `}walletConnectConnectorTemplate(){if(eg.j1.isMobile())return null;let e=this.connectors.find(e=>"WALLET_CONNECT"===e.type);return e?ew.dy`
      <wui-list-wallet
        imageSrc=${o(eg.fz.getConnectorImage(e))}
        name=${e.name??"Unknown"}
        @click=${()=>this.onConnector(e)}
        tagLabel="qr code"
        tagVariant="main"
      >
      </wui-list-wallet>
    `:null}customTemplate(){let{customWallets:e}=eg.OptionsController.state;if(!e?.length)return null;let t=this.filterOutDuplicateWallets(e);return t.map(e=>ew.dy`
        <wui-list-wallet
          imageSrc=${o(eg.fz.getWalletImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnectWallet(e)}
        >
        </wui-list-wallet>
      `)}featuredTemplate(){let{featured:e}=eg.ApiController.state;if(!e.length)return null;let t=this.filterOutDuplicateWallets(e);return t.map(e=>ew.dy`
        <wui-list-wallet
          imageSrc=${o(eg.fz.getWalletImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnectWallet(e)}
        >
        </wui-list-wallet>
      `)}recentTemplate(){let e=eg.MO.getRecentWallets();return e.map(e=>ew.dy`
        <wui-list-wallet
          imageSrc=${o(eg.fz.getWalletImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnectWallet(e)}
          tagLabel="recent"
          tagVariant="shade"
        >
        </wui-list-wallet>
      `)}announcedTemplate(){return this.connectors.map(e=>"ANNOUNCED"!==e.type?null:ew.dy`
        <wui-list-wallet
          imageSrc=${o(eg.fz.getConnectorImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnector(e)}
          tagLabel="installed"
          tagVariant="success"
        >
        </wui-list-wallet>
      `)}injectedTemplate(){let e=this.connectors.find(e=>"ANNOUNCED"===e.type);return this.connectors.map(t=>"INJECTED"===t.type&&eg.ConnectionController.checkInstalled()?ew.dy`
        <wui-list-wallet
          imageSrc=${o(eg.fz.getConnectorImage(t))}
          name=${t.name??"Unknown"}
          @click=${()=>this.onConnector(t)}
          tagLabel=${o(e?void 0:"installed")}
          tagVariant=${o(e?void 0:"success")}
        >
        </wui-list-wallet>
      `:null)}connectorsTemplate(){return this.connectors.map(e=>["WALLET_CONNECT","INJECTED","ANNOUNCED"].includes(e.type)?null:ew.dy`
        <wui-list-wallet
          imageSrc=${o(eg.fz.getConnectorImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnector(e)}
        >
        </wui-list-wallet>
      `)}allWalletsTemplate(){let e=10*Math.floor(eg.ApiController.state.count/10);return ew.dy`
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${`${e}+`}
        tagVariant="shade"
      ></wui-list-wallet>
    `}recommendedTemplate(){let{recommended:e}=eg.ApiController.state,{customWallets:t,featuredWalletIds:a}=eg.OptionsController.state,{connectors:p}=eg.ConnectorController.state,g=eg.MO.getRecentWallets(),m=p.filter(e=>"ANNOUNCED"===e.type);if(a||t||!e.length)return null;let v=m.length+g.length,_=this.filterOutDuplicateWallets(e).slice(0,Math.max(0,2-v));return _.map(e=>ew.dy`
        <wui-list-wallet
          imageSrc=${o(eg.fz.getWalletImage(e))}
          name=${e?.name??"Unknown"}
          @click=${()=>this.onConnectWallet(e)}
        >
        </wui-list-wallet>
      `)}onConnector(e){"WALLET_CONNECT"===e.type?eg.j1.isMobile()?eg.RouterController.push("AllWallets"):eg.RouterController.push("ConnectingWalletConnect"):eg.RouterController.push("ConnectingExternal",{connector:e})}filterOutDuplicateWallets(e){let{connectors:t}=eg.ConnectorController.state,a=eg.MO.getRecentWallets(),p=a.map(e=>e.id),g=t.map(e=>e.info?.rdns).filter(Boolean),m=e.filter(e=>!p.includes(e.id)&&!g.includes(e.rdns??void 0));return m}onAllWallets(){eg.Xs.sendEvent({type:"track",event:"CLICK_ALL_WALLETS"}),eg.RouterController.push("AllWallets")}onConnectWallet(e){eg.RouterController.push("ConnectingWalletConnect",{wallet:e})}};e$.styles=eD,w3m_connect_view_decorate([(0,eb.SB)()],e$.prototype,"connectors",void 0),e$=w3m_connect_view_decorate([(0,em.customElement)("w3m-connect-view")],e$);var eO=ew.iv`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`,w3m_connecting_widget_decorate=function(e,t,a,p){var g,m=arguments.length,v=m<3?t:null===p?p=Object.getOwnPropertyDescriptor(t,a):p;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)v=Reflect.decorate(e,t,a,p);else for(var _=e.length-1;_>=0;_--)(g=e[_])&&(v=(m<3?g(v):m>3?g(t,a,v):g(t,a))||v);return m>3&&v&&Object.defineProperty(t,a,v),v};let W3mConnectingWidget=class W3mConnectingWidget extends ew.oi{constructor(){super(),this.wallet=eg.RouterController.state.data?.wallet,this.connector=eg.RouterController.state.data?.connector,this.timeout=void 0,this.secondaryBtnLabel="Try again",this.secondaryBtnIcon="refresh",this.secondaryLabel="Accept connection request in the wallet",this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=eg.fz.getWalletImage(this.wallet)??eg.fz.getConnectorImage(this.connector),this.name=this.wallet?.name??this.connector?.name??"Wallet",this.isRetrying=!1,this.uri=eg.ConnectionController.state.wcUri,this.error=eg.ConnectionController.state.wcError,this.ready=!1,this.showRetry=!1,this.buffering=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(...[eg.ConnectionController.subscribeKey("wcUri",e=>{this.uri=e,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,this.onConnect?.())}),eg.ConnectionController.subscribeKey("wcError",e=>this.error=e),eg.ConnectionController.subscribeKey("buffering",e=>this.buffering=e)])}firstUpdated(){this.onAutoConnect?.(),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),clearTimeout(this.timeout)}render(){this.onRender?.(),this.onShowRetry();let e=this.error?"Connection can be declined if a previous request is still active":this.secondaryLabel,t=`Continue in ${this.name}`;return this.buffering&&(t="Connecting..."),this.error&&(t="Connection declined"),ew.dy`
      <wui-flex
        data-error=${o(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${o(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${t}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${e}</wui-text>
        </wui-flex>

        <wui-button
          variant="accent"
          ?disabled=${!this.error&&this.buffering}
          @click=${this.onTryAgain.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
          ${this.secondaryBtnLabel}
        </wui-button>
      </wui-flex>

      ${this.isWalletConnect?ew.dy`
            <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200">
                <wui-icon size="sm" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy Link
              </wui-link>
            </wui-flex>
          `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onShowRetry(){if(this.error&&!this.showRetry){this.showRetry=!0;let e=this.shadowRoot?.querySelector("wui-button");e.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}onTryAgain(){this.buffering||(eg.ConnectionController.setWcError(!1),this.onRetry?(this.isRetrying=!0,this.onRetry?.()):this.onConnect?.())}loaderTemplate(){let e=eg.ThemeController.state.themeVariables["--w3m-border-radius-master"],t=e?parseInt(e.replace("px",""),10):4;return ew.dy`<wui-loading-thumbnail radius=${9*t}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(eg.j1.copyToClopboard(this.uri),eg.SnackController.showSuccess("Link copied"))}catch{eg.SnackController.showError("Failed to copy")}}};W3mConnectingWidget.styles=eO,w3m_connecting_widget_decorate([(0,eb.SB)()],W3mConnectingWidget.prototype,"uri",void 0),w3m_connecting_widget_decorate([(0,eb.SB)()],W3mConnectingWidget.prototype,"error",void 0),w3m_connecting_widget_decorate([(0,eb.SB)()],W3mConnectingWidget.prototype,"ready",void 0),w3m_connecting_widget_decorate([(0,eb.SB)()],W3mConnectingWidget.prototype,"showRetry",void 0),w3m_connecting_widget_decorate([(0,eb.SB)()],W3mConnectingWidget.prototype,"buffering",void 0),w3m_connecting_widget_decorate([(0,eb.Cb)({type:Boolean})],W3mConnectingWidget.prototype,"isMobile",void 0),w3m_connecting_widget_decorate([(0,eb.Cb)()],W3mConnectingWidget.prototype,"onRetry",void 0);let eI={INJECTED:"browser",ANNOUNCED:"browser"},eT=class extends W3mConnectingWidget{constructor(){if(super(),!this.connector)throw Error("w3m-connecting-view: No connector provided");eg.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.connector.name??"Unknown",platform:eI[this.connector.type]??"external"}}),this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),this.isWalletConnect=!1}async onConnectProxy(){try{this.error=!1,this.connector&&(await eg.ConnectionController.connectExternal(this.connector),eg.IN.close(),eg.Xs.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"external"}}))}catch(e){eg.Xs.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),this.error=!0}}};eT=function(e,t,a,p){var g,m=arguments.length,v=m<3?t:null===p?p=Object.getOwnPropertyDescriptor(t,a):p;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)v=Reflect.decorate(e,t,a,p);else for(var _=e.length-1;_>=0;_--)(g=e[_])&&(v=(m<3?g(v):m>3?g(t,a,v):g(t,a))||v);return m>3&&v&&Object.defineProperty(t,a,v),v}([(0,em.customElement)("w3m-connecting-external-view")],eT);var w3m_connecting_wc_view_decorate=function(e,t,a,p){var g,m=arguments.length,v=m<3?t:null===p?p=Object.getOwnPropertyDescriptor(t,a):p;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)v=Reflect.decorate(e,t,a,p);else for(var _=e.length-1;_>=0;_--)(g=e[_])&&(v=(m<3?g(v):m>3?g(t,a,v):g(t,a))||v);return m>3&&v&&Object.defineProperty(t,a,v),v};let eR=class extends ew.oi{constructor(){super(),this.interval=void 0,this.lastRetry=Date.now(),this.wallet=eg.RouterController.state.data?.wallet,this.platform=void 0,this.platforms=[],this.initializeConnection(),this.interval=setInterval(this.initializeConnection.bind(this),eg.bq.TEN_SEC_MS)}disconnectedCallback(){clearTimeout(this.interval)}render(){return this.wallet?(this.determinePlatforms(),ew.dy`
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
    `):ew.dy`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`}async initializeConnection(e=!1){try{let{wcPairingExpiry:t}=eg.ConnectionController.state;(e||eg.j1.isPairingExpired(t))&&(eg.ConnectionController.connectWalletConnect(),await eg.ConnectionController.state.wcPromise,this.finalizeConnection(),eg.IN.close())}catch(e){eg.Xs.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),eg.ConnectionController.setWcError(!0),eg.j1.isAllowedRetry(this.lastRetry)&&(eg.SnackController.showError("Declined"),this.lastRetry=Date.now(),this.initializeConnection(!0))}}finalizeConnection(){let{wcLinking:e,recentWallet:t}=eg.ConnectionController.state;e&&eg.MO.setWalletConnectDeepLink(e),t&&eg.MO.setWeb3ModalRecent(t),eg.Xs.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:e?"mobile":"qrcode"}})}determinePlatforms(){if(!this.wallet)throw Error("w3m-connecting-wc-view:determinePlatforms No wallet");if(this.platform)return;let{mobile_link:e,desktop_link:t,webapp_link:a,injected:p,rdns:g}=this.wallet,m=p?.map(({injected_id:e})=>e).filter(Boolean),v=g?[g]:m??[],_=v.length,x=eg.ConnectionController.checkInstalled(v),T=_&&x,F=t&&!eg.j1.isMobile();T&&this.platforms.push("browser"),e&&this.platforms.push(eg.j1.isMobile()?"mobile":"qrcode"),a&&this.platforms.push("web"),F&&this.platforms.push("desktop"),!T&&_&&this.platforms.push("unsupported"),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case"browser":return ew.dy`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case"desktop":return ew.dy`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case"web":return ew.dy`
          <w3m-connecting-wc-web .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-web>
        `;case"mobile":return ew.dy`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case"qrcode":return ew.dy`<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;default:return ew.dy`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){let e=this.platforms.length>1;return e?ew.dy`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(e){let t=this.shadowRoot?.querySelector("div");t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.platform=e,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};w3m_connecting_wc_view_decorate([(0,eb.SB)()],eR.prototype,"platform",void 0),w3m_connecting_wc_view_decorate([(0,eb.SB)()],eR.prototype,"platforms",void 0),eR=w3m_connecting_wc_view_decorate([(0,em.customElement)("w3m-connecting-wc-view")],eR);let eB=class extends ew.oi{constructor(){super(...arguments),this.wallet=eg.RouterController.state.data?.wallet}render(){if(!this.wallet)throw Error("w3m-downloads-view");return ew.dy`
      <wui-flex gap="xs" flexDirection="column" .padding=${["s","s","l","s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){return this.wallet?.chrome_store?ew.dy`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){return this.wallet?.app_store?ew.dy`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){return this.wallet?.play_store?ew.dy`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){return this.wallet?.homepage?ew.dy`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    `:null}onChromeStore(){this.wallet?.chrome_store&&eg.j1.openHref(this.wallet.chrome_store,"_blank")}onAppStore(){this.wallet?.app_store&&eg.j1.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&eg.j1.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&eg.j1.openHref(this.wallet.homepage,"_blank")}};eB=function(e,t,a,p){var g,m=arguments.length,v=m<3?t:null===p?p=Object.getOwnPropertyDescriptor(t,a):p;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)v=Reflect.decorate(e,t,a,p);else for(var _=e.length-1;_>=0;_--)(g=e[_])&&(v=(m<3?g(v):m>3?g(t,a,v):g(t,a))||v);return m>3&&v&&Object.defineProperty(t,a,v),v}([(0,em.customElement)("w3m-downloads-view")],eB);let eN=class extends ew.oi{render(){return ew.dy`
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.recommendedWalletsTemplate()}
        <wui-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          @click=${()=>{eg.j1.openHref("https://walletconnect.com/explorer?type=wallet","_blank")}}
        ></wui-list-wallet>
      </wui-flex>
    `}recommendedWalletsTemplate(){let{recommended:e,featured:t}=eg.ApiController.state,{customWallets:a}=eg.OptionsController.state,p=[...t,...a??[],...e].slice(0,4);return p.map(e=>ew.dy`
        <wui-list-wallet
          name=${e.name??"Unknown"}
          tagVariant="main"
          imageSrc=${o(eg.fz.getWalletImage(e))}
          @click=${()=>{eg.j1.openHref(e.homepage??"https://walletconnect.com/explorer","_blank")}}
        ></wui-list-wallet>
      `)}};eN=function(e,t,a,p){var g,m=arguments.length,v=m<3?t:null===p?p=Object.getOwnPropertyDescriptor(t,a):p;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)v=Reflect.decorate(e,t,a,p);else for(var _=e.length-1;_>=0;_--)(g=e[_])&&(v=(m<3?g(v):m>3?g(t,a,v):g(t,a))||v);return m>3&&v&&Object.defineProperty(t,a,v),v}([(0,em.customElement)("w3m-get-wallet-view")],eN);var eU=ew.iv`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`,w3m_network_switch_view_decorate=function(e,t,a,p){var g,m=arguments.length,v=m<3?t:null===p?p=Object.getOwnPropertyDescriptor(t,a):p;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)v=Reflect.decorate(e,t,a,p);else for(var _=e.length-1;_>=0;_--)(g=e[_])&&(v=(m<3?g(v):m>3?g(t,a,v):g(t,a))||v);return m>3&&v&&Object.defineProperty(t,a,v),v};let eM=class extends ew.oi{constructor(){super(),this.network=eg.RouterController.state.data?.network,this.unsubscribe=[],this.showRetry=!1,this.error=!1,this.currentNetwork=eg.NetworkController.state.caipNetwork,this.unsubscribe.push(eg.NetworkController.subscribeKey("caipNetwork",e=>{e?.id!==this.currentNetwork?.id&&eg.RouterController.goBack()}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){this.onSwitchNetwork()}render(){if(!this.network)throw Error("w3m-network-switch-view: No network provided");this.onShowRetry();let e=this.error?"Switch declined":"Approve in wallet",t=this.error?"Switch can be declined if chain is not supported by a wallet or previous request is still active":"Accept connection request in your wallet";return ew.dy`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${o(eg.fz.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error?null:ew.dy`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            ?border=${!0}
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">${e}</wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${t}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="fill"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `}onShowRetry(){if(this.error&&!this.showRetry){this.showRetry=!0;let e=this.shadowRoot?.querySelector("wui-button");e.animate([{opacity:0},{opacity:1}],{fill:"forwards",easing:"ease"})}}async onSwitchNetwork(){try{this.error=!1,this.network&&(await eg.NetworkController.switchActiveNetwork(this.network),eg.RouterController.goBack())}catch{this.error=!0}}};eM.styles=eU,w3m_network_switch_view_decorate([(0,eb.SB)()],eM.prototype,"showRetry",void 0),w3m_network_switch_view_decorate([(0,eb.SB)()],eM.prototype,"error",void 0),w3m_network_switch_view_decorate([(0,eb.SB)()],eM.prototype,"currentNetwork",void 0),eM=w3m_network_switch_view_decorate([(0,em.customElement)("w3m-network-switch-view")],eM);var w3m_networks_view_decorate=function(e,t,a,p){var g,m=arguments.length,v=m<3?t:null===p?p=Object.getOwnPropertyDescriptor(t,a):p;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)v=Reflect.decorate(e,t,a,p);else for(var _=e.length-1;_>=0;_--)(g=e[_])&&(v=(m<3?g(v):m>3?g(t,a,v):g(t,a))||v);return m>3&&v&&Object.defineProperty(t,a,v),v};let ej=class extends ew.oi{constructor(){super(),this.unsubscribe=[],this.caipNetwork=eg.NetworkController.state.caipNetwork,this.unsubscribe.push(eg.NetworkController.subscribeKey("caipNetwork",e=>this.caipNetwork=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return ew.dy`
      <wui-grid padding="s" gridTemplateColumns="repeat(4, 1fr)" rowGap="l" columnGap="xs">
        ${this.networksTemplate()}
      </wui-grid>

      <wui-separator></wui-separator>

      <wui-flex padding="s" flexDirection="column" gap="m" alignItems="center">
        <wui-text variant="small-500" color="fg-300" align="center">
          Your connected wallet may not support some of the networks available for this dApp
        </wui-text>
        <wui-link @click=${this.onNetworkHelp.bind(this)}>
          <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
          What is a network
        </wui-link>
      </wui-flex>
    `}onNetworkHelp(){eg.Xs.sendEvent({type:"track",event:"CLICK_NETWORK_HELP"}),eg.RouterController.push("WhatIsANetwork")}networksTemplate(){let{approvedCaipNetworkIds:e,requestedCaipNetworks:t,supportsAllNetworks:a}=eg.NetworkController.state;return e?.length&&t?.sort((t,a)=>e.indexOf(a.id)-e.indexOf(t.id)),t?.map(t=>ew.dy`
        <wui-card-select
          .selected=${this.caipNetwork?.id===t.id}
          imageSrc=${o(eg.fz.getNetworkImage(t))}
          type="network"
          name=${t.name??t.id}
          @click=${()=>this.onSwitchNetwork(t)}
          .disabled=${!a&&!e?.includes(t.id)}
        ></wui-card-select>
      `)}async onSwitchNetwork(e){let{isConnected:t}=eg.AccountController.state,{approvedCaipNetworkIds:a,supportsAllNetworks:p,caipNetwork:g}=eg.NetworkController.state;t&&g?.id!==e.id?a?.includes(e.id)?await eg.NetworkController.switchActiveNetwork(e):p&&eg.RouterController.push("SwitchNetwork",{network:e}):t||(eg.NetworkController.setCaipNetwork(e),eg.RouterController.push("Connect"))}};w3m_networks_view_decorate([(0,eb.SB)()],ej.prototype,"caipNetwork",void 0),ej=w3m_networks_view_decorate([(0,em.customElement)("w3m-networks-view")],ej);let eL=[{images:["network","layers","system"],title:"The system’s nuts and bolts",text:"A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services."},{images:["noun","defiAlt","dao"],title:"Designed for different uses",text:"Each network is designed differently, and may therefore suit certain apps and experiences."}],eF=class extends ew.oi{render(){return ew.dy`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${eL}></w3m-help-widget>
        <wui-button
          variant="fill"
          size="sm"
          @click=${()=>{eg.j1.openHref("https://ethereum.org/en/developers/docs/networks/","_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};eF=function(e,t,a,p){var g,m=arguments.length,v=m<3?t:null===p?p=Object.getOwnPropertyDescriptor(t,a):p;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)v=Reflect.decorate(e,t,a,p);else for(var _=e.length-1;_>=0;_--)(g=e[_])&&(v=(m<3?g(v):m>3?g(t,a,v):g(t,a))||v);return m>3&&v&&Object.defineProperty(t,a,v),v}([(0,em.customElement)("w3m-what-is-a-network-view")],eF);let ez=[{images:["login","profile","lock"],title:"One login for all of web3",text:"Log in to any app by connecting your wallet. Say goodbye to countless passwords!"},{images:["defi","nft","eth"],title:"A home for your digital assets",text:"A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs."},{images:["browser","noun","dao"],title:"Your gateway to a new web",text:"With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more."}],eW=class extends ew.oi{render(){return ew.dy`
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${ez}></w3m-help-widget>
        <wui-button variant="fill" size="sm" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a Wallet
        </wui-button>
      </wui-flex>
    `}onGetWallet(){eg.Xs.sendEvent({type:"track",event:"CLICK_GET_WALLET"}),eg.RouterController.push("GetWallet")}};eW=function(e,t,a,p){var g,m=arguments.length,v=m<3?t:null===p?p=Object.getOwnPropertyDescriptor(t,a):p;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)v=Reflect.decorate(e,t,a,p);else for(var _=e.length-1;_>=0;_--)(g=e[_])&&(v=(m<3?g(v):m>3?g(t,a,v):g(t,a))||v);return m>3&&v&&Object.defineProperty(t,a,v),v}([(0,em.customElement)("w3m-what-is-a-wallet-view")],eW);var eH=ew.iv`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 76px);
  }

  @media (max-width: 435px) {
    wui-grid {
      grid-template-columns: repeat(auto-fill, 77px);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`,w3m_all_wallets_list_decorate=function(e,t,a,p){var g,m=arguments.length,v=m<3?t:null===p?p=Object.getOwnPropertyDescriptor(t,a):p;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)v=Reflect.decorate(e,t,a,p);else for(var _=e.length-1;_>=0;_--)(g=e[_])&&(v=(m<3?g(v):m>3?g(t,a,v):g(t,a))||v);return m>3&&v&&Object.defineProperty(t,a,v),v};let eq="local-paginator",eG=class extends ew.oi{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.initial=!eg.ApiController.state.wallets.length,this.wallets=eg.ApiController.state.wallets,this.recommended=eg.ApiController.state.recommended,this.featured=eg.ApiController.state.featured,this.unsubscribe.push(...[eg.ApiController.subscribeKey("wallets",e=>this.wallets=e),eg.ApiController.subscribeKey("recommended",e=>this.recommended=e),eg.ApiController.subscribeKey("featured",e=>this.featured=e)])}firstUpdated(){this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.paginationObserver?.disconnect()}render(){return ew.dy`
      <wui-grid
        data-scroll=${!this.initial}
        .padding=${["0","s","s","s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.initial?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){let e=this.shadowRoot?.querySelector("wui-grid");this.initial&&e&&(await eg.ApiController.fetchWallets({page:1}),await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.initial=!1,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}shimmerTemplate(e,t){return[...Array(e)].map(()=>ew.dy`
        <wui-card-select-loader type="wallet" id=${o(t)}></wui-card-select-loader>
      `)}walletsTemplate(){let e=[...this.featured,...this.recommended,...this.wallets];return e.map(e=>ew.dy`
        <wui-card-select
          imageSrc=${o(eg.fz.getWalletImage(e))}
          type="wallet"
          name=${e.name}
          @click=${()=>this.onConnectWallet(e)}
        ></wui-card-select>
      `)}paginationLoaderTemplate(){let{wallets:e,recommended:t,featured:a,count:p}=eg.ApiController.state,g=window.innerWidth<352?3:4,m=e.length+t.length,v=Math.ceil(m/g)*g-m+g;return(v-=e.length?a.length%g:0,0===p||[...a,...e,...t].length<p)?this.shimmerTemplate(v,eq):null}createPaginationObserver(){let e=this.shadowRoot?.querySelector(`#${eq}`);e&&(this.paginationObserver=new IntersectionObserver(([e])=>{if(e?.isIntersecting&&!this.initial){let{page:e,count:t,wallets:a}=eg.ApiController.state;a.length<t&&eg.ApiController.fetchWallets({page:e+1})}}),this.paginationObserver.observe(e))}onConnectWallet(e){let{connectors:t}=eg.ConnectorController.state,a=t.find(({explorerId:t})=>t===e.id);a?eg.RouterController.push("ConnectingExternal",{connector:a}):eg.RouterController.push("ConnectingWalletConnect",{wallet:e})}};eG.styles=eH,w3m_all_wallets_list_decorate([(0,eb.SB)()],eG.prototype,"initial",void 0),w3m_all_wallets_list_decorate([(0,eb.SB)()],eG.prototype,"wallets",void 0),w3m_all_wallets_list_decorate([(0,eb.SB)()],eG.prototype,"recommended",void 0),w3m_all_wallets_list_decorate([(0,eb.SB)()],eG.prototype,"featured",void 0),eG=w3m_all_wallets_list_decorate([(0,em.customElement)("w3m-all-wallets-list")],eG);var eV=ew.iv`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }
`,w3m_all_wallets_search_decorate=function(e,t,a,p){var g,m=arguments.length,v=m<3?t:null===p?p=Object.getOwnPropertyDescriptor(t,a):p;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)v=Reflect.decorate(e,t,a,p);else for(var _=e.length-1;_>=0;_--)(g=e[_])&&(v=(m<3?g(v):m>3?g(t,a,v):g(t,a))||v);return m>3&&v&&Object.defineProperty(t,a,v),v};let eK=class extends ew.oi{constructor(){super(...arguments),this.prevQuery="",this.loading=!0,this.query=""}render(){return this.onSearch(),this.loading?ew.dy`<wui-loading-spinner color="accent-100"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){this.query!==this.prevQuery&&(this.prevQuery=this.query,this.loading=!0,await eg.ApiController.searchWallet({search:this.query}),this.loading=!1)}walletsTemplate(){let{search:e}=eg.ApiController.state;return e.length?ew.dy`
      <wui-grid
        .padding=${["0","s","s","s"]}
        gridTemplateColumns="repeat(4, 1fr)"
        rowGap="l"
        columnGap="xs"
      >
        ${e.map(e=>ew.dy`
            <wui-card-select
              imageSrc=${o(eg.fz.getWalletImage(e))}
              type="wallet"
              name=${e.name}
              @click=${()=>this.onConnectWallet(e)}
            ></wui-card-select>
          `)}
      </wui-grid>
    `:ew.dy`
        <wui-flex justifyContent="center" alignItems="center" gap="s" flexDirection="column">
          <wui-icon-box
            size="lg"
            iconcolor="fg-200"
            backgroundcolor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text color="fg-200" variant="paragraph-500">No Wallet found</wui-text>
        </wui-flex>
      `}onConnectWallet(e){let{connectors:t}=eg.ConnectorController.state,a=t.find(({explorerId:t})=>t===e.id);a?eg.RouterController.push("ConnectingExternal",{connector:a}):eg.RouterController.push("ConnectingWalletConnect",{wallet:e})}};eK.styles=eV,w3m_all_wallets_search_decorate([(0,eb.SB)()],eK.prototype,"loading",void 0),w3m_all_wallets_search_decorate([(0,eb.Cb)()],eK.prototype,"query",void 0),eK=w3m_all_wallets_search_decorate([(0,em.customElement)("w3m-all-wallets-search")],eK);var w3m_connecting_header_decorate=function(e,t,a,p){var g,m=arguments.length,v=m<3?t:null===p?p=Object.getOwnPropertyDescriptor(t,a):p;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)v=Reflect.decorate(e,t,a,p);else for(var _=e.length-1;_>=0;_--)(g=e[_])&&(v=(m<3?g(v):m>3?g(t,a,v):g(t,a))||v);return m>3&&v&&Object.defineProperty(t,a,v),v};let eZ=class extends ew.oi{constructor(){super(),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0,this.buffering=!1,this.unsubscribe.push(eg.ConnectionController.subscribeKey("buffering",e=>this.buffering=e))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.generateTabs();return ew.dy`
      <wui-flex justifyContent="center" .padding=${["l","0","0","0"]}>
        <wui-tabs
          ?disabled=${this.buffering}
          .tabs=${e}
          .onTabChange=${this.onTabChange.bind(this)}
        ></wui-tabs>
      </wui-flex>
    `}generateTabs(){let e=this.platforms.map(e=>"browser"===e?{label:"Browser",icon:"extension",platform:"browser"}:"mobile"===e?{label:"Mobile",icon:"mobile",platform:"mobile"}:"qrcode"===e?{label:"Mobile",icon:"mobile",platform:"qrcode"}:"web"===e?{label:"Webapp",icon:"browser",platform:"web"}:"desktop"===e?{label:"Desktop",icon:"desktop",platform:"desktop"}:{label:"Browser",icon:"extension",platform:"unsupported"});return this.platformTabs=e.map(({platform:e})=>e),e}onTabChange(e){let t=this.platformTabs[e];t&&this.onSelectPlatfrom?.(t)}};w3m_connecting_header_decorate([(0,eb.Cb)({type:Array})],eZ.prototype,"platforms",void 0),w3m_connecting_header_decorate([(0,eb.Cb)()],eZ.prototype,"onSelectPlatfrom",void 0),w3m_connecting_header_decorate([(0,eb.SB)()],eZ.prototype,"buffering",void 0),eZ=w3m_connecting_header_decorate([(0,em.customElement)("w3m-connecting-header")],eZ);let eQ=class extends W3mConnectingWidget{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-browser: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),eg.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}async onConnectProxy(){try{this.error=!1;let{connectors:e}=eg.ConnectorController.state,t=e.find(e=>"ANNOUNCED"===e.type&&e.info?.rdns===this.wallet?.rdns),a=e.find(e=>"INJECTED"===e.type);t?await eg.ConnectionController.connectExternal(t):a&&await eg.ConnectionController.connectExternal(a),eg.IN.close(),eg.Xs.sendEvent({type:"track",event:"CONNECT_SUCCESS",properties:{method:"browser"}})}catch(e){eg.Xs.sendEvent({type:"track",event:"CONNECT_ERROR",properties:{message:e?.message??"Unknown"}}),this.error=!0}}};eQ=function(e,t,a,p){var g,m=arguments.length,v=m<3?t:null===p?p=Object.getOwnPropertyDescriptor(t,a):p;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)v=Reflect.decorate(e,t,a,p);else for(var _=e.length-1;_>=0;_--)(g=e[_])&&(v=(m<3?g(v):m>3?g(t,a,v):g(t,a))||v);return m>3&&v&&Object.defineProperty(t,a,v),v}([(0,em.customElement)("w3m-connecting-wc-browser")],eQ);let eX=class extends W3mConnectingWidget{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-desktop: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),eg.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"desktop"}})}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.timeout=setTimeout(()=>{this.onConnect?.()},200))}onConnectProxy(){if(this.wallet?.desktop_link&&this.uri)try{this.error=!1;let{desktop_link:e,name:t}=this.wallet,{redirect:a,href:p}=eg.j1.formatNativeUrl(e,this.uri);eg.ConnectionController.setWcLinking({name:t,href:p}),eg.ConnectionController.setRecentWallet(this.wallet),eg.j1.openHref(a,"_self")}catch{this.error=!0}}};eX=function(e,t,a,p){var g,m=arguments.length,v=m<3?t:null===p?p=Object.getOwnPropertyDescriptor(t,a):p;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)v=Reflect.decorate(e,t,a,p);else for(var _=e.length-1;_>=0;_--)(g=e[_])&&(v=(m<3?g(v):m>3?g(t,a,v):g(t,a))||v);return m>3&&v&&Object.defineProperty(t,a,v),v}([(0,em.customElement)("w3m-connecting-wc-desktop")],eX);let eY=class extends W3mConnectingWidget{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-mobile: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),document.addEventListener("visibilitychange",this.onBuffering.bind(this)),eg.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"mobile"}})}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("visibilitychange",this.onBuffering.bind(this))}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onConnectProxy(){if(this.wallet?.mobile_link&&this.uri)try{this.error=!1;let{mobile_link:e,name:t}=this.wallet,{redirect:a,href:p}=eg.j1.formatNativeUrl(e,this.uri);eg.ConnectionController.setWcLinking({name:t,href:p}),eg.ConnectionController.setRecentWallet(this.wallet),eg.j1.openHref(a,"_self")}catch{this.error=!0}}onBuffering(){let e=eg.j1.isIos();document?.visibilityState==="visible"&&!this.error&&e&&(eg.ConnectionController.setBuffering(!0),setTimeout(()=>{eg.ConnectionController.setBuffering(!1)},5e3))}};eY=function(e,t,a,p){var g,m=arguments.length,v=m<3?t:null===p?p=Object.getOwnPropertyDescriptor(t,a):p;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)v=Reflect.decorate(e,t,a,p);else for(var _=e.length-1;_>=0;_--)(g=e[_])&&(v=(m<3?g(v):m>3?g(t,a,v):g(t,a))||v);return m>3&&v&&Object.defineProperty(t,a,v),v}([(0,em.customElement)("w3m-connecting-wc-mobile")],eY);var eJ=ew.iv`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`;let e0=class extends W3mConnectingWidget{constructor(){super(),this.forceUpdate=()=>{this.requestUpdate()},window.addEventListener("resize",this.forceUpdate),eg.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet?.name??"WalletConnect",platform:"qrcode"}})}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",this.forceUpdate)}render(){return this.onRenderProxy(),ew.dy`
      <wui-flex padding="xl" flexDirection="column" gap="xl" alignItems="center">
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>

        <wui-link @click=${this.onCopyUri} color="fg-200">
          <wui-icon size="sm" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
          Copy Link
        </wui-link>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.timeout=setTimeout(()=>{this.ready=!0},200))}qrCodeTemplate(){if(!this.uri||!this.ready)return null;let e=this.getBoundingClientRect().width-40,t=this.wallet?this.wallet.name:void 0;return eg.ConnectionController.setWcLinking(void 0),eg.ConnectionController.setRecentWallet(this.wallet),ew.dy`<wui-qr-code
      size=${e}
      theme=${eg.ThemeController.state.themeMode}
      uri=${this.uri}
      imageSrc=${o(eg.fz.getWalletImage(this.wallet))}
      alt=${o(t)}
    ></wui-qr-code>`}};e0.styles=eJ,e0=function(e,t,a,p){var g,m=arguments.length,v=m<3?t:null===p?p=Object.getOwnPropertyDescriptor(t,a):p;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)v=Reflect.decorate(e,t,a,p);else for(var _=e.length-1;_>=0;_--)(g=e[_])&&(v=(m<3?g(v):m>3?g(t,a,v):g(t,a))||v);return m>3&&v&&Object.defineProperty(t,a,v),v}([(0,em.customElement)("w3m-connecting-wc-qrcode")],e0);let e1=class extends ew.oi{constructor(){if(super(),this.wallet=eg.RouterController.state.data?.wallet,!this.wallet)throw Error("w3m-connecting-wc-unsupported: No wallet provided");eg.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"browser"}})}render(){return ew.dy`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${o(eg.fz.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};e1=function(e,t,a,p){var g,m=arguments.length,v=m<3?t:null===p?p=Object.getOwnPropertyDescriptor(t,a):p;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)v=Reflect.decorate(e,t,a,p);else for(var _=e.length-1;_>=0;_--)(g=e[_])&&(v=(m<3?g(v):m>3?g(t,a,v):g(t,a))||v);return m>3&&v&&Object.defineProperty(t,a,v),v}([(0,em.customElement)("w3m-connecting-wc-unsupported")],e1);let e2=class extends W3mConnectingWidget{constructor(){if(super(),!this.wallet)throw Error("w3m-connecting-wc-web: No wallet provided");this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel="Open",this.secondaryLabel="Open and continue in a new browser tab",this.secondaryBtnIcon="externalLink",eg.Xs.sendEvent({type:"track",event:"SELECT_WALLET",properties:{name:this.wallet.name,platform:"web"}})}onConnectProxy(){if(this.wallet?.webapp_link&&this.uri)try{this.error=!1;let{webapp_link:e,name:t}=this.wallet,{redirect:a,href:p}=eg.j1.formatUniversalUrl(e,this.uri);eg.ConnectionController.setWcLinking({name:t,href:p}),eg.ConnectionController.setRecentWallet(this.wallet),eg.j1.openHref(a,"_blank")}catch{this.error=!0}}};e2=function(e,t,a,p){var g,m=arguments.length,v=m<3?t:null===p?p=Object.getOwnPropertyDescriptor(t,a):p;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)v=Reflect.decorate(e,t,a,p);else for(var _=e.length-1;_>=0;_--)(g=e[_])&&(v=(m<3?g(v):m>3?g(t,a,v):g(t,a))||v);return m>3&&v&&Object.defineProperty(t,a,v),v}([(0,em.customElement)("w3m-connecting-wc-web")],e2);var e3=ew.iv`
  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }
`,w3m_header_decorate=function(e,t,a,p){var g,m=arguments.length,v=m<3?t:null===p?p=Object.getOwnPropertyDescriptor(t,a):p;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)v=Reflect.decorate(e,t,a,p);else for(var _=e.length-1;_>=0;_--)(g=e[_])&&(v=(m<3?g(v):m>3?g(t,a,v):g(t,a))||v);return m>3&&v&&Object.defineProperty(t,a,v),v};function headings(){let e=eg.RouterController.state.data?.connector?.name,t=eg.RouterController.state.data?.wallet?.name,a=eg.RouterController.state.data?.network?.name,p=t??e;return{Connect:"Connect Wallet",Account:void 0,ConnectingExternal:p??"Connect Wallet",ConnectingWalletConnect:p??"WalletConnect",Networks:"Choose Network",SwitchNetwork:a??"Switch Network",AllWallets:"All Wallets",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a wallet?",GetWallet:"Get a Wallet",Downloads:p?`Get ${p}`:"Downloads"}}let e5=class extends ew.oi{constructor(){super(),this.unsubscribe=[],this.heading=headings()[eg.RouterController.state.view],this.buffering=!1,this.showBack=!1,this.unsubscribe.push(eg.RouterController.subscribeKey("view",e=>{this.onViewChange(e),this.onHistoryChange()}),eg.ConnectionController.subscribeKey("buffering",e=>this.buffering=e))}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){return ew.dy`
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.dynamicButtonTemplate()} ${this.titleTemplate()}
        <wui-icon-link
          ?disabled=${this.buffering}
          icon="close"
          @click=${eg.IN.close}
        ></wui-icon-link>
      </wui-flex>
      ${this.separatorTemplate()}
    `}onWalletHelp(){eg.Xs.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),eg.RouterController.push("WhatIsAWallet")}titleTemplate(){return ew.dy`<wui-text variant="paragraph-700" color="fg-100">${this.heading}</wui-text>`}dynamicButtonTemplate(){let{view:e}=eg.RouterController.state;return this.showBack?ew.dy`<wui-icon-link
        id="dynamic"
        icon="chevronLeft"
        ?disabled=${this.buffering}
        @click=${eg.RouterController.goBack}
      ></wui-icon-link>`:ew.dy`<wui-icon-link
      data-hidden=${"Connect"!==e}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`}separatorTemplate(){return this.heading?ew.dy`<wui-separator></wui-separator>`:null}getPadding(){return this.heading?["l","2l","l","2l"]:["l","2l","0","2l"]}async onViewChange(e){let t=this.shadowRoot?.querySelector("wui-text");if(t){let a=headings()[e];await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.heading=a,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})}}async onHistoryChange(){let{history:e}=eg.RouterController.state,t=this.shadowRoot?.querySelector("#dynamic");e.length>1&&!this.showBack&&t?(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):e.length<=1&&this.showBack&&t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}};e5.styles=[e3],w3m_header_decorate([(0,eb.SB)()],e5.prototype,"heading",void 0),w3m_header_decorate([(0,eb.SB)()],e5.prototype,"buffering",void 0),w3m_header_decorate([(0,eb.SB)()],e5.prototype,"showBack",void 0),e5=w3m_header_decorate([(0,em.customElement)("w3m-header")],e5);var w3m_help_widget_decorate=function(e,t,a,p){var g,m=arguments.length,v=m<3?t:null===p?p=Object.getOwnPropertyDescriptor(t,a):p;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)v=Reflect.decorate(e,t,a,p);else for(var _=e.length-1;_>=0;_--)(g=e[_])&&(v=(m<3?g(v):m>3?g(t,a,v):g(t,a))||v);return m>3&&v&&Object.defineProperty(t,a,v),v};let e6=class extends ew.oi{constructor(){super(...arguments),this.data=[]}render(){return ew.dy`
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        ${this.data.map(e=>ew.dy`
            <wui-flex flexDirection="column" alignItems="center" gap="xl">
              <wui-flex flexDirection="row" justifyContent="center" gap="1xs">
                ${e.images.map(e=>ew.dy`<wui-visual name=${e}></wui-visual>`)}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="xxs">
              <wui-text variant="paragraph-500" color="fg-100" align="center">
                ${e.title}
              </wui-text>
              <wui-text variant="small-500" color="fg-200" align="center">${e.text}</wui-text>
            </wui-flex>
          `)}
      </wui-flex>
    `}};w3m_help_widget_decorate([(0,eb.Cb)({type:Array})],e6.prototype,"data",void 0),e6=w3m_help_widget_decorate([(0,em.customElement)("w3m-help-widget")],e6);var e4=ew.iv`
  wui-flex {
    background-color: var(--wui-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 600;
  }
`;let e8=class extends ew.oi{render(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=eg.OptionsController.state;return e||t?ew.dy`
      <wui-flex .padding=${["m","s","s","s"]} justifyContent="center">
        <wui-text color="fg-250" variant="small-500" align="center">
          By connecting your wallet, you agree to our <br />
          ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-flex>
    `:null}andTemplate(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=eg.OptionsController.state;return e&&t?"and":""}termsTemplate(){let{termsConditionsUrl:e}=eg.OptionsController.state;return e?ew.dy`<a href=${e}>Terms of Service</a>`:null}privacyTemplate(){let{privacyPolicyUrl:e}=eg.OptionsController.state;return e?ew.dy`<a href=${e}>Privacy Policy</a>`:null}};e8.styles=[e4],e8=function(e,t,a,p){var g,m=arguments.length,v=m<3?t:null===p?p=Object.getOwnPropertyDescriptor(t,a):p;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)v=Reflect.decorate(e,t,a,p);else for(var _=e.length-1;_>=0;_--)(g=e[_])&&(v=(m<3?g(v):m>3?g(t,a,v):g(t,a))||v);return m>3&&v&&Object.defineProperty(t,a,v),v}([(0,em.customElement)("w3m-legal-footer")],e8);var e7=ew.iv`
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`,w3m_mobile_download_links_decorate=function(e,t,a,p){var g,m=arguments.length,v=m<3?t:null===p?p=Object.getOwnPropertyDescriptor(t,a):p;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)v=Reflect.decorate(e,t,a,p);else for(var _=e.length-1;_>=0;_--)(g=e[_])&&(v=(m<3?g(v):m>3?g(t,a,v):g(t,a))||v);return m>3&&v&&Object.defineProperty(t,a,v),v};let e9=class extends ew.oi{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display="none",null;let{name:e,app_store:t,play_store:a,chrome_store:p,homepage:g}=this.wallet,m=eg.j1.isMobile(),v=eg.j1.isIos(),_=eg.j1.isAndroid(),x=[t,a,g,p].filter(Boolean).length>1,T=em.UiHelperUtil.getTruncateString({string:e,charsStart:12,charsEnd:0,truncate:"end"});return x&&!m?ew.dy`
        <wui-cta-button
          label=${`Don't have ${T}?`}
          buttonLabel="Get"
          @click=${()=>eg.RouterController.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      `:!x&&g?ew.dy`
        <wui-cta-button
          label=${`Don't have ${T}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:t&&v?ew.dy`
        <wui-cta-button
          label=${`Don't have ${T}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:a&&_?ew.dy`
        <wui-cta-button
          label=${`Don't have ${T}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display="none",null)}onAppStore(){this.wallet?.app_store&&eg.j1.openHref(this.wallet.app_store,"_blank")}onPlayStore(){this.wallet?.play_store&&eg.j1.openHref(this.wallet.play_store,"_blank")}onHomePage(){this.wallet?.homepage&&eg.j1.openHref(this.wallet.homepage,"_blank")}};e9.styles=[e7],w3m_mobile_download_links_decorate([(0,eb.Cb)({type:Object})],e9.prototype,"wallet",void 0),e9=w3m_mobile_download_links_decorate([(0,em.customElement)("w3m-mobile-download-links")],e9);var tt=ew.iv`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
  }
`,w3m_snackbar_decorate=function(e,t,a,p){var g,m=arguments.length,v=m<3?t:null===p?p=Object.getOwnPropertyDescriptor(t,a):p;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)v=Reflect.decorate(e,t,a,p);else for(var _=e.length-1;_>=0;_--)(g=e[_])&&(v=(m<3?g(v):m>3?g(t,a,v):g(t,a))||v);return m>3&&v&&Object.defineProperty(t,a,v),v};let tr={success:{backgroundColor:"success-100",iconColor:"success-100",icon:"checkmark"},error:{backgroundColor:"error-100",iconColor:"error-100",icon:"close"}},ti=class extends ew.oi{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=eg.SnackController.state.open,this.unsubscribe.push(eg.SnackController.subscribeKey("open",e=>{this.open=e,this.onOpen()}))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach(e=>e())}render(){let{message:e,variant:t}=eg.SnackController.state,a=tr[t];return ew.dy`
      <wui-snackbar
        message=${e}
        backgroundColor=${a.backgroundColor}
        iconColor=${a.iconColor}
        icon=${a.icon}
      ></wui-snackbar>
    `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout=setTimeout(()=>eg.SnackController.hide(),2500)):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};ti.styles=tt,w3m_snackbar_decorate([(0,eb.SB)()],ti.prototype,"open",void 0),ti=w3m_snackbar_decorate([(0,em.customElement)("w3m-snackbar")],ti);let tn=!1;let Web3ModalScaffold=class Web3ModalScaffold{constructor(e){this.initPromise=void 0,this.setIsConnected=e=>{eg.AccountController.setIsConnected(e)},this.setCaipAddress=e=>{eg.AccountController.setCaipAddress(e)},this.setBalance=(e,t)=>{eg.AccountController.setBalance(e,t)},this.setProfileName=e=>{eg.AccountController.setProfileName(e)},this.setProfileImage=e=>{eg.AccountController.setProfileImage(e)},this.resetAccount=()=>{eg.AccountController.resetAccount()},this.setCaipNetwork=e=>{eg.NetworkController.setCaipNetwork(e)},this.getCaipNetwork=()=>eg.NetworkController.state.caipNetwork,this.setRequestedCaipNetworks=e=>{eg.NetworkController.setRequestedCaipNetworks(e)},this.getApprovedCaipNetworksData=()=>eg.NetworkController.getApprovedCaipNetworksData(),this.resetNetwork=()=>{eg.NetworkController.resetNetwork()},this.setConnectors=e=>{eg.ConnectorController.setConnectors(e)},this.addConnector=e=>{eg.ConnectorController.addConnector(e)},this.getConnectors=()=>eg.ConnectorController.getConnectors(),this.resetWcConnection=()=>{eg.ConnectionController.resetWcConnection()},this.fetchIdentity=e=>eg.Lr.fetchIdentity(e),this.setAddressExplorerUrl=e=>{eg.AccountController.setAddressExplorerUrl(e)},this.initControllers(e),this.initOrContinue()}async open(e){await this.initOrContinue(),eg.IN.open(e)}async close(){await this.initOrContinue(),eg.IN.close()}getThemeMode(){return eg.ThemeController.state.themeMode}getThemeVariables(){return eg.ThemeController.state.themeVariables}setThemeMode(e){eg.ThemeController.setThemeMode(e),(0,em.setColorTheme)(eg.ThemeController.state.themeMode)}setThemeVariables(e){eg.ThemeController.setThemeVariables(e),(0,em.setThemeVariables)(eg.ThemeController.state.themeVariables)}subscribeTheme(e){return eg.ThemeController.subscribe(e)}getState(){return{...eg.Ie.state}}subscribeState(e){return eg.Ie.subscribe(e)}getEvent(){return{...eg.Xs.state}}subscribeEvents(e){return eg.Xs.subscribe(e)}initControllers(e){eg.NetworkController.setClient(e.networkControllerClient),eg.NetworkController.setDefaultCaipNetwork(e.defaultChain),eg.OptionsController.setProjectId(e.projectId),eg.OptionsController.setIncludeWalletIds(e.includeWalletIds),eg.OptionsController.setExcludeWalletIds(e.excludeWalletIds),eg.OptionsController.setFeaturedWalletIds(e.featuredWalletIds),eg.OptionsController.setTokens(e.tokens),eg.OptionsController.setTermsConditionsUrl(e.termsConditionsUrl),eg.OptionsController.setPrivacyPolicyUrl(e.privacyPolicyUrl),eg.OptionsController.setCustomWallets(e.customWallets),eg.OptionsController.setEnableAnalytics(e.enableAnalytics),eg.OptionsController.setSdkVersion(e._sdkVersion),eg.ConnectionController.setClient(e.connectionControllerClient),e.themeMode&&eg.ThemeController.setThemeMode(e.themeMode),e.themeVariables&&eg.ThemeController.setThemeVariables(e.themeVariables)}async initOrContinue(){return!this.initPromise&&!tn&&eg.j1.isClient()&&(tn=!0,this.initPromise=new Promise(async e=>{await Promise.all([Promise.resolve().then(a.bind(a,6894)),Promise.resolve().then(a.bind(a,90078))]);let t=document.createElement("w3m-modal");document.body.insertAdjacentElement("beforeend",t),e()})),this.initPromise}};let to="walletConnect",ta="injected",ts="coinbaseWallet",tl="safe",tc="ledger",tu="eip6963",td="eip155",th="3.1.0",tf={1:"692ed6ba-e569-459a-556a-776476829e00",42161:"600a9a04-c1b9-42ca-6785-9b4b6ff85200",43114:"30c46e53-e989-45fb-4549-be3bd4eb3b00",56:"93564157-2e8e-4ce7-81df-b264dbee9b00",250:"06b26297-fe0c-4733-5d6b-ffa5498aac00",10:"ab9c186a-c52f-464b-2906-ca59d760a400",137:"41d04d42-da3b-4453-8506-668cc0727900",100:"02b53f6a-e3d4-479e-1cb4-21178987d100",9001:"f926ff41-260d-4028-635e-91913fc28e00",324:"b310f07f-4ef7-49f3-7073-2a0a39685800",314:"5a73b3dd-af74-424e-cae0-0de859ee9400",4689:"34e68754-e536-40da-c153-6ef2e7188a00",1088:"3897a66d-40b9-4833-162f-a2c90531c900",1284:"161038da-44ae-4ec7-1208-0ea569454b00",1285:"f1d73bb6-5450-4e18-38f7-fb6484264a00",7777777:"845c60df-d429-4991-e687-91ae45791600",42220:"ab781bbc-ccc6-418d-d32d-789b15da1f00",8453:"7289c336-3981-4081-c5f4-efc26ac64a00",1313161554:"3ff73439-a619-4894-9262-4470c773a100"},tp={[ts]:"0c2840c3-5b04-4c44-9661-fbd4b49e1800",[tl]:"461db637-8616-43ce-035a-d89b8a1d5800",[tc]:"54a1aa77-d202-4f8d-0fb2-5d2bb6db0300",[to]:"ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400",[ta]:"07ba87ed-43aa-4adf-4540-9e6a2b9cae00"},tg={[ts]:"fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",[tl]:"225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f",[tc]:"19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927"},tm={[ta]:"Browser Wallet",[to]:"WalletConnect",[ts]:"Coinbase",[tc]:"Ledger",[tl]:"Safe"},tw={[ta]:"INJECTED",[to]:"WALLET_CONNECT",[tu]:"ANNOUNCED"};function caipNetworkIdToNumber(e){return e?Number(e.split(":")[1]):void 0}let Web3Modal=class Web3Modal extends Web3ModalScaffold{constructor(e){let{wagmiConfig:t,chains:a,defaultChain:p,tokens:g,_sdkVersion:m,...v}=e;if(!t)throw Error("web3modal:constructor - wagmiConfig is undefined");if(!v.projectId)throw Error("web3modal:constructor - projectId is undefined");if(!t.connectors.find(e=>e.id===to))throw Error("web3modal:constructor - WalletConnectConnector is required");let _={connectWalletConnect:async e=>{let a=t.connectors.find(e=>e.id===to);if(!a)throw Error("connectionControllerClient:getWalletConnectUri - connector is undefined");a.on("message",t=>{"display_uri"===t.type&&(e(t.data),a.removeAllListeners())});let p=caipNetworkIdToNumber(this.getCaipNetwork()?.id);await (0,ef.$j)({connector:a,chainId:p})},connectExternal:async({id:e,provider:a,info:p})=>{let g=t.connectors.find(t=>t.id===e);if(!g)throw Error("connectionControllerClient:connectExternal - connector is undefined");a&&p&&g.id===tu&&g.setEip6963Wallet?.({provider:a,info:p});let m=caipNetworkIdToNumber(this.getCaipNetwork()?.id);await (0,ef.$j)({connector:g,chainId:m})},checkInstalled:e=>{let t=this.getConnectors().filter(e=>"ANNOUNCED"===e.type),a=this.getConnectors().find(e=>"INJECTED"===e.type);if(!e)return!!window.ethereum;if(t.length){let a=e.some(e=>t.some(t=>t.info?.rdns===e));if(a)return!0}return!!a&&!!window?.ethereum&&e.some(e=>!!window.ethereum?.[String(e)])},disconnect:ef.zP};super({networkControllerClient:{switchCaipNetwork:async e=>{let t=caipNetworkIdToNumber(e?.id);t&&await (0,ef.If)({chainId:t})},async getApprovedCaipNetworksData(){let e=localStorage.getItem("wagmi.wallet");if(e?.includes(to)){let e=t.connectors.find(e=>e.id===to);if(!e)throw Error("networkControllerClient:getApprovedCaipNetworks - connector is undefined");let a=await e.getProvider(),p=a.signer?.session?.namespaces,g=p?.[td]?.methods,m=p?.[td]?.chains;return{supportsAllNetworks:g?.includes("wallet_addEthereumChain"),approvedCaipNetworkIds:m}}return{approvedCaipNetworkIds:void 0,supportsAllNetworks:!0}}},connectionControllerClient:_,defaultChain:function(e){if(e)return{id:`${td}:${e.id}`,name:e.name,imageId:tf[e.id]}}(p),tokens:function(e){if(!e)return;let t={};return Object.entries(e).forEach(([e,a])=>{t[`${td}:${e}`]=a}),t}(g),_sdkVersion:m??`html-wagmi-${th}`,...v}),this.hasSyncedConnectedAccount=!1,this.options=void 0,this.options=e,this.syncRequestedNetworks(a),this.syncConnectors(t),this.listenConnectors(t),(0,ef.uH)(()=>this.syncAccount()),(0,ef.QC)(()=>this.syncNetwork())}getState(){let e=super.getState();return{...e,selectedNetworkId:caipNetworkIdToNumber(e.selectedNetworkId)}}subscribeState(e){return super.subscribeState(t=>e({...t,selectedNetworkId:caipNetworkIdToNumber(t.selectedNetworkId)}))}syncRequestedNetworks(e){let t=e?.map(e=>({id:`${td}:${e.id}`,name:e.name,imageId:tf[e.id],imageUrl:this.options?.chainImages?.[e.id]}));this.setRequestedCaipNetworks(t??[])}async syncAccount(){let{address:e,isConnected:t}=(0,ef.D0)(),{chain:a}=(0,ef.Hy)();if(this.resetAccount(),t&&e&&a){let p=`${td}:${a.id}:${e}`;this.setIsConnected(t),this.setCaipAddress(p),await Promise.all([this.syncProfile(e),this.syncBalance(e,a),this.getApprovedCaipNetworksData()]),this.hasSyncedConnectedAccount=!0}else!t&&this.hasSyncedConnectedAccount&&(this.resetWcConnection(),this.resetNetwork())}async syncNetwork(){let{address:e,isConnected:t}=(0,ef.D0)(),{chain:a}=(0,ef.Hy)();if(a){let p=String(a.id),g=`${td}:${p}`;if(this.setCaipNetwork({id:g,name:a.name,imageId:tf[a.id],imageUrl:this.options?.chainImages?.[a.id]}),t&&e){let t=`${td}:${a.id}:${e}`;if(this.setCaipAddress(t),a.blockExplorers?.default?.url){let t=`${a.blockExplorers.default.url}/address/${e}`;this.setAddressExplorerUrl(t)}else this.setAddressExplorerUrl(void 0);this.hasSyncedConnectedAccount&&await this.syncBalance(e,a)}}}async syncProfile(e){try{let{name:t,avatar:a}=await this.fetchIdentity({caipChainId:`${td}:${ep.R.id}`,address:e});this.setProfileName(t),this.setProfileImage(a)}catch{let t=await (0,ef.Lk)({address:e,chainId:ep.R.id});if(t){this.setProfileName(t);let e=await (0,ef.w6)({name:t,chainId:ep.R.id});e&&this.setProfileImage(e)}}}async syncBalance(e,t){let a=await (0,ef.EG)({address:e,chainId:t.id,token:this.options?.tokens?.[t.id]?.address});this.setBalance(a.formatted,a.symbol)}syncConnectors(e){let t=[];e.connectors.forEach(({id:e,name:a})=>{e!==tu&&t.push({id:e,explorerId:tg[e],imageId:tp[e],imageUrl:this.options?.connectorImages?.[e],name:tm[e]??a,type:tw[e]??"EXTERNAL"})}),this.setConnectors(t)}listenConnectors(e){let t=e.connectors.find(e=>e.id===tu);"undefined"!=typeof window&&t&&(window.addEventListener("eip6963:announceProvider",e=>{if(e.detail){let{info:a,provider:p}=e.detail;this.addConnector({id:tu,type:"ANNOUNCED",imageUrl:a.icon??this.options?.connectorImages?.[tu],name:a.name,provider:p,info:a}),t.isAuthorized({info:a,provider:p})}}),window.dispatchEvent(new Event("eip6963:requestProvider")))}};var tb=a(74278),__classPrivateFieldSet=function(e,t,a,p,g){if("m"===p)throw TypeError("Private method is not writable");if("a"===p&&!g)throw TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!g:!t.has(e))throw TypeError("Cannot write private member to an object whose class did not declare it");return"a"===p?g.call(e,a):g?g.value=a:t.set(e,a),a},__classPrivateFieldGet=function(e,t,a,p){if("a"===a&&!p)throw TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!p:!t.has(e))throw TypeError("Cannot read private member from an object whose class did not declare it");return"m"===a?p:"a"===a?p.call(e):p?p.value:t.get(e)};let ty="connectedRdns";let EIP6963Connector=class EIP6963Connector extends tb._{constructor(e){super({chains:e.chains,options:{shimDisconnect:!0}}),this.id="eip6963",this.name="EIP6963",g.set(this,void 0),m.set(this,void 0),__classPrivateFieldSet(this,g,this.options.getProvider(),"f")}async connect(e){let t=await super.connect(e);return __classPrivateFieldGet(this,m,"f")&&this.storage?.setItem(ty,__classPrivateFieldGet(this,m,"f").info.rdns),t}async disconnect(){await super.disconnect(),this.storage?.removeItem(ty),__classPrivateFieldSet(this,m,void 0,"f")}async isAuthorized(e){let t=this.storage?.getItem(ty);if(t){if(!e||t!==e.info.rdns)return!0;__classPrivateFieldSet(this,m,e,"f")}return super.isAuthorized()}async getProvider(){return Promise.resolve(__classPrivateFieldGet(this,m,"f")?.provider??__classPrivateFieldGet(this,g,"f"))}setEip6963Wallet(e){__classPrivateFieldSet(this,m,e,"f")}};g=new WeakMap,m=new WeakMap;var tv=a(48764);"undefined"==typeof window||(window.Buffer||(window.Buffer=tv.Buffer),window.global||(window.global=window),window.process||(window.process={}),window.process?.env||(window.process={env:{}}));var t_=a(66634),tx=a(57858),tC=a(53516),tE=a(75276),tk=a(45775),tS=a(39028),tA=a(21032),tP=a(3980),tD=a(92106),t$=class extends tE.wR{constructor({chains:e,options:t}){super({chains:e,options:{reloadOnDisconnect:!1,...t}}),this.id="coinbaseWallet",this.name="Coinbase Wallet",this.ready=!0,(0,tE.Ko)(this,v,void 0),(0,tE.Ko)(this,_,void 0),this.onAccountsChanged=e=>{0===e.length?this.emit("disconnect"):this.emit("change",{account:(0,tk.K)(e[0])})},this.onChainChanged=e=>{let t=(0,tC.J)(e),a=this.isChainUnsupported(t);this.emit("change",{chain:{id:t,unsupported:a}})},this.onDisconnect=()=>{this.emit("disconnect")}}async connect({chainId:e}={}){try{let t=await this.getProvider();t.on("accountsChanged",this.onAccountsChanged),t.on("chainChanged",this.onChainChanged),t.on("disconnect",this.onDisconnect),this.emit("message",{type:"connecting"});let a=await t.enable(),p=(0,tk.K)(a[0]),g=await this.getChainId(),m=this.isChainUnsupported(g);if(e&&g!==e){let t=await this.switchChain(e);g=t.id,m=this.isChainUnsupported(g)}return{account:p,chain:{id:g,unsupported:m}}}catch(e){if(/(user closed modal|accounts received is empty)/i.test(e.message))throw new tS.ab(e);throw e}}async disconnect(){if(!(0,tE.ac)(this,_))return;let e=await this.getProvider();e.removeListener("accountsChanged",this.onAccountsChanged),e.removeListener("chainChanged",this.onChainChanged),e.removeListener("disconnect",this.onDisconnect),e.disconnect(),e.close()}async getAccount(){let e=await this.getProvider(),t=await e.request({method:"eth_accounts"});return(0,tk.K)(t[0])}async getChainId(){let e=await this.getProvider(),t=(0,tC.J)(e.chainId);return t}async getProvider(){if(!(0,tE.ac)(this,_)){let e=(await Promise.all([a.e(811),a.e(439)]).then(a.t.bind(a,45811,19))).default;"function"!=typeof e&&"function"==typeof e.default&&(e=e.default),(0,tE.qx)(this,v,new e(this.options));let t=tE.ac(this,v).walletExtension?.getChainId(),p=this.chains.find(e=>this.options.chainId?e.id===this.options.chainId:e.id===t)||this.chains[0],g=this.options.chainId||p?.id,m=this.options.jsonRpcUrl||p?.rpcUrls.default.http[0];(0,tE.qx)(this,_,(0,tE.ac)(this,v).makeWeb3Provider(m,g))}return(0,tE.ac)(this,_)}async getWalletClient({chainId:e}={}){let[t,a]=await Promise.all([this.getProvider(),this.getAccount()]),p=this.chains.find(t=>t.id===e);if(!t)throw Error("provider is required.");return(0,tA.K)({account:a,chain:p,transport:(0,tP.P)(t)})}async isAuthorized(){try{let e=await this.getAccount();return!!e}catch{return!1}}async switchChain(e){let t=await this.getProvider(),a=(0,tD.eC)(e);try{return await t.request({method:"wallet_switchEthereumChain",params:[{chainId:a}]}),this.chains.find(t=>t.id===e)??{id:e,name:`Chain ${a}`,network:`${a}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpcUrls:{default:{http:[""]},public:{http:[""]}}}}catch(g){let p=this.chains.find(t=>t.id===e);if(!p)throw new tx.B({chainId:e,connectorId:this.id});if(4902===g.code)try{return await t.request({method:"wallet_addEthereumChain",params:[{chainId:a,chainName:p.name,nativeCurrency:p.nativeCurrency,rpcUrls:[p.rpcUrls.public?.http[0]??""],blockExplorerUrls:this.getBlockExplorerUrls(p)}]}),p}catch(e){throw new tS.ab(e)}throw new tS.x3(g)}}async watchAsset({address:e,decimals:t=18,image:a,symbol:p}){let g=await this.getProvider();return g.request({method:"wallet_watchAsset",params:{type:"ERC20",options:{address:e,decimals:t,image:a,symbol:p}}})}};v=new WeakMap,_=new WeakMap;var tO=a(5015),tI="eip155",tT="requestedChains",tR="wallet_addEthereumChain",tB=class extends tE.wR{constructor(e){super({...e,options:{isNewChainsStale:!0,...e.options}}),(0,tE.Ko)(this,F),(0,tE.Ko)(this,W),(0,tE.Ko)(this,Z),(0,tE.Ko)(this,X),(0,tE.Ko)(this,J),(0,tE.Ko)(this,en),(0,tE.Ko)(this,ea),(0,tE.Ko)(this,el),(0,tE.Ko)(this,eu),this.id="walletConnect",this.name="WalletConnect",this.ready=!0,(0,tE.Ko)(this,x,void 0),(0,tE.Ko)(this,T,void 0),this.onAccountsChanged=e=>{0===e.length?this.emit("disconnect"):this.emit("change",{account:(0,tk.K)(e[0])})},this.onChainChanged=e=>{let t=Number(e),a=this.isChainUnsupported(t);this.emit("change",{chain:{id:t,unsupported:a}})},this.onDisconnect=()=>{(0,tE.U9)(this,en,eo).call(this,[]),this.emit("disconnect")},this.onDisplayUri=e=>{this.emit("message",{type:"display_uri",data:e})},this.onConnect=()=>{this.emit("connect",{})},(0,tE.U9)(this,F,z).call(this)}async connect({chainId:e,pairingTopic:t}={}){try{let a=e;if(!a){let e=this.storage?.getItem("store"),t=e?.state?.data?.chain?.id;a=t&&!this.isChainUnsupported(t)?t:this.chains[0]?.id}if(!a)throw Error("No chains found on connector.");let p=await this.getProvider();(0,tE.U9)(this,X,Y).call(this);let g=(0,tE.U9)(this,Z,Q).call(this);if(p.session&&g&&await p.disconnect(),!p.session||g){let e=this.chains.filter(e=>e.id!==a).map(e=>e.id);this.emit("message",{type:"connecting"}),await p.connect({pairingTopic:t,chains:[a],optionalChains:e.length?e:void 0}),(0,tE.U9)(this,en,eo).call(this,this.chains.map(({id:e})=>e))}let m=await p.enable(),v=(0,tk.K)(m[0]),_=await this.getChainId(),x=this.isChainUnsupported(_);return{account:v,chain:{id:_,unsupported:x}}}catch(e){if(/user rejected/i.test(e?.message))throw new tS.ab(e);throw e}}async disconnect(){let e=await this.getProvider();try{await e.disconnect()}catch(e){if(!/No matching key/i.test(e.message))throw e}finally{(0,tE.U9)(this,J,ei).call(this),(0,tE.U9)(this,en,eo).call(this,[])}}async getAccount(){let{accounts:e}=await this.getProvider();return(0,tk.K)(e[0])}async getChainId(){let{chainId:e}=await this.getProvider();return e}async getProvider({chainId:e}={}){return(0,tE.ac)(this,x)||await (0,tE.U9)(this,F,z).call(this),e&&await this.switchChain(e),(0,tE.ac)(this,x)}async getWalletClient({chainId:e}={}){let[t,a]=await Promise.all([this.getProvider({chainId:e}),this.getAccount()]),p=this.chains.find(t=>t.id===e);if(!t)throw Error("provider is required.");return(0,tA.K)({account:a,chain:p,transport:(0,tP.P)(t)})}async isAuthorized(){try{let[e,t]=await Promise.all([this.getAccount(),this.getProvider()]),a=(0,tE.U9)(this,Z,Q).call(this);if(!e)return!1;if(a&&t.session){try{await t.disconnect()}catch{}return!1}return!0}catch{return!1}}async switchChain(e){let t=this.chains.find(t=>t.id===e);if(!t)throw new tS.x3(Error("chain not found on connector."));try{let a=await this.getProvider(),p=(0,tE.U9)(this,el,ec).call(this),g=(0,tE.U9)(this,eu,ed).call(this),m=p.includes(e);if(!m&&g.includes(tR)){await a.request({method:tR,params:[{chainId:(0,tD.eC)(t.id),blockExplorerUrls:[t.blockExplorers?.default?.url],chainName:t.name,nativeCurrency:t.nativeCurrency,rpcUrls:[...t.rpcUrls.default.http]}]});let p=(0,tE.U9)(this,ea,es).call(this);p.push(e),(0,tE.U9)(this,en,eo).call(this,p)}return await a.request({method:"wallet_switchEthereumChain",params:[{chainId:(0,tD.eC)(e)}]}),t}catch(t){let e="string"==typeof t?t:t?.message;if(/user rejected request/i.test(e))throw new tS.ab(t);throw new tS.x3(t)}}};x=new WeakMap,T=new WeakMap,F=new WeakSet,z=async function(){return(0,tE.ac)(this,T)||"undefined"==typeof window||(0,tE.qx)(this,T,(0,tE.U9)(this,W,K).call(this)),(0,tE.ac)(this,T)},W=new WeakSet,K=async function(){let{EthereumProvider:e,OPTIONAL_EVENTS:t,OPTIONAL_METHODS:p}=await a.e(882).then(a.bind(a,20882)),[g,...m]=this.chains.map(({id:e})=>e);if(g){let{projectId:a,showQrModal:v=!0,qrModalOptions:_,metadata:T,relayUrl:F}=this.options;(0,tE.qx)(this,x,await e.init({showQrModal:v,qrModalOptions:_,projectId:a,optionalMethods:p,optionalEvents:t,chains:[g],optionalChains:m.length?m:void 0,rpcMap:Object.fromEntries(this.chains.map(e=>[e.id,e.rpcUrls.default.http[0]])),metadata:T,relayUrl:F}))}},Z=new WeakSet,Q=function(){let e=(0,tE.U9)(this,eu,ed).call(this);if(e.includes(tR)||!this.options.isNewChainsStale)return!1;let t=(0,tE.U9)(this,ea,es).call(this),a=this.chains.map(({id:e})=>e),p=(0,tE.U9)(this,el,ec).call(this);return(!p.length||!!p.some(e=>a.includes(e)))&&!a.every(e=>t.includes(e))},X=new WeakSet,Y=function(){(0,tE.ac)(this,x)&&((0,tE.U9)(this,J,ei).call(this),(0,tE.ac)(this,x).on("accountsChanged",this.onAccountsChanged),(0,tE.ac)(this,x).on("chainChanged",this.onChainChanged),(0,tE.ac)(this,x).on("disconnect",this.onDisconnect),(0,tE.ac)(this,x).on("session_delete",this.onDisconnect),(0,tE.ac)(this,x).on("display_uri",this.onDisplayUri),(0,tE.ac)(this,x).on("connect",this.onConnect))},J=new WeakSet,ei=function(){(0,tE.ac)(this,x)&&((0,tE.ac)(this,x).removeListener("accountsChanged",this.onAccountsChanged),(0,tE.ac)(this,x).removeListener("chainChanged",this.onChainChanged),(0,tE.ac)(this,x).removeListener("disconnect",this.onDisconnect),(0,tE.ac)(this,x).removeListener("session_delete",this.onDisconnect),(0,tE.ac)(this,x).removeListener("display_uri",this.onDisplayUri),(0,tE.ac)(this,x).removeListener("connect",this.onConnect))},en=new WeakSet,eo=function(e){this.storage?.setItem(tT,e)},ea=new WeakSet,es=function(){return this.storage?.getItem(tT)??[]},el=new WeakSet,ec=function(){if(!(0,tE.ac)(this,x))return[];let e=tE.ac(this,x).session?.namespaces;if(!e)return[];let t=(0,tO.fK)(e),a=t[tI]?.chains?.map(e=>parseInt(e.split(":")[1]||""));return a??[]},eu=new WeakSet,ed=function(){if(!(0,tE.ac)(this,x))return[];let e=tE.ac(this,x).session?.namespaces;if(!e)return[];let t=(0,tO.fK)(e),a=t[tI]?.methods;return a??[]};let tN=eg.j1.getBlockchainApiUrl();function defaultWagmiConfig({projectId:e,chains:t,metadata:a}){let{publicClient:p}=(0,ef.QB)(t,[function({projectId:e}){return function(t){if(![1,5,11155111,10,420,42161,421613,137,80001,42220,1313161554,1313161555,56,97,43114,43113,100,8453,84531,7777777,999,324,280].includes(t.id))return null;let a=`${tN}/v1/?chainId=${td}:${t.id}&projectId=${e}`;return{chain:{...t,rpcUrls:{...t.rpcUrls,default:{http:[a]}}},rpcUrls:{http:[a]}}}}({projectId:e}),function(e){return e.rpcUrls.public.http[0]?{chain:e,rpcUrls:e.rpcUrls.public}:null}]);return(0,t_._g)({autoConnect:!0,connectors:[new tB({chains:t,options:{projectId:e,showQrModal:!1,metadata:a}}),new EIP6963Connector({chains:t}),new tb._({chains:t,options:{shimDisconnect:!0}}),new t$({chains:t,options:{appName:a?.name??"Unknown"}})],publicClient:p})}function createWeb3Modal(e){return p||(p=new Web3Modal({...e,_sdkVersion:`react-wagmi-${th}`})),p}function useWeb3ModalTheme(){if(!p)throw Error('Please call "createWeb3Modal" before using "useWeb3ModalTheme" hook');let[e,t]=(0,eh.useState)(p.getThemeMode()),[a,g]=(0,eh.useState)(p.getThemeVariables());return(0,eh.useEffect)(()=>{let e=p?.subscribeTheme(e=>{t(e.themeMode),g(e.themeVariables)});return()=>{e?.()}},[]),{themeMode:e,themeVariables:a,setThemeMode:function(e){p?.setThemeMode(e)},setThemeVariables:function(e){p?.setThemeVariables(e)}}}},53160:function(e,t,a){"use strict";a.d(t,{E:function(){return allocUnsafe}});var p=a(16867);function allocUnsafe(e=0){return null!=globalThis.Buffer&&null!=globalThis.Buffer.allocUnsafe?(0,p.P)(globalThis.Buffer.allocUnsafe(e)):new Uint8Array(e)}},20605:function(e,t,a){"use strict";a.d(t,{z:function(){return concat}});var p=a(53160),g=a(16867);function concat(e,t){t||(t=e.reduce((e,t)=>e+t.length,0));let a=(0,p.E)(t),m=0;for(let t of e)a.set(t,m),m+=t.length;return(0,g.P)(a)}},52217:function(e,t,a){"use strict";a.d(t,{m:function(){return fromString}});var p=a(73149),g=a(16867);function fromString(e,t="utf8"){let a=p.Z[t];if(!a)throw Error(`Unsupported encoding "${t}"`);return("utf8"===t||"utf-8"===t)&&null!=globalThis.Buffer&&null!=globalThis.Buffer.from?(0,g.P)(globalThis.Buffer.from(e,"utf-8")):a.decoder.decode(`${a.prefix}${e}`)}},37466:function(e,t,a){"use strict";a.d(t,{BB:function(){return m.B},mL:function(){return g.m},zo:function(){return p.z}});var p=a(20605),g=a(52217),m=a(92263)},92263:function(e,t,a){"use strict";a.d(t,{B:function(){return toString}});var p=a(73149);function toString(e,t="utf8"){let a=p.Z[t];if(!a)throw Error(`Unsupported encoding "${t}"`);return("utf8"===t||"utf-8"===t)&&null!=globalThis.Buffer&&null!=globalThis.Buffer.from?globalThis.Buffer.from(e.buffer,e.byteOffset,e.byteLength).toString("utf8"):a.encoder.encode(e).substring(1)}},16867:function(e,t,a){"use strict";function asUint8Array(e){return null!=globalThis.Buffer?new Uint8Array(e.buffer,e.byteOffset,e.byteLength):e}a.d(t,{P:function(){return asUint8Array}})},73149:function(e,t,a){"use strict";a.d(t,{Z:function(){return eZ}});var p={};a.r(p),a.d(p,{identity:function(){return Y}});var g={};a.r(g),a.d(g,{base2:function(){return J}});var m={};a.r(m),a.d(m,{base8:function(){return ei}});var v={};a.r(v),a.d(v,{base10:function(){return en}});var _={};a.r(_),a.d(_,{base16:function(){return eo},base16upper:function(){return ea}});var x={};a.r(x),a.d(x,{base32:function(){return es},base32hex:function(){return ed},base32hexpad:function(){return ef},base32hexpadupper:function(){return ep},base32hexupper:function(){return eh},base32pad:function(){return ec},base32padupper:function(){return eu},base32upper:function(){return el},base32z:function(){return eg}});var T={};a.r(T),a.d(T,{base36:function(){return em},base36upper:function(){return ew}});var F={};a.r(F),a.d(F,{base58btc:function(){return eb},base58flickr:function(){return ey}});var z={};a.r(z),a.d(z,{base64:function(){return ev},base64pad:function(){return e_},base64url:function(){return ex},base64urlpad:function(){return eC}});var W={};a.r(W),a.d(W,{base256emoji:function(){return eA}});var K={};a.r(K),a.d(K,{sha256:function(){return eD},sha512:function(){return e$}});var Z={};a.r(Z),a.d(Z,{identity:function(){return eO}});var Q={};a.r(Q),a.d(Q,{code:function(){return eT},decode:function(){return raw_decode},encode:function(){return raw_encode},name:function(){return eI}});var X={};a.r(X),a.d(X,{code:function(){return eU},decode:function(){return json_decode},encode:function(){return json_encode},name:function(){return eN}});var base_x=function(e,t){if(e.length>=255)throw TypeError("Alphabet too long");for(var a=new Uint8Array(256),p=0;p<a.length;p++)a[p]=255;for(var g=0;g<e.length;g++){var m=e.charAt(g),v=m.charCodeAt(0);if(255!==a[v])throw TypeError(m+" is ambiguous");a[v]=g}var _=e.length,x=e.charAt(0),T=Math.log(_)/Math.log(256),F=Math.log(256)/Math.log(_);function decodeUnsafe(e){if("string"!=typeof e)throw TypeError("Expected String");if(0===e.length)return new Uint8Array;var t=0;if(" "!==e[0]){for(var p=0,g=0;e[t]===x;)p++,t++;for(var m=(e.length-t)*T+1>>>0,v=new Uint8Array(m);e[t];){var F=a[e.charCodeAt(t)];if(255===F)return;for(var z=0,W=m-1;(0!==F||z<g)&&-1!==W;W--,z++)F+=_*v[W]>>>0,v[W]=F%256>>>0,F=F/256>>>0;if(0!==F)throw Error("Non-zero carry");g=z,t++}if(" "!==e[t]){for(var K=m-g;K!==m&&0===v[K];)K++;for(var Z=new Uint8Array(p+(m-K)),Q=p;K!==m;)Z[Q++]=v[K++];return Z}}}return{encode:function(t){if(t instanceof Uint8Array||(ArrayBuffer.isView(t)?t=new Uint8Array(t.buffer,t.byteOffset,t.byteLength):Array.isArray(t)&&(t=Uint8Array.from(t))),!(t instanceof Uint8Array))throw TypeError("Expected Uint8Array");if(0===t.length)return"";for(var a=0,p=0,g=0,m=t.length;g!==m&&0===t[g];)g++,a++;for(var v=(m-g)*F+1>>>0,T=new Uint8Array(v);g!==m;){for(var z=t[g],W=0,K=v-1;(0!==z||W<p)&&-1!==K;K--,W++)z+=256*T[K]>>>0,T[K]=z%_>>>0,z=z/_>>>0;if(0!==z)throw Error("Non-zero carry");p=W,g++}for(var Z=v-p;Z!==v&&0===T[Z];)Z++;for(var Q=x.repeat(a);Z<v;++Z)Q+=e.charAt(T[Z]);return Q},decodeUnsafe:decodeUnsafe,decode:function(e){var a=decodeUnsafe(e);if(a)return a;throw Error(`Non-${t} character`)}}};new Uint8Array(0);let equals=(e,t)=>{if(e===t)return!0;if(e.byteLength!==t.byteLength)return!1;for(let a=0;a<e.byteLength;a++)if(e[a]!==t[a])return!1;return!0},coerce=e=>{if(e instanceof Uint8Array&&"Uint8Array"===e.constructor.name)return e;if(e instanceof ArrayBuffer)return new Uint8Array(e);if(ArrayBuffer.isView(e))return new Uint8Array(e.buffer,e.byteOffset,e.byteLength);throw Error("Unknown type, must be binary type")},fromString=e=>new TextEncoder().encode(e),bytes_toString=e=>new TextDecoder().decode(e);let Encoder=class Encoder{constructor(e,t,a){this.name=e,this.prefix=t,this.baseEncode=a}encode(e){if(e instanceof Uint8Array)return`${this.prefix}${this.baseEncode(e)}`;throw Error("Unknown type, must be binary type")}};let Decoder=class Decoder{constructor(e,t,a){if(this.name=e,this.prefix=t,void 0===t.codePointAt(0))throw Error("Invalid prefix character");this.prefixCodePoint=t.codePointAt(0),this.baseDecode=a}decode(e){if("string"==typeof e){if(e.codePointAt(0)!==this.prefixCodePoint)throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);return this.baseDecode(e.slice(this.prefix.length))}throw Error("Can only multibase decode strings")}or(e){return or(this,e)}};let ComposedDecoder=class ComposedDecoder{constructor(e){this.decoders=e}or(e){return or(this,e)}decode(e){let t=e[0],a=this.decoders[t];if(a)return a.decode(e);throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)}};let or=(e,t)=>new ComposedDecoder({...e.decoders||{[e.prefix]:e},...t.decoders||{[t.prefix]:t}});let Codec=class Codec{constructor(e,t,a,p){this.name=e,this.prefix=t,this.baseEncode=a,this.baseDecode=p,this.encoder=new Encoder(e,t,a),this.decoder=new Decoder(e,t,p)}encode(e){return this.encoder.encode(e)}decode(e){return this.decoder.decode(e)}};let from=({name:e,prefix:t,encode:a,decode:p})=>new Codec(e,t,a,p),baseX=({prefix:e,name:t,alphabet:a})=>{let{encode:p,decode:g}=base_x(a,t);return from({prefix:e,name:t,encode:p,decode:e=>coerce(g(e))})},decode=(e,t,a,p)=>{let g={};for(let e=0;e<t.length;++e)g[t[e]]=e;let m=e.length;for(;"="===e[m-1];)--m;let v=new Uint8Array(m*a/8|0),_=0,x=0,T=0;for(let t=0;t<m;++t){let m=g[e[t]];if(void 0===m)throw SyntaxError(`Non-${p} character`);x=x<<a|m,(_+=a)>=8&&(_-=8,v[T++]=255&x>>_)}if(_>=a||255&x<<8-_)throw SyntaxError("Unexpected end of data");return v},encode=(e,t,a)=>{let p="="===t[t.length-1],g=(1<<a)-1,m="",v=0,_=0;for(let p=0;p<e.length;++p)for(_=_<<8|e[p],v+=8;v>a;)v-=a,m+=t[g&_>>v];if(v&&(m+=t[g&_<<a-v]),p)for(;m.length*a&7;)m+="=";return m},rfc4648=({name:e,prefix:t,bitsPerChar:a,alphabet:p})=>from({prefix:t,name:e,encode:e=>encode(e,p,a),decode:t=>decode(t,p,a,e)}),Y=from({prefix:"\x00",name:"identity",encode:e=>bytes_toString(e),decode:e=>fromString(e)}),J=rfc4648({prefix:"0",name:"base2",alphabet:"01",bitsPerChar:1}),ei=rfc4648({prefix:"7",name:"base8",alphabet:"01234567",bitsPerChar:3}),en=baseX({prefix:"9",name:"base10",alphabet:"0123456789"}),eo=rfc4648({prefix:"f",name:"base16",alphabet:"0123456789abcdef",bitsPerChar:4}),ea=rfc4648({prefix:"F",name:"base16upper",alphabet:"0123456789ABCDEF",bitsPerChar:4}),es=rfc4648({prefix:"b",name:"base32",alphabet:"abcdefghijklmnopqrstuvwxyz234567",bitsPerChar:5}),el=rfc4648({prefix:"B",name:"base32upper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",bitsPerChar:5}),ec=rfc4648({prefix:"c",name:"base32pad",alphabet:"abcdefghijklmnopqrstuvwxyz234567=",bitsPerChar:5}),eu=rfc4648({prefix:"C",name:"base32padupper",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",bitsPerChar:5}),ed=rfc4648({prefix:"v",name:"base32hex",alphabet:"0123456789abcdefghijklmnopqrstuv",bitsPerChar:5}),eh=rfc4648({prefix:"V",name:"base32hexupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV",bitsPerChar:5}),ef=rfc4648({prefix:"t",name:"base32hexpad",alphabet:"0123456789abcdefghijklmnopqrstuv=",bitsPerChar:5}),ep=rfc4648({prefix:"T",name:"base32hexpadupper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUV=",bitsPerChar:5}),eg=rfc4648({prefix:"h",name:"base32z",alphabet:"ybndrfg8ejkmcpqxot1uwisza345h769",bitsPerChar:5}),em=baseX({prefix:"k",name:"base36",alphabet:"0123456789abcdefghijklmnopqrstuvwxyz"}),ew=baseX({prefix:"K",name:"base36upper",alphabet:"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"}),eb=baseX({name:"base58btc",prefix:"z",alphabet:"123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"}),ey=baseX({name:"base58flickr",prefix:"Z",alphabet:"123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"}),ev=rfc4648({prefix:"m",name:"base64",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",bitsPerChar:6}),e_=rfc4648({prefix:"M",name:"base64pad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",bitsPerChar:6}),ex=rfc4648({prefix:"u",name:"base64url",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",bitsPerChar:6}),eC=rfc4648({prefix:"U",name:"base64urlpad",alphabet:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",bitsPerChar:6}),eE=Array.from("\uD83D\uDE80\uD83E\uDE90☄\uD83D\uDEF0\uD83C\uDF0C\uD83C\uDF11\uD83C\uDF12\uD83C\uDF13\uD83C\uDF14\uD83C\uDF15\uD83C\uDF16\uD83C\uDF17\uD83C\uDF18\uD83C\uDF0D\uD83C\uDF0F\uD83C\uDF0E\uD83D\uDC09☀\uD83D\uDCBB\uD83D\uDDA5\uD83D\uDCBE\uD83D\uDCBF\uD83D\uDE02❤\uD83D\uDE0D\uD83E\uDD23\uD83D\uDE0A\uD83D\uDE4F\uD83D\uDC95\uD83D\uDE2D\uD83D\uDE18\uD83D\uDC4D\uD83D\uDE05\uD83D\uDC4F\uD83D\uDE01\uD83D\uDD25\uD83E\uDD70\uD83D\uDC94\uD83D\uDC96\uD83D\uDC99\uD83D\uDE22\uD83E\uDD14\uD83D\uDE06\uD83D\uDE44\uD83D\uDCAA\uD83D\uDE09☺\uD83D\uDC4C\uD83E\uDD17\uD83D\uDC9C\uD83D\uDE14\uD83D\uDE0E\uD83D\uDE07\uD83C\uDF39\uD83E\uDD26\uD83C\uDF89\uD83D\uDC9E✌✨\uD83E\uDD37\uD83D\uDE31\uD83D\uDE0C\uD83C\uDF38\uD83D\uDE4C\uD83D\uDE0B\uD83D\uDC97\uD83D\uDC9A\uD83D\uDE0F\uD83D\uDC9B\uD83D\uDE42\uD83D\uDC93\uD83E\uDD29\uD83D\uDE04\uD83D\uDE00\uD83D\uDDA4\uD83D\uDE03\uD83D\uDCAF\uD83D\uDE48\uD83D\uDC47\uD83C\uDFB6\uD83D\uDE12\uD83E\uDD2D❣\uD83D\uDE1C\uD83D\uDC8B\uD83D\uDC40\uD83D\uDE2A\uD83D\uDE11\uD83D\uDCA5\uD83D\uDE4B\uD83D\uDE1E\uD83D\uDE29\uD83D\uDE21\uD83E\uDD2A\uD83D\uDC4A\uD83E\uDD73\uD83D\uDE25\uD83E\uDD24\uD83D\uDC49\uD83D\uDC83\uD83D\uDE33✋\uD83D\uDE1A\uD83D\uDE1D\uD83D\uDE34\uD83C\uDF1F\uD83D\uDE2C\uD83D\uDE43\uD83C\uDF40\uD83C\uDF37\uD83D\uDE3B\uD83D\uDE13⭐✅\uD83E\uDD7A\uD83C\uDF08\uD83D\uDE08\uD83E\uDD18\uD83D\uDCA6✔\uD83D\uDE23\uD83C\uDFC3\uD83D\uDC90☹\uD83C\uDF8A\uD83D\uDC98\uD83D\uDE20☝\uD83D\uDE15\uD83C\uDF3A\uD83C\uDF82\uD83C\uDF3B\uD83D\uDE10\uD83D\uDD95\uD83D\uDC9D\uD83D\uDE4A\uD83D\uDE39\uD83D\uDDE3\uD83D\uDCAB\uD83D\uDC80\uD83D\uDC51\uD83C\uDFB5\uD83E\uDD1E\uD83D\uDE1B\uD83D\uDD34\uD83D\uDE24\uD83C\uDF3C\uD83D\uDE2B⚽\uD83E\uDD19☕\uD83C\uDFC6\uD83E\uDD2B\uD83D\uDC48\uD83D\uDE2E\uD83D\uDE46\uD83C\uDF7B\uD83C\uDF43\uD83D\uDC36\uD83D\uDC81\uD83D\uDE32\uD83C\uDF3F\uD83E\uDDE1\uD83C\uDF81⚡\uD83C\uDF1E\uD83C\uDF88❌✊\uD83D\uDC4B\uD83D\uDE30\uD83E\uDD28\uD83D\uDE36\uD83E\uDD1D\uD83D\uDEB6\uD83D\uDCB0\uD83C\uDF53\uD83D\uDCA2\uD83E\uDD1F\uD83D\uDE41\uD83D\uDEA8\uD83D\uDCA8\uD83E\uDD2C✈\uD83C\uDF80\uD83C\uDF7A\uD83E\uDD13\uD83D\uDE19\uD83D\uDC9F\uD83C\uDF31\uD83D\uDE16\uD83D\uDC76\uD83E\uDD74▶➡❓\uD83D\uDC8E\uD83D\uDCB8⬇\uD83D\uDE28\uD83C\uDF1A\uD83E\uDD8B\uD83D\uDE37\uD83D\uDD7A⚠\uD83D\uDE45\uD83D\uDE1F\uD83D\uDE35\uD83D\uDC4E\uD83E\uDD32\uD83E\uDD20\uD83E\uDD27\uD83D\uDCCC\uD83D\uDD35\uD83D\uDC85\uD83E\uDDD0\uD83D\uDC3E\uD83C\uDF52\uD83D\uDE17\uD83E\uDD11\uD83C\uDF0A\uD83E\uDD2F\uD83D\uDC37☎\uD83D\uDCA7\uD83D\uDE2F\uD83D\uDC86\uD83D\uDC46\uD83C\uDFA4\uD83D\uDE47\uD83C\uDF51❄\uD83C\uDF34\uD83D\uDCA3\uD83D\uDC38\uD83D\uDC8C\uD83D\uDCCD\uD83E\uDD40\uD83E\uDD22\uD83D\uDC45\uD83D\uDCA1\uD83D\uDCA9\uD83D\uDC50\uD83D\uDCF8\uD83D\uDC7B\uD83E\uDD10\uD83E\uDD2E\uD83C\uDFBC\uD83E\uDD75\uD83D\uDEA9\uD83C\uDF4E\uD83C\uDF4A\uD83D\uDC7C\uD83D\uDC8D\uD83D\uDCE3\uD83E\uDD42"),ek=eE.reduce((e,t,a)=>(e[a]=t,e),[]),eS=eE.reduce((e,t,a)=>(e[t.codePointAt(0)]=a,e),[]),eA=from({prefix:"\uD83D\uDE80",name:"base256emoji",encode:function(e){return e.reduce((e,t)=>e+=ek[t],"")},decode:function(e){let t=[];for(let a of e){let e=eS[a.codePointAt(0)];if(void 0===e)throw Error(`Non-base256emoji character: ${a}`);t.push(e)}return new Uint8Array(t)}});function varint_encode(e,t,a){t=t||[];for(var p=a=a||0;e>=2147483648;)t[a++]=255&e|128,e/=128;for(;-128&e;)t[a++]=255&e|128,e>>>=7;return t[a]=0|e,varint_encode.bytes=a-p+1,t}function read(e,t){var a,p=0,t=t||0,g=0,m=t,v=e.length;do{if(m>=v)throw read.bytes=0,RangeError("Could not decode varint");a=e[m++],p+=g<28?(127&a)<<g:(127&a)*Math.pow(2,g),g+=7}while(a>=128);return read.bytes=m-t,p}var eP={encode:varint_encode,decode:read,encodingLength:function(e){return e<128?1:e<16384?2:e<2097152?3:e<268435456?4:e<34359738368?5:e<4398046511104?6:e<562949953421312?7:e<72057594037927940?8:e<0x7fffffffffffffff?9:10}};let src_varint_decode=(e,t=0)=>{let a=eP.decode(e,t);return[a,eP.decode.bytes]},encodeTo=(e,t,a=0)=>(eP.encode(e,t,a),t),encodingLength=e=>eP.encodingLength(e),create=(e,t)=>{let a=t.byteLength,p=encodingLength(e),g=p+encodingLength(a),m=new Uint8Array(g+a);return encodeTo(e,m,0),encodeTo(a,m,p),m.set(t,g),new Digest(e,a,t,m)},digest_decode=e=>{let t=coerce(e),[a,p]=src_varint_decode(t),[g,m]=src_varint_decode(t.subarray(p)),v=t.subarray(p+m);if(v.byteLength!==g)throw Error("Incorrect length");return new Digest(a,g,v,t)},digest_equals=(e,t)=>e===t||e.code===t.code&&e.size===t.size&&equals(e.bytes,t.bytes);let Digest=class Digest{constructor(e,t,a,p){this.code=e,this.size=t,this.digest=a,this.bytes=p}};let hasher_from=({name:e,code:t,encode:a})=>new Hasher(e,t,a);let Hasher=class Hasher{constructor(e,t,a){this.name=e,this.code=t,this.encode=a}digest(e){if(e instanceof Uint8Array){let t=this.encode(e);return t instanceof Uint8Array?create(this.code,t):t.then(e=>create(this.code,e))}throw Error("Unknown type, must be binary type")}};let sha=e=>async t=>new Uint8Array(await crypto.subtle.digest(e,t)),eD=hasher_from({name:"sha2-256",code:18,encode:sha("SHA-256")}),e$=hasher_from({name:"sha2-512",code:19,encode:sha("SHA-512")}),eO={code:0,name:"identity",encode:coerce,digest:e=>create(0,coerce(e))},eI="raw",eT=85,raw_encode=e=>coerce(e),raw_decode=e=>coerce(e),eR=new TextEncoder,eB=new TextDecoder,eN="json",eU=512,json_encode=e=>eR.encode(JSON.stringify(e)),json_decode=e=>JSON.parse(eB.decode(e));let CID=class CID{constructor(e,t,a,p){this.code=t,this.version=e,this.multihash=a,this.bytes=p,this.byteOffset=p.byteOffset,this.byteLength=p.byteLength,this.asCID=this,this._baseCache=new Map,Object.defineProperties(this,{byteOffset:ez,byteLength:ez,code:eF,version:eF,multihash:eF,bytes:eF,_baseCache:ez,asCID:ez})}toV0(){if(0===this.version)return this;{let{code:e,multihash:t}=this;if(e!==eM)throw Error("Cannot convert a non dag-pb CID to CIDv0");if(t.code!==ej)throw Error("Cannot convert non sha2-256 multihash CID to CIDv0");return CID.createV0(t)}}toV1(){switch(this.version){case 0:{let{code:e,digest:t}=this.multihash,a=create(e,t);return CID.createV1(this.code,a)}case 1:return this;default:throw Error(`Can not convert CID version ${this.version} to version 0. This is a bug please report`)}}equals(e){return e&&this.code===e.code&&this.version===e.version&&digest_equals(this.multihash,e.multihash)}toString(e){let{bytes:t,version:a,_baseCache:p}=this;return 0===a?toStringV0(t,p,e||eb.encoder):toStringV1(t,p,e||es.encoder)}toJSON(){return{code:this.code,version:this.version,hash:this.multihash.bytes}}get[Symbol.toStringTag](){return"CID"}[Symbol.for("nodejs.util.inspect.custom")](){return"CID("+this.toString()+")"}static isCID(e){return deprecate(/^0\.0/,eW),!!(e&&(e[eL]||e.asCID===e))}get toBaseEncodedString(){throw Error("Deprecated, use .toString()")}get codec(){throw Error('"codec" property is deprecated, use integer "code" property instead')}get buffer(){throw Error("Deprecated .buffer property, use .bytes to get Uint8Array instead")}get multibaseName(){throw Error('"multibaseName" property is deprecated')}get prefix(){throw Error('"prefix" property is deprecated')}static asCID(e){if(e instanceof CID)return e;if(null!=e&&e.asCID===e){let{version:t,code:a,multihash:p,bytes:g}=e;return new CID(t,a,p,g||encodeCID(t,a,p.bytes))}if(null==e||!0!==e[eL])return null;{let{version:t,multihash:a,code:p}=e,g=digest_decode(a);return CID.create(t,p,g)}}static create(e,t,a){if("number"!=typeof t)throw Error("String codecs are no longer supported");switch(e){case 0:if(t===eM)return new CID(e,t,a,a.bytes);throw Error(`Version 0 CID must use dag-pb (code: ${eM}) block encoding`);case 1:{let p=encodeCID(e,t,a.bytes);return new CID(e,t,a,p)}default:throw Error("Invalid version")}}static createV0(e){return CID.create(0,eM,e)}static createV1(e,t){return CID.create(1,e,t)}static decode(e){let[t,a]=CID.decodeFirst(e);if(a.length)throw Error("Incorrect length");return t}static decodeFirst(e){let t=CID.inspectBytes(e),a=t.size-t.multihashSize,p=coerce(e.subarray(a,a+t.multihashSize));if(p.byteLength!==t.multihashSize)throw Error("Incorrect length");let g=p.subarray(t.multihashSize-t.digestSize),m=new Digest(t.multihashCode,t.digestSize,g,p),v=0===t.version?CID.createV0(m):CID.createV1(t.codec,m);return[v,e.subarray(t.size)]}static inspectBytes(e){let t=0,next=()=>{let[a,p]=src_varint_decode(e.subarray(t));return t+=p,a},a=next(),p=eM;if(18===a?(a=0,t=0):1===a&&(p=next()),0!==a&&1!==a)throw RangeError(`Invalid CID version ${a}`);let g=t,m=next(),v=next(),_=t+v;return{version:a,codec:p,multihashCode:m,digestSize:v,multihashSize:_-g,size:_}}static parse(e,t){let[a,p]=parseCIDtoBytes(e,t),g=CID.decode(p);return g._baseCache.set(a,e),g}};let parseCIDtoBytes=(e,t)=>{switch(e[0]){case"Q":return[eb.prefix,(t||eb).decode(`${eb.prefix}${e}`)];case eb.prefix:return[eb.prefix,(t||eb).decode(e)];case es.prefix:return[es.prefix,(t||es).decode(e)];default:if(null==t)throw Error("To parse non base32 or base58btc encoded CID multibase decoder must be provided");return[e[0],t.decode(e)]}},toStringV0=(e,t,a)=>{let{prefix:p}=a;if(p!==eb.prefix)throw Error(`Cannot string encode V0 in ${a.name} encoding`);let g=t.get(p);if(null!=g)return g;{let g=a.encode(e).slice(1);return t.set(p,g),g}},toStringV1=(e,t,a)=>{let{prefix:p}=a,g=t.get(p);if(null!=g)return g;{let g=a.encode(e);return t.set(p,g),g}},eM=112,ej=18,encodeCID=(e,t,a)=>{let p=encodingLength(e),g=p+encodingLength(t),m=new Uint8Array(g+a.byteLength);return encodeTo(e,m,0),encodeTo(t,m,p),m.set(a,g),m},eL=Symbol.for("@ipld/js-cid/CID"),eF={writable:!1,configurable:!1,enumerable:!0},ez={writable:!1,enumerable:!1,configurable:!1},deprecate=(e,t)=>{if(e.test("0.0.0-dev"))console.warn(t);else throw Error(t)},eW=`CID.isCID(v) is deprecated and will be removed in the next major release.
Following code pattern:

if (CID.isCID(value)) {
  doSomethingWithCID(value)
}

Is replaced with:

const cid = CID.asCID(value)
if (cid) {
  // Make sure to use cid instead of value
  doSomethingWithCID(cid)
}
`,eH={...p,...g,...m,...v,..._,...x,...T,...F,...z,...W};({...K,...Z});var eq=a(53160);function createCodec(e,t,a,p){return{name:e,prefix:t,encoder:{name:e,prefix:t,encode:a},decoder:{decode:p}}}let eG=createCodec("utf8","u",e=>{let t=new TextDecoder("utf8");return"u"+t.decode(e)},e=>{let t=new TextEncoder;return t.encode(e.substring(1))}),eV=createCodec("ascii","a",e=>{let t="a";for(let a=0;a<e.length;a++)t+=String.fromCharCode(e[a]);return t},e=>{e=e.substring(1);let t=(0,eq.E)(e.length);for(let a=0;a<e.length;a++)t[a]=e.charCodeAt(a);return t}),eK={utf8:eG,"utf-8":eG,hex:eH.base16,latin1:eV,ascii:eV,binary:eV,...eH};var eZ=eK},17832:function(e,t,a){"use strict";a.d(t,{sj:function(){return proxy},iH:function(){return ref},CO:function(){return snapshot},Ld:function(){return subscribe}}),Symbol();let p=Symbol(),g=Object.getPrototypeOf,m=new WeakMap,l=e=>e&&(m.has(e)?m.get(e):g(e)===Object.prototype||g(e)===Array.prototype),y=e=>l(e)&&e[p]||null,h=(e,t=!0)=>{m.set(e,t)},isObject=e=>"object"==typeof e&&null!==e,v=new WeakMap,_=new WeakSet,buildProxyFunction=(e=Object.is,t=(e,t)=>new Proxy(e,t),a=e=>isObject(e)&&!_.has(e)&&(Array.isArray(e)||!(Symbol.iterator in e))&&!(e instanceof WeakMap)&&!(e instanceof WeakSet)&&!(e instanceof Error)&&!(e instanceof Number)&&!(e instanceof Date)&&!(e instanceof String)&&!(e instanceof RegExp)&&!(e instanceof ArrayBuffer),p=e=>{switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:throw e}},g=new WeakMap,m=(e,t,a=p)=>{let x=g.get(e);if((null==x?void 0:x[0])===t)return x[1];let T=Array.isArray(e)?[]:Object.create(Object.getPrototypeOf(e));return h(T,!0),g.set(e,[t,T]),Reflect.ownKeys(e).forEach(t=>{if(Object.getOwnPropertyDescriptor(T,t))return;let p=Reflect.get(e,t),g={value:p,enumerable:!0,configurable:!0};if(_.has(p))h(p,!1);else if(p instanceof Promise)delete g.value,g.get=()=>a(p);else if(v.has(p)){let[e,t]=v.get(p);g.value=m(e,t(),a)}Object.defineProperty(T,t,g)}),Object.preventExtensions(T)},x=new WeakMap,T=[1,1],F=p=>{if(!isObject(p))throw Error("object required");let g=x.get(p);if(g)return g;let z=T[0],W=new Set,notifyUpdate=(e,t=++T[0])=>{z!==t&&(z=t,W.forEach(a=>a(e,t)))},K=T[1],ensureVersion=(e=++T[1])=>(K===e||W.size||(K=e,Z.forEach(([t])=>{let a=t[1](e);a>z&&(z=a)})),z),createPropListener=e=>(t,a)=>{let p=[...t];p[1]=[e,...p[1]],notifyUpdate(p,a)},Z=new Map,addPropListener=(e,t)=>{if(Z.has(e))throw Error("prop listener already exists");if(W.size){let a=t[3](createPropListener(e));Z.set(e,[t,a])}else Z.set(e,[t])},removePropListener=e=>{var t;let a=Z.get(e);a&&(Z.delete(e),null==(t=a[1])||t.call(a))},addListener=e=>{W.add(e),1===W.size&&Z.forEach(([e,t],a)=>{if(t)throw Error("remove already exists");let p=e[3](createPropListener(a));Z.set(a,[e,p])});let removeListener=()=>{W.delete(e),0===W.size&&Z.forEach(([e,t],a)=>{t&&(t(),Z.set(a,[e]))})};return removeListener},Q=Array.isArray(p)?[]:Object.create(Object.getPrototypeOf(p)),X={deleteProperty(e,t){let a=Reflect.get(e,t);removePropListener(t);let p=Reflect.deleteProperty(e,t);return p&&notifyUpdate(["delete",[t],a]),p},set(t,p,g,m){let T=Reflect.has(t,p),z=Reflect.get(t,p,m);if(T&&(e(z,g)||x.has(g)&&e(z,x.get(g))))return!0;removePropListener(p),isObject(g)&&(g=y(g)||g);let W=g;if(g instanceof Promise)g.then(e=>{g.status="fulfilled",g.value=e,notifyUpdate(["resolve",[p],e])}).catch(e=>{g.status="rejected",g.reason=e,notifyUpdate(["reject",[p],e])});else{!v.has(g)&&a(g)&&(W=F(g));let e=!_.has(W)&&v.get(W);e&&addPropListener(p,e)}return Reflect.set(t,p,W,m),notifyUpdate(["set",[p],g,z]),!0}},Y=t(Q,X);x.set(p,Y);let J=[Q,ensureVersion,m,addListener];return v.set(Y,J),Reflect.ownKeys(p).forEach(e=>{let t=Object.getOwnPropertyDescriptor(p,e);"value"in t&&(Y[e]=p[e],delete t.value,delete t.writable),Object.defineProperty(Q,e,t)}),Y})=>[F,v,_,e,t,a,p,g,m,x,T],[x]=buildProxyFunction();function proxy(e={}){return x(e)}function subscribe(e,t,a){let p;let g=v.get(e);g||console.warn("Please use proxy object");let m=[],_=g[3],x=!1,T=_(e=>{if(m.push(e),a){t(m.splice(0));return}p||(p=Promise.resolve().then(()=>{p=void 0,x&&t(m.splice(0))}))});return x=!0,()=>{x=!1,T()}}function snapshot(e,t){let a=v.get(e);a||console.warn("Please use proxy object");let[p,g,m]=a;return m(p,g(),t)}function ref(e){return _.add(e),e}},14503:function(e,t,a){"use strict";function parseAccount(e){return"string"==typeof e?{address:e,type:"json-rpc"}:e}a.d(t,{T:function(){return parseAccount}})},61376:function(e,t,a){"use strict";a.d(t,{R:function(){return call}});var p=a(14503),g=a(16693),m=a(62027),v=a(80377),_=a(97405),x=a(7210),T=a(77799),F=a(22676),z=a(92106),W=a(26445),K=a(87469),Z=a(61163),Q=a(74688),X=a(32357),Y=a(47531);async function call(e,t){let{account:g=e.account,batch:x=!!e.batch?.multicall,blockNumber:T,blockTag:F="latest",accessList:X,data:J,gas:ei,gasPrice:en,maxFeePerGas:eo,maxPriorityFeePerGas:ea,nonce:es,to:el,value:ec,...eu}=t,ed=g?(0,p.T)(g):void 0;try{(0,Y.F)(t);let a=T?(0,z.eC)(T):void 0,p=a||F,g=e.chain?.formatters?.transactionRequest?.format||Q.tG,m=g({...(0,Z.K)(eu,{format:g}),from:ed?.address,accessList:X,data:J,gas:ei,gasPrice:en,maxFeePerGas:eo,maxPriorityFeePerGas:ea,nonce:es,to:el,value:ec});if(x&&function({request:e}){let{data:t,to:a,...p}=e;return!(!t||t.startsWith("0x82ad56cb"))&&!!a&&!(Object.values(p).filter(e=>void 0!==e).length>0)}({request:m}))try{return await scheduleMulticall(e,{...m,blockNumber:T,blockTag:F})}catch(e){if(!(e instanceof v.pZ)&&!(e instanceof v.mm))throw e}let _=await e.request({method:"eth_call",params:p?[m,p]:[m]});if("0x"===_)return{data:void 0};return{data:_}}catch(x){let p=function(e){if(!(e instanceof m.G))return;let t=e.walk();return"object"==typeof t.data?t.data.data:t.data}(x),{offchainLookup:g,offchainLookupSignature:v}=await a.e(422).then(a.bind(a,10422));if(p?.slice(0,10)===v&&el)return{data:await g(e,{data:p,to:el})};throw function(e,{docsPath:t,...a}){let p=(()=>{let t=(0,K.k)(e,a);return t instanceof W.cj?e:t})();return new _.cg(p,{docsPath:t,...a})}(x,{...t,account:ed,chain:e.chain})}}async function scheduleMulticall(e,t){let{batchSize:a=1024,wait:p=0}="object"==typeof e.batch?.multicall?e.batch.multicall:{},{blockNumber:m,blockTag:W="latest",data:K,multicallAddress:Z,to:Q}=t,Y=Z;if(!Y){if(!e.chain)throw new v.pZ;Y=(0,F.LI)({blockNumber:m,chain:e.chain,contract:"multicall3"})}let J=m?(0,z.eC)(m):void 0,ei=J||W,{schedule:en}=(0,X.S)({id:`${e.uid}.${ei}`,wait:p,shouldSplitBatch(e){let t=e.reduce((e,{data:t})=>e+(t.length-2),0);return t>2*a},fn:async t=>{let a=t.map(e=>({allowFailure:!0,callData:e.data,target:e.to})),p=(0,T.R)({abi:g.F8,args:[a],functionName:"aggregate3"}),m=await e.request({method:"eth_call",params:[{data:p,to:Y},ei]});return(0,x.k)({abi:g.F8,args:[a],functionName:"aggregate3",data:m||"0x"})}}),[{returnData:eo,success:ea}]=await en({data:K,to:Q});if(!ea)throw new _.VQ({data:eo});return"0x"===eo?{data:void 0}:{data:eo}}},43861:function(e,t,a){"use strict";a.d(t,{C:function(){return internal_estimateFeesPerGas},X:function(){return estimateFeesPerGas}});var p=a(15371),g=a(79379),m=a(36765),v=a(24453);async function estimateFeesPerGas(e,t){return internal_estimateFeesPerGas(e,t)}async function internal_estimateFeesPerGas(e,t){let{block:a,chain:_=e.chain,request:x,type:T="eip1559"}=t||{},F=await (async()=>"function"==typeof _?.fees?.baseFeeMultiplier?_.fees.baseFeeMultiplier({block:a,client:e,request:x}):_?.fees?.baseFeeMultiplier??1.2)();if(F<1)throw new p.Fz;let z=F.toString().split(".")[1]?.length??0,W=10**z,multiply=e=>e*BigInt(Math.ceil(F*W))/BigInt(W),K=a||await (0,m.Q)(e);if("function"==typeof _?.fees?.estimateFeesPerGas)return _.fees.estimateFeesPerGas({block:a,client:e,multiply,request:x,type:T});if("eip1559"===T){if("bigint"!=typeof K.baseFeePerGas)throw new p.e5;let t=x?.maxPriorityFeePerGas?x.maxPriorityFeePerGas:await (0,g.h)(e,{block:K,chain:_,request:x}),a=multiply(K.baseFeePerGas),m=x?.maxFeePerGas??a+t;return{maxFeePerGas:m,maxPriorityFeePerGas:t}}let Z=x?.gasPrice??multiply(await (0,v.o)(e));return{gasPrice:Z}}},81841:function(e,t,a){"use strict";a.d(t,{Q:function(){return estimateGas}});var p=a(14503),g=a(8998),m=a(92106),v=a(39625),_=a(67795),x=a(62027),T=a(33639);let EstimateGasExecutionError=class EstimateGasExecutionError extends x.G{constructor(e,{account:t,docsPath:a,chain:p,data:g,gas:m,gasPrice:x,maxFeePerGas:F,maxPriorityFeePerGas:z,nonce:W,to:K,value:Z}){let Q=(0,T.xr)({from:t?.address,to:K,value:void 0!==Z&&`${(0,v.d)(Z)} ${p?.nativeCurrency.symbol||"ETH"}`,data:g,gas:m,gasPrice:void 0!==x&&`${(0,_.o)(x)} gwei`,maxFeePerGas:void 0!==F&&`${(0,_.o)(F)} gwei`,maxPriorityFeePerGas:void 0!==z&&`${(0,_.o)(z)} gwei`,nonce:W});super(e.shortMessage,{cause:e,docsPath:a,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Estimate Gas Arguments:",Q].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"EstimateGasExecutionError"}),this.cause=e}};var F=a(26445),z=a(87469),W=a(61163),K=a(74688),Z=a(47531),Q=a(37397);async function estimateGas(e,t){let a=t.account??e.account;if(!a)throw new g.o({docsPath:"/docs/actions/public/estimateGas"});let v=(0,p.T)(a);try{let{accessList:a,blockNumber:p,blockTag:g,data:_,gas:x,gasPrice:T,maxFeePerGas:F,maxPriorityFeePerGas:z,nonce:X,to:Y,value:J,...ei}="local"===v.type?await (0,Q.Z)(e,t):t,en=p?(0,m.eC)(p):void 0,eo=en||g;(0,Z.F)(t);let ea=e.chain?.formatters?.transactionRequest?.format||K.tG,es=ea({...(0,W.K)(ei,{format:ea}),from:v.address,accessList:a,data:_,gas:x,gasPrice:T,maxFeePerGas:F,maxPriorityFeePerGas:z,nonce:X,to:Y,value:J}),el=await e.request({method:"eth_estimateGas",params:eo?[es,eo]:[es]});return BigInt(el)}catch(a){throw function(e,{docsPath:t,...a}){let p=(()=>{let t=(0,z.k)(e,a);return t instanceof F.cj?e:t})();return new EstimateGasExecutionError(p,{docsPath:t,...a})}(a,{...t,account:v,chain:e.chain})}}},79379:function(e,t,a){"use strict";a.d(t,{_:function(){return estimateMaxPriorityFeePerGas},h:function(){return internal_estimateMaxPriorityFeePerGas}});var p=a(15371),g=a(95946),m=a(36765),v=a(24453);async function estimateMaxPriorityFeePerGas(e,t){return internal_estimateMaxPriorityFeePerGas(e,t)}async function internal_estimateMaxPriorityFeePerGas(e,t){let{block:a,chain:_=e.chain,request:x}=t||{};if("function"==typeof _?.fees?.defaultPriorityFee){let t=a||await (0,m.Q)(e);return _.fees.defaultPriorityFee({block:t,client:e,request:x})}if(void 0!==_?.fees?.defaultPriorityFee)return _?.fees?.defaultPriorityFee;try{let t=await e.request({method:"eth_maxPriorityFeePerGas"});return(0,g.y_)(t)}catch{let[t,g]=await Promise.all([a?Promise.resolve(a):(0,m.Q)(e),(0,v.o)(e)]);if("bigint"!=typeof t.baseFeePerGas)throw new p.e5;let _=g-t.baseFeePerGas;if(_<0n)return 0n;return _}}},36765:function(e,t,a){"use strict";a.d(t,{Q:function(){return getBlock}});var p=a(62027);let BlockNotFoundError=class BlockNotFoundError extends p.G{constructor({blockHash:e,blockNumber:t}){let a="Block";e&&(a=`Block at hash "${e}"`),t&&(a=`Block at number "${t}"`),super(`${a} could not be found.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BlockNotFoundError"})}};var g=a(92106),m=a(43310);async function getBlock(e,{blockHash:t,blockNumber:a,blockTag:p,includeTransactions:v}={}){let _=v??!1,x=void 0!==a?(0,g.eC)(a):void 0,T=null;if(!(T=t?await e.request({method:"eth_getBlockByHash",params:[t,_]}):await e.request({method:"eth_getBlockByNumber",params:[x||(p??"latest"),_]})))throw new BlockNotFoundError({blockHash:t,blockNumber:a});let F=e.chain?.formatters?.block?.format||m.Z;return F(T)}},79524:function(e,t,a){"use strict";a.d(t,{L:function(){return getChainId}});var p=a(95946);async function getChainId(e){let t=await e.request({method:"eth_chainId"});return(0,p.ly)(t)}},24453:function(e,t,a){"use strict";async function getGasPrice(e){let t=await e.request({method:"eth_gasPrice"});return BigInt(t)}a.d(t,{o:function(){return getGasPrice}})},86162:function(e,t,a){"use strict";a.d(t,{K:function(){return getTransactionCount}});var p=a(95946),g=a(92106);async function getTransactionCount(e,{address:t,blockTag:a="latest",blockNumber:m}){let v=await e.request({method:"eth_getTransactionCount",params:[t,m?(0,g.eC)(m):a]});return(0,p.ly)(v)}},37397:function(e,t,a){"use strict";a.d(t,{Z:function(){return prepareTransactionRequest}});var p=a(14503),g=a(43861),m=a(81841),v=a(36765),_=a(86162),x=a(8998),T=a(15371),F=a(47531),z=a(82994);async function prepareTransactionRequest(e,t){let{account:a=e.account,chain:W,gas:K,nonce:Z,type:Q}=t;if(!a)throw new x.o;let X=(0,p.T)(a),Y=await (0,v.Q)(e,{blockTag:"latest"}),J={...t,from:X.address};if(void 0===Z&&(J.nonce=await (0,_.K)(e,{address:X.address,blockTag:"pending"})),void 0===Q)try{J.type=(0,z.l)(J)}catch{J.type="bigint"==typeof Y.baseFeePerGas?"eip1559":"legacy"}if("eip1559"===J.type){let{maxFeePerGas:a,maxPriorityFeePerGas:p}=await (0,g.C)(e,{block:Y,chain:W,request:J});if(void 0===t.maxPriorityFeePerGas&&t.maxFeePerGas&&t.maxFeePerGas<p)throw new T.ld({maxPriorityFeePerGas:p});J.maxPriorityFeePerGas=p,J.maxFeePerGas=a}else{if(void 0!==t.maxFeePerGas||void 0!==t.maxPriorityFeePerGas)throw new T.e5;let{gasPrice:a}=await (0,g.C)(e,{block:Y,chain:W,request:J,type:"legacy"});J.gasPrice=a}return void 0===K&&(J.gas=await (0,m.Q)(e,{...J,account:{address:X.address,type:"json-rpc"}})),(0,F.F)(J),J}},99238:function(e,t,a){"use strict";async function sendRawTransaction(e,{serializedTransaction:t}){return e.request({method:"eth_sendRawTransaction",params:[t]})}a.d(t,{p:function(){return sendRawTransaction}})},66403:function(e,t,a){"use strict";a.d(t,{R:function(){return g}});var p=a(22676);let g=(0,p.ax)({id:1,network:"homestead",name:"Ethereum",nativeCurrency:{name:"Ether",symbol:"ETH",decimals:18},rpcUrls:{alchemy:{http:["https://eth-mainnet.g.alchemy.com/v2"],webSocket:["wss://eth-mainnet.g.alchemy.com/v2"]},infura:{http:["https://mainnet.infura.io/v3"],webSocket:["wss://mainnet.infura.io/ws/v3"]},default:{http:["https://cloudflare-eth.com"]},public:{http:["https://cloudflare-eth.com"]}},blockExplorers:{etherscan:{name:"Etherscan",url:"https://etherscan.io"},default:{name:"Etherscan",url:"https://etherscan.io"}},contracts:{ensRegistry:{address:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},ensUniversalResolver:{address:"0xc0497E381f536Be9ce14B0dD3817cBcAe57d2F62",blockCreated:16966585},multicall3:{address:"0xca11bde05977b3631167028862be2a173976ca11",blockCreated:14353601}}})},16189:function(e,t,a){"use strict";let p;a.d(t,{e:function(){return createClient}});var g=a(14503);let m=256;function createClient(e){let{batch:t,cacheTime:a=e.pollingInterval??4e3,key:v="base",name:_="Base Client",pollingInterval:x=4e3,type:T="base"}=e,F=e.chain,z=e.account?(0,g.T)(e.account):void 0,{config:W,request:K,value:Z}=e.transport({chain:F,pollingInterval:x}),Q={...W,...Z},X={account:z,batch:t,cacheTime:a,chain:F,key:v,name:_,pollingInterval:x,request:K,transport:Q,type:T,uid:function(e=11){if(!p||m+e>512){p="",m=0;for(let e=0;e<256;e++)p+=(256+256*Math.random()|0).toString(16).substring(1)}return p.substring(m,m+++e)}()};return Object.assign(X,{extend:function extend(e){return t=>{let a=t(e);for(let e in X)delete a[e];let p={...e,...a};return Object.assign(p,{extend:extend(p)})}}(X)})}},21032:function(e,t,a){"use strict";a.d(t,{K:function(){return createWalletClient}});var p=a(16189),g=a(79524),m=a(92106);async function addChain(e,{chain:t}){let{id:a,name:p,nativeCurrency:g,rpcUrls:v,blockExplorers:_}=t;await e.request({method:"wallet_addEthereumChain",params:[{chainId:(0,m.eC)(a),chainName:p,nativeCurrency:g,rpcUrls:v.default.http,blockExplorerUrls:_?Object.values(_).map(({url:e})=>e):void 0}]})}var v=a(30286),_=a(14503),x=a(8998),T=a(22676),F=a(26445),z=a(33639),W=a(87469),K=a(61163),Z=a(74688),Q=a(47531),X=a(37397),Y=a(99238);async function sendTransaction(e,t){let{account:a=e.account,chain:p=e.chain,accessList:m,data:v,gas:J,gasPrice:ei,maxFeePerGas:en,maxPriorityFeePerGas:eo,nonce:ea,to:es,value:el,...ec}=t;if(!a)throw new x.o({docsPath:"/docs/actions/wallet/sendTransaction"});let eu=(0,_.T)(a);try{let a;if((0,Q.F)(t),null!==p&&(a=await (0,g.L)(e),(0,T.qg)({currentChainId:a,chain:p})),"local"===eu.type){let t=await (0,X.Z)(e,{account:eu,accessList:m,chain:p,data:v,gas:J,gasPrice:ei,maxFeePerGas:en,maxPriorityFeePerGas:eo,nonce:ea,to:es,value:el,...ec});a||(a=await (0,g.L)(e));let _=p?.serializers?.transaction,x=await eu.signTransaction({...t,chainId:a},{serializer:_});return await (0,Y.p)(e,{serializedTransaction:x})}let _=p?.formatters?.transactionRequest?.format||Z.tG,x=_({...(0,K.K)(ec,{format:_}),accessList:m,data:v,from:eu.address,gas:J,gasPrice:ei,maxFeePerGas:en,maxPriorityFeePerGas:eo,nonce:ea,to:es,value:el});return await e.request({method:"eth_sendTransaction",params:[x]})}catch(e){throw function(e,{docsPath:t,...a}){let p=(()=>{let t=(0,W.k)(e,a);return t instanceof F.cj?e:t})();return new z.mk(p,{docsPath:t,...a})}(e,{...t,account:eu,chain:t.chain||void 0})}}var J=a(45775);async function getAddresses(e){let t=await e.request({method:"eth_accounts"});return t.map(e=>(0,J.x)(e))}async function getPermissions(e){let t=await e.request({method:"wallet_getPermissions"});return t}async function requestAddresses(e){let t=await e.request({method:"eth_requestAccounts"});return t.map(e=>(0,J.K)(e))}async function requestPermissions(e,t){return e.request({method:"wallet_requestPermissions",params:[t]})}async function signMessage(e,{account:t=e.account,message:a}){if(!t)throw new x.o({docsPath:"/docs/actions/wallet/signMessage"});let p=(0,_.T)(t);if("local"===p.type)return p.signMessage({message:a});let g="string"==typeof a?(0,m.$G)(a):a.raw instanceof Uint8Array?(0,m.NC)(a.raw):a.raw;return e.request({method:"personal_sign",params:[g,p.address]})}async function signTransaction(e,t){let{account:a=e.account,chain:p=e.chain,...v}=t;if(!a)throw new x.o({docsPath:"/docs/actions/wallet/signTransaction"});let F=(0,_.T)(a);(0,Q.F)({account:F,...t});let z=await (0,g.L)(e);null!==p&&(0,T.qg)({currentChainId:z,chain:p});let W=p?.formatters||e.chain?.formatters,K=W?.transactionRequest?.format||Z.tG;return"local"===F.type?F.signTransaction({chainId:z,...v},{serializer:e.chain?.serializers?.transaction}):await e.request({method:"eth_signTransaction",params:[{...K(v),chainId:(0,m.eC)(z),from:F.address}]})}var ei=a(15102),en=a(96070),eo=a(71352);async function signTypedData(e,{account:t=e.account,domain:a,message:p,primaryType:g,types:m}){if(!t)throw new x.o({docsPath:"/docs/actions/wallet/signTypedData"});let v=(0,_.T)(t),T={EIP712Domain:(0,eo.cj)({domain:a}),...m};if((0,eo.iC)({domain:a,message:p,primaryType:g,types:T}),"local"===v.type)return v.signTypedData({domain:a,primaryType:g,types:T,message:p});let F=(0,en.P)({domain:a??{},primaryType:g,types:T,message:p},(e,t)=>(0,ei.v)(t)?t.toLowerCase():t);return e.request({method:"eth_signTypedData_v4",params:[v.address,F]})}async function switchChain(e,{id:t}){await e.request({method:"wallet_switchEthereumChain",params:[{chainId:(0,m.eC)(t)}]})}async function watchAsset(e,t){let a=await e.request({method:"wallet_watchAsset",params:t});return a}var ea=a(77799);async function writeContract(e,{abi:t,address:a,args:p,dataSuffix:g,functionName:m,...v}){let _=(0,ea.R)({abi:t,args:p,functionName:m}),x=await sendTransaction(e,{data:`${_}${g?g.replace("0x",""):""}`,to:a,...v});return x}function walletActions(e){return{addChain:t=>addChain(e,t),deployContract:t=>(function(e,{abi:t,args:a,bytecode:p,...g}){let m=(0,v.w)({abi:t,args:a,bytecode:p});return sendTransaction(e,{...g,data:m})})(e,t),getAddresses:()=>getAddresses(e),getChainId:()=>(0,g.L)(e),getPermissions:()=>getPermissions(e),prepareTransactionRequest:t=>(0,X.Z)(e,t),requestAddresses:()=>requestAddresses(e),requestPermissions:t=>requestPermissions(e,t),sendRawTransaction:t=>(0,Y.p)(e,t),sendTransaction:t=>sendTransaction(e,t),signMessage:t=>signMessage(e,t),signTransaction:t=>signTransaction(e,t),signTypedData:t=>signTypedData(e,t),switchChain:t=>switchChain(e,t),watchAsset:t=>watchAsset(e,t),writeContract:t=>writeContract(e,t)}}function createWalletClient(e){let{key:t="wallet",name:a="Wallet Client",transport:g}=e,m=(0,p.e)({...e,key:t,name:a,transport:e=>g({...e,retryCount:0}),type:"walletClient"});return m.extend(walletActions)}},31031:function(e,t,a){"use strict";a.d(t,{q:function(){return createTransport}});var p=a(37029);function createTransport({key:e,name:t,request:a,retryCount:g=3,retryDelay:m=150,timeout:v,type:_},x){return{config:{key:e,name:t,request:a,retryCount:g,retryDelay:m,timeout:v,type:_},request:(0,p.n)(a,{retryCount:g,retryDelay:m}),value:x}}},3980:function(e,t,a){"use strict";a.d(t,{P:function(){return custom}});var p=a(31031);function custom(e,t={}){let{key:a="custom",name:g="Custom Provider",retryDelay:m}=t;return({retryCount:v})=>(0,p.q)({key:a,name:g,request:e.request.bind(e),retryCount:t.retryCount??v,retryDelay:m,type:"custom"})}},16693:function(e,t,a){"use strict";a.d(t,{$o:function(){return T},F8:function(){return p},X$:function(){return x},du:function(){return v},k3:function(){return m},nZ:function(){return _}});let p=[{inputs:[{components:[{name:"target",type:"address"},{name:"allowFailure",type:"bool"},{name:"callData",type:"bytes"}],name:"calls",type:"tuple[]"}],name:"aggregate3",outputs:[{components:[{name:"success",type:"bool"},{name:"returnData",type:"bytes"}],name:"returnData",type:"tuple[]"}],stateMutability:"view",type:"function"}],g=[{inputs:[],name:"ResolverNotFound",type:"error"},{inputs:[],name:"ResolverWildcardNotSupported",type:"error"}],m=[...g,{name:"resolve",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes"},{name:"data",type:"bytes"}],outputs:[{name:"",type:"bytes"},{name:"address",type:"address"}]}],v=[...g,{name:"reverse",type:"function",stateMutability:"view",inputs:[{type:"bytes",name:"reverseName"}],outputs:[{type:"string",name:"resolvedName"},{type:"address",name:"resolvedAddress"},{type:"address",name:"reverseResolver"},{type:"address",name:"resolver"}]}],_=[{name:"text",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"key",type:"string"}],outputs:[{name:"",type:"string"}]}],x=[{name:"addr",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"}],outputs:[{name:"",type:"address"}]},{name:"addr",type:"function",stateMutability:"view",inputs:[{name:"name",type:"bytes32"},{name:"coinType",type:"uint256"}],outputs:[{name:"",type:"bytes"}]}],T=[{inputs:[{internalType:"address",name:"_signer",type:"address"},{internalType:"bytes32",name:"_hash",type:"bytes32"},{internalType:"bytes",name:"_signature",type:"bytes"}],stateMutability:"nonpayable",type:"constructor"}]},21746:function(e,t,a){"use strict";a.d(t,{$:function(){return p},Up:function(){return g},hZ:function(){return m}});let p={1:"An `assert` condition failed.",17:"Arithmic operation resulted in underflow or overflow.",18:"Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",33:"Attempted to convert to an invalid type.",34:"Attempted to access a storage byte array that is incorrectly encoded.",49:"Performed `.pop()` on an empty array",50:"Array index is out of bounds.",65:"Allocated too much memory or created an array which is too large.",81:"Attempted to call a zero-initialized variable of internal function type."},g={inputs:[{name:"message",type:"string"}],name:"Error",type:"error"},m={inputs:[{name:"reason",type:"uint256"}],name:"Panic",type:"error"}},84192:function(e,t,a){"use strict";a.d(t,{Bd:function(){return m},Zn:function(){return g},ez:function(){return p}});let p={gwei:9,wei:18},g={ether:-9,wei:9},m={ether:-18,gwei:-9}},57412:function(e,t,a){"use strict";a.d(t,{CI:function(){return InvalidAbiDecodingTypeError},FM:function(){return AbiEventSignatureEmptyTopicsError},Gy:function(){return DecodeLogTopicsMismatch},KY:function(){return BytesSizeMismatchError},M4:function(){return AbiEncodingBytesSizeMismatchError},MX:function(){return AbiFunctionOutputsNotFoundError},SM:function(){return DecodeLogDataMismatch},cO:function(){return AbiConstructorParamsNotFoundError},dh:function(){return InvalidAbiEncodingTypeError},fM:function(){return AbiConstructorNotFoundError},fs:function(){return AbiEncodingLengthMismatchError},gr:function(){return AbiEncodingArrayLengthMismatchError},hn:function(){return InvalidArrayError},lC:function(){return AbiEventSignatureNotFoundError},mv:function(){return AbiEventNotFoundError},wM:function(){return InvalidDefinitionTypeError},wb:function(){return AbiDecodingZeroDataError},xB:function(){return AbiDecodingDataSizeTooSmallError},xL:function(){return AbiFunctionNotFoundError},yP:function(){return AbiErrorSignatureNotFoundError}});var p=a(80522),g=a(39135),m=a(62027);let AbiConstructorNotFoundError=class AbiConstructorNotFoundError extends m.G{constructor({docsPath:e}){super("A constructor was not found on the ABI.\nMake sure you are using the correct ABI and that the constructor exists on it.",{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiConstructorNotFoundError"})}};let AbiConstructorParamsNotFoundError=class AbiConstructorParamsNotFoundError extends m.G{constructor({docsPath:e}){super("Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.\nMake sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists.",{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiConstructorParamsNotFoundError"})}};let AbiDecodingDataSizeTooSmallError=class AbiDecodingDataSizeTooSmallError extends m.G{constructor({data:e,params:t,size:a}){super(`Data size of ${a} bytes is too small for given parameters.`,{metaMessages:[`Params: (${(0,p.h)(t,{includeName:!0})})`,`Data:   ${e} (${a} bytes)`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingDataSizeTooSmallError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=e,this.params=t,this.size=a}};let AbiDecodingZeroDataError=class AbiDecodingZeroDataError extends m.G{constructor(){super('Cannot decode zero data ("0x") with ABI parameters.'),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiDecodingZeroDataError"})}};let AbiEncodingArrayLengthMismatchError=class AbiEncodingArrayLengthMismatchError extends m.G{constructor({expectedLength:e,givenLength:t,type:a}){super(`ABI encoding array length mismatch for type ${a}.
Expected length: ${e}
Given length: ${t}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingArrayLengthMismatchError"})}};let AbiEncodingBytesSizeMismatchError=class AbiEncodingBytesSizeMismatchError extends m.G{constructor({expectedSize:e,value:t}){super(`Size of bytes "${t}" (bytes${(0,g.d)(t)}) does not match expected size (bytes${e}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingBytesSizeMismatchError"})}};let AbiEncodingLengthMismatchError=class AbiEncodingLengthMismatchError extends m.G{constructor({expectedLength:e,givenLength:t}){super(`ABI encoding params/values length mismatch.
Expected length (params): ${e}
Given length (values): ${t}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEncodingLengthMismatchError"})}};let AbiErrorSignatureNotFoundError=class AbiErrorSignatureNotFoundError extends m.G{constructor(e,{docsPath:t}){super(`Encoded error signature "${e}" not found on ABI.
Make sure you are using the correct ABI and that the error exists on it.
You can look up the decoded signature here: https://openchain.xyz/signatures?query=${e}.`,{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiErrorSignatureNotFoundError"}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.signature=e}};let AbiEventSignatureEmptyTopicsError=class AbiEventSignatureEmptyTopicsError extends m.G{constructor({docsPath:e}){super("Cannot extract event signature from empty topics.",{docsPath:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventSignatureEmptyTopicsError"})}};let AbiEventSignatureNotFoundError=class AbiEventSignatureNotFoundError extends m.G{constructor(e,{docsPath:t}){super(`Encoded event signature "${e}" not found on ABI.
Make sure you are using the correct ABI and that the event exists on it.
You can look up the signature here: https://openchain.xyz/signatures?query=${e}.`,{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventSignatureNotFoundError"})}};let AbiEventNotFoundError=class AbiEventNotFoundError extends m.G{constructor(e,{docsPath:t}={}){super(`Event ${e?`"${e}" `:""}not found on ABI.
Make sure you are using the correct ABI and that the event exists on it.`,{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiEventNotFoundError"})}};let AbiFunctionNotFoundError=class AbiFunctionNotFoundError extends m.G{constructor(e,{docsPath:t}={}){super(`Function ${e?`"${e}" `:""}not found on ABI.
Make sure you are using the correct ABI and that the function exists on it.`,{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionNotFoundError"})}};let AbiFunctionOutputsNotFoundError=class AbiFunctionOutputsNotFoundError extends m.G{constructor(e,{docsPath:t}){super(`Function "${e}" does not contain any \`outputs\` on ABI.
Cannot decode function result without knowing what the parameter types are.
Make sure you are using the correct ABI and that the function exists on it.`,{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AbiFunctionOutputsNotFoundError"})}};let BytesSizeMismatchError=class BytesSizeMismatchError extends m.G{constructor({expectedSize:e,givenSize:t}){super(`Expected bytes${e}, got bytes${t}.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BytesSizeMismatchError"})}};let DecodeLogDataMismatch=class DecodeLogDataMismatch extends m.G{constructor({abiItem:e,data:t,params:a,size:g}){super(`Data size of ${g} bytes is too small for non-indexed event parameters.`,{metaMessages:[`Params: (${(0,p.h)(a,{includeName:!0})})`,`Data:   ${t} (${g} bytes)`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DecodeLogDataMismatch"}),Object.defineProperty(this,"abiItem",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"params",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"size",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.abiItem=e,this.data=t,this.params=a,this.size=g}};let DecodeLogTopicsMismatch=class DecodeLogTopicsMismatch extends m.G{constructor({abiItem:e,param:t}){super(`Expected a topic for indexed event parameter${t.name?` "${t.name}"`:""} on event "${(0,p.t)(e,{includeName:!0})}".`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"DecodeLogTopicsMismatch"}),Object.defineProperty(this,"abiItem",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.abiItem=e}};let InvalidAbiEncodingTypeError=class InvalidAbiEncodingTypeError extends m.G{constructor(e,{docsPath:t}){super(`Type "${e}" is not a valid encoding type.
Please provide a valid ABI type.`,{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiEncodingType"})}};let InvalidAbiDecodingTypeError=class InvalidAbiDecodingTypeError extends m.G{constructor(e,{docsPath:t}){super(`Type "${e}" is not a valid decoding type.
Please provide a valid ABI type.`,{docsPath:t}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAbiDecodingType"})}};let InvalidArrayError=class InvalidArrayError extends m.G{constructor(e){super(`Value "${e}" is not a valid array.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidArrayError"})}};let InvalidDefinitionTypeError=class InvalidDefinitionTypeError extends m.G{constructor(e){super(`"${e}" is not a valid definition type.
Valid types: "function", "event", "error"`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidDefinitionTypeError"})}}},8998:function(e,t,a){"use strict";a.d(t,{o:function(){return AccountNotFoundError}});var p=a(62027);let AccountNotFoundError=class AccountNotFoundError extends p.G{constructor({docsPath:e}={}){super("Could not find an Account to execute with this Action.\nPlease provide an Account with the `account` argument on the Action, or by supplying an `account` to the WalletClient.",{docsPath:e,docsSlug:"account"}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"AccountNotFoundError"})}}},26087:function(e,t,a){"use strict";a.d(t,{b:function(){return InvalidAddressError}});var p=a(62027);let InvalidAddressError=class InvalidAddressError extends p.G{constructor({address:e}){super(`Address "${e}" is invalid.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidAddressError"})}}},62027:function(e,t,a){"use strict";a.d(t,{G:function(){return BaseError}});var p=a(35280);let BaseError=class BaseError extends Error{constructor(e,t={}){super(),Object.defineProperty(this,"details",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"docsPath",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"metaMessages",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"shortMessage",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ViemError"}),Object.defineProperty(this,"version",{enumerable:!0,configurable:!0,writable:!0,value:(0,p.bo)()});let a=t.cause instanceof BaseError?t.cause.details:t.cause?.message?t.cause.message:t.details,g=t.cause instanceof BaseError&&t.cause.docsPath||t.docsPath;this.message=[e||"An error occurred.","",...t.metaMessages?[...t.metaMessages,""]:[],...g?[`Docs: https://viem.sh${g}.html${t.docsSlug?`#${t.docsSlug}`:""}`]:[],...a?[`Details: ${a}`]:[],`Version: ${this.version}`].join("\n"),t.cause&&(this.cause=t.cause),this.details=a,this.docsPath=g,this.metaMessages=t.metaMessages,this.shortMessage=e}walk(e){return function walk(e,t){return t?.(e)?e:e&&"object"==typeof e&&"cause"in e?walk(e.cause,t):t?null:e}(this,e)}}},80377:function(e,t,a){"use strict";a.d(t,{Bk:function(){return ChainNotFoundError},Yl:function(){return ChainMismatchError},hJ:function(){return InvalidChainIdError},mm:function(){return ChainDoesNotSupportContract},pZ:function(){return ClientChainNotConfiguredError}});var p=a(62027);let ChainDoesNotSupportContract=class ChainDoesNotSupportContract extends p.G{constructor({blockNumber:e,chain:t,contract:a}){super(`Chain "${t.name}" does not support contract "${a.name}".`,{metaMessages:["This could be due to any of the following:",...e&&a.blockCreated&&a.blockCreated>e?[`- The contract "${a.name}" was not deployed until block ${a.blockCreated} (current block ${e}).`]:[`- The chain does not have the contract "${a.name}" configured.`]]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDoesNotSupportContract"})}};let ChainMismatchError=class ChainMismatchError extends p.G{constructor({chain:e,currentChainId:t}){super(`The current chain of the wallet (id: ${t}) does not match the target chain for the transaction (id: ${e.id} – ${e.name}).`,{metaMessages:[`Current Chain ID:  ${t}`,`Expected Chain ID: ${e.id} – ${e.name}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainMismatchError"})}};let ChainNotFoundError=class ChainNotFoundError extends p.G{constructor(){super("No chain was provided to the request.\nPlease provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainNotFoundError"})}};let ClientChainNotConfiguredError=class ClientChainNotConfiguredError extends p.G{constructor(){super("No chain was provided to the Client."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ClientChainNotConfiguredError"})}};let InvalidChainIdError=class InvalidChainIdError extends p.G{constructor({chainId:e}){super(`Chain ID "${e}" is invalid.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidChainIdError"})}}},97405:function(e,t,a){"use strict";a.d(t,{cg:function(){return CallExecutionError},uq:function(){return ContractFunctionExecutionError},Lu:function(){return ContractFunctionRevertedError},Dk:function(){return ContractFunctionZeroDataError},VQ:function(){return RawContractError}});var p=a(14503),g=a(21746),m=a(86899),v=a(80522),_=a(96070);function formatAbiItemWithArgs({abiItem:e,args:t,includeFunctionName:a=!0,includeName:p=!1}){if("name"in e&&"inputs"in e&&e.inputs)return`${a?e.name:""}(${e.inputs.map((e,a)=>`${p&&e.name?`${e.name}: `:""}${"object"==typeof t[a]?(0,_.P)(t[a]):t[a]}`).join(", ")})`}var x=a(40840),T=a(39625),F=a(67795),z=a(57412),W=a(62027),K=a(33639),Z=a(35280);let CallExecutionError=class CallExecutionError extends W.G{constructor(e,{account:t,docsPath:a,chain:g,data:m,gas:v,gasPrice:_,maxFeePerGas:x,maxPriorityFeePerGas:z,nonce:W,to:Z,value:Q}){let X=t?(0,p.T)(t):void 0,Y=(0,K.xr)({from:X?.address,to:Z,value:void 0!==Q&&`${(0,T.d)(Q)} ${g?.nativeCurrency.symbol||"ETH"}`,data:m,gas:v,gasPrice:void 0!==_&&`${(0,F.o)(_)} gwei`,maxFeePerGas:void 0!==x&&`${(0,F.o)(x)} gwei`,maxPriorityFeePerGas:void 0!==z&&`${(0,F.o)(z)} gwei`,nonce:W});super(e.shortMessage,{cause:e,docsPath:a,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Raw Call Arguments:",Y].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"CallExecutionError"}),this.cause=e}};let ContractFunctionExecutionError=class ContractFunctionExecutionError extends W.G{constructor(e,{abi:t,args:a,contractAddress:p,docsPath:g,functionName:m,sender:_}){let T=(0,x.m)({abi:t,args:a,name:m}),F=T?formatAbiItemWithArgs({abiItem:T,args:a,includeFunctionName:!1,includeName:!1}):void 0,z=T?(0,v.t)(T,{includeName:!0}):void 0,W=(0,K.xr)({address:p&&(0,Z.CR)(p),function:z,args:F&&"()"!==F&&`${[...Array(m?.length??0).keys()].map(()=>" ").join("")}${F}`,sender:_});super(e.shortMessage||`An unknown error occurred while executing the contract function "${m}".`,{cause:e,docsPath:g,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Contract Call:",W].filter(Boolean)}),Object.defineProperty(this,"abi",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"args",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"contractAddress",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"formattedArgs",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"functionName",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"sender",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionExecutionError"}),this.abi=t,this.args=a,this.cause=e,this.contractAddress=p,this.functionName=m,this.sender=_}};let ContractFunctionRevertedError=class ContractFunctionRevertedError extends W.G{constructor({abi:e,data:t,functionName:a,message:p}){let _,x,T,F,W;if(t&&"0x"!==t)try{W=(0,m.p)({abi:e,data:t});let{abiItem:a,errorName:p,args:_}=W;if("Error"===p)T=_[0];else if("Panic"===p){let[e]=_;T=g.$[e]}else{let e=a?(0,v.t)(a,{includeName:!0}):void 0,t=a&&_?formatAbiItemWithArgs({abiItem:a,args:_,includeFunctionName:!1,includeName:!1}):void 0;x=[e?`Error: ${e}`:"",t&&"()"!==t?`       ${[...Array(p?.length??0).keys()].map(()=>" ").join("")}${t}`:""]}}catch(e){_=e}else p&&(T=p);_ instanceof z.yP&&(F=_.signature,x=[`Unable to decode signature "${F}" as it was not found on the provided ABI.`,"Make sure you are using the correct ABI and that the error exists on it.",`You can look up the decoded signature here: https://openchain.xyz/signatures?query=${F}.`]),super(T&&"execution reverted"!==T||F?[`The contract function "${a}" reverted with the following ${F?"signature":"reason"}:`,T||F].join("\n"):`The contract function "${a}" reverted.`,{cause:_,metaMessages:x}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionRevertedError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"reason",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"signature",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=W,this.reason=T,this.signature=F}};let ContractFunctionZeroDataError=class ContractFunctionZeroDataError extends W.G{constructor({functionName:e}){super(`The contract function "${e}" returned no data ("0x").`,{metaMessages:["This could be due to any of the following:",`  - The contract does not have the function "${e}",`,"  - The parameters passed to the contract function may be invalid, or","  - The address is not a contract."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ContractFunctionZeroDataError"})}};let RawContractError=class RawContractError extends W.G{constructor({data:e,message:t}){super(t||""),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:3}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RawContractError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=e}}},69760:function(e,t,a){"use strict";a.d(t,{$:function(){return SizeExceedsPaddingSizeError},m:function(){return SliceOffsetOutOfBoundsError}});var p=a(62027);let SliceOffsetOutOfBoundsError=class SliceOffsetOutOfBoundsError extends p.G{constructor({offset:e,position:t,size:a}){super(`Slice ${"start"===t?"starting":"ending"} at offset "${e}" is out-of-bounds (size: ${a}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SliceOffsetOutOfBoundsError"})}};let SizeExceedsPaddingSizeError=class SizeExceedsPaddingSizeError extends p.G{constructor({size:e,targetSize:t,type:a}){super(`${a.charAt(0).toUpperCase()}${a.slice(1).toLowerCase()} size (${e}) exceeds padding size (${t}).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeExceedsPaddingSizeError"})}}},87788:function(e,t,a){"use strict";a.d(t,{Cd:function(){return InvalidHexBooleanError},J5:function(){return IntegerOutOfRangeError},M6:function(){return SizeOverflowError}});var p=a(62027);let IntegerOutOfRangeError=class IntegerOutOfRangeError extends p.G{constructor({max:e,min:t,signed:a,size:p,value:g}){super(`Number "${g}" is not in safe ${p?`${8*p}-bit ${a?"signed":"unsigned"} `:""}integer range ${e?`(${t} to ${e})`:`(above ${t})`}`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntegerOutOfRangeError"})}};let InvalidHexBooleanError=class InvalidHexBooleanError extends p.G{constructor(e){super(`Hex value "${e}" is not a valid boolean. The hex value must be "0x0" (false) or "0x1" (true).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidHexBooleanError"})}};let SizeOverflowError=class SizeOverflowError extends p.G{constructor({givenSize:e,maxSize:t}){super(`Size cannot exceed ${t} bytes. Given size: ${e} bytes.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SizeOverflowError"})}}},15371:function(e,t,a){"use strict";a.d(t,{Fz:function(){return BaseFeeScalarError},e5:function(){return Eip1559FeesNotSupportedError},ld:function(){return MaxFeePerGasTooLowError}});var p=a(67795),g=a(62027);let BaseFeeScalarError=class BaseFeeScalarError extends g.G{constructor(){super("`baseFeeMultiplier` must be greater than 1."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"BaseFeeScalarError"})}};let Eip1559FeesNotSupportedError=class Eip1559FeesNotSupportedError extends g.G{constructor(){super("Chain does not support EIP-1559 fees."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"Eip1559FeesNotSupportedError"})}};let MaxFeePerGasTooLowError=class MaxFeePerGasTooLowError extends g.G{constructor({maxPriorityFeePerGas:e}){super(`\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${(0,p.o)(e)} gwei).`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MaxFeePerGasTooLowError"})}}},26445:function(e,t,a){"use strict";a.d(t,{C_:function(){return InsufficientFundsError},G$:function(){return FeeCapTooLowError},Hh:function(){return FeeCapTooHighError},M_:function(){return ExecutionRevertedError},WF:function(){return IntrinsicGasTooHighError},ZI:function(){return NonceTooHighError},cj:function(){return UnknownNodeError},cs:function(){return TipAboveFeeCapError},dR:function(){return IntrinsicGasTooLowError},pZ:function(){return TransactionTypeNotSupportedError},se:function(){return NonceMaxValueError},vU:function(){return NonceTooLowError}});var p=a(67795),g=a(62027);let ExecutionRevertedError=class ExecutionRevertedError extends g.G{constructor({cause:e,message:t}={}){let a=t?.replace("execution reverted: ","")?.replace("execution reverted","");super(`Execution reverted ${a?`with reason: ${a}`:"for an unknown reason"}.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ExecutionRevertedError"})}};Object.defineProperty(ExecutionRevertedError,"code",{enumerable:!0,configurable:!0,writable:!0,value:3}),Object.defineProperty(ExecutionRevertedError,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/execution reverted/});let FeeCapTooHighError=class FeeCapTooHighError extends g.G{constructor({cause:e,maxFeePerGas:t}={}){super(`The fee cap (\`maxFeePerGas\`${t?` = ${(0,p.o)(t)} gwei`:""}) cannot be higher than the maximum allowed value (2^256-1).`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooHigh"})}};Object.defineProperty(FeeCapTooHighError,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/});let FeeCapTooLowError=class FeeCapTooLowError extends g.G{constructor({cause:e,maxFeePerGas:t}={}){super(`The fee cap (\`maxFeePerGas\`${t?` = ${(0,p.o)(t)}`:""} gwei) cannot be lower than the block base fee.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeCapTooLow"})}};Object.defineProperty(FeeCapTooLowError,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/});let NonceTooHighError=class NonceTooHighError extends g.G{constructor({cause:e,nonce:t}={}){super(`Nonce provided for the transaction ${t?`(${t}) `:""}is higher than the next one expected.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooHighError"})}};Object.defineProperty(NonceTooHighError,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too high/});let NonceTooLowError=class NonceTooLowError extends g.G{constructor({cause:e,nonce:t}={}){super(`Nonce provided for the transaction ${t?`(${t}) `:""}is lower than the current nonce of the account.
Try increasing the nonce or find the latest nonce with \`getTransactionCount\`.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceTooLowError"})}};Object.defineProperty(NonceTooLowError,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce too low|transaction already imported|already known/});let NonceMaxValueError=class NonceMaxValueError extends g.G{constructor({cause:e,nonce:t}={}){super(`Nonce provided for the transaction ${t?`(${t}) `:""}exceeds the maximum allowed nonce.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"NonceMaxValueError"})}};Object.defineProperty(NonceMaxValueError,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/nonce has max value/});let InsufficientFundsError=class InsufficientFundsError extends g.G{constructor({cause:e}={}){super("The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account.",{cause:e,metaMessages:["This error could arise when the account does not have enough funds to:"," - pay for the total gas fee,"," - pay for the value to send."," ","The cost of the transaction is calculated as `gas * gas fee + value`, where:"," - `gas` is the amount of gas needed for transaction to execute,"," - `gas fee` is the gas fee,"," - `value` is the amount of ether to send to the recipient."]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InsufficientFundsError"})}};Object.defineProperty(InsufficientFundsError,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/insufficient funds/});let IntrinsicGasTooHighError=class IntrinsicGasTooHighError extends g.G{constructor({cause:e,gas:t}={}){super(`The amount of gas ${t?`(${t}) `:""}provided for the transaction exceeds the limit allowed for the block.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooHighError"})}};Object.defineProperty(IntrinsicGasTooHighError,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too high|gas limit reached/});let IntrinsicGasTooLowError=class IntrinsicGasTooLowError extends g.G{constructor({cause:e,gas:t}={}){super(`The amount of gas ${t?`(${t}) `:""}provided for the transaction is too low.`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"IntrinsicGasTooLowError"})}};Object.defineProperty(IntrinsicGasTooLowError,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/intrinsic gas too low/});let TransactionTypeNotSupportedError=class TransactionTypeNotSupportedError extends g.G{constructor({cause:e}){super("The transaction type is not supported for this chain.",{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionTypeNotSupportedError"})}};Object.defineProperty(TransactionTypeNotSupportedError,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/transaction type not valid/});let TipAboveFeeCapError=class TipAboveFeeCapError extends g.G{constructor({cause:e,maxPriorityFeePerGas:t,maxFeePerGas:a}={}){super(`The provided tip (\`maxPriorityFeePerGas\`${t?` = ${(0,p.o)(t)} gwei`:""}) cannot be higher than the fee cap (\`maxFeePerGas\`${a?` = ${(0,p.o)(a)} gwei`:""}).`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TipAboveFeeCapError"})}};Object.defineProperty(TipAboveFeeCapError,"nodeMessage",{enumerable:!0,configurable:!0,writable:!0,value:/max priority fee per gas higher than max fee per gas|tip higher than fee cap/});let UnknownNodeError=class UnknownNodeError extends g.G{constructor({cause:e}){super(`An error occurred while executing: ${e?.shortMessage}`,{cause:e}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownNodeError"})}}},78863:function(e,t,a){"use strict";a.d(t,{Gg:function(){return HttpRequestError},W5:function(){return TimeoutError},bs:function(){return RpcRequestError},c9:function(){return WebSocketRequestError}});var p=a(96070),g=a(62027),m=a(35280);let HttpRequestError=class HttpRequestError extends g.G{constructor({body:e,details:t,headers:a,status:g,url:v}){super("HTTP request failed.",{details:t,metaMessages:[g&&`Status: ${g}`,`URL: ${(0,m.Gr)(v)}`,e&&`Request body: ${(0,p.P)(e)}`].filter(Boolean)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"HttpRequestError"}),Object.defineProperty(this,"body",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"headers",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"status",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"url",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.body=e,this.headers=a,this.status=g,this.url=v}};let WebSocketRequestError=class WebSocketRequestError extends g.G{constructor({body:e,details:t,url:a}){super("WebSocket request failed.",{details:t,metaMessages:[`URL: ${(0,m.Gr)(a)}`,`Request body: ${(0,p.P)(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WebSocketRequestError"})}};let RpcRequestError=class RpcRequestError extends g.G{constructor({body:e,error:t,url:a}){super("RPC Request failed.",{cause:t,details:t.message,metaMessages:[`URL: ${(0,m.Gr)(a)}`,`Request body: ${(0,p.P)(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcRequestError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.code=t.code}};let TimeoutError=class TimeoutError extends g.G{constructor({body:e,url:t}){super("The request took too long to respond.",{details:"The request timed out.",metaMessages:[`URL: ${(0,m.Gr)(t)}`,`Request body: ${(0,p.P)(e)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TimeoutError"})}}},39028:function(e,t,a){"use strict";a.d(t,{B:function(){return InvalidRequestRpcError},GD:function(){return JsonRpcVersionUnsupportedError},I0:function(){return ChainDisconnectedError},KB:function(){return TransactionRejectedRpcError},LX:function(){return MethodNotFoundRpcError},Og:function(){return ResourceNotFoundRpcError},PE:function(){return UnauthorizedProviderError},Pv:function(){return LimitExceededRpcError},Ts:function(){return UnsupportedProviderMethodError},XS:function(){return InternalRpcError},ab:function(){return UserRejectedRequestError},gS:function(){return MethodNotSupportedRpcError},ir:function(){return UnknownRpcError},nY:function(){return InvalidParamsRpcError},pT:function(){return ResourceUnavailableRpcError},s7:function(){return ParseRpcError},u5:function(){return ProviderDisconnectedError},x3:function(){return SwitchChainError},yR:function(){return InvalidInputRpcError}});var p=a(62027),g=a(78863);let RpcError=class RpcError extends p.G{constructor(e,{code:t,docsPath:a,metaMessages:p,shortMessage:m}){super(m,{cause:e,docsPath:a,metaMessages:p||e?.metaMessages}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.name=e.name,this.code=e instanceof g.bs?e.code:t??-1}};let ProviderRpcError=class ProviderRpcError extends RpcError{constructor(e,t){super(e,t),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderRpcError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=t.data}};let ParseRpcError=class ParseRpcError extends RpcError{constructor(e){super(e,{code:ParseRpcError.code,shortMessage:"Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ParseRpcError"})}};Object.defineProperty(ParseRpcError,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32700});let InvalidRequestRpcError=class InvalidRequestRpcError extends RpcError{constructor(e){super(e,{code:InvalidRequestRpcError.code,shortMessage:"JSON is not a valid request object."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidRequestRpcError"})}};Object.defineProperty(InvalidRequestRpcError,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32600});let MethodNotFoundRpcError=class MethodNotFoundRpcError extends RpcError{constructor(e){super(e,{code:MethodNotFoundRpcError.code,shortMessage:"The method does not exist / is not available."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotFoundRpcError"})}};Object.defineProperty(MethodNotFoundRpcError,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32601});let InvalidParamsRpcError=class InvalidParamsRpcError extends RpcError{constructor(e){super(e,{code:InvalidParamsRpcError.code,shortMessage:"Invalid parameters were provided to the RPC method.\nDouble check you have provided the correct parameters."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidParamsRpcError"})}};Object.defineProperty(InvalidParamsRpcError,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32602});let InternalRpcError=class InternalRpcError extends RpcError{constructor(e){super(e,{code:InternalRpcError.code,shortMessage:"An internal error was received."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InternalRpcError"})}};Object.defineProperty(InternalRpcError,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32603});let InvalidInputRpcError=class InvalidInputRpcError extends RpcError{constructor(e){super(e,{code:InvalidInputRpcError.code,shortMessage:"Missing or invalid parameters.\nDouble check you have provided the correct parameters."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidInputRpcError"})}};Object.defineProperty(InvalidInputRpcError,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32e3});let ResourceNotFoundRpcError=class ResourceNotFoundRpcError extends RpcError{constructor(e){super(e,{code:ResourceNotFoundRpcError.code,shortMessage:"Requested resource not found."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceNotFoundRpcError"})}};Object.defineProperty(ResourceNotFoundRpcError,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32001});let ResourceUnavailableRpcError=class ResourceUnavailableRpcError extends RpcError{constructor(e){super(e,{code:ResourceUnavailableRpcError.code,shortMessage:"Requested resource not available."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ResourceUnavailableRpcError"})}};Object.defineProperty(ResourceUnavailableRpcError,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32002});let TransactionRejectedRpcError=class TransactionRejectedRpcError extends RpcError{constructor(e){super(e,{code:TransactionRejectedRpcError.code,shortMessage:"Transaction creation failed."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionRejectedRpcError"})}};Object.defineProperty(TransactionRejectedRpcError,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32003});let MethodNotSupportedRpcError=class MethodNotSupportedRpcError extends RpcError{constructor(e){super(e,{code:MethodNotSupportedRpcError.code,shortMessage:"Method is not implemented."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"MethodNotSupportedRpcError"})}};Object.defineProperty(MethodNotSupportedRpcError,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32004});let LimitExceededRpcError=class LimitExceededRpcError extends RpcError{constructor(e){super(e,{code:LimitExceededRpcError.code,shortMessage:"Request exceeds defined limit."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"LimitExceededRpcError"})}};Object.defineProperty(LimitExceededRpcError,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32005});let JsonRpcVersionUnsupportedError=class JsonRpcVersionUnsupportedError extends RpcError{constructor(e){super(e,{code:JsonRpcVersionUnsupportedError.code,shortMessage:"Version of JSON-RPC protocol is not supported."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"JsonRpcVersionUnsupportedError"})}};Object.defineProperty(JsonRpcVersionUnsupportedError,"code",{enumerable:!0,configurable:!0,writable:!0,value:-32006});let UserRejectedRequestError=class UserRejectedRequestError extends ProviderRpcError{constructor(e){super(e,{code:UserRejectedRequestError.code,shortMessage:"User rejected the request."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UserRejectedRequestError"})}};Object.defineProperty(UserRejectedRequestError,"code",{enumerable:!0,configurable:!0,writable:!0,value:4001});let UnauthorizedProviderError=class UnauthorizedProviderError extends ProviderRpcError{constructor(e){super(e,{code:UnauthorizedProviderError.code,shortMessage:"The requested method and/or account has not been authorized by the user."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnauthorizedProviderError"})}};Object.defineProperty(UnauthorizedProviderError,"code",{enumerable:!0,configurable:!0,writable:!0,value:4100});let UnsupportedProviderMethodError=class UnsupportedProviderMethodError extends ProviderRpcError{constructor(e){super(e,{code:UnsupportedProviderMethodError.code,shortMessage:"The Provider does not support the requested method."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnsupportedProviderMethodError"})}};Object.defineProperty(UnsupportedProviderMethodError,"code",{enumerable:!0,configurable:!0,writable:!0,value:4200});let ProviderDisconnectedError=class ProviderDisconnectedError extends ProviderRpcError{constructor(e){super(e,{code:ProviderDisconnectedError.code,shortMessage:"The Provider is disconnected from all chains."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderDisconnectedError"})}};Object.defineProperty(ProviderDisconnectedError,"code",{enumerable:!0,configurable:!0,writable:!0,value:4900});let ChainDisconnectedError=class ChainDisconnectedError extends ProviderRpcError{constructor(e){super(e,{code:ChainDisconnectedError.code,shortMessage:"The Provider is not connected to the requested chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ChainDisconnectedError"})}};Object.defineProperty(ChainDisconnectedError,"code",{enumerable:!0,configurable:!0,writable:!0,value:4901});let SwitchChainError=class SwitchChainError extends ProviderRpcError{constructor(e){super(e,{code:SwitchChainError.code,shortMessage:"An error occurred when attempting to switch chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SwitchChainError"})}};Object.defineProperty(SwitchChainError,"code",{enumerable:!0,configurable:!0,writable:!0,value:4902});let UnknownRpcError=class UnknownRpcError extends RpcError{constructor(e){super(e,{shortMessage:"An unknown RPC error occurred."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UnknownRpcError"})}}},33639:function(e,t,a){"use strict";a.d(t,{Bh:function(){return TransactionNotFoundError},JC:function(){return InvalidStorageKeySizeError},Yb:function(){return TransactionReceiptNotFoundError},j3:function(){return InvalidSerializableTransactionError},mc:function(){return WaitForTransactionReceiptTimeoutError},mk:function(){return TransactionExecutionError},vl:function(){return InvalidLegacyVError},xY:function(){return FeeConflictError},xr:function(){return prettyPrint}});var p=a(39625),g=a(67795),m=a(62027);function prettyPrint(e){let t=Object.entries(e).map(([e,t])=>void 0===t||!1===t?null:[e,t]).filter(Boolean),a=t.reduce((e,[t])=>Math.max(e,t.length),0);return t.map(([e,t])=>`  ${`${e}:`.padEnd(a+1)}  ${t}`).join("\n")}let FeeConflictError=class FeeConflictError extends m.G{constructor(){super("Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.\nUse `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others."),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"FeeConflictError"})}};let InvalidLegacyVError=class InvalidLegacyVError extends m.G{constructor({v:e}){super(`Invalid \`v\` value "${e}". Expected 27 or 28.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidLegacyVError"})}};let InvalidSerializableTransactionError=class InvalidSerializableTransactionError extends m.G{constructor({transaction:e}){super("Cannot infer a transaction type from provided transaction.",{metaMessages:["Provided Transaction:","{",prettyPrint(e),"}","","To infer the type, either provide:","- a `type` to the Transaction, or","- an EIP-1559 Transaction with `maxFeePerGas`, or","- an EIP-2930 Transaction with `gasPrice` & `accessList`, or","- a Legacy Transaction with `gasPrice`"]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidSerializableTransactionError"})}};let InvalidStorageKeySizeError=class InvalidStorageKeySizeError extends m.G{constructor({storageKey:e}){super(`Size for storage key "${e}" is invalid. Expected 32 bytes. Got ${Math.floor((e.length-2)/2)} bytes.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"InvalidStorageKeySizeError"})}};let TransactionExecutionError=class TransactionExecutionError extends m.G{constructor(e,{account:t,docsPath:a,chain:m,data:v,gas:_,gasPrice:x,maxFeePerGas:T,maxPriorityFeePerGas:F,nonce:z,to:W,value:K}){let Z=prettyPrint({chain:m&&`${m?.name} (id: ${m?.id})`,from:t?.address,to:W,value:void 0!==K&&`${(0,p.d)(K)} ${m?.nativeCurrency.symbol||"ETH"}`,data:v,gas:_,gasPrice:void 0!==x&&`${(0,g.o)(x)} gwei`,maxFeePerGas:void 0!==T&&`${(0,g.o)(T)} gwei`,maxPriorityFeePerGas:void 0!==F&&`${(0,g.o)(F)} gwei`,nonce:z});super(e.shortMessage,{cause:e,docsPath:a,metaMessages:[...e.metaMessages?[...e.metaMessages," "]:[],"Request Arguments:",Z].filter(Boolean)}),Object.defineProperty(this,"cause",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionExecutionError"}),this.cause=e}};let TransactionNotFoundError=class TransactionNotFoundError extends m.G{constructor({blockHash:e,blockNumber:t,blockTag:a,hash:p,index:g}){let m="Transaction";a&&void 0!==g&&(m=`Transaction at block time "${a}" at index "${g}"`),e&&void 0!==g&&(m=`Transaction at block hash "${e}" at index "${g}"`),t&&void 0!==g&&(m=`Transaction at block number "${t}" at index "${g}"`),p&&(m=`Transaction with hash "${p}"`),super(`${m} could not be found.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionNotFoundError"})}};let TransactionReceiptNotFoundError=class TransactionReceiptNotFoundError extends m.G{constructor({hash:e}){super(`Transaction receipt with hash "${e}" could not be found. The Transaction may not be processed on a block yet.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"TransactionReceiptNotFoundError"})}};let WaitForTransactionReceiptTimeoutError=class WaitForTransactionReceiptTimeoutError extends m.G{constructor({hash:e}){super(`Timed out while waiting for transaction with hash "${e}" to be confirmed.`),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"WaitForTransactionReceiptTimeoutError"})}}},35280:function(e,t,a){"use strict";a.d(t,{CR:function(){return getContractAddress},Gr:function(){return getUrl},bo:function(){return getVersion}});let getContractAddress=e=>e,getUrl=e=>e,getVersion=()=>"viem@1.16.2"},34450:function(e,t,a){"use strict";a.d(t,{r:function(){return decodeAbiParameters}});var p=a(57412),g=a(45775),m=a(39135),v=a(3972),_=a(61836),x=a(95946),T=a(45444);function decodeAbiParameters(e,t){if("0x"===t&&e.length>0)throw new p.wb;if((0,m.d)(t)&&32>(0,m.d)(t))throw new p.xB({data:t,params:e,size:(0,m.d)(t)});return function({data:e,params:t}){let a=[],F=0;for(let z=0;z<t.length;z++){if(F>=(0,m.d)(e))throw new p.xB({data:e,params:t,size:(0,m.d)(e)});let W=t[z],{consumed:K,value:Z}=function decodeParam({data:e,param:t,position:a}){let m=(0,T.S)(t.type);if(m){let[p,g]=m;return function(e,{param:t,length:a,position:p}){if(!a){let a=(0,x.ly)((0,v.tP)(e,p,p+32,{strict:!0})),g=(0,x.ly)((0,v.tP)(e,a,a+32,{strict:!0})),m=0,_=[];for(let p=0;p<g;++p){let p=decodeParam({data:(0,v.tP)(e,a+32),param:t,position:m});m+=p.consumed,_.push(p.value)}return{value:_,consumed:32}}if(hasDynamicChild(t)){let g=(0,T.S)(t.type),m=!g?.[0],_=0,F=[];for(let g=0;g<a;++g){let a=(0,x.ly)((0,v.tP)(e,p,p+32,{strict:!0})),T=decodeParam({data:(0,v.tP)(e,a),param:t,position:m?_:32*g});_+=T.consumed,F.push(T.value)}return{value:F,consumed:32}}let g=0,m=[];for(let v=0;v<a;++v){let a=decodeParam({data:e,param:t,position:p+g});g+=a.consumed,m.push(a.value)}return{value:m,consumed:g}}(e,{length:p,param:{...t,type:g},position:a})}if("tuple"===t.type)return function(e,{param:t,position:a}){let p=0===t.components.length||t.components.some(({name:e})=>!e),g=p?[]:{},m=0;if(hasDynamicChild(t)){let _=(0,x.ly)((0,v.tP)(e,a,a+32,{strict:!0}));for(let a=0;a<t.components.length;++a){let x=t.components[a],T=decodeParam({data:(0,v.tP)(e,_),param:x,position:m});m+=T.consumed,g[p?a:x?.name]=T.value}return{consumed:32,value:g}}for(let v=0;v<t.components.length;++v){let _=t.components[v],x=decodeParam({data:e,param:_,position:a+m});m+=x.consumed,g[p?v:_?.name]=x.value}return{consumed:m,value:g}}(e,{param:t,position:a});if("string"===t.type)return function(e,{position:t}){let a=(0,x.ly)((0,v.tP)(e,t,t+32,{strict:!0})),p=(0,x.ly)((0,v.tP)(e,a,a+32,{strict:!0}));if(0===p)return{consumed:32,value:""};let g=(0,x.rR)((0,_.f)((0,v.tP)(e,a+32,a+32+p,{strict:!0})));return{consumed:32,value:g}}(e,{position:a});if(t.type.startsWith("bytes"))return function(e,{param:t,position:a}){let[p,g]=t.type.split("bytes");if(!g){let t=(0,x.ly)((0,v.tP)(e,a,a+32,{strict:!0})),p=(0,x.ly)((0,v.tP)(e,t,t+32,{strict:!0}));if(0===p)return{consumed:32,value:"0x"};let g=(0,v.tP)(e,t+32,t+32+p,{strict:!0});return{consumed:32,value:g}}let m=(0,v.tP)(e,a,a+parseInt(g),{strict:!0});return{consumed:32,value:m}}(e,{param:t,position:a});let F=(0,v.tP)(e,a,a+32,{strict:!0});if(t.type.startsWith("uint")||t.type.startsWith("int"))return function(e,{param:t}){let a=t.type.startsWith("int"),p=parseInt(t.type.split("int")[1]||"256");return{consumed:32,value:p>48?(0,x.y_)(e,{signed:a}):(0,x.ly)(e,{signed:a})}}(F,{param:t});if("address"===t.type)return{consumed:32,value:(0,g.x)((0,v.tP)(F,-20))};if("bool"===t.type)return{consumed:32,value:(0,x.XA)(F)};throw new p.CI(t.type,{docsPath:"/docs/contract/decodeAbiParameters"})}({data:e,param:W,position:F});a.push(Z),F+=K}return a}({data:t,params:e})}function hasDynamicChild(e){let{type:t}=e;if("string"===t||"bytes"===t||t.endsWith("[]"))return!0;if("tuple"===t)return e.components?.some(hasDynamicChild);let a=(0,T.S)(e.type);return!!(a&&hasDynamicChild({...e,type:a[1]}))}},86899:function(e,t,a){"use strict";a.d(t,{p:function(){return decodeErrorResult}});var p=a(21746),g=a(57412),m=a(3972),v=a(40552),_=a(34450),x=a(80522);function decodeErrorResult({abi:e,data:t}){let a=(0,m.tP)(t,0,4);if("0x"===a)throw new g.wb;let T=[...e||[],p.Up,p.hZ],F=T.find(e=>"error"===e.type&&a===(0,v.o)((0,x.t)(e)));if(!F)throw new g.yP(a,{docsPath:"/docs/contract/decodeErrorResult"});return{abiItem:F,args:"inputs"in F&&F.inputs&&F.inputs.length>0?(0,_.r)(F.inputs,(0,m.tP)(t,4)):void 0,errorName:F.name}}},7210:function(e,t,a){"use strict";a.d(t,{k:function(){return decodeFunctionResult}});var p=a(57412),g=a(34450),m=a(40840);let v="/docs/contract/decodeFunctionResult";function decodeFunctionResult({abi:e,args:t,functionName:a,data:_}){let x=e[0];if(a&&!(x=(0,m.m)({abi:e,args:t,name:a})))throw new p.xL(a,{docsPath:v});if("function"!==x.type)throw new p.xL(void 0,{docsPath:v});if(!x.outputs)throw new p.MX(x.name,{docsPath:v});let T=(0,g.r)(x.outputs,_);return T&&T.length>1?T:T&&1===T.length?T[0]:void 0}},45444:function(e,t,a){"use strict";a.d(t,{E:function(){return encodeAbiParameters},S:function(){return getArrayComponents}});var p=a(57412),g=a(26087),m=a(49321),v=a(57040),_=a(61769),x=a(39135),T=a(3972),F=a(92106);function encodeAbiParameters(e,t){if(e.length!==t.length)throw new p.fs({expectedLength:e.length,givenLength:t.length});let a=function({params:e,values:t}){let a=[];for(let z=0;z<e.length;z++)a.push(function prepareParam({param:e,value:t}){let a=getArrayComponents(e.type);if(a){let[g,m]=a;return function(e,{length:t,param:a}){let g=null===t;if(!Array.isArray(e))throw new p.hn(e);if(!g&&e.length!==t)throw new p.gr({expectedLength:t,givenLength:e.length,type:`${a.type}[${t}]`});let m=!1,_=[];for(let t=0;t<e.length;t++){let p=prepareParam({param:a,value:e[t]});p.dynamic&&(m=!0),_.push(p)}if(g||m){let e=encodeParams(_);if(g){let t=(0,F.eC)(_.length,{size:32});return{dynamic:!0,encoded:_.length>0?(0,v.zo)([t,e]):t}}if(m)return{dynamic:!0,encoded:e}}return{dynamic:!1,encoded:(0,v.zo)(_.map(({encoded:e})=>e))}}(t,{length:g,param:{...e,type:m}})}if("tuple"===e.type)return function(e,{param:t}){let a=!1,p=[];for(let g=0;g<t.components.length;g++){let m=t.components[g],v=Array.isArray(e)?g:m.name,_=prepareParam({param:m,value:e[v]});p.push(_),_.dynamic&&(a=!0)}return{dynamic:a,encoded:a?encodeParams(p):(0,v.zo)(p.map(({encoded:e})=>e))}}(t,{param:e});if("address"===e.type)return function(e){if(!(0,m.U)(e))throw new g.b({address:e});return{dynamic:!1,encoded:(0,_.gc)(e.toLowerCase())}}(t);if("bool"===e.type)return{dynamic:!1,encoded:(0,_.gc)((0,F.C4)(t))};if(e.type.startsWith("uint")||e.type.startsWith("int")){let a=e.type.startsWith("int");return function(e,{signed:t}){return{dynamic:!1,encoded:(0,F.eC)(e,{size:32,signed:t})}}(t,{signed:a})}if(e.type.startsWith("bytes"))return function(e,{param:t}){let[,a]=t.type.split("bytes"),g=(0,x.d)(e);if(!a){let t=e;return g%32!=0&&(t=(0,_.gc)(t,{dir:"right",size:32*Math.ceil((e.length-2)/2/32)})),{dynamic:!0,encoded:(0,v.zo)([(0,_.gc)((0,F.eC)(g,{size:32})),t])}}if(g!==parseInt(a))throw new p.M4({expectedSize:parseInt(a),value:e});return{dynamic:!1,encoded:(0,_.gc)(e,{dir:"right"})}}(t,{param:e});if("string"===e.type)return function(e){let t=(0,F.$G)(e),a=Math.ceil((0,x.d)(t)/32),p=[];for(let e=0;e<a;e++)p.push((0,_.gc)((0,T.tP)(t,32*e,(e+1)*32),{dir:"right"}));return{dynamic:!0,encoded:(0,v.zo)([(0,_.gc)((0,F.eC)((0,x.d)(t),{size:32})),...p])}}(t);throw new p.dh(e.type,{docsPath:"/docs/contract/encodeAbiParameters"})}({param:e[z],value:t[z]}));return a}({params:e,values:t}),z=encodeParams(a);return 0===z.length?"0x":z}function encodeParams(e){let t=0;for(let a=0;a<e.length;a++){let{dynamic:p,encoded:g}=e[a];p?t+=32:t+=(0,x.d)(g)}let a=[],p=[],g=0;for(let m=0;m<e.length;m++){let{dynamic:v,encoded:_}=e[m];v?(a.push((0,F.eC)(t+g,{size:32})),p.push(_),g+=(0,x.d)(_)):a.push(_)}return(0,v.zo)([...a,...p])}function getArrayComponents(e){let t=e.match(/^(.*)\[(\d+)?\]$/);return t?[t[2]?Number(t[2]):null,t[1]]:void 0}},30286:function(e,t,a){"use strict";a.d(t,{w:function(){return encodeDeployData}});var p=a(57412),g=a(57040),m=a(45444);let v="/docs/contract/encodeDeployData";function encodeDeployData({abi:e,args:t,bytecode:a}){if(!t||0===t.length)return a;let _=e.find(e=>"type"in e&&"constructor"===e.type);if(!_)throw new p.fM({docsPath:v});if(!("inputs"in _)||!_.inputs||0===_.inputs.length)throw new p.cO({docsPath:v});let x=(0,m.E)(_.inputs,t);return(0,g.SM)([a,x])}},77799:function(e,t,a){"use strict";a.d(t,{R:function(){return encodeFunctionData}});var p=a(57412),g=a(57040),m=a(40552),v=a(45444),_=a(80522),x=a(40840);function encodeFunctionData({abi:e,args:t,functionName:a}){let T=e[0];if(a&&!(T=(0,x.m)({abi:e,args:t,name:a})))throw new p.xL(a,{docsPath:"/docs/contract/encodeFunctionData"});if("function"!==T.type)throw new p.xL(void 0,{docsPath:"/docs/contract/encodeFunctionData"});let F=(0,_.t)(T),z=(0,m.o)(F),W="inputs"in T&&T.inputs?(0,v.E)(T.inputs,t??[]):void 0;return(0,g.SM)([z,W??"0x"])}},80522:function(e,t,a){"use strict";a.d(t,{h:function(){return formatAbiParams},t:function(){return formatAbiItem}});var p=a(57412);function formatAbiItem(e,{includeName:t=!1}={}){if("function"!==e.type&&"event"!==e.type&&"error"!==e.type)throw new p.wM(e.type);return`${e.name}(${formatAbiParams(e.inputs,{includeName:t})})`}function formatAbiParams(e,{includeName:t=!1}={}){return e?e.map(e=>(function(e,{includeName:t}){return e.type.startsWith("tuple")?`(${formatAbiParams(e.components,{includeName:t})})${e.type.slice(5)}`:e.type+(t&&e.name?` ${e.name}`:"")})(e,{includeName:t})).join(t?", ":","):""}},40840:function(e,t,a){"use strict";a.d(t,{m:function(){return getAbiItem}});var p=a(15102),g=a(74059),m=a(40552),v=a(49321);function getAbiItem({abi:e,args:t=[],name:a}){let _=(0,p.v)(a,{strict:!1}),x=e.filter(e=>_?"function"===e.type?(0,m.o)(e)===a:"event"===e.type&&(0,g.e)(e)===a:"name"in e&&e.name===a);if(0!==x.length){if(1===x.length)return x[0];for(let e of x){if(!("inputs"in e))continue;if(!t||0===t.length){if(!e.inputs||0===e.inputs.length)return e;continue}if(!e.inputs||0===e.inputs.length||e.inputs.length!==t.length)continue;let a=t.every((t,a)=>{let p="inputs"in e&&e.inputs[a];return!!p&&function isArgOfType(e,t){let a=typeof e,p=t.type;switch(p){case"address":return(0,v.U)(e);case"bool":return"boolean"===a;case"function":case"string":return"string"===a;default:if("tuple"===p&&"components"in t)return Object.values(t.components).every((t,a)=>isArgOfType(Object.values(e)[a],t));if(/^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(p))return"number"===a||"bigint"===a;if(/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(p))return"string"===a||e instanceof Uint8Array;if(/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(p))return Array.isArray(e)&&e.every(e=>isArgOfType(e,{...t,type:p.replace(/(\[[0-9]{0,}\])$/,"")}));return!1}}(t,p)});if(a)return e}return x[0]}}},45775:function(e,t,a){"use strict";a.d(t,{K:function(){return getAddress},x:function(){return checksumAddress}});var p=a(26087),g=a(11187),m=a(56254),v=a(49321);function checksumAddress(e,t){let a=t?`${t}${e.toLowerCase()}`:e.substring(2).toLowerCase(),p=(0,m.w)((0,g.qX)(a),"bytes"),v=(t?a.substring(`${t}0x`.length):a).split("");for(let e=0;e<40;e+=2)p[e>>1]>>4>=8&&v[e]&&(v[e]=v[e].toUpperCase()),(15&p[e>>1])>=8&&v[e+1]&&(v[e+1]=v[e+1].toUpperCase());return`0x${v.join("")}`}function getAddress(e,t){if(!(0,v.U)(e))throw new p.b({address:e});return checksumAddress(e,t)}},49321:function(e,t,a){"use strict";a.d(t,{U:function(){return isAddress}});let p=/^0x[a-fA-F0-9]{40}$/;function isAddress(e){return p.test(e)}},37029:function(e,t,a){"use strict";a.d(t,{n:function(){return buildRequest},y:function(){return isDeterministicError}});var p=a(62027),g=a(78863),m=a(39028),v=a(7760);let isDeterministicError=e=>"code"in e?-1!==e.code&&-32004!==e.code&&-32005!==e.code&&-32042!==e.code&&-32603!==e.code:e instanceof g.Gg&&!!e.status&&403!==e.status&&408!==e.status&&413!==e.status&&429!==e.status&&500!==e.status&&502!==e.status&&503!==e.status&&504!==e.status;function buildRequest(e,{retryDelay:t=150,retryCount:a=3}={}){return async _=>(0,v.J)(async()=>{try{return await e(_)}catch(e){switch(e.code){case m.s7.code:throw new m.s7(e);case m.B.code:throw new m.B(e);case m.LX.code:throw new m.LX(e);case m.nY.code:throw new m.nY(e);case m.XS.code:throw new m.XS(e);case m.yR.code:throw new m.yR(e);case m.Og.code:throw new m.Og(e);case m.pT.code:throw new m.pT(e);case m.KB.code:throw new m.KB(e);case m.gS.code:throw new m.gS(e);case m.Pv.code:throw new m.Pv(e);case m.GD.code:throw new m.GD(e);case m.ab.code:throw new m.ab(e);case m.PE.code:throw new m.PE(e);case m.Ts.code:throw new m.Ts(e);case m.u5.code:throw new m.u5(e);case m.I0.code:throw new m.I0(e);case m.x3.code:throw new m.x3(e);case 5e3:throw new m.ab(e);default:if(e instanceof p.G)throw e;throw new m.ir(e)}}},{delay:({count:e,error:a})=>{if(a&&a instanceof g.Gg){let e=a?.headers?.get("Retry-After");if(e?.match(/\d/))return 1e3*parseInt(e)}return~~(1<<e)*t},retryCount:a,shouldRetry:({error:e})=>!isDeterministicError(e)})}},22676:function(e,t,a){"use strict";a.d(t,{LI:function(){return getChainContractAddress},ax:function(){return defineChain},qg:function(){return assertCurrentChain}});var p=a(80377);function assertCurrentChain({chain:e,currentChainId:t}){if(!e)throw new p.Bk;if(t!==e.id)throw new p.Yl({chain:e,currentChainId:t})}function defineChain(e,t={}){let{fees:a=e.fees,formatters:p=e.formatters,serializers:g=e.serializers}=t;return{...e,fees:a,formatters:p,serializers:g}}function getChainContractAddress({blockNumber:e,chain:t,contract:a}){let g=t?.contracts?.[a];if(!g)throw new p.mm({chain:t,contract:{name:a}});if(e&&g.blockCreated&&g.blockCreated>e)throw new p.mm({blockNumber:e,chain:t,contract:{name:a,blockCreated:g.blockCreated}});return g.address}},57040:function(e,t,a){"use strict";function concat(e){return"string"==typeof e[0]?concatHex(e):function(e){let t=0;for(let a of e)t+=a.length;let a=new Uint8Array(t),p=0;for(let t of e)a.set(t,p),p+=t.length;return a}(e)}function concatHex(e){return`0x${e.reduce((e,t)=>e+t.replace("0x",""),"")}`}a.d(t,{SM:function(){return concatHex},zo:function(){return concat}})},15102:function(e,t,a){"use strict";function isHex(e,{strict:t=!0}={}){return!!e&&"string"==typeof e&&(t?/^0x[0-9a-fA-F]*$/.test(e):e.startsWith("0x"))}a.d(t,{v:function(){return isHex}})},61769:function(e,t,a){"use strict";a.d(t,{gc:function(){return padHex},vk:function(){return pad}});var p=a(69760);function pad(e,{dir:t,size:a=32}={}){return"string"==typeof e?padHex(e,{dir:t,size:a}):function(e,{dir:t,size:a=32}={}){if(null===a)return e;if(e.length>a)throw new p.$({size:e.length,targetSize:a,type:"bytes"});let g=new Uint8Array(a);for(let p=0;p<a;p++){let m="right"===t;g[m?p:a-p-1]=e[m?p:e.length-p-1]}return g}(e,{dir:t,size:a})}function padHex(e,{dir:t,size:a=32}={}){if(null===a)return e;let g=e.replace("0x","");if(g.length>2*a)throw new p.$({size:Math.ceil(g.length/2),targetSize:a,type:"hex"});return`0x${g["right"===t?"padEnd":"padStart"](2*a,"0")}`}},39135:function(e,t,a){"use strict";a.d(t,{d:function(){return size}});var p=a(15102);function size(e){return(0,p.v)(e,{strict:!1})?Math.ceil((e.length-2)/2):e.length}},3972:function(e,t,a){"use strict";a.d(t,{tP:function(){return slice}});var p=a(69760),g=a(15102),m=a(39135);function slice(e,t,a,{strict:p}={}){return(0,g.v)(e,{strict:!1})?function(e,t,a,{strict:p}={}){assertStartOffset(e,t);let g=`0x${e.replace("0x","").slice((t??0)*2,(a??e.length)*2)}`;return p&&assertEndOffset(g,t,a),g}(e,t,a,{strict:p}):function(e,t,a,{strict:p}={}){assertStartOffset(e,t);let g=e.slice(t,a);return p&&assertEndOffset(g,t,a),g}(e,t,a,{strict:p})}function assertStartOffset(e,t){if("number"==typeof t&&t>0&&t>(0,m.d)(e)-1)throw new p.m({offset:t,position:"start",size:(0,m.d)(e)})}function assertEndOffset(e,t,a){if("number"==typeof t&&"number"==typeof a&&(0,m.d)(e)!==a-t)throw new p.m({offset:a,position:"end",size:(0,m.d)(e)})}},61836:function(e,t,a){"use strict";function trim(e,{dir:t="left"}={}){let a="string"==typeof e?e.replace("0x",""):e,p=0;for(let e=0;e<a.length-1&&"0"===a["left"===t?e:a.length-e-1].toString();e++)p++;return(a="left"===t?a.slice(p):a.slice(0,a.length-p),"string"==typeof e)?(1===a.length&&"right"===t&&(a=`${a}0`),`0x${a.length%2==1?`0${a}`:a}`):a}a.d(t,{f:function(){return trim}})},95946:function(e,t,a){"use strict";a.d(t,{XA:function(){return hexToBool},Yf:function(){return assertSize},ly:function(){return hexToNumber},rR:function(){return hexToString},y_:function(){return hexToBigInt}});var p=a(87788),g=a(39135),m=a(61836),v=a(11187);function assertSize(e,{size:t}){if((0,g.d)(e)>t)throw new p.M6({givenSize:(0,g.d)(e),maxSize:t})}function hexToBigInt(e,t={}){let{signed:a}=t;t.size&&assertSize(e,{size:t.size});let p=BigInt(e);if(!a)return p;let g=(e.length-2)/2,m=(1n<<8n*BigInt(g)-1n)-1n;return p<=m?p:p-BigInt(`0x${"f".padStart(2*g,"f")}`)-1n}function hexToBool(e,t={}){let a=e;if(t.size&&(assertSize(a,{size:t.size}),a=(0,m.f)(a)),"0x00"===(0,m.f)(a))return!1;if("0x01"===(0,m.f)(a))return!0;throw new p.Cd(a)}function hexToNumber(e,t={}){return Number(hexToBigInt(e,t))}function hexToString(e,t={}){let a=(0,v.nr)(e);return t.size&&(assertSize(a,{size:t.size}),a=(0,m.f)(a,{dir:"right"})),new TextDecoder().decode(a)}},11187:function(e,t,a){"use strict";a.d(t,{O0:function(){return toBytes},nr:function(){return hexToBytes},qX:function(){return stringToBytes}});var p=a(62027),g=a(15102),m=a(61769),v=a(95946),_=a(92106);let x=new TextEncoder;function toBytes(e,t={}){return"number"==typeof e||"bigint"==typeof e?function(e,t){let a=(0,_.eC)(e,t);return hexToBytes(a)}(e,t):"boolean"==typeof e?function(e,t={}){let a=new Uint8Array(1);return(a[0]=Number(e),"number"==typeof t.size)?((0,v.Yf)(a,{size:t.size}),(0,m.vk)(a,{size:t.size})):a}(e,t):(0,g.v)(e)?hexToBytes(e,t):stringToBytes(e,t)}let T={zero:48,nine:57,A:65,F:70,a:97,f:102};function charCodeToBase16(e){return e>=T.zero&&e<=T.nine?e-T.zero:e>=T.A&&e<=T.F?e-(T.A-10):e>=T.a&&e<=T.f?e-(T.a-10):void 0}function hexToBytes(e,t={}){let a=e;t.size&&((0,v.Yf)(a,{size:t.size}),a=(0,m.vk)(a,{dir:"right",size:t.size}));let g=a.slice(2);g.length%2&&(g=`0${g}`);let _=g.length/2,x=new Uint8Array(_);for(let e=0,t=0;e<_;e++){let a=charCodeToBase16(g.charCodeAt(t++)),m=charCodeToBase16(g.charCodeAt(t++));if(void 0===a||void 0===m)throw new p.G(`Invalid byte sequence ("${g[t-2]}${g[t-1]}" in "${g}").`);x[e]=16*a+m}return x}function stringToBytes(e,t={}){let a=x.encode(e);return"number"==typeof t.size?((0,v.Yf)(a,{size:t.size}),(0,m.vk)(a,{dir:"right",size:t.size})):a}},92106:function(e,t,a){"use strict";a.d(t,{$G:function(){return stringToHex},C4:function(){return boolToHex},NC:function(){return toHex},ci:function(){return bytesToHex},eC:function(){return numberToHex}});var p=a(87788),g=a(61769),m=a(95946);let v=Array.from({length:256},(e,t)=>t.toString(16).padStart(2,"0"));function toHex(e,t={}){return"number"==typeof e||"bigint"==typeof e?numberToHex(e,t):"string"==typeof e?stringToHex(e,t):"boolean"==typeof e?boolToHex(e,t):bytesToHex(e,t)}function boolToHex(e,t={}){let a=`0x${Number(e)}`;return"number"==typeof t.size?((0,m.Yf)(a,{size:t.size}),(0,g.vk)(a,{size:t.size})):a}function bytesToHex(e,t={}){let a="";for(let t=0;t<e.length;t++)a+=v[e[t]];let p=`0x${a}`;return"number"==typeof t.size?((0,m.Yf)(p,{size:t.size}),(0,g.vk)(p,{dir:"right",size:t.size})):p}function numberToHex(e,t={}){let a;let{signed:m,size:v}=t,_=BigInt(e);v?a=m?(1n<<8n*BigInt(v)-1n)-1n:2n**(8n*BigInt(v))-1n:"number"==typeof e&&(a=BigInt(Number.MAX_SAFE_INTEGER));let x="bigint"==typeof a&&m?-a-1n:0;if(a&&_>a||_<x){let t="bigint"==typeof e?"n":"";throw new p.J5({max:a?`${a}${t}`:void 0,min:`${x}${t}`,signed:m,size:v,value:`${e}${t}`})}let T=`0x${(m&&_<0?(1n<<BigInt(8*v))+BigInt(_):_).toString(16)}`;return v?(0,g.vk)(T,{size:v}):T}let _=new TextEncoder;function stringToHex(e,t={}){let a=_.encode(e);return bytesToHex(a,t)}},87469:function(e,t,a){"use strict";a.d(t,{k:function(){return getNodeError}});var p=a(62027),g=a(26445);function getNodeError(e,t){let a=(e.details||"").toLowerCase(),m=e.walk(e=>e.code===g.M_.code);if(m instanceof p.G)return new g.M_({cause:e,message:m.details});if(g.M_.nodeMessage.test(a))return new g.M_({cause:e,message:e.details});if(g.Hh.nodeMessage.test(a))return new g.Hh({cause:e,maxFeePerGas:t?.maxFeePerGas});if(g.G$.nodeMessage.test(a))return new g.G$({cause:e,maxFeePerGas:t?.maxFeePerGas});if(g.ZI.nodeMessage.test(a))return new g.ZI({cause:e,nonce:t?.nonce});if(g.vU.nodeMessage.test(a))return new g.vU({cause:e,nonce:t?.nonce});if(g.se.nodeMessage.test(a))return new g.se({cause:e,nonce:t?.nonce});else if(g.C_.nodeMessage.test(a))return new g.C_({cause:e});else if(g.WF.nodeMessage.test(a))return new g.WF({cause:e,gas:t?.gas});else if(g.dR.nodeMessage.test(a))return new g.dR({cause:e,gas:t?.gas});else if(g.pZ.nodeMessage.test(a))return new g.pZ({cause:e});else if(g.cs.nodeMessage.test(a))return new g.cs({cause:e,maxFeePerGas:t?.maxFeePerGas,maxPriorityFeePerGas:t?.maxPriorityFeePerGas});return new g.cj({cause:e})}},43310:function(e,t,a){"use strict";a.d(t,{G:function(){return m},Z:function(){return formatBlock}});var p=a(21366),g=a(6073);function formatBlock(e){let t=e.transactions?.map(e=>"string"==typeof e?e:g.Tr(e));return{...e,baseFeePerGas:e.baseFeePerGas?BigInt(e.baseFeePerGas):null,difficulty:e.difficulty?BigInt(e.difficulty):void 0,gasLimit:e.gasLimit?BigInt(e.gasLimit):void 0,gasUsed:e.gasUsed?BigInt(e.gasUsed):void 0,hash:e.hash?e.hash:null,logsBloom:e.logsBloom?e.logsBloom:null,nonce:e.nonce?e.nonce:null,number:e.number?BigInt(e.number):null,size:e.size?BigInt(e.size):void 0,timestamp:e.timestamp?BigInt(e.timestamp):void 0,transactions:t,totalDifficulty:e.totalDifficulty?BigInt(e.totalDifficulty):null}}let m=(0,p.$)("block",formatBlock)},61163:function(e,t,a){"use strict";function extract(e,{format:t}){if(!t)return{};let a=Object.keys(t({}));return a.reduce((t,a)=>(e?.hasOwnProperty(a)&&(t[a]=e[a]),t),{})}a.d(t,{K:function(){return extract}})},21366:function(e,t,a){"use strict";function defineFormatter(e,t){return({exclude:a,format:p})=>({exclude:a,format:e=>{let g=t(e);if(a)for(let e of a)delete g[e];return{...g,...p(e)}},type:e})}a.d(t,{$:function(){return defineFormatter}})},53992:function(e,t,a){"use strict";function formatLog(e,{args:t,eventName:a}={}){return{...e,blockHash:e.blockHash?e.blockHash:null,blockNumber:e.blockNumber?BigInt(e.blockNumber):null,logIndex:e.logIndex?Number(e.logIndex):null,transactionHash:e.transactionHash?e.transactionHash:null,transactionIndex:e.transactionIndex?Number(e.transactionIndex):null,...a?{args:t,eventName:a}:{}}}a.d(t,{U:function(){return formatLog}})},6073:function(e,t,a){"use strict";a.d(t,{Tr:function(){return formatTransaction},c8:function(){return m},y_:function(){return v}});var p=a(95946),g=a(21366);let m={"0x0":"legacy","0x1":"eip2930","0x2":"eip1559"};function formatTransaction(e){let t={...e,blockHash:e.blockHash?e.blockHash:null,blockNumber:e.blockNumber?BigInt(e.blockNumber):null,chainId:e.chainId?(0,p.ly)(e.chainId):void 0,gas:e.gas?BigInt(e.gas):void 0,gasPrice:e.gasPrice?BigInt(e.gasPrice):void 0,maxFeePerGas:e.maxFeePerGas?BigInt(e.maxFeePerGas):void 0,maxPriorityFeePerGas:e.maxPriorityFeePerGas?BigInt(e.maxPriorityFeePerGas):void 0,nonce:e.nonce?(0,p.ly)(e.nonce):void 0,to:e.to?e.to:null,transactionIndex:e.transactionIndex?Number(e.transactionIndex):null,type:e.type?m[e.type]:void 0,typeHex:e.type?e.type:void 0,value:e.value?BigInt(e.value):void 0,v:e.v?BigInt(e.v):void 0};return"legacy"===t.type&&(delete t.accessList,delete t.maxFeePerGas,delete t.maxPriorityFeePerGas),"eip2930"===t.type&&(delete t.maxFeePerGas,delete t.maxPriorityFeePerGas),t}let v=(0,g.$)("transaction",formatTransaction)},30866:function(e,t,a){"use strict";a.d(t,{d:function(){return x},f:function(){return formatTransactionReceipt}});var p=a(95946),g=a(21366),m=a(53992),v=a(6073);let _={"0x0":"reverted","0x1":"success"};function formatTransactionReceipt(e){return{...e,blockNumber:e.blockNumber?BigInt(e.blockNumber):null,contractAddress:e.contractAddress?e.contractAddress:null,cumulativeGasUsed:e.cumulativeGasUsed?BigInt(e.cumulativeGasUsed):null,effectiveGasPrice:e.effectiveGasPrice?BigInt(e.effectiveGasPrice):null,gasUsed:e.gasUsed?BigInt(e.gasUsed):null,logs:e.logs?e.logs.map(e=>(0,m.U)(e)):null,to:e.to?e.to:null,transactionIndex:e.transactionIndex?(0,p.ly)(e.transactionIndex):null,status:e.status?_[e.status]:null,type:e.type?v.c8[e.type]||e.type:null}}let x=(0,g.$)("transactionReceipt",formatTransactionReceipt)},74688:function(e,t,a){"use strict";a.d(t,{iy:function(){return v},tG:function(){return formatTransactionRequest}});var p=a(92106),g=a(21366);let m={legacy:"0x0",eip2930:"0x1",eip1559:"0x2"};function formatTransactionRequest(e){return{...e,gas:void 0!==e.gas?(0,p.eC)(e.gas):void 0,gasPrice:void 0!==e.gasPrice?(0,p.eC)(e.gasPrice):void 0,maxFeePerGas:void 0!==e.maxFeePerGas?(0,p.eC)(e.maxFeePerGas):void 0,maxPriorityFeePerGas:void 0!==e.maxPriorityFeePerGas?(0,p.eC)(e.maxPriorityFeePerGas):void 0,nonce:void 0!==e.nonce?(0,p.eC)(e.nonce):void 0,type:void 0!==e.type?m[e.type]:void 0,value:void 0!==e.value?(0,p.eC)(e.value):void 0}}let v=(0,g.$)("transactionRequest",formatTransactionRequest)},74059:function(e,t,a){"use strict";a.d(t,{e:function(){return getEventSelector}});var p=a(11187),g=a(9e3);let getEventSignature=e=>(0,g.r)(e);var m=a(56254);let hash=e=>(0,m.w)((0,p.O0)(e)),getEventSelector=e=>hash(getEventSignature(e))},40552:function(e,t,a){"use strict";a.d(t,{o:function(){return getFunctionSelector}});var p=a(3972),g=a(11187),m=a(9e3),v=a(56254);let hash=e=>(0,v.w)((0,g.O0)(e)),getFunctionSelector=e=>(0,p.tP)(hash((0,m.r)(e)),0,4)},9e3:function(e,t,a){"use strict";a.d(t,{r:function(){return getFunctionSignature}});var p=a(80522);let g=/((function|event)\s)?(.*)(\((.*)\))/;function extractFunctionParts(e){let t=e.match(g),a=t?.[2]||void 0,p=t?.[3],m=t?.[5]||void 0;return{type:a,name:p,params:m}}let getFunctionSignature=e=>{if("string"==typeof e){let t=extractFunctionParts(e).name,a=function(e){let t=extractFunctionParts(e).params,a=t?.split(",").map(e=>e.trim().split(" "));return a?.map(e=>({type:e[0],name:"indexed"===e[1]?e[2]:e[1],..."indexed"===e[1]?{indexed:!0}:{}}))}(e)||[];return`${t}(${a.map(({type:e})=>e).join(",")})`}return(0,p.t)(e)}},56254:function(e,t,a){"use strict";function number(e){if(!Number.isSafeInteger(e)||e<0)throw Error(`Wrong positive integer: ${e}`)}function bytes(e,...t){if(!(e instanceof Uint8Array))throw Error("Expected Uint8Array");if(t.length>0&&!t.includes(e.length))throw Error(`Expected Uint8Array of length ${t}, not of length=${e.length}`)}function exists(e,t=!0){if(e.destroyed)throw Error("Hash instance has been destroyed");if(t&&e.finished)throw Error("Hash#digest() has already been called")}a.d(t,{w:function(){return keccak256}});let p=BigInt(4294967296-1),g=BigInt(32),rotlSH=(e,t,a)=>e<<a|t>>>32-a,rotlSL=(e,t,a)=>t<<a|e>>>32-a,rotlBH=(e,t,a)=>t<<a-32|e>>>64-a,rotlBL=(e,t,a)=>e<<a-32|t>>>64-a,u8a=e=>e instanceof Uint8Array,u32=e=>new Uint32Array(e.buffer,e.byteOffset,Math.floor(e.byteLength/4)),m=68===new Uint8Array(new Uint32Array([287454020]).buffer)[0];if(!m)throw Error("Non little-endian hardware is not supported");function toBytes(e){if("string"==typeof e&&(e=function(e){if("string"!=typeof e)throw Error(`utf8ToBytes expected string, got ${typeof e}`);return new Uint8Array(new TextEncoder().encode(e))}(e)),!u8a(e))throw Error(`expected Uint8Array, got ${typeof e}`);return e}let Hash=class Hash{clone(){return this._cloneInto()}};let[v,_,x]=[[],[],[]],T=BigInt(0),F=BigInt(1),z=BigInt(2),W=BigInt(7),K=BigInt(256),Z=BigInt(113);for(let e=0,t=F,a=1,p=0;e<24;e++){[a,p]=[p,(2*a+3*p)%5],v.push(2*(5*p+a)),_.push((e+1)*(e+2)/2%64);let g=T;for(let e=0;e<7;e++)(t=(t<<F^(t>>W)*Z)%K)&z&&(g^=F<<(F<<BigInt(e))-F);x.push(g)}let[Q,X]=function(e,t=!1){let a=new Uint32Array(e.length),m=new Uint32Array(e.length);for(let v=0;v<e.length;v++){let{h:_,l:x}=function(e,t=!1){return t?{h:Number(e&p),l:Number(e>>g&p)}:{h:0|Number(e>>g&p),l:0|Number(e&p)}}(e[v],t);[a[v],m[v]]=[_,x]}return[a,m]}(x,!0),rotlH=(e,t,a)=>a>32?rotlBH(e,t,a):rotlSH(e,t,a),rotlL=(e,t,a)=>a>32?rotlBL(e,t,a):rotlSL(e,t,a);let Keccak=class Keccak extends Hash{constructor(e,t,a,p=!1,g=24){if(super(),this.blockLen=e,this.suffix=t,this.outputLen=a,this.enableXOF=p,this.rounds=g,this.pos=0,this.posOut=0,this.finished=!1,this.destroyed=!1,number(a),0>=this.blockLen||this.blockLen>=200)throw Error("Sha3 supports only keccak-f1600 function");this.state=new Uint8Array(200),this.state32=u32(this.state)}keccak(){!function(e,t=24){let a=new Uint32Array(10);for(let p=24-t;p<24;p++){for(let t=0;t<10;t++)a[t]=e[t]^e[t+10]^e[t+20]^e[t+30]^e[t+40];for(let t=0;t<10;t+=2){let p=(t+8)%10,g=(t+2)%10,m=a[g],v=a[g+1],_=rotlH(m,v,1)^a[p],x=rotlL(m,v,1)^a[p+1];for(let a=0;a<50;a+=10)e[t+a]^=_,e[t+a+1]^=x}let t=e[2],g=e[3];for(let a=0;a<24;a++){let p=_[a],m=rotlH(t,g,p),x=rotlL(t,g,p),T=v[a];t=e[T],g=e[T+1],e[T]=m,e[T+1]=x}for(let t=0;t<50;t+=10){for(let p=0;p<10;p++)a[p]=e[t+p];for(let p=0;p<10;p++)e[t+p]^=~a[(p+2)%10]&a[(p+4)%10]}e[0]^=Q[p],e[1]^=X[p]}a.fill(0)}(this.state32,this.rounds),this.posOut=0,this.pos=0}update(e){exists(this);let{blockLen:t,state:a}=this;e=toBytes(e);let p=e.length;for(let g=0;g<p;){let m=Math.min(t-this.pos,p-g);for(let t=0;t<m;t++)a[this.pos++]^=e[g++];this.pos===t&&this.keccak()}return this}finish(){if(this.finished)return;this.finished=!0;let{state:e,suffix:t,pos:a,blockLen:p}=this;e[a]^=t,(128&t)!=0&&a===p-1&&this.keccak(),e[p-1]^=128,this.keccak()}writeInto(e){exists(this,!1),bytes(e),this.finish();let t=this.state,{blockLen:a}=this;for(let p=0,g=e.length;p<g;){this.posOut>=a&&this.keccak();let m=Math.min(a-this.posOut,g-p);e.set(t.subarray(this.posOut,this.posOut+m),p),this.posOut+=m,p+=m}return e}xofInto(e){if(!this.enableXOF)throw Error("XOF is not possible for this instance");return this.writeInto(e)}xof(e){return number(e),this.xofInto(new Uint8Array(e))}digestInto(e){if(!function(e,t){bytes(e);let a=t.outputLen;if(e.length<a)throw Error(`digestInto() expects output buffer of length at least ${a}`)}(e,this),this.finished)throw Error("digest() was already called");return this.writeInto(e),this.destroy(),e}digest(){return this.digestInto(new Uint8Array(this.outputLen))}destroy(){this.destroyed=!0,this.state.fill(0)}_cloneInto(e){let{blockLen:t,suffix:a,outputLen:p,rounds:g,enableXOF:m}=this;return e||(e=new Keccak(t,a,p,m,g)),e.state32.set(this.state32),e.pos=this.pos,e.posOut=this.posOut,e.finished=this.finished,e.rounds=g,e.suffix=a,e.outputLen=p,e.enableXOF=m,e.destroyed=this.destroyed,e}};let Y=function(e){let hashC=t=>e().update(toBytes(t)).digest(),t=e();return hashC.outputLen=t.outputLen,hashC.blockLen=t.blockLen,hashC.create=()=>e(),hashC}(()=>new Keccak(136,1,32));var J=a(15102),ei=a(11187),en=a(92106);function keccak256(e,t){let a=Y((0,J.v)(e,{strict:!1})?(0,ei.O0)(e):e);return"bytes"===(t||"hex")?a:(0,en.NC)(a)}},32357:function(e,t,a){"use strict";a.d(t,{S:function(){return createBatchScheduler}});let p=new Map;function createBatchScheduler({fn:e,id:t,shouldSplitBatch:a,wait:g=0}){let exec=async()=>{let t=getScheduler();flush();let a=t.map(({args:e})=>e);0!==a.length&&e(a).then(e=>{t.forEach(({pendingPromise:t},a)=>t.resolve?.([e[a],e]))}).catch(e=>{t.forEach(({pendingPromise:t})=>t.reject?.(e))})},flush=()=>p.delete(t),getBatchedArgs=()=>getScheduler().map(({args:e})=>e),getScheduler=()=>p.get(t)||[],setScheduler=e=>p.set(t,[...getScheduler(),e]);return{flush,async schedule(e){let t={},p=new Promise((e,a)=>{t.resolve=e,t.reject=a}),m=a?.([...getBatchedArgs(),e]);m&&exec();let v=getScheduler().length>0;return v?setScheduler({args:e,pendingPromise:t}):(setScheduler({args:e,pendingPromise:t}),setTimeout(exec,g)),p}}}},7760:function(e,t,a){"use strict";a.d(t,{J:function(){return withRetry}});var p=a(62914);function withRetry(e,{delay:t=100,retryCount:a=2,shouldRetry:g=()=>!0}={}){return new Promise((m,v)=>{let attemptRetry=async({count:_=0}={})=>{let retry=async({error:e})=>{let a="function"==typeof t?t({count:_,error:e}):t;a&&await (0,p.D)(a),attemptRetry({count:_+1})};try{let t=await e();m(t)}catch(e){if(_<a&&await g({count:_,error:e}))return retry({error:e});v(e)}};attemptRetry()})}},96070:function(e,t,a){"use strict";a.d(t,{P:function(){return stringify}});let stringify=(e,t,a)=>JSON.stringify(e,(e,a)=>{let p="bigint"==typeof a?a.toString():a;return"function"==typeof t?t(e,p):p},a)},47531:function(e,t,a){"use strict";a.d(t,{F:function(){return assertRequest}});var p=a(14503),g=a(26087),m=a(26445),v=a(33639),_=a(49321);function assertRequest(e){let{account:t,gasPrice:a,maxFeePerGas:x,maxPriorityFeePerGas:T,to:F}=e,z=t?(0,p.T)(t):void 0;if(z&&!(0,_.U)(z.address))throw new g.b({address:z.address});if(F&&!(0,_.U)(F))throw new g.b({address:F});if(void 0!==a&&(void 0!==x||void 0!==T))throw new v.xY;if(x&&x>2n**256n-1n)throw new m.Hh({maxFeePerGas:x});if(T&&x&&T>x)throw new m.cs({maxFeePerGas:x,maxPriorityFeePerGas:T})}},82994:function(e,t,a){"use strict";a.d(t,{l:function(){return getTransactionType}});var p=a(33639);function getTransactionType(e){if(e.type)return e.type;if(void 0!==e.maxFeePerGas||void 0!==e.maxPriorityFeePerGas)return"eip1559";if(void 0!==e.gasPrice)return void 0!==e.accessList?"eip2930":"legacy";throw new p.j3({transaction:e})}},71352:function(e,t,a){"use strict";a.d(t,{cj:function(){return getTypesForEIP712Domain},iC:function(){return validateTypedData}});var p=a(57412),g=a(26087),m=a(49321),v=a(39135),_=a(92106);let x=/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,T=/^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;function validateTypedData({domain:e,message:t,primaryType:a,types:F}){let validateData=(e,t)=>{for(let a of e){let{name:e,type:z}=a,W=t[e],K=z.match(T);if(K&&("number"==typeof W||"bigint"==typeof W)){let[e,t,a]=K;(0,_.eC)(W,{signed:"int"===t,size:parseInt(a)/8})}if("address"===z&&"string"==typeof W&&!(0,m.U)(W))throw new g.b({address:W});let Z=z.match(x);if(Z){let[e,t]=Z;if(t&&(0,v.d)(W)!==parseInt(t))throw new p.KY({expectedSize:parseInt(t),givenSize:(0,v.d)(W)})}let Q=F[z];Q&&validateData(Q,W)}};if(F.EIP712Domain&&e&&validateData(F.EIP712Domain,e),"EIP712Domain"!==a){let e=F[a];validateData(e,t)}}function getTypesForEIP712Domain({domain:e}){return["string"==typeof e?.name&&{name:"name",type:"string"},e?.version&&{name:"version",type:"string"},"number"==typeof e?.chainId&&{name:"chainId",type:"uint256"},e?.verifyingContract&&{name:"verifyingContract",type:"address"},e?.salt&&{name:"salt",type:"bytes32"}].filter(Boolean)}},39625:function(e,t,a){"use strict";a.d(t,{d:function(){return formatEther}});var p=a(84192),g=a(15229);function formatEther(e,t="wei"){return(0,g.b)(e,p.ez[t])}},67795:function(e,t,a){"use strict";a.d(t,{o:function(){return formatGwei}});var p=a(84192),g=a(15229);function formatGwei(e,t="wei"){return(0,g.b)(e,p.Zn[t])}},15229:function(e,t,a){"use strict";function formatUnits(e,t){let a=e.toString(),p=a.startsWith("-");p&&(a=a.slice(1));let[g,m]=[(a=a.padStart(t,"0")).slice(0,a.length-t),a.slice(a.length-t)];return m=m.replace(/(0+)$/,""),`${p?"-":""}${g||"0"}${m?`.${m}`:""}`}a.d(t,{b:function(){return formatUnits}})},62914:function(e,t,a){"use strict";async function wait(e){return new Promise(t=>setTimeout(t,e))}a.d(t,{D:function(){return wait}})},66634:function(e,t,a){"use strict";function noop(){}a.d(t,{eM:function(){return WagmiConfig},_g:function(){return createConfig}});let p="undefined"==typeof window||"Deno"in window;function utils_noop(){}function parseQueryArgs(e,t,a){return isQueryKey(e)?"function"==typeof t?{...a,queryKey:e,queryFn:t}:{...t,queryKey:e}:e}function parseFilterArgs(e,t,a){return isQueryKey(e)?[{...t,queryKey:e},a]:[e||{},t]}function matchQuery(e,t){let{type:a="all",exact:p,fetchStatus:g,predicate:m,queryKey:v,stale:_}=e;if(isQueryKey(v)){if(p){if(t.queryHash!==hashQueryKeyByOptions(v,t.options))return!1}else{if(!partialDeepEqual(t.queryKey,v))return!1}}if("all"!==a){let e=t.isActive();if("active"===a&&!e||"inactive"===a&&e)return!1}return("boolean"!=typeof _||t.isStale()===_)&&(void 0===g||g===t.state.fetchStatus)&&(!m||!!m(t))}function matchMutation(e,t){let{exact:a,fetching:p,predicate:g,mutationKey:m}=e;if(isQueryKey(m)){if(!t.options.mutationKey)return!1;if(a){if(hashQueryKey(t.options.mutationKey)!==hashQueryKey(m))return!1}else{if(!partialDeepEqual(t.options.mutationKey,m))return!1}}return("boolean"!=typeof p||"loading"===t.state.status===p)&&(!g||!!g(t))}function hashQueryKeyByOptions(e,t){let a=(null==t?void 0:t.queryKeyHashFn)||hashQueryKey;return a(e)}function hashQueryKey(e){return JSON.stringify(e,(e,t)=>isPlainObject(t)?Object.keys(t).sort().reduce((e,a)=>(e[a]=t[a],e),{}):t)}function partialDeepEqual(e,t){return e===t||typeof e==typeof t&&!!e&&!!t&&"object"==typeof e&&"object"==typeof t&&!Object.keys(t).some(a=>!partialDeepEqual(e[a],t[a]))}function isPlainArray(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function isPlainObject(e){if(!hasObjectPrototype(e))return!1;let t=e.constructor;if(void 0===t)return!0;let a=t.prototype;return!!(hasObjectPrototype(a)&&a.hasOwnProperty("isPrototypeOf"))}function hasObjectPrototype(e){return"[object Object]"===Object.prototype.toString.call(e)}function isQueryKey(e){return Array.isArray(e)}function sleep(e){return new Promise(t=>{setTimeout(t,e)})}function scheduleMicrotask(e){sleep(0).then(e)}let g=console,m=function(){let e=[],t=0,notifyFn=e=>{e()},batchNotifyFn=e=>{e()},schedule=a=>{t?e.push(a):scheduleMicrotask(()=>{notifyFn(a)})},flush=()=>{let t=e;e=[],t.length&&scheduleMicrotask(()=>{batchNotifyFn(()=>{t.forEach(e=>{notifyFn(e)})})})};return{batch:e=>{let a;t++;try{a=e()}finally{--t||flush()}return a},batchCalls:e=>(...t)=>{schedule(()=>{e(...t)})},schedule,setNotifyFunction:e=>{notifyFn=e},setBatchNotifyFunction:e=>{batchNotifyFn=e}}}();let Subscribable=class Subscribable{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){let t={listener:e};return this.listeners.add(t),this.onSubscribe(),()=>{this.listeners.delete(t),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}};let v=new class extends Subscribable{constructor(){super(),this.setup=e=>{if(!p&&window.addEventListener){let listener=()=>e();return window.addEventListener("visibilitychange",listener,!1),window.addEventListener("focus",listener,!1),()=>{window.removeEventListener("visibilitychange",listener),window.removeEventListener("focus",listener)}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){if(!this.hasListeners()){var e;null==(e=this.cleanup)||e.call(this),this.cleanup=void 0}}setEventListener(e){var t;this.setup=e,null==(t=this.cleanup)||t.call(this),this.cleanup=e(e=>{"boolean"==typeof e?this.setFocused(e):this.onFocus()})}setFocused(e){let t=this.focused!==e;t&&(this.focused=e,this.onFocus())}onFocus(){this.listeners.forEach(({listener:e})=>{e()})}isFocused(){return"boolean"==typeof this.focused?this.focused:"undefined"==typeof document||[void 0,"visible","prerender"].includes(document.visibilityState)}},_=["online","offline"],x=new class extends Subscribable{constructor(){super(),this.setup=e=>{if(!p&&window.addEventListener){let listener=()=>e();return _.forEach(e=>{window.addEventListener(e,listener,!1)}),()=>{_.forEach(e=>{window.removeEventListener(e,listener)})}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){if(!this.hasListeners()){var e;null==(e=this.cleanup)||e.call(this),this.cleanup=void 0}}setEventListener(e){var t;this.setup=e,null==(t=this.cleanup)||t.call(this),this.cleanup=e(e=>{"boolean"==typeof e?this.setOnline(e):this.onOnline()})}setOnline(e){let t=this.online!==e;t&&(this.online=e,this.onOnline())}onOnline(){this.listeners.forEach(({listener:e})=>{e()})}isOnline(){return"boolean"==typeof this.online?this.online:"undefined"==typeof navigator||void 0===navigator.onLine||navigator.onLine}};function defaultRetryDelay(e){return Math.min(1e3*2**e,3e4)}function canFetch(e){return(null!=e?e:"online")!=="online"||x.isOnline()}let CancelledError=class CancelledError{constructor(e){this.revert=null==e?void 0:e.revert,this.silent=null==e?void 0:e.silent}};function isCancelledError(e){return e instanceof CancelledError}function createRetryer(e){let t,a,p,g=!1,m=0,_=!1,T=new Promise((e,t)=>{a=e,p=t}),shouldPause=()=>!v.isFocused()||"always"!==e.networkMode&&!x.isOnline(),resolve=p=>{_||(_=!0,null==e.onSuccess||e.onSuccess(p),null==t||t(),a(p))},reject=a=>{_||(_=!0,null==e.onError||e.onError(a),null==t||t(),p(a))},pause=()=>new Promise(a=>{t=e=>{let t=_||!shouldPause();return t&&a(e),t},null==e.onPause||e.onPause()}).then(()=>{t=void 0,_||null==e.onContinue||e.onContinue()}),run=()=>{let t;if(!_){try{t=e.fn()}catch(e){t=Promise.reject(e)}Promise.resolve(t).then(resolve).catch(t=>{var a,p;if(_)return;let v=null!=(a=e.retry)?a:3,x=null!=(p=e.retryDelay)?p:defaultRetryDelay,T="function"==typeof x?x(m,t):x,F=!0===v||"number"==typeof v&&m<v||"function"==typeof v&&v(m,t);if(g||!F){reject(t);return}m++,null==e.onFail||e.onFail(m,t),sleep(T).then(()=>{if(shouldPause())return pause()}).then(()=>{g?reject(t):run()})})}};return canFetch(e.networkMode)?run():pause().then(run),{promise:T,cancel:t=>{_||(reject(new CancelledError(t)),null==e.abort||e.abort())},continue:()=>{let e=null==t?void 0:t();return e?T:Promise.resolve()},cancelRetry:()=>{g=!0},continueRetry:()=>{g=!1}}}let Removable=class Removable{destroy(){this.clearGcTimeout()}scheduleGc(){var e;this.clearGcTimeout(),"number"==typeof(e=this.cacheTime)&&e>=0&&e!==1/0&&(this.gcTimeout=setTimeout(()=>{this.optionalRemove()},this.cacheTime))}updateCacheTime(e){this.cacheTime=Math.max(this.cacheTime||0,null!=e?e:p?1/0:3e5)}clearGcTimeout(){this.gcTimeout&&(clearTimeout(this.gcTimeout),this.gcTimeout=void 0)}};let Query=class Query extends Removable{constructor(e){super(),this.abortSignalConsumed=!1,this.defaultOptions=e.defaultOptions,this.setOptions(e.options),this.observers=[],this.cache=e.cache,this.logger=e.logger||g,this.queryKey=e.queryKey,this.queryHash=e.queryHash,this.initialState=e.state||function(e){let t="function"==typeof e.initialData?e.initialData():e.initialData,a=void 0!==t,p=a?"function"==typeof e.initialDataUpdatedAt?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:a?null!=p?p:Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:a?"success":"loading",fetchStatus:"idle"}}(this.options),this.state=this.initialState,this.scheduleGc()}get meta(){return this.options.meta}setOptions(e){this.options={...this.defaultOptions,...e},this.updateCacheTime(this.options.cacheTime)}optionalRemove(){this.observers.length||"idle"!==this.state.fetchStatus||this.cache.remove(this)}setData(e,t){var a,p;let g=(a=this.state.data,null!=(p=this.options).isDataEqual&&p.isDataEqual(a,e)?a:"function"==typeof p.structuralSharing?p.structuralSharing(a,e):!1!==p.structuralSharing?function utils_replaceEqualDeep(e,t){if(e===t)return e;let a=isPlainArray(e)&&isPlainArray(t);if(a||isPlainObject(e)&&isPlainObject(t)){let p=a?e.length:Object.keys(e).length,g=a?t:Object.keys(t),m=g.length,v=a?[]:{},_=0;for(let p=0;p<m;p++){let m=a?p:g[p];v[m]=utils_replaceEqualDeep(e[m],t[m]),v[m]===e[m]&&_++}return p===m&&_===p?e:v}return t}(a,e):e);return this.dispatch({data:g,type:"success",dataUpdatedAt:null==t?void 0:t.updatedAt,manual:null==t?void 0:t.manual}),g}setState(e,t){this.dispatch({type:"setState",state:e,setStateOptions:t})}cancel(e){var t;let a=this.promise;return null==(t=this.retryer)||t.cancel(e),a?a.then(utils_noop).catch(utils_noop):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(this.initialState)}isActive(){return this.observers.some(e=>!1!==e.options.enabled)}isDisabled(){return this.getObserversCount()>0&&!this.isActive()}isStale(){return this.state.isInvalidated||!this.state.dataUpdatedAt||this.observers.some(e=>e.getCurrentResult().isStale)}isStaleByTime(e=0){return this.state.isInvalidated||!this.state.dataUpdatedAt||!Math.max(this.state.dataUpdatedAt+(e||0)-Date.now(),0)}onFocus(){var e;let t=this.observers.find(e=>e.shouldFetchOnWindowFocus());t&&t.refetch({cancelRefetch:!1}),null==(e=this.retryer)||e.continue()}onOnline(){var e;let t=this.observers.find(e=>e.shouldFetchOnReconnect());t&&t.refetch({cancelRefetch:!1}),null==(e=this.retryer)||e.continue()}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),this.cache.notify({type:"observerAdded",query:this,observer:e}))}removeObserver(e){this.observers.includes(e)&&(this.observers=this.observers.filter(t=>t!==e),this.observers.length||(this.retryer&&(this.abortSignalConsumed?this.retryer.cancel({revert:!0}):this.retryer.cancelRetry()),this.scheduleGc()),this.cache.notify({type:"observerRemoved",query:this,observer:e}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||this.dispatch({type:"invalidate"})}fetch(e,t){var a,p,g,m;if("idle"!==this.state.fetchStatus){if(this.state.dataUpdatedAt&&null!=t&&t.cancelRefetch)this.cancel({silent:!0});else if(this.promise)return null==(g=this.retryer)||g.continueRetry(),this.promise}if(e&&this.setOptions(e),!this.options.queryFn){let e=this.observers.find(e=>e.options.queryFn);e&&this.setOptions(e.options)}let v=function(){if("function"==typeof AbortController)return new AbortController}(),_={queryKey:this.queryKey,pageParam:void 0,meta:this.meta},addSignalProperty=e=>{Object.defineProperty(e,"signal",{enumerable:!0,get:()=>{if(v)return this.abortSignalConsumed=!0,v.signal}})};addSignalProperty(_);let x={fetchOptions:t,options:this.options,queryKey:this.queryKey,state:this.state,fetchFn:()=>this.options.queryFn?(this.abortSignalConsumed=!1,this.options.queryFn(_)):Promise.reject("Missing queryFn for queryKey '"+this.options.queryHash+"'")};addSignalProperty(x),null==(a=this.options.behavior)||a.onFetch(x),this.revertState=this.state,("idle"===this.state.fetchStatus||this.state.fetchMeta!==(null==(p=x.fetchOptions)?void 0:p.meta))&&this.dispatch({type:"fetch",meta:null==(m=x.fetchOptions)?void 0:m.meta});let onError=e=>{if(isCancelledError(e)&&e.silent||this.dispatch({type:"error",error:e}),!isCancelledError(e)){var t,a,p,g;null==(t=(a=this.cache.config).onError)||t.call(a,e,this),null==(p=(g=this.cache.config).onSettled)||p.call(g,this.state.data,e,this)}this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1};return this.retryer=createRetryer({fn:x.fetchFn,abort:null==v?void 0:v.abort.bind(v),onSuccess:e=>{var t,a,p,g;if(void 0===e){onError(Error(this.queryHash+" data is undefined"));return}this.setData(e),null==(t=(a=this.cache.config).onSuccess)||t.call(a,e,this),null==(p=(g=this.cache.config).onSettled)||p.call(g,e,this.state.error,this),this.isFetchingOptimistic||this.scheduleGc(),this.isFetchingOptimistic=!1},onError,onFail:(e,t)=>{this.dispatch({type:"failed",failureCount:e,error:t})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:x.options.retry,retryDelay:x.options.retryDelay,networkMode:x.options.networkMode}),this.promise=this.retryer.promise,this.promise}dispatch(e){this.state=(t=>{var a,p;switch(e.type){case"failed":return{...t,fetchFailureCount:e.failureCount,fetchFailureReason:e.error};case"pause":return{...t,fetchStatus:"paused"};case"continue":return{...t,fetchStatus:"fetching"};case"fetch":return{...t,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null!=(a=e.meta)?a:null,fetchStatus:canFetch(this.options.networkMode)?"fetching":"paused",...!t.dataUpdatedAt&&{error:null,status:"loading"}};case"success":return{...t,data:e.data,dataUpdateCount:t.dataUpdateCount+1,dataUpdatedAt:null!=(p=e.dataUpdatedAt)?p:Date.now(),error:null,isInvalidated:!1,status:"success",...!e.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":let g=e.error;if(isCancelledError(g)&&g.revert&&this.revertState)return{...this.revertState,fetchStatus:"idle"};return{...t,error:g,errorUpdateCount:t.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:t.fetchFailureCount+1,fetchFailureReason:g,fetchStatus:"idle",status:"error"};case"invalidate":return{...t,isInvalidated:!0};case"setState":return{...t,...e.state}}})(this.state),m.batch(()=>{this.observers.forEach(t=>{t.onQueryUpdate(e)}),this.cache.notify({query:this,type:"updated",action:e})})}};let QueryCache=class QueryCache extends Subscribable{constructor(e){super(),this.config=e||{},this.queries=[],this.queriesMap={}}build(e,t,a){var p;let g=t.queryKey,m=null!=(p=t.queryHash)?p:hashQueryKeyByOptions(g,t),v=this.get(m);return v||(v=new Query({cache:this,logger:e.getLogger(),queryKey:g,queryHash:m,options:e.defaultQueryOptions(t),state:a,defaultOptions:e.getQueryDefaults(g)}),this.add(v)),v}add(e){this.queriesMap[e.queryHash]||(this.queriesMap[e.queryHash]=e,this.queries.push(e),this.notify({type:"added",query:e}))}remove(e){let t=this.queriesMap[e.queryHash];t&&(e.destroy(),this.queries=this.queries.filter(t=>t!==e),t===e&&delete this.queriesMap[e.queryHash],this.notify({type:"removed",query:e}))}clear(){m.batch(()=>{this.queries.forEach(e=>{this.remove(e)})})}get(e){return this.queriesMap[e]}getAll(){return this.queries}find(e,t){let[a]=parseFilterArgs(e,t);return void 0===a.exact&&(a.exact=!0),this.queries.find(e=>matchQuery(a,e))}findAll(e,t){let[a]=parseFilterArgs(e,t);return Object.keys(a).length>0?this.queries.filter(e=>matchQuery(a,e)):this.queries}notify(e){m.batch(()=>{this.listeners.forEach(({listener:t})=>{t(e)})})}onFocus(){m.batch(()=>{this.queries.forEach(e=>{e.onFocus()})})}onOnline(){m.batch(()=>{this.queries.forEach(e=>{e.onOnline()})})}};let Mutation=class Mutation extends Removable{constructor(e){super(),this.defaultOptions=e.defaultOptions,this.mutationId=e.mutationId,this.mutationCache=e.mutationCache,this.logger=e.logger||g,this.observers=[],this.state=e.state||{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0},this.setOptions(e.options),this.scheduleGc()}setOptions(e){this.options={...this.defaultOptions,...e},this.updateCacheTime(this.options.cacheTime)}get meta(){return this.options.meta}setState(e){this.dispatch({type:"setState",state:e})}addObserver(e){this.observers.includes(e)||(this.observers.push(e),this.clearGcTimeout(),this.mutationCache.notify({type:"observerAdded",mutation:this,observer:e}))}removeObserver(e){this.observers=this.observers.filter(t=>t!==e),this.scheduleGc(),this.mutationCache.notify({type:"observerRemoved",mutation:this,observer:e})}optionalRemove(){this.observers.length||("loading"===this.state.status?this.scheduleGc():this.mutationCache.remove(this))}continue(){var e,t;return null!=(e=null==(t=this.retryer)?void 0:t.continue())?e:this.execute()}async execute(){var e,t,a,p,g,m,v,_,x,T,F,z,W,K,Z,Q,X,Y,J,ei;let en="loading"===this.state.status;try{if(!en){this.dispatch({type:"loading",variables:this.options.variables}),await (null==(x=(T=this.mutationCache.config).onMutate)?void 0:x.call(T,this.state.variables,this));let e=await (null==(F=(z=this.options).onMutate)?void 0:F.call(z,this.state.variables));e!==this.state.context&&this.dispatch({type:"loading",context:e,variables:this.state.variables})}let W=await (()=>{var e;return this.retryer=createRetryer({fn:()=>this.options.mutationFn?this.options.mutationFn(this.state.variables):Promise.reject("No mutationFn found"),onFail:(e,t)=>{this.dispatch({type:"failed",failureCount:e,error:t})},onPause:()=>{this.dispatch({type:"pause"})},onContinue:()=>{this.dispatch({type:"continue"})},retry:null!=(e=this.options.retry)?e:0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode}),this.retryer.promise})();return await (null==(e=(t=this.mutationCache.config).onSuccess)?void 0:e.call(t,W,this.state.variables,this.state.context,this)),await (null==(a=(p=this.options).onSuccess)?void 0:a.call(p,W,this.state.variables,this.state.context)),await (null==(g=(m=this.mutationCache.config).onSettled)?void 0:g.call(m,W,null,this.state.variables,this.state.context,this)),await (null==(v=(_=this.options).onSettled)?void 0:v.call(_,W,null,this.state.variables,this.state.context)),this.dispatch({type:"success",data:W}),W}catch(e){try{throw await (null==(W=(K=this.mutationCache.config).onError)?void 0:W.call(K,e,this.state.variables,this.state.context,this)),await (null==(Z=(Q=this.options).onError)?void 0:Z.call(Q,e,this.state.variables,this.state.context)),await (null==(X=(Y=this.mutationCache.config).onSettled)?void 0:X.call(Y,void 0,e,this.state.variables,this.state.context,this)),await (null==(J=(ei=this.options).onSettled)?void 0:J.call(ei,void 0,e,this.state.variables,this.state.context)),e}finally{this.dispatch({type:"error",error:e})}}}dispatch(e){this.state=(t=>{switch(e.type){case"failed":return{...t,failureCount:e.failureCount,failureReason:e.error};case"pause":return{...t,isPaused:!0};case"continue":return{...t,isPaused:!1};case"loading":return{...t,context:e.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:!canFetch(this.options.networkMode),status:"loading",variables:e.variables};case"success":return{...t,data:e.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...t,data:void 0,error:e.error,failureCount:t.failureCount+1,failureReason:e.error,isPaused:!1,status:"error"};case"setState":return{...t,...e.state}}})(this.state),m.batch(()=>{this.observers.forEach(t=>{t.onMutationUpdate(e)}),this.mutationCache.notify({mutation:this,type:"updated",action:e})})}};let MutationCache=class MutationCache extends Subscribable{constructor(e){super(),this.config=e||{},this.mutations=[],this.mutationId=0}build(e,t,a){let p=new Mutation({mutationCache:this,logger:e.getLogger(),mutationId:++this.mutationId,options:e.defaultMutationOptions(t),state:a,defaultOptions:t.mutationKey?e.getMutationDefaults(t.mutationKey):void 0});return this.add(p),p}add(e){this.mutations.push(e),this.notify({type:"added",mutation:e})}remove(e){this.mutations=this.mutations.filter(t=>t!==e),this.notify({type:"removed",mutation:e})}clear(){m.batch(()=>{this.mutations.forEach(e=>{this.remove(e)})})}getAll(){return this.mutations}find(e){return void 0===e.exact&&(e.exact=!0),this.mutations.find(t=>matchMutation(e,t))}findAll(e){return this.mutations.filter(t=>matchMutation(e,t))}notify(e){m.batch(()=>{this.listeners.forEach(({listener:t})=>{t(e)})})}resumePausedMutations(){var e;return this.resuming=(null!=(e=this.resuming)?e:Promise.resolve()).then(()=>{let e=this.mutations.filter(e=>e.state.isPaused);return m.batch(()=>e.reduce((e,t)=>e.then(()=>t.continue().catch(utils_noop)),Promise.resolve()))}).then(()=>{this.resuming=void 0}),this.resuming}};function getNextPageParam(e,t){return null==e.getNextPageParam?void 0:e.getNextPageParam(t[t.length-1],t)}let QueryClient=class QueryClient{constructor(e={}){this.queryCache=e.queryCache||new QueryCache,this.mutationCache=e.mutationCache||new MutationCache,this.logger=e.logger||g,this.defaultOptions=e.defaultOptions||{},this.queryDefaults=[],this.mutationDefaults=[],this.mountCount=0}mount(){this.mountCount++,1===this.mountCount&&(this.unsubscribeFocus=v.subscribe(()=>{v.isFocused()&&(this.resumePausedMutations(),this.queryCache.onFocus())}),this.unsubscribeOnline=x.subscribe(()=>{x.isOnline()&&(this.resumePausedMutations(),this.queryCache.onOnline())}))}unmount(){var e,t;this.mountCount--,0===this.mountCount&&(null==(e=this.unsubscribeFocus)||e.call(this),this.unsubscribeFocus=void 0,null==(t=this.unsubscribeOnline)||t.call(this),this.unsubscribeOnline=void 0)}isFetching(e,t){let[a]=parseFilterArgs(e,t);return a.fetchStatus="fetching",this.queryCache.findAll(a).length}isMutating(e){return this.mutationCache.findAll({...e,fetching:!0}).length}getQueryData(e,t){var a;return null==(a=this.queryCache.find(e,t))?void 0:a.state.data}ensureQueryData(e,t,a){let p=parseQueryArgs(e,t,a),g=this.getQueryData(p.queryKey);return g?Promise.resolve(g):this.fetchQuery(p)}getQueriesData(e){return this.getQueryCache().findAll(e).map(({queryKey:e,state:t})=>{let a=t.data;return[e,a]})}setQueryData(e,t,a){let p=this.queryCache.find(e),g=null==p?void 0:p.state.data,m="function"==typeof t?t(g):t;if(void 0===m)return;let v=parseQueryArgs(e),_=this.defaultQueryOptions(v);return this.queryCache.build(this,_).setData(m,{...a,manual:!0})}setQueriesData(e,t,a){return m.batch(()=>this.getQueryCache().findAll(e).map(({queryKey:e})=>[e,this.setQueryData(e,t,a)]))}getQueryState(e,t){var a;return null==(a=this.queryCache.find(e,t))?void 0:a.state}removeQueries(e,t){let[a]=parseFilterArgs(e,t),p=this.queryCache;m.batch(()=>{p.findAll(a).forEach(e=>{p.remove(e)})})}resetQueries(e,t,a){let[p,g]=parseFilterArgs(e,t,a),v=this.queryCache,_={type:"active",...p};return m.batch(()=>(v.findAll(p).forEach(e=>{e.reset()}),this.refetchQueries(_,g)))}cancelQueries(e,t,a){let[p,g={}]=parseFilterArgs(e,t,a);void 0===g.revert&&(g.revert=!0);let v=m.batch(()=>this.queryCache.findAll(p).map(e=>e.cancel(g)));return Promise.all(v).then(utils_noop).catch(utils_noop)}invalidateQueries(e,t,a){let[p,g]=parseFilterArgs(e,t,a);return m.batch(()=>{var e,t;if(this.queryCache.findAll(p).forEach(e=>{e.invalidate()}),"none"===p.refetchType)return Promise.resolve();let a={...p,type:null!=(e=null!=(t=p.refetchType)?t:p.type)?e:"active"};return this.refetchQueries(a,g)})}refetchQueries(e,t,a){let[p,g]=parseFilterArgs(e,t,a),v=m.batch(()=>this.queryCache.findAll(p).filter(e=>!e.isDisabled()).map(e=>{var t;return e.fetch(void 0,{...g,cancelRefetch:null==(t=null==g?void 0:g.cancelRefetch)||t,meta:{refetchPage:p.refetchPage}})})),_=Promise.all(v).then(utils_noop);return null!=g&&g.throwOnError||(_=_.catch(utils_noop)),_}fetchQuery(e,t,a){let p=parseQueryArgs(e,t,a),g=this.defaultQueryOptions(p);void 0===g.retry&&(g.retry=!1);let m=this.queryCache.build(this,g);return m.isStaleByTime(g.staleTime)?m.fetch(g):Promise.resolve(m.state.data)}prefetchQuery(e,t,a){return this.fetchQuery(e,t,a).then(utils_noop).catch(utils_noop)}fetchInfiniteQuery(e,t,a){let p=parseQueryArgs(e,t,a);return p.behavior={onFetch:e=>{e.fetchFn=()=>{var t,a,p,g,m,v,_;let x;let T=null==(t=e.fetchOptions)?void 0:null==(a=t.meta)?void 0:a.refetchPage,F=null==(p=e.fetchOptions)?void 0:null==(g=p.meta)?void 0:g.fetchMore,z=null==F?void 0:F.pageParam,W=(null==F?void 0:F.direction)==="forward",K=(null==F?void 0:F.direction)==="backward",Z=(null==(m=e.state.data)?void 0:m.pages)||[],Q=(null==(v=e.state.data)?void 0:v.pageParams)||[],X=Q,Y=!1,addSignalProperty=t=>{Object.defineProperty(t,"signal",{enumerable:!0,get:()=>{var t,a;return null!=(t=e.signal)&&t.aborted?Y=!0:null==(a=e.signal)||a.addEventListener("abort",()=>{Y=!0}),e.signal}})},J=e.options.queryFn||(()=>Promise.reject("Missing queryFn for queryKey '"+e.options.queryHash+"'")),buildNewPages=(e,t,a,p)=>(X=p?[t,...X]:[...X,t],p?[a,...e]:[...e,a]),fetchPage=(t,a,p,g)=>{if(Y)return Promise.reject("Cancelled");if(void 0===p&&!a&&t.length)return Promise.resolve(t);let m={queryKey:e.queryKey,pageParam:p,meta:e.options.meta};addSignalProperty(m);let v=J(m),_=Promise.resolve(v).then(e=>buildNewPages(t,p,e,g));return _};if(Z.length){if(W){let t=void 0!==z,a=t?z:getNextPageParam(e.options,Z);x=fetchPage(Z,t,a)}else if(K){let t=void 0!==z,a=t?z:null==(_=e.options).getPreviousPageParam?void 0:_.getPreviousPageParam(Z[0],Z);x=fetchPage(Z,t,a,!0)}else{X=[];let t=void 0===e.options.getNextPageParam,a=!T||!Z[0]||T(Z[0],0,Z);x=a?fetchPage([],t,Q[0]):Promise.resolve(buildNewPages([],Q[0],Z[0]));for(let a=1;a<Z.length;a++)x=x.then(p=>{let g=!T||!Z[a]||T(Z[a],a,Z);if(g){let g=t?Q[a]:getNextPageParam(e.options,p);return fetchPage(p,t,g)}return Promise.resolve(buildNewPages(p,Q[a],Z[a]))})}}else x=fetchPage([]);let ei=x.then(e=>({pages:e,pageParams:X}));return ei}}},this.fetchQuery(p)}prefetchInfiniteQuery(e,t,a){return this.fetchInfiniteQuery(e,t,a).then(utils_noop).catch(utils_noop)}resumePausedMutations(){return this.mutationCache.resumePausedMutations()}getQueryCache(){return this.queryCache}getMutationCache(){return this.mutationCache}getLogger(){return this.logger}getDefaultOptions(){return this.defaultOptions}setDefaultOptions(e){this.defaultOptions=e}setQueryDefaults(e,t){let a=this.queryDefaults.find(t=>hashQueryKey(e)===hashQueryKey(t.queryKey));a?a.defaultOptions=t:this.queryDefaults.push({queryKey:e,defaultOptions:t})}getQueryDefaults(e){if(!e)return;let t=this.queryDefaults.find(t=>partialDeepEqual(e,t.queryKey));return null==t?void 0:t.defaultOptions}setMutationDefaults(e,t){let a=this.mutationDefaults.find(t=>hashQueryKey(e)===hashQueryKey(t.mutationKey));a?a.defaultOptions=t:this.mutationDefaults.push({mutationKey:e,defaultOptions:t})}getMutationDefaults(e){if(!e)return;let t=this.mutationDefaults.find(t=>partialDeepEqual(e,t.mutationKey));return null==t?void 0:t.defaultOptions}defaultQueryOptions(e){if(null!=e&&e._defaulted)return e;let t={...this.defaultOptions.queries,...this.getQueryDefaults(null==e?void 0:e.queryKey),...e,_defaulted:!0};return!t.queryHash&&t.queryKey&&(t.queryHash=hashQueryKeyByOptions(t.queryKey,t)),void 0===t.refetchOnReconnect&&(t.refetchOnReconnect="always"!==t.networkMode),void 0===t.useErrorBoundary&&(t.useErrorBoundary=!!t.suspense),t}defaultMutationOptions(e){return null!=e&&e._defaulted?e:{...this.defaultOptions.mutations,...this.getMutationDefaults(null==e?void 0:e.mutationKey),...e,_defaulted:!0}}clear(){this.queryCache.clear(),this.mutationCache.clear()}};function defaultShouldDehydrateMutation(e){return e.state.isPaused}function defaultShouldDehydrateQuery(e){return"success"===e.state.status}let T=["added","removed","updated"];function isCacheableEventType(e){return T.includes(e)}async function persistQueryClientRestore({queryClient:e,persister:t,maxAge:a=864e5,buster:p="",hydrateOptions:g}){try{let m=await t.restoreClient();if(m){if(m.timestamp){let v=Date.now()-m.timestamp>a,_=m.buster!==p;v||_?t.removeClient():function(e,t,a){if("object"!=typeof t||null===t)return;let p=e.getMutationCache(),g=e.getQueryCache(),m=t.mutations||[],v=t.queries||[];m.forEach(t=>{var g;p.build(e,{...null==a?void 0:null==(g=a.defaultOptions)?void 0:g.mutations,mutationKey:t.mutationKey},t.state)}),v.forEach(({queryKey:t,state:p,queryHash:m})=>{var v;let _=g.get(m);if(_){if(_.state.dataUpdatedAt<p.dataUpdatedAt){let{fetchStatus:e,...t}=p;_.setState(t)}return}g.build(e,{...null==a?void 0:null==(v=a.defaultOptions)?void 0:v.queries,queryKey:t,queryHash:m},{...p,fetchStatus:"idle"})})}(e,m.clientState,g)}else t.removeClient()}}catch(e){t.removeClient()}}async function persistQueryClientSave({queryClient:e,persister:t,buster:a="",dehydrateOptions:p}){let g={buster:a,timestamp:Date.now(),clientState:function(e,t={}){let a=[],p=[];if(!1!==t.dehydrateMutations){let p=t.shouldDehydrateMutation||defaultShouldDehydrateMutation;e.getMutationCache().getAll().forEach(e=>{p(e)&&a.push({mutationKey:e.options.mutationKey,state:e.state})})}if(!1!==t.dehydrateQueries){let a=t.shouldDehydrateQuery||defaultShouldDehydrateQuery;e.getQueryCache().getAll().forEach(e=>{a(e)&&p.push({state:e.state,queryKey:e.queryKey,queryHash:e.queryHash})})}return{mutations:a,queries:p}}(e,p)};await t.persistClient(g)}var F=a(72147),z=a(67294);let W=z.createContext(void 0),K=z.createContext(!1),QueryClientProvider=({client:e,children:t,context:a,contextSharing:p=!1})=>{z.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]);let g=a||(p&&"undefined"!=typeof window?(window.ReactQueryClientContext||(window.ReactQueryClientContext=W),window.ReactQueryClientContext):W);return z.createElement(K.Provider,{value:!a&&p},z.createElement(g.Provider,{value:e},t))};var Z=a(61688);function createConfig({queryClient:e=new QueryClient({defaultOptions:{queries:{cacheTime:864e5,networkMode:"offlineFirst",refetchOnWindowFocus:!1,retry:0},mutations:{networkMode:"offlineFirst"}}}),storage:t=(0,F.o6)({storage:"undefined"!=typeof window&&window.localStorage?window.localStorage:F.wp}),persister:a="undefined"!=typeof window?function({storage:e,key:t="REACT_QUERY_OFFLINE_CACHE",throttleTime:a=1e3,serialize:p=JSON.stringify,deserialize:g=JSON.parse,retry:m}){if(e){let trySave=a=>{try{e.setItem(t,p(a));return}catch(e){return e}};return{persistClient:function(e,t=100){let a,p=null;return function(...g){a=g,null===p&&(p=setTimeout(()=>{e(...a),p=null},t))}}(e=>{let t=e,a=trySave(t),p=0;for(;a&&t;)p++,(t=null==m?void 0:m({persistedClient:t,error:a,errorCount:p}))&&(a=trySave(t))},a),restoreClient:()=>{let a=e.getItem(t);if(a)return g(a)},removeClient:()=>{e.removeItem(t)}}}return{persistClient:noop,restoreClient:()=>void 0,removeClient:noop}}({key:"cache",storage:t,serialize:e=>e,deserialize:e=>e}):void 0,...p}){let g=(0,F._g)({...p,storage:t});return a&&function(e){persistQueryClientRestore(e).then(()=>{(function(e){let t=e.queryClient.getQueryCache().subscribe(t=>{isCacheableEventType(t.type)&&persistQueryClientSave(e)}),a=e.queryClient.getMutationCache().subscribe(t=>{isCacheableEventType(t.type)&&persistQueryClientSave(e)})})(e)})}({queryClient:e,persister:a,dehydrateOptions:{shouldDehydrateQuery:e=>0!==e.cacheTime&&!1!==e.queryKey[0].persist}}),Object.assign(g,{queryClient:e})}a(52798);var Q=z.createContext(void 0),X=z.createContext(void 0);function WagmiConfig({children:e,config:t}){return z.createElement(Q.Provider,{children:z.createElement(QueryClientProvider,{children:e,client:t.queryClient,context:X}),value:t})}Z.useSyncExternalStore}},function(e){var __webpack_exec__=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return __webpack_exec__(6840),__webpack_exec__(38355)}),_N_E=e.O()}]);