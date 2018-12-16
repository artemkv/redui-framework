using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model.Controls
{
	public interface IGridViewCell : IDataBoundControl
	{
		IGridViewRow row { get; }
		string value { get; }
	}
}
