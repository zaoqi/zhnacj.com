--中南财经网
--Copyright (C) 2017  Zaoqi

--This program is free software: you can redistribute it and/or modify
--it under the terms of the GNU Affero General Public License as published
--by the Free Software Foundation, either version 3 of the License, or
--(at your option) any later version.

--This program is distributed in the hope that it will be useful,
--but WITHOUT ANY WARRANTY; without even the implied warranty of
--MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
--GNU Affero General Public License for more details.

--You should have received a copy of the GNU Affero General Public License
--along with this program.  If not, see <http://www.gnu.org/licenses/>.
{-# LANGUAGE JavaScriptFFI #-}

import GHCJS.Types as T
import Data.JSString as S
import GHCJS.Foreign as F

foreign import javascript unsafe "document.write($1)" write :: T.JSString -> IO ()

main = do
    write $ pack "中南财经网"
