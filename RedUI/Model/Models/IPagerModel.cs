using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model.Models
{
	public interface IPagerModel : IDataBoundControlModel
	{
		string pageNoProperty { get; }
		string pagesTotalProperty { get; }
	}
}
