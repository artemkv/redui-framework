using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model.Controls
{
	public interface IPagerInfo
	{
		int pageNo { get; }
		int pagesTotal { get; }
	}
}
