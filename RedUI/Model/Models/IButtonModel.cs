using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model.Models
{
	public interface IButtonModel : IControlModel
	{
		string text { get; }
		bool isDialogButton { get; }
		string dialogResult { get; }
	}
}
